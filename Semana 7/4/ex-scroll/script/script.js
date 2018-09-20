const button = document.getElementById("arrowTop")
button.addEventListener("click", function(){
    window.scrollTo(pageYOffset, 0);
})

window.addEventListener("scroll", function(){
    //console.log(pageYOffset);
    //console.log (button.hidden)
    if(this.pageYOffset > 450){
        button.hidden = false
        return false;
    }
    button.hidden = true;
})

//ou
// window.addEventListener("scroll", function(){
//     console.log(pageYOffset);
//     console.log (button.hidden)
//     if(this.pageYOffset> 450){
//         button.hidden = false;
        
//     }else{
//         button.hidden = true;

//     }

   
// })