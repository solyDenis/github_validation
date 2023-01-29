const userInputName = document.getElementById("user-input");
const userInputError = document.getElementById("warning");
const userName = document.getElementById("name");

userInputName.addEventListener("submit", function(event){
    event.preventDefault();
    const yourName = String(userName.value);

    if (yourName.match("")){
        console.log("work");
        userInputError.innerHTML=
        `
        <div class="justify-between flex px-2 py-2 rounded-lg border-red-200 border-2 mx-6 bg-red-100">
            <p>Incorrect username or password</p>
            <img src="https://www.pngimages.in/uploads/png-webp/2022/2022-December/red_x_Symbol.webp" alt="" class="w-6 h-6">
        </div>
        `;
        
         
        
    }
});