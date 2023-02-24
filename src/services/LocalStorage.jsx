
const saveData = (key, value) => {
    if(localStorage) {
        localStorage.setItem(key,value);
    } else {
        console.log("Local Storage is not supported");
    }
}

const loadData = (key) => {
    if(localStorage) {
        if (key in localStorage) {
            return localStorage.getItem(key);
        } else {
            console.log("Key not found");
        }
    }
}

const removeData = (key) => {
    if(localStorage) {
        if (key in localStorage) {
            localStorage.removeItem(key);
        } else {
            console.log("Key not found");
        }
    }
}

export { saveData, loadData, removeData };