const firebaseConfig = {
  apiKey: "AIzaSyApROrqspmDS2HluubaoMNjKKfoSN_YtEs",
  authDomain: "hekaton-be17b.firebaseapp.com",
  databaseURL: "https://hekaton-be17b-default-rtdb.firebaseio.com",
  projectId: "hekaton-be17b",
  storageBucket: "hekaton-be17b.appspot.com",
  messagingSenderId: "787027944209",
  appId: "1:787027944209:web:3952e1046283dd8ef0e2b0",
  measurementId: "G-LE7QEDWG64"
};

firebase.initializeApp(firebaseConfig);
var menu;
function getMenu(event) {
  menu = event.target.value;
}

function make_chat() {
  const chat_name = document.getElementById("room_name").value;
  const chat_place = document.getElementById("room_place").value;
  const db = firebase.database();
  const db_fs = firebase.firestore();
  const userId = db_fs.collection("users").doc(firebase.auth().currentUser.uid);
  userId.get().then((snapshot_fs)=> {
    db.ref("chattings/"+chat_name).push({
      chattingName:chat_name,
      chattingPlace:chat_place,
      nickname:snapshot_fs.data()["nickname"],
      Menu:menu
    });
  });
  alert("방이 만들었습니다.");
}