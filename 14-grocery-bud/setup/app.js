// Create store
const groceryStore = createStore("grocery", [])

// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form')
const submitBtn = document.querySelector('.submit-btn')
const grocery = document.querySelector('#grocery')
const list = document.querySelector(".grocery-list");
// edit option

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)

window.addEventListener('DOMContentLoaded', render)

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault()
    const value = grocery.value;
    const id = new Date().getTime().toString()
    const newItem = {value, id}
    
    if(value !== "") {
        const items = groceryStore.get()
        items.push(newItem)
        groceryStore.set(items)
        displayAlert("Add item successful", "success")
        render()
    } else {
        displayAlert("Something went wrong", "danger")
    }
    setBackToDefault()
}

function setBackToDefault() {
    grocery.value = ""
}

function render() {
    const items = groceryStore.get()
    list.innerHTML = ""
    items.forEach(item => {
        createListItem(item.value, item.id)
    });
}

function createListItem(value, id) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr)
    element.classList.add("grocery-item")
    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <!-- Edit -->
            <button class="edit-btn">Edit</button>
            <!-- Delete -->
            <button class="delete-btn">Delete</button>
        </div>
    `
    list.appendChild(element)
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
