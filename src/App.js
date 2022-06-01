import { Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import Home from "./component/Home";
import { db } from "./firebase";
import React from "react";
import { async } from "@firebase/util";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  // 여기는 컬렉션 여기서 추가하기

  React.useEffect(async () => {
    console.log(db);

    addDoc(collection(db, "bucket"), { text: "new", abc: true });
  }, []);

  // // 여기는 삭제하기

  // React.useEffect(async () => {
  //   console.log(db);
  //   const docRef = doc(db, "vocabulary", "I40mTOYiidTy55QP5RzL");
  //   deleteDoc(docRef);
  // }, []);

  // //여기는 수정하기

  // React.useEffect(async() => {
  //   console.log(db);
  //   const docRef = doc(db, "vocabulary", "I40mTOYiidTy55QP5RzL");
  //   updateDoc(docRef,{바보:"멍청이"});
  // }, []);

  // //여기는 추가하기 addDoc

  // React.useEffect(async() => {
  //   console.log(db);

  //   addDoc(collection(db,"vocabulary"),{text:"new", completed: false})
  // }, []);

  // //아래는 가져오기 getDoc
  // React.useEffect(async() => {
  //     console.log(db);

  //     const query = await getDocs(collection(db, "vocabulary"));
  //     console.log(query);
  //     query.forEach((doc)=> {
  //       console.log(doc.id, doc.date())
  //     });
  //   }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
