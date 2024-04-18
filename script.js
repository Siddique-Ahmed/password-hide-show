var input = document.getElementById("password");
var eye = document.getElementById("eye");

eye.addEventListener("click", ()=>{
  if(input.type === "password"){
    input.type = "text";
    eye.className = "fa-solid fa-eye-slash";
  }else{
    input.type = "password";
    eye.className = "fa-solid fa-eye"
  }
});