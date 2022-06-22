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
//로그아웃
function logout() {
  firebase.auth().signOut();
  // location.href = "../login/login.html"
}
logout();
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById('user_div').style.display = 'block';
    document.getElementById('login_div').style.display = 'none';

    var user = firebase.auth().currentUser;

    if (user != null) {
      location.href = './main';
      var email_id = user.email;
      document.getElementById('user_para').innerHTML = 'Welcome User : ' + email_id;
    }
  } else {
    // No user is signed in.
    document.getElementById('user_div').style.display = 'none';
    document.getElementById('login_div').style.display = 'block';
  }
});

//회원가입
function newuser() {
  email = document.getElementById('new_email').value;
  new_pw_1 = document.getElementById('new_pw_1').value;
  new_pw_2 = document.getElementById('new_pw_2').value;
  name = document.getElementById('name').value;
  phone = document.getElementById('phone').value;
  if (new_pw_1 != new_pw_2) {
    alert('확인 비밀번호가 다릅니다.');
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, new_pw_1)
      .then((userCredential) => {
        const currentUser = {
          id: userCredential.user.uid,
          email: email,
          name: name,
          phone: phone,
          emailVerified: userCredential.user.emailVerified,
        };
        const db = firebase.firestore();
        db.collection('users')
          .doc(currentUser.id)
          .set({
            id: currentUser.id,
            name: currentUser.name,
            email: currentUser.email,
            phone: currentUser.phone,
          })
          .then(function () {
            console.log('firestore()DB 유저 추가성공');
            alert('회원가입이 완료되었습니다.');
            location.href = '../login/login.html';
          })
          .catch(() => {
            console.error('firestore()DB추가 실패', error);
          });
      });
  }
}

// function upload() {
//   input_subject = document.getElementById('input_subject').value;
//   input_contents = document.getElementById('inpt_contents');
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       const db = firebase.firestore();
//       db.collection('notice')
//         .doc(subject)
//         .set({
//           name: user.name,
//           subject: input_subject,
//           contents: input_contents,
//         })
//         .then(function () {
//           alert('등록되었습니다.');
//         });
//     }
//   });
// }
