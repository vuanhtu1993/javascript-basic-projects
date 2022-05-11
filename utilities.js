const shuffleArray = (arr) => arr.slice().sort(() => Math.random() - 0.5)

function randomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const randomNumber = (to) => {
    if(Number(to) && to > 1) {
        return ~~(Math.random() * to) + 1
    }
    // Error
    return -1
};

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;