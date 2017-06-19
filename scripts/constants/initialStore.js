const eyewear = require('./eyewear.json');

const initialStore =  {
	'category': 'eyewear',
	'products': eyewear,
	'selected': "",
	'purchase': {
		'isFetching': false,
		'created_at': null,
		'response': null
	}
}

export default initialStore;