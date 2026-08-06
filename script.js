 // designing the form
 // stop reloading of the submit button
 const form= document.getElementById("message form");
 form.addEventListener("submit",function(event) {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    
    console.log("submitted:",name,email);
 });

 // preventing Double clicking
 const button=document.getElementById("submitbutton");
 form.addEventListener("submit",function(event){

    event.preventDefault();
    button.disabled=true;
    button.textContent="submitting ...";

    // simulate delay 
    setTimeout(() => {
        button.textContent="submitted!";
    }, 2000);
 });

 // enabling button only with text
 const input=document.getElementById("name");
 const emailinput=document.getElementById("email");
 const button=document.getElementById("submitbutton");

 function validateform(){
    const namevalue=nameinput.value.trim()
    const emailvalue=emailinput.value.trim();

    if (namevalue !== ""&& emailvalue !== ""){
        button.disabled = false;
     } else {
        button.disabled = true;
     }
    }
    nameinput.addEventListener("input", validateform)
    emailinput.addEventListener("input", validateform)

    // click animation 
     button.addEventListener("click",()=>{

        button.style.transform="scale(0.9)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        },100);
     });