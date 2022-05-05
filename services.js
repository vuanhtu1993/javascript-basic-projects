// Create store
function createStore(name, defaultValue) {
    const store = JSON.parse(localStorage.getItem(name))
    if(!store) {
        localStorage.setItem(name, JSON.stringify(defaultValue));
    }
    return {
        get: function() {
            return store
        },
        set: function(data) {
            localStorage.setItem(name, JSON.stringify(data));
        }
    }
}

// Display alert
function displayAlert(text, action) {
    const alert = document.querySelector('.service-alert')
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
    }, 1000);
}