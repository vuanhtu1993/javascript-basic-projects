// Create store
function createStore(name, defaultValue) {
    function save(data) {
        localStorage.setItem(name, JSON.stringify(data));
    }
    let store = JSON.parse(localStorage.getItem(name))
    if(!store) {
        save(defaultValue)
    }
    
    return {
        get: function() {
            const store = JSON.parse(localStorage.getItem(name))
            return store
        },
        add: function(item) {
            let store = JSON.parse(localStorage.getItem(name))
            store.push(item)
            save(store)
        },
        remove: function(id) {
            const store = JSON.parse(localStorage.getItem(name))
            const newStore = store.filter(item => item.id !== id)
            save(newStore)
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