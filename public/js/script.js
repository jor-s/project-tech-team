//select elements that already exist in the HTML
let personalia = document.querySelector('.personalia')
let pickupline = document.querySelector('.pickupline')
let uploadPicture = document.querySelector('.uploadPicture')
let saveButton = document.querySelector('.saveButton')
let done = document.querySelector('.done')

//make the elements for progressive disclosure
let selectForm = document.getElementById('ff')
let formStyle = document.getElementById('formStyle')

let progressbar = document.createElement('div')
let progress1 = document.createElement('div')
let progress2 = document.createElement('div')
let progress3 = document.createElement('div')

let backButton = document.createElement('button')
let nextButton = document.createElement('button')

//add text to buttons
let backText = document.createTextNode('Back')
let nextText = document.createTextNode('Next')

backButton.appendChild(backText)
nextButton.appendChild(nextText)

//assign classes to added elements
progressbar.setAttribute('class', 'progressbar')
progress1.setAttribute('class', 'progress1 hidden')
progress2.setAttribute('class', 'progress2 hidden')
progress3.setAttribute('class', 'progress3 hidden')

backButton.setAttribute('class', 'back button hidden')
nextButton.setAttribute('class', 'next button hidden')

//checks if elements exist in the HTML
if (progressbar != null) {
	selectForm.insertBefore(progressbar, selectForm.childNodes[0])
	progressbar.appendChild(progress1)
	progressbar.appendChild(progress2)
	progressbar.appendChild(progress3)

	formStyle.insertBefore(backButton, formStyle.childNodes[2])
	formStyle.insertBefore(nextButton, formStyle.childNodes[3])
}

let next = document.querySelector('.next')
next.addEventListener('click', () => {
	counter++
	console.log(counter)
	cases()
	if (counter > 3) {
		counter--
	}
})

let back = document.querySelector('.back')
back.addEventListener('click', () => {
	counter--
	console.log(counter)
	cases()
	if (counter == -1) {
		counter++
	}
})


let counter = 0


console.log(counter)

cases()

function cases() {

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
