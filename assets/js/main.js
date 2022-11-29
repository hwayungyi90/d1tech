window.onload = function () {
  var menuList = document.querySelectorAll(".first_list");
  console.log(menuList);
  var menuBg = document.querySelector(".menu_background");
  var depthTwo = document.querySelectorAll(".depth2");
  var twoList = document.querySelectorAll(".depth2")
  var menuWhole = document.getElementById("menu_gnb");
  var depthOne = document.querySelectorAll(".depth1");
  let clickList = document.querySelectorAll(".clickList");
  console.log(clickList);
  let clickPa = clickList.parent;
  console.log(clickPa);

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
}