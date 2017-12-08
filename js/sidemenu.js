function updates() {
  document.getElementByClassName('updates').style.display='block';
  document.getElementByClassName('about').style.display='none';
  document.getElementByClassName('blog').style.display='none';
}

function about() {
  document.getElementByClassName('updates').style.display='none';
  document.getElementByClassName('about').style.display='block';
  document.getElementByClassName('blog').style.display='none';
}

function blog() {
  document.getElementByClassName('updates').style.display='none';
  document.getElementByClassName('about').style.display='none';
  document.getElementByClassName('blog').style.display='block';
}
