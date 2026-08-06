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
