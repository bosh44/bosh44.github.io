function updates() {
  document.getElementsByClassName('updates').style.display='block';
  document.getElementsByClassName('about').style.display='none';
  document.getElementsByClassName('blog').style.display='none';
}

function about() {
  document.getElementsByClassName('updates').style.display='none';
  document.getElementsByClassName('about').style.display='block';
  document.getElementsByClassName('blog').style.display='none';
}

function blog() {
  document.getElementsByClassName('updates').style.display='none';
  document.getElementsByClassName('about').style.display='none';
  document.getElementsByClassName('blog').style.display='block';
}
