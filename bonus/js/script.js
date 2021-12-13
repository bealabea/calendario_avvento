const day = new Date();
const date = day.getDate();

const text = document.querySelector('.img-text');
const box = document.querySelector('.day');

const dayNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

for(let i = 1; i < 25; i++) {
    if(dayNum[i] === date) {
       text.classList.add('show');  
       box.classList.add('hide');
    }
}