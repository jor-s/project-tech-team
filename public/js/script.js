let personalia = document.querySelector('.personalia');
let pickupline = document.querySelector('.pickupline');
let uploadPicture = document.querySelector('.uploadPicture');
let saveButton = document.querySelector('.saveButton');

let counter = 0;



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

cases();

function cases(){

	switch (counter) {
	case 0:
		personalia.classList.replace('hidden', 'personalia');
		pickupline.classList.replace('pickupline', 'hidden');
		uploadPicture.classList.add('hidden');
		backButton.classList.add('hidden');
		saveButton.classList.add('hidden');
		break;
	case 1:
		personalia.classList.replace('personalia', 'hidden');
		pickupline.classList.replace('hidden', 'pickupline');
		uploadPicture.classList.add('hidden');
		backButton.classList.remove('hidden');
		nextButton.classList.remove('hidden');
		saveButton.classList.add('hidden');
		break;
	case 2:
		personalia.classList.replace('personalia', 'hidden');
		pickupline.classList.replace('pickupline', 'hidden');
		uploadPicture.classList.toggle('hidden');
		saveButton.classList.remove('hidden');
		nextButton.classList.add('hidden');
		break;
	}
}
