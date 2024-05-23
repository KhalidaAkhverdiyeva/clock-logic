const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');


setInterval(() => {
    let time = new Date();

hour.textContent = time.getHours();
minute.textContent = time.getMinutes();
second.textContent = time.getSeconds();

if (hour.textContent < 10){
    hour.textContent = '0'+ hour.textContent;
    
}

if(minute.textContent < 10){
    minute.textContent = '0' + minute.textContent;

} 
if(second.textContent < 10 ){
    second.textContent = '0' + second.textContent;

}
    
},1000);

let hour2 = 0;
let minute2 = 0;
let second2 = 0;

setInterval(updateClock,1000);

function updateClock(){

    document.querySelector('#hour2').textContent =(hour2 < 10 ? '0': '')+ hour2;
    document.querySelector('#minute2').textContent =(minute2 < 10 ? '0': '')+ minute2;
    document.querySelector('#second2').textContent =(second2 < 10 ? '0': '')+ second2;
    second2++

    if (second2 === 60){
        second2 = 0;
        minute2++;
           
        if (minute2 === 60){
            minute2 = 0;
            hour2++ 
    
        }
           
        if (hour2 === 60){
            hour2 = 0;
    
        }
    
     }
}


 
