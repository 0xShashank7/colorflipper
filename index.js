const colors = ["green","red","rgba(133,45,200)","#f15025","aqua","yellow","gold","pink"]
const btn =  document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){

    const random = getRandomNumber();
    console.log(random)
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}