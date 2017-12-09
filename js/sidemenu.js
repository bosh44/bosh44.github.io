  var updatesClass = document.getElementsByClassName('updates');
  var aboutClass = document.getElementsByClassName('about');
  var blogClass = document.getElementsByClassName('blog');

function updates() {
  updatesClass.style.display='block';
  aboutClass.style.display='none';
  blogClass.style.display='none';
}

function about() {
  updatesClass.style.display='none';
  aboutClass.style.display='block';
  blogClass.style.display='none';
}

function blog() {
  updatesClass.style.display='none';
  aboutClass.style.display='none';
  blogClass.style.display='block';
}

function changeDisplay(selectedClass, value) {
  for (i = 0; i < selectedClass.length; i++){
    selectedClass[i].style.display = value;
  }
}
