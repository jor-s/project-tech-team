let personalia = document.querySelector('.personalia');
let pickupline = document.querySelector('.pickupline');
let uploadPicture = document.querySelector('.uploadPicture');

let counter = 0;

cases();

let nextButton = document.querySelector('.next');
nextButton.addEventListener('click', function (){
    counter++;
    console.log(counter);
    cases();
    if(counter > 2){
        counter--;
    }
});

let backButton = document.querySelector('.back');
backButton.addEventListener('click', function () {
    counter--;
    console.log(counter);
    cases();
    if(counter == -1){
        counter++;
    }
});

console.log(counter);

function cases(){

switch (counter) {
    case 0:
        personalia.classList.replace('hidden', 'personalia');
        pickupline.classList.replace('pickupline', 'hidden');
        uploadPicture.classList.add('hidden');
        break;
    case 1:
        personalia.classList.replace('personalia', 'hidden');
        pickupline.classList.replace('hidden', 'pickupline');
        uploadPicture.classList.add('hidden');
        break;
    case 2:
        personalia.classList.replace('personalia', 'hidden');
        pickupline.classList.replace('pickupline', 'hidden');
        uploadPicture.classList.toggle('hidden');
        break;
}
    }
