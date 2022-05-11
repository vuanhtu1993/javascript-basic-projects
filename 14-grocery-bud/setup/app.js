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
        groceryStore.add(newItem)
        displayAlert("Add item successful", "success")
        render()
    } else {
        displayAlert("Something went wrong", "danger")
    }
    setBackToDefault()
}

function deleteItem(e) {
    e.preventDefault()
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    console.log(id)
    groceryStore.remove(id)
    render()
    displayAlert("Delete successful", "danger")
}

function setBackToDefault() {
    grocery.value = ""
    grocery.focus()
}

function render() {
    let items = groceryStore.get()
    items = shuffleArray(items)
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
    // ========= Add event =============
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener('click', deleteItem)
    list.appendChild(element)
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
