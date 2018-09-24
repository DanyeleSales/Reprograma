const links = document.getElementById("externo");
const button = document.querySelector(".button");
const article = document.querySelector(".article");


   
    button.addEventListener("click", function(e){
        e.preventDefault();

        for(let i = 0; i < 6; i++){
            const p = document.createElement("p")
            
            p.innerHTML = (`${links.attributes[i].name}: ${links.attributes[i].value}`)

            article.appendChild(p)

            console.log(links.atributes);             
        
        }

    })

    