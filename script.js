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
  if (mode === 'light') {
    document.getElementById('theme-style').href = 'default.css'
  }

  if(mode === 'blue'){
    document.getElementById('theme-style').href = 'blue.css'
  }

  if(mode === 'green'){
    document.getElementById('theme-style').href = 'green.css'
  }

  if(mode === 'purple'){
    document.getElementById('theme-style').href = 'purple.css'
  }
}
