firebaseConfig = {
    apiKey: "AIzaSyBrsu9eMNpXdzbStJgIdZgTSiS9T1aYuL8",
    authDomain: "school-kwitter.firebaseapp.com",
    databaseURL: "https://school-kwitter-default-rtdb.firebaseio.com",
    projectId: "school-kwitter",
    storageBucket: "school-kwitter.appspot.com",
    messagingSenderId: "616475365880",
    appId: "1:616475365880:web:8d9875e6666fd0a6f4860d",
    measurementId: "G-TM497D3GWX"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        Name:user_name,
        Likes:0,
        Message:msg
    })
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
