

// Dark Mode
document.addEventListener("DOMContentLoaded", function () {
    const btnChangeColor = document.getElementById("changeColor");
    const icon = btnChangeColor.querySelector("i");

    btnChangeColor.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelector("header").classList.toggle("dark-mode");
        document.querySelector("footer").classList.toggle("dark-mode");

        document.querySelectorAll(".card").forEach(el => el.classList.toggle("dark-mode"));
        document.querySelectorAll(".post").forEach(el => el.classList.toggle("dark-mode"));
        document.querySelectorAll("a").forEach(el => el.classList.toggle("dark-mode"));

        // تغيير الأيقونة
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
    });
});

//Vaidishon
function checkContact()
{
    let name =document.getElementById("name").value.trim();
    let email =document.getElementById("email").value.trim();
    let message =document.getElementById("message").value.trim();

    if(name ==="" || email ===""|| message==="")
    {
        alert("Please fill in all fields.")
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Please enter a vaild email address");
        return false;
    }
    let goemail = `mailto:${email}?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = goemail;
    alert("Thank you for providing your opinion!");
    return true;

 
}

