
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBUEqhnEsXNq-0mDs5P24ZfaVogBdOs9k0",
      authDomain: "kwitter-part-2-18978.firebaseapp.com",
      projectId: "kwitter-part-2-18978",
      storageBucket: "kwitter-part-2-18978.appspot.com",
      messagingSenderId: "278493616197",
      appId: "1:278493616197:web:722b50587efbdb8c5eab2c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}