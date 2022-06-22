const firebaseConfig = {
  apiKey: 'AIzaSyC555aONfZjlIMgPKfv2nn-1nIdUw1AEhM',
  authDomain: 'project-d7cb7.firebaseapp.com',
  databaseURL: 'https://project-d7cb7-default-rtdb.firebaseio.com',
  projectId: 'project-d7cb7',
  storageBucket: 'project-d7cb7.appspot.com',
  messagingSenderId: '169478102572',
  appId: '1:169478102572:web:3a01e1a8ce90766e8cbb89',
  measurementId: 'G-XVH3B0575D',
};

firebase.initializeApp(firebaseConfig);

function findUserId() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const db = firebase.firestore();
  // console.log(phone);
  const userId = db.collection('users').where('name', '==', name).where('phone', '==', phone);
  userId.get().then((snapshot) => {
    snapshot.forEach(function (doc) {
      if (doc.data()['name'] == name && doc.data()['phone'] == phone) {
        alert(`${name}님의 이메일은 ${doc.data()['email']}입니다.`);
        location.href = './';
      }
    });
  });
}
function findUserPassword() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  const db = firebase.firestore();
  const userId = db.collection('users').where('name', '==', name).where('email', '==', email);
  userId.get().then((snapshot) => {
    snapshot.forEach(function (doc) {
      console.log(doc.data());
      if (doc.data() != null) {
        document.getElementById('content').style.display = 'none';
        var html = `
                <div class="inner_box">
                    <div class="name box">
                        <div id="user_name"></div>
                        <div class="name_input div1 font-bold text-4xl">비밀번호 : </div>
                        <br>
                        <input type="password" class="input text-4xl" id="password1">
                        <br><br>
                        <div class="name_input div1 font-bold text-4xl">비밀번호 확인 : </div>
                        <br>
                        <input type="password" class="input text-4xl" id="password2">
                    </div>
                <br>
                <button class="btn" onclick="changePW(value);" value=${doc.data().id}>비밀번호 변경</button>
            </div>
                `;
        document.getElementById('content1').innerHTML = html;
      } else {
        console.log('gdgd');
      }
    });
  });
  // const userId1 = db.collection("users").doc(name).get().then((snapshot)=>{
  //     if(snapshot.data()!=null) {
  //         document.getElementById("content").style.display="none";
  //         var html = `
  //         <div class="inner_box">
  //             <div class="name box">
  //                 <div id="user_name"></div>
  //                 <div class="name_input div1 font-bold text-4xl">비밀번호 : </div>
  //                 <br>
  //                 <input type="password" class="input text-4xl" id="password1">
  //                 <br><br>
  //                 <div class="name_input div1 font-bold text-4xl">비밀번호 확인 : </div>
  //                 <br>
  //                 <input type="password" class="input text-4xl" id="password2">
  //             </div>
  //         <br>
  //         <button class="btn" onclick="changePW(value);" value=${name}>비밀번호 변경</button>
  //     </div>
  //         `
  //         document.getElementById("content1").innerHTML=html;
  //     } else {
  //         alert("입력하신 정보는 없습니다.");
  //     }
  //  }).catch(function(error) {
  //      console.log("Error getting document:", error);
  //  });
}
function changePW(value) {
  const pw1 = sha256(document.getElementById('password1').value);
  const pw2 = sha256(document.getElementById('password2').value);
  // const user_name = document.getElementById("user_name").value;
  const db = firebase.firestore();
  console.log(value);
  const userId = db
    .collection('users')
    .doc(value)
    .update({
      password: pw1,
    })
    .then((snapshot) => {
      alert('비밀번호가 변경했습니다.');
      location.href = './';
    });
}

function test_find() {
  const db = firebase.firestore();
  const test = db.collection('users').where('phone', '==', '01011113333');

  console.log(test);
  test.get().then((snap) => {
    snap.forEach(function (doc) {
      console.log(doc.data());
    });
  });
}
