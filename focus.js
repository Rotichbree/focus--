 const x = document.getElementById('login');
 const y = document.getElementById('register');
 const z = document.getElementById('btn');

 function register() {
     x.style.left = '-400px';
     y.style.left = '50px';
     z.style.left = '110px';
 }

 function login() {
     x.style.left = '50px';
     y.style.left = '450px';
     z.style.left = '0px';
 }
 const modal = document.getElementById('loginForm');
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = 'none';
     }
 }