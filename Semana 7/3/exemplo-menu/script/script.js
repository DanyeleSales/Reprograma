const sideBar = document.querySelector(".sidebar-menu");
const sideBarButton = document.querySelector(".sidebar-menu__button") 

sideBarButton.addEventListener("click",  function (evento) {
    evento.preventDefault();
            
    if(sideBar.style.left === "-430px"){
        sideBar.style.left = "0px"
    }
    else{
        sideBar.style.left = "-430px"
    }


    // sideBar.style.left="-435px"
    // counter++
    // if (counter % 2 !== 0){
    //     sideBar.style.left= "0px"
    // }
})