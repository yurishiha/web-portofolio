var typing = new Typed (".typed" ,{
    strings : ["Frontrend Developer", "Backend Developer", "Fullstack Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop : true,
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

   
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    document.getElementById("successMessage").style.display = "block";

    document.getElementById("contactForm").reset();
});