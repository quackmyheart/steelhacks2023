
window.onload=function(){
  addThings = document.getElementById("addStuff"); 
  addMore =  document.getElementById("addMoreStuff"); 
  //passwordButton = document.getElementById("passButton");
  //passwordButton.addEventListener("click", sayPasswordisBad(addThings)); 
  document.getElementById("passButton").onclick = function() {
    var text = document.createTextNode("your password is too hard to hack");
    var newButton = document.createElement('Button');
    newButton.innerHTML = "create new weak password for me!";
    console.log("yay life");
    addThings.appendChild(text); 
    addMore.appendChild(newButton); 

    newButton.onclick = function() {
    console.log("yay life");
      
    addPass = document.getElementById("addPass"); 
    var text = document.createTextNode("here is your new password!!!!!!");
    addPass.appendChild(text); 
      
    newPass = document.getElementById("newPass"); 
    var textPass = document.createTextNode("YAYLIFE1234");
    newPass.appendChild(textPass); 
  }
  }; 
}
