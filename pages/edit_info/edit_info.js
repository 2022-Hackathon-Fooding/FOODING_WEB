const firebaseConfig = {
  apiKey: 'AIzaSyApROrqspmDS2HluubaoMNjKKfoSN_YtEs',
  authDomain: 'hekaton-be17b.firebaseapp.com',
  databaseURL: 'https://hekaton-be17b-default-rtdb.firebaseio.com',
  projectId: 'hekaton-be17b',
  storageBucket: 'hekaton-be17b.appspot.com',
  messagingSenderId: '787027944209',
  appId: '1:787027944209:web:3952e1046283dd8ef0e2b0',
  measurementId: 'G-LE7QEDWG64',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.collection('user')
  .get()
  .then((result) => {
    result.forEach((doc) => {
      console.log(doc.data());
    });
  });
var UID;
var NAME;
var EMAIL;
var PHONE;
var NICKNAME;
function login() {
  var userEmail = document.getElementById('email_login').value;
  var userPass = document.getElementById('password_login').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      UID = userCredential.user.uid;
      query_id(userEmail, userCredential.user.uid);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert('Error : ' + errorMessage);
    });
}
function query_id(email, uid) {
  const db = firebase.firestore();
  const userId = db.collection('users').where('email', '==', email).where('id', '==', uid);
  userId.get().then((snapshot) => {
    snapshot.forEach(function (doc) {
      var change_div = document.getElementById('change_div');
      var login_div = document.getElementById('login_div');
      Name = document.getElementById('name');
      nickname = document.getElementById('nickname');
      phone = document.getElementById('phone');
      email = document.getElementById('email');

      change_div.style.display = 'block';
      login_div.style.display = 'none';
      console.log(doc.data());

      Name.placeholder = NAME = doc.data()['name'];
      nickname.placeholder = NICKNAME = doc.data()['nickname'];
      phone.placeholder = PHONE = doc.data()['phone'];
      email.placeholder = EMAIL = doc.data()['email'];
    });
  });
}

function upload() {
  input_nickname = document.getElementById('nickname').value;
  input_phone = document.getElementById('phone').value;
  if (input_nickname == '') {
    input_nickname = NICKNAME;
  }
  if (input_phone == '') {
    input_phone = PHONE;
  }
  const db = firebase.firestore();
  db.collection('users')
    .doc(UID)
    .set({
      email: EMAIL,
      id: UID,
      nickname: input_nickname,
      phone: input_phone,
      name: NAME,
    })
    .then(function () {
      alert('회원 정보가 변경되었습니다!');
      location.href = '../main/main.html';
    });
}
