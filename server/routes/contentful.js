var express = require('express');
var router = express.Router();
const axios = require('axios');
// const config = require('config');
// const CONTENTFUL = config.contentful;
// const CONTENTFUL_BASE_URL = config.contentful_url;

router.get('/', async (req, res) => {
	try {
		const response = await axios
			.get(
				`${'https://cdn.contentful.com/'}spaces/${'xxxx'}/entries?access_token=${'xxx'}`,
				{}
			)
			.then((response) => {
				return response;
			})
			.catch(function (error) {
				return Promise.reject(error);
			});
		res.send(response.data);
	} catch (error) {
		console.error(error);
	}
});

//export this router to use in our app.js
module.exports = router;
