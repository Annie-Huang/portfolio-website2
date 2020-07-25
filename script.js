console.log("It's working");

let themeDots = document.getElementsByClassName('theme-dot');

// Cannot use forEach here because document.getElementsByClassName returns a HTMLCollectionOf<Element>;
// Where as document.querySelectorAll('.theme-dot') returns a NodeListOf<E>;
for(var i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', function(){ // Cannot use ES6 syntax too.
    let mode = this.dataset.mode;
    console.log('Option clicked', mode);
    setTheme(mode);
  })
}

setTheme = (mode) => {
  switch (mode) {
    case 'light':
      document.getElementById('theme-style').href = 'default.css';
      break;
    case 'blue':
      document.getElementById('theme-style').href = 'blue.css';
      break;
    case 'green':
      document.getElementById('theme-style').href = 'green.css';
      break;
    case 'purple':
      document.getElementById('theme-style').href = 'purple.css';
      break;
    default:
      document.getElementById('theme-style').href = 'default.css';
  }
}
