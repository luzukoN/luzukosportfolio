// Initialize Firebase (ADD YOUR OWN DATA)
var config = {apiKey: "AIzaSyDq4oieQ20CrcX4O-7QnN1fZYlUHAo456Q",
authDomain: "luzuko-f24fe.firebaseapp.com",
databaseURL: "https://luzuko-f24fe.firebaseio.com",
projectId: "luzuko-f24fe",
storageBucket: "luzuko-f24fe.appspot.com",
messagingSenderId: "931964465429",
appId: "1:931964465429:web:e56660da83d807c54c391c",
measurementId: "G-S8HJZ3XT16"
};
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
  
    // Save message
    saveMessage(firstname, lastname);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(firstname, lastname){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
     firstname: name,
     lastname: lastname,
    });
  }