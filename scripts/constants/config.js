const eyewear = require('./eyewear.json');

console.log('eyewear', eyewear);
const config =  {
	'category': 'eyewear',
	'products': eyewear,
	'selected': "",
	'purchase': {
		'isFetching': false,
		'created_at': null,
		'response': null
	}
}

export default config;