// alert(123);
// console.log(3152);

const counter = document.querySelector('.counter');
const blurEffect = document.querySelector('.blur-section');
let counterNum = 0;

let blurNum = 100;

let cbox = document.querySelectorAll(".box");
cbox.forEach(box => {
    box.addEventListener('click', () => {

        let counting = setInterval(function () {
            if ((counterNum < 101) && (blurNum >= 0)) {
                counterText = counter.innerHTML = counterNum + '%';
                blurEffect.style.backdropFilter = `blur(${blurNum})`;
                counterNum++;
                blurNum--;
            } else {
                clearInterval(counting)
            }
        }, 10);

    })

})