let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Portrait_CHI_Wang_Jingwei.png') {
      myImage.setAttribute('src', 'images/220px-74082345_p0.jpg');
    } else {
      myImage.setAttribute('src', 'images/Portrait_CHI_Wang_Jingwei.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('please print your username');
    localStorage.setItem('name', myName);
    if(!myName || myName === null) setUserName();
    else myHeading.textContent = 'its only a test,' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'its only a test,' + storedName;
}
myButton.onclick = function(){
    setUserName();
}