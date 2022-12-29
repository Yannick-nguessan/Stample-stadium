window.onload = function() {
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id !== 'section1') {
        sections[i].style.display = 'none';
      }
    }
  }
  