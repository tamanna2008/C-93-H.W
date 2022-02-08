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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log(Room_names);
   Hi = "<div class='Room_names' id= " + Room_names + "<onclick = 'redirecttoroompage('this.id')> # "+ Room_names
   //End code
   });});}
getData();

function redirecttoroompage(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location="schoolieroom.html";
}
function logout (){
  localStorage.removeItem="room_name";
  localStorage.removeItem="user_name";
  window.location="index.html";
}
