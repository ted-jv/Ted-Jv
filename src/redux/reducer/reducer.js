//Actions

const LOAD = "vocabulary/LOAD";

//Action Creators

let initialState = {
  box_contents_list: [],
};

function reducer(state = initialState, action) {
  console.log(action);
  console.log(action.payload);

  // const {type,payload} = action

  switch (action.type) {
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
