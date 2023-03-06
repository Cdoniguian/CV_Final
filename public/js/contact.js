let buttonEmail = document.getElementById('emailIcon');
let buttonContact = document.getElementById('contact');
let buttonAboutMy = document.getElementById('aboutMy');
let buttonStudies = document.getElementById('myStudies');
let buttonJob = document.getElementById('myJob');
let superButton = document.getElementById('superButton');
let nameContact = document.getElementById('name')

buttonEmail.addEventListener("mouseover", function(){
    document.getElementById("email").innerHTML = "Contacto";
    document.getElementById("foneNunber").innerHTML = "";
    document.getElementById("about").innerHTML = "";
})
document.addEventListener("click", function(){
    document.getElementById("email").innerHTML = "";
}) 


buttonContact.addEventListener("mouseover", function(){
    document.getElementById("foneNunber").innerHTML = "(+54) 3516840510";
    document.getElementById("email").innerHTML = "";
    document.getElementById("about").innerHTML = "";
    document.getElementById("studies").innerText = "";
    document.getElementById("job").innerText = "";
})
document.addEventListener("click", function(){
    document.getElementById("foneNunber").innerHTML = "";
}) 
 

buttonAboutMy.addEventListener("mouseover", function(){
    document.getElementById("about").innerText = "Datos Personales";
    document.getElementById("email").innerHTML = "";
    document.getElementById("foneNunber").innerHTML = "";
    document.getElementById("studies").innerText = "";
    document.getElementById("job").innerText = "";
})
document.addEventListener("click", function(){
    document.getElementById("about").innerHTML = "";
}) 


buttonStudies.addEventListener("mouseover", function(){
    document.getElementById("studies").innerText = "Mis Estudios";
    document.getElementById("about").innerText = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("foneNunber").innerHTML = ""
    document.getElementById("job").innerText = "";
    
})
document.addEventListener("click", function(){
    document.getElementById("studies").innerHTML = "";
}) 



buttonJob.addEventListener("mouseover", function(){
    document.getElementById("job").innerText = "Mi Experiencia";
    document.getElementById("studies").innerText = "";
    document.getElementById("about").innerText = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("foneNunber").innerHTML = ""
    
})
document.addEventListener("click", function(){
    document.getElementById("job").innerHTML = "";
}) 


superButton.addEventListener('click', function () {
    console.log("superButton");
    alert("me comunicaré a la brevadad")
})

