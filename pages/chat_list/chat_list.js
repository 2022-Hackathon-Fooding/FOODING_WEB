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
var cnt =0;
var ul=[];
function show_list() {
  const db = firebase.database();
  const listchat = db.ref("chattings/");
  var chats=[];
  listchat.on("child_added",function (snapshot) {
    snapshot.forEach(function(childsnap) {
      const lists = childsnap.val();
      const list = {
        chatName : lists.chattingName,
        chatPlace : lists.chattingPlace,
        user : lists.user,
        menu : lists.Menu
      }
      chats.push(list);
      const list_chatName = lists.chattingName;
      const list_chatPlace = lists.chattingPlace;
      const list_user = lists.user;
      const list_menu = lists.Menu;
      const table = document.getElementById("list_table");
      const newRow = table.insertRow();
  
      var newCell_chatName = newRow.insertCell(0);
      var newCell_menu = newRow.insertCell(1)
      var newCell_user = newRow.insertCell(2);
      var newCell_chatPlace = newRow.insertCell(3);
      var a = `<button onclick="chatting(value);" value="${list_chatName}">${list_chatName}</button>`;
      newCell_chatName.innerHTML = a;
      newCell_menu.innerText = list_menu;
      newCell_user.innerText = list_user;
      newCell_chatPlace.innerText = list_chatPlace;
    })
  })
}
show_list();

function chatting(value) {
  console.log(value)

  document.getElementById("list_table").style.display="none";
  var html = `<div class="chat">
  <ul id="ul_name" class="chat_ul">
  </ul>
  </div>
  <div class="input_box">
  <div class="send"></div> 
  <input type="text" id="input">
  <button onclick="send(value);" id="btn" value="${value}">전송</button>
  </div>
  `;
  document.getElementById("chat").innerHTML=html;
  const db = firebase.database();
  const listchat = db.ref("chat/"+value+"/");
  listchat.on("child_added",function (snapshot) {
  // console.log(snapshot.val())
 });
 show_chat(value);
}

function show_chat(value) {
  var pre;
  var cnt = true;
  console.log(value)
  var ul = document.getElementById("ul_name")
  const db = firebase.database();
  const listchat = db.ref("chatting/"+value+"/");
  listchat.on("child_added",function (snapshot) {
    if(cnt==true) {
      pre = snapshot.val().date;
      cnt = false;
    }
    var li = document.createElement("li");
    var div = document.createElement("div");
    var div_name = document.createElement("div");
    var div_time = document.createElement("div");
    var div_date = document.createElement("div");

    div_name.className="div_name";
    li.className="message";
    div_time.className="div_time";
    div_date.className="div_date";
    if(snapshot.val().user_uid==firebase.auth().currentUser.uid) {
      div.className="right";
    } else {
      div.className="left";
    }
    if(pre != snapshot.val().date) {
      div_date.append(snapshot.val().date);
      div.append(div_date);
    }

    console.log(snapshot.val());
    console.log(firebase.auth().currentUser.user);
    div_name.append(snapshot.val().user);
    li.append(snapshot.val().message);
    div_time.append(snapshot.val().timeString);
    div.append(div_name);
    div.append(li);
    div.append(div_time);
    ul.append(div);

    pre = snapshot.val().date;

    let chat = document.querySelector('.chat');
    chat.scrollTop = chat.scrollHeight;
  });
}

function send(value) {
  console.log("click")
  var input = document.getElementById("input").value;
  const db = firebase.database();
  input="";
  var cnt=0;
  db.ref("chattings/").on("child_added",function (snapshot) {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var hours = ('0' + today.getHours()).slice(-2); 
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;
    var timeString = hours + ':' + minutes;
    if(cnt==0) {
      var user_name;
      const db_fs = firebase.firestore();
      const userId = db_fs.collection("users").doc(firebase.auth().currentUser.uid);
      console.log(firebase.auth().currentUser.uid)
      userId.get().then((snapshot_fs)=> {
        user_name=snapshot_fs.data()["name"];
        console.log(user_name);
        snapshot.forEach(function (child) {
          db.ref("chatting/"+value).push({
            message:document.getElementById("input").value,
            user:user_name,
            user_uid:firebase.auth().currentUser.uid,
            date:dateString,
            timeString:timeString
          })
        })
      });    
      cnt++;
    }
  })
  let chat = document.querySelector('.chat');
  chat.scrollTop = chat.scrollHeight;
}
