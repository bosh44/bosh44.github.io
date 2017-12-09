  var updatesClass = document.getElementsByClassName('updates');
  var aboutClass = document.getElementsByClassName('about');
  var blogClass = document.getElementsByClassName('blog');

function updates() {
  changeClass(updatesClass,'block');
  changeClass(aboutClass, 'none');
  changeClass(blogClass, 'none');
}

function about() {
  changeClass(updatesClass,'none');
  changeClass(aboutClass, 'block');
  changeClass(blogClass, 'none');
}

function blog() {
  changeClass(updatesClass,'none');
  changeClass(aboutClass, 'none');
  changeClass(blogClass, 'block');
}

function changeDisplay(selectedClass, value) {
  for (i = 0; i < selectedClass.length; i++){
    selectedClass[i].style.display = value;
  }
}
