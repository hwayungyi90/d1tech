window.onload = function () {
  var menuList = document.querySelectorAll(".first_list");
  console.log(menuList);
  var menuBg = document.querySelector(".menu_background");
  console.log(menuBg);
  var depthTwo = document.querySelectorAll(".depth2");
  console.log(depthTwo);
  var menuWhole = document.getElementById("menu_gnb");

  menuWhole.addEventListener("mouseenter", function () {
    menuBg.style.setProperty('height', '500px');
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