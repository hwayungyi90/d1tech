window.onload = function () {
  let anchor = document.querySelectorAll('.list_title');
  let depth2 = document.querySelectorAll('.list_depth2');

  for (let i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener("click", function () {
      this.classList.toggle('on');
    })
  }
}