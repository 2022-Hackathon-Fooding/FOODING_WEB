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
}
logout();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById('user_div').style.display = 'block';
    document.getElementById('login_div').style.display = 'none';

    if (user != null) {
      location.href = '../main/main.html';
      var email_id = user.email;
      document.getElementById('user_para').innerHTML = 'Welcome User : ' + email_id;
    }
  } else {
    // No user is signed in.
    document.getElementById('user_div').style.display = 'none';
    document.getElementById('login_div').style.display = 'block';
  }
});
var current_name;
//로그인
function login() {
  var userEmail = document.getElementById('email_field').value;
  var userPass = document.getElementById('password_field').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      const user = userCredential.user;
      current_name = user.name;
      location.href = '../main/main.html';
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert('Error : ' + errorMessage);
    });
}
