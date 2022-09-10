//Account
var isSigned = false;
const moreAccInfo = document.querySelector(".accmore");
const profilebtn = document.querySelector('.profilebtn');
if(isSigned==false){
    printf("not logged in");
    const buttons = '<button id="loginbtn">login</button>';
    moreAccInfo.innerHTML = buttons;
}else{
    printf("logged in")
}

profilebtn.addEventListener('click', function(){
    moreAccInfo.classList.toggle('hidden');
})