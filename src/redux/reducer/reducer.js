import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

//Actions

const LOAD = "vocabulary/LOAD";

//Action Creators

export function loadVocabulary(vocabulary_list) {
  return { type: LOAD, vocabulary_list };
}

// Action Creators과 reducer 사이에 middlewares 만들어줬다. (여기 redux-thunk 쓰는 법)

export const loadVocabularyFB = () => {
  return async function (dispatch) {
    const vocabulary_data = await getDoc(collection(db, "vocabulary"));
    console.log(vocabulary_data);

    let vocabulary_list = [];

    vocabulary_data.forEach((doc) => {
      console.log(doc.date());
      vocabulary_list.push({ ...doc.date() });
    });

    console.log(vocabulary_list);

    dispatch(loadVocabulary(vocabulary_list));
  };
};

// 아래 reducer

let initialState = {
  box_contents_list: [],
};

function reducer(state = initialState, action) {
  console.log(action);
  console.log(action.payload);

  // const {type,payload} = action

  switch (action.type) {
    case "vocabulary/LOAD": {
      return { list: action.vocabulary_list };
    }
    case "DETAILBOX_CONTENTS":
      return {
        ...state,
        box_contents_list: [
          ...state.box_contents_list,
          {
            word: action.payload.word,
            mean: action.payload.mean,
            ex: action.payload.ex,
            interpret: action.payload.interpret,
          },
        ],
      };
    default:
      return { ...state };
    //아 바로 위 default는  return { ...state } 이게 가위바위보에서 디폴트를 아무것도 없음으로 해두는 거와 동일하구나!!
  } // or return 자리에 break 써서 멈춰라.
}

export default reducer;
