// HOF
function forEach(elems, action) {
	for(i = 0; i< elems.length; i++) {
		action(elems[i]);
	}
}

//HOF
function filter(elems, predicate) {
    var res = [];
        forEach(elems, (e) => {
            if(predicate(e)) {
                res.push(e);
            }
        });
    return res;
}
