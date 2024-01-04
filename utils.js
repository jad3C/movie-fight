const debounce = (func, delay = 1000) => {
    let timeOutID;
    return (...args) => {
        if(timeOutID) {
            clearTimeout(timeOutID);
        }
        timeOutID = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    }
};