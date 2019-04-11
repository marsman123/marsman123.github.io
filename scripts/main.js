let img = document.querySelector('img');

img.onclick = function(){
    let src = img.getAttribute('src')
    if (src === 'img/xun.jpg') {
        img.setAttribute('src','img/hei.jpeg') 
    } else {
        img.setAttribute('src','img/xun.jpg') 
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;