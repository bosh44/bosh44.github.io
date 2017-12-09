  var updatesClass = document.getElementsByClassName('updates');
  var aboutClass = document.getElementsByClassName('about');
  var blogClass = document.getElementsByClassName('blog');

function updates() {
  changeDisplay(updatesClass,'block');
  changeDisplay(aboutClass, 'none');
  changeDisplay(blogClass, 'none');
}

function about() {
  changeDisplay(updatesClass,'none');
  changeDisplay(aboutClass, 'block');
  changeDisplay(blogClass, 'none');
}

function blog() {
  changeDisplay(updatesClass,'none');
  changeDisplay(aboutClass, 'none');
  changeDisplay(blogClass, 'block');
}

function changeDisplay(selectedClass, value) {
  for (i = 0; i < selectedClass.length; i++){
    selectedClass[i].style.display = value;
  }
}
