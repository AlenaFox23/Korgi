let myButton = document.querySelector('button'); //метод querySelector() возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов.
let myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Пожалуйста введите свое имя:');
    localStorage.setItem('имя', myName);//Объекты веб-хранилища localStorage позволяет хранить значение пары ключ в браузере
    myHeading.textContent = 'Приветствует тебя, ' + myName + '!!!';//textContent – это свойство, которое предназначено для работы с текстовым контентом элемента.
  }

  if(!localStorage.getItem('имя')) {
    setUserName();//вызываем тут функцию выше, для того что бы у вас спрашивать имя(если обновить страницу), если вы ранее не ввели ничего
  } else {
    var storedName = localStorage.getItem('имя');//вносим ваше имя в переменную
    myHeading.textContent = 'Приветствует тебя, ' + storedName + '!!!';//выводим тут привествие и имя которое ввели
  }

  myButton.onclick = function() {//функция для того что бы работала кнопка смены имени
    setUserName();
  }
