function invoke(callback) {
    if (typeof callback === 'function') {
        callback();
    }
    else if (typeof callback === 'string') {
        console.log(callback);
    }
}
invoke("Hello!!!");
