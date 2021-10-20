
var firebaseConfig = {
      apiKey: "AIzaSyCJ96bNQgfn5xMAVd4AJCmBY-VLkCIItWQ",
      authDomain: "kwitter-581f3.firebaseapp.com",
      databaseURL: "https://kwitter-581f3-default-rtdb.firebaseio.com",
      projectId: "kwitter-581f3",
      storageBucket: "kwitter-581f3.appspot.com",
      messagingSenderId: "1024967888828",
      appId: "1:1024967888828:web:2c364288afbee98014e5b9"
    };
    
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name  - "+ Room_name);
      row = "<div class = 'room_name' id= "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_Name +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",  name);
      window.location = "kwitter_page.html";
}
