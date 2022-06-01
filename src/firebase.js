//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuCaA4wHtcMoOsygxC532tFR_cvDgagWk",
    authDomain: "vocabulary-5ff49.firebaseapp.com",
    projectId: "vocabulary-5ff49",
    storageBucket: "vocabulary-5ff49.appspot.com",
    messagingSenderId: "83976356895",
    appId: "1:83976356895:web:8dc22f32842498aa40812a",
    measurementId: "G-03LD3MDC0H"
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };