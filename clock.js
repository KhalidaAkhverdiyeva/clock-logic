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

