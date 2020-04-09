const multer = require('multer')

//multer stuff mainly learned from
//source: Academind. (2017, 21). Uploading an Image | Creating a REST API with Node.js. Geraadpleegd op 15 maart 2020, van https://www.youtube.com/watch?v=srPXMt1Q0nY
//configuring multer by choosing the destination for images
const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './public/img/profile')
	}
})
//checks if image is supported
const fileFilter = (req, file, callback) => {
	console.log('firing')
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
		return callback(null, true, console.log('image has been accepted, it is either a jpeg,png or jpg'))
	} else {
		return callback(null, false, console.log('image type not supported'))
	}
}

let imageHelper = {

	upload : multer({
		storage: storage,
		fileFilter: fileFilter,
		limits: {
			//you can upload images with a filesize up to 20 MB
			fileSize: 1024 * 1024 * 20
		}
	})
}

module.exports = imageHelper
