
/*<--------------- Progress Bar section ------->>>> */

const name = document.getElementById("name");
const firstRadio = document.getElementById("firstRadio");
const secondRadio = document.getElementById("secondRadio");

const place = document.getElementById("place");
const myDropdown = document.getElementById("myDropdown");
const myDropdown2 = document.getElementById("myDropdown2");

const one = document.getElementById("one");
const two = document.getElementById("two");

name.addEventListener('change' ,() => {
    document.getElementById("inner_bar").style.width = "16%";
});

firstRadio.addEventListener('change' ,() => {
    document.getElementById("inner_bar").style.width = "32%";
});

secondRadio.addEventListener('change' ,() => {
    one.classList.toggle("none");
    two.classList.toggle("block");
    document.getElementById("inner_bar").style.width = "48%";
});

place.addEventListener('change' ,() => {
    document.getElementById("inner_bar").style.width = "64%";
});

myDropdown.addEventListener('click' ,() => {
    document.getElementById("inner_bar").style.width = "82%";
});

myDropdown2.addEventListener('click' ,() => {
    one.classList.toggle("none");
    two.classList.toggle("block");
    document.getElementById("inner_bar").style.width = "100%";
    window.alert(" Click ok to submit your form...!")
});









/*<--------------- Dropdown section ------->>>> */


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



