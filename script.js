console.log("It's working");

let themeDots = document.getElementsByClassName('theme-dot');

// Cannot use forEach here because document.getElementsByClassName returns a HTMLCollectionOf<Element>;
// Where as document.querySelectorAll('.theme-dot') returns a NodeListOf<E>;
for(var i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', function(){ // Cannot use ES6 syntax too.
    let mode = this.dataset.mode;
    console.log('Option clicked', mode);
  })
}
