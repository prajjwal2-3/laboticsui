import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js';

const logoutbut = document.querySelector('.logoutbtn');

logoutbut.addEventListener('click',function(){
   

const auth = getAuth();
signOut(auth).then(() => {
  console.log('signout')
}).catch((error) => {
    const errorMessage = error.message;
    // console.log(errorMessage)
});

})