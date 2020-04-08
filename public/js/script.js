let personalia = document.querySelector('.personalia')
let pickupline = document.querySelector('.pickupline')
let uploadPicture = document.querySelector('.uploadPicture')
let saveButton = document.querySelector('.saveButton')
let progressbar = document.querySelector('.progressbar')
let progress1 = document.querySelector('.progress1')
let progress2 = document.querySelector('.progress2')
let progress3 = document.querySelector('.progress3')
let done = document.querySelector('.done')


let counter = 0



let nextButton = document.querySelector('.next')
nextButton.addEventListener('click', function (){
	counter++
	console.log(counter)
	cases()
	if(counter > 3){
		counter--
	}
})

let backButton = document.querySelector('.back')
backButton.addEventListener('click', function () {
	counter--
	console.log(counter)
	cases()
	if(counter == -1){
		counter++
	}
})

console.log(counter)

cases()

function cases(){

	switch (counter) {
	case 0:
		//fieldsets
		personalia.classList.replace('hidden', 'personalia')
		pickupline.classList.replace('pickupline', 'hidden')
		uploadPicture.classList.add('hidden')

		//buttons
		nextButton.classList.remove('hidden')
		backButton.classList.add('hidden')
		saveButton.classList.add('hidden')

		//progressbar
		progressbar.classList.remove('hidden')
		progress1.classList.remove('hidden')
		progress2.classList.remove('hidden')
		progress3.classList.remove('hidden')
		break
	case 1:
		//fieldsets
		personalia.classList.replace('personalia', 'hidden')
		pickupline.classList.replace('hidden', 'pickupline')
		uploadPicture.classList.add('hidden')

		//buttons
		backButton.classList.remove('hidden')
		nextButton.classList.remove('hidden')
		saveButton.classList.add('hidden')

		//progressbar
		progress1.style.backgroundColor = '#77DD77'

		break
	case 2:
		personalia.classList.replace('personalia', 'hidden')
		pickupline.classList.replace('pickupline', 'hidden')
		uploadPicture.classList.toggle('hidden')

		//buttons
		saveButton.classList.add('hidden')
		nextButton.classList.remove('hidden')

		//progressbar
		done.classList.add('hidden')
		progress2.style.backgroundColor = '#77DD77'

		break
	case 3:
		//fieldsets
		personalia.classList.replace('personalia', 'hidden')
		pickupline.classList.replace('pickupline', 'hidden')
		uploadPicture.classList.toggle('hidden')

		//buttons
		saveButton.classList.remove('hidden')
		nextButton.classList.add('hidden')

		//progressbar
		done.classList.remove('hidden')
		progress3.style.backgroundColor = '#77DD77'
	}
}
