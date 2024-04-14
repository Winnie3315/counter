let plus = document.querySelector('.pl')
let minus = document.querySelector('.min')
let reset = document.querySelector('.res')
let random = document.querySelector('.rand')
let count = document.querySelector('span')
let counter = 0

plus.onclick = () => {
    counter++
    count.textContent = counter;
    console.log(counter);
    
}
minus.onclick = () => {
    if(counter > 0){
       counter--
    count.textContent = counter
    console.log(counter); 
    }
}
reset.onclick = () => {
    counter = 0
    count.textContent = counter;
    console.log(counter);
    
}
random.onclick = () => {
    counter = Math.floor(Math.random() * 100);
    count.textContent = counter
    console.log(counter);
}