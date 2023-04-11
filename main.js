// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

function createInterval(finalNumber, element){

    let counter = 0;

    let interval = setInterval( ()=>{


        if(counter < finalNumber){

            counter++
            element.innerHTML = counter;
            

        } else {

            clearInterval(interval);

        }

    }, 1)

}

createInterval();

// cattura degli span con numero 0

let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');

let h2Test = document.querySelector('#h2Test');

// variabile d'appoggio per cessare l'incremento dei numeri
let intersectionCheck = true;

// funzione intersection observe

let observed = new IntersectionObserver(

    (entries)=>{

        entries.forEach( (entry)=>{

            if(entry.isIntersecting && intersectionCheck == true){

                createInterval(1000, firstSpan);
                createInterval(1500, secondSpan);
                createInterval(500, thirdSpan);

                intersectionCheck = false;

            }

        } )

    }

)  

observed.observe(h2Test);


// EVENTO MOUSE ENTER

// cattura dei camioncini
let camioncini = document.querySelectorAll('.fa-truck-fast');

// cattura delle card
let columns = document.querySelectorAll('.col-custom');

// variabile d'appoggio per far ritornare tutto alle origini
let columnsConfirm = false;

columns.forEach( (colonna, i)=>{
    

    // alla singola colonna attacco l'evento mouseenter

        colonna.addEventListener('mouseenter', ()=>{

        if(columnsConfirm == false){

            camioncini[i].classList.remove('text-secondaryC');
            camioncini[i].classList.add('text-accentC');

        
        } else {

               // alla seconda entrata
               camioncini[i].classList.remove('text-blackC'); 

                // e diventa per un attimo del colore di sfondo finché non parte il mouse leave


        }
           
    
        })

   

    // alla singola colonna attacco l'evento mouseleave

    colonna.addEventListener('mouseleave', ()=>{


        if(columnsConfirm == false){

            camioncini[i].classList.remove('text-accentC');
            camioncini[i].classList.add('text-blackC');

            columnsConfirm = true;

        } else {

            // alla seconda uscita 
            camioncini[i].classList.add('text-secondaryC');

            columnsConfirm = false;

        }

    })


});