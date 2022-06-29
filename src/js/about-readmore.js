function readMore() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("btn");
  var btnhide = document.getElementById("btnhide");

  if(dots.style.display === "none") {
    dots.style.display="inline";
    more.style.display="none";
    btn.className="about-button"
    btnhide.className="about-button--hide"    
  }
  else {
    dots.style.display="none";
    btn.className="about-button about-button--hidden"
    btnhide.className="about-button--hide about-button--hide--appear"
    more.style.display="inline";
  }
}