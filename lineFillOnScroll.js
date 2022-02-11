let lineScroller = document.querySelector(".line");

window.onscroll = lineFillOnScroll;

function lineFillOnScroll() {
  lineScroller.style.width = `${
    (window.scrollY * 100) / 2014
  }%`;
}
