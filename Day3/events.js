document.getElementById('btn1').addEventListener('click', function() {
   document.getElementById('summery').innerHTML = "Button Click event";
   console.log('YES');
});

document.getElementById('btn1').addEventListener('mouseover', btnMouseOver);
document.getElementById('btn1').addEventListener('click', clickBtn);

function btnMouseOver(e) {  
    console.log('Mouse over');
}

function clickBtn(e) {
    console.log('Click btn');
    console.log('Button Click (e) '+ e);
}

//Image move
var imgObj = null;
function moveImageLeft() {
    imgObj.style.left =  parseInt(imgObj.style.left) + 10 +'px';
}

function moveImageRight() {
    
    if (parseInt(imgObj.style.left) <= 0) {
        throw(Error('Image should not go to -ve'));
    } else {
        imgObj.style.left =  (parseInt(imgObj.style.left) - 10) +'px';
    }
    
}

function init() {
    imgObj = document.getElementById('logo');
    imgObj.style.position = 'relative';
    imgObj.style.top = '200px';
    imgObj.style.left = '0px';
}

window.onload = init;
console.log(imgObj);