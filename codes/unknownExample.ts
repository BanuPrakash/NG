
function invoke(callback:unknown) {
	if(typeof callback === 'function') {
		callback();
	} else if(typeof callback === 'string') {
		console.log(callback);
	}
}

invoke("Hello!!!");

