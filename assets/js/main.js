window.onload = function () {
  var menuBg = document.querySelector(".menu_background");
  var depthTwo = document.querySelectorAll(".depth2");
  var menuWhole = document.getElementById("menu_gnb");

  menuWhole.addEventListener("mouseenter", function () {
    menuBg.style.setProperty('height', '380px');
    for (let j = 0; j < depthTwo.length; j++) {
      depthTwo[j].style.setProperty('display', 'block');
    }
  })

  menuBg.addEventListener("mouseout", function () {
    menuBg.style.setProperty('height', '0');
    for (let j = 0; j < depthTwo.length; j++) {
      depthTwo[j].style.setProperty('display', 'none');
    }
  })

  var moList = document.querySelectorAll(".link");

  for (let i = 0; i < moList.length; i++) {
    moList[i].addEventListener("click", function () {
      this.classList.toggle("active");
    })
  }

  //ceo 아코디언
  let anchor = document.querySelectorAll('.record_list .list_title');

  for (let i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener("click", function () {
      this.classList.toggle('on');
      console.log()
    })
  }
};