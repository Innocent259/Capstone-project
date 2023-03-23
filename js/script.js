//Menu

const menu = document.querySelector('.menu-icon')
const menuList = document.querySelector('.navbar-nav')

menu.addEventListener('click', () => {
    console.log("ready to go!")
    menuList.classList.toggle('show')
})

//More button
const dataForSpeakers = [
    {
        image: "./images/President-Paul-Kagame.png",
        title: "President Paul Kagame",
        about: "Paul Kagame is a Rwandan politician and former military officer who is the fourth and current president of Rwanda since 2000"
    },
    {
        image: "./images/President-Paul-Kagame.png",
        title: "President Paul Kagame",
        about: "Paul Kagame is a Rwandan politician and former military officer who is the fourth and current president of Rwanda since 2000"
    },
    {
        image: "./images/President-Paul-Kagame.png",
        title: "President Paul Kagame",
        about: "Paul Kagame is a Rwandan politician and former military officer who is the fourth and current president of Rwanda since 2000"
    },
    {
        image: "./images/President-Paul-Kagame.png",
        title: "President Paul Kagame",
        about: "President Paul Kagame"
    }
]
const speakers = document.querySelector('#more');
const newElement = document.createElement('div');
newElement.className = "new-element"
function handleClick() {
   let content = dataForSpeakers.map(item => 
     `
    <div class="speaker-details">
        <img src=${item.image} class="speaker">
        <span>
            <h5>${item.title}</h5>
            <hr class="line2">
            <p>${item.about}</p>
        </span>
    </div>
    `
).join('')
document.body.appendChild(newElement)
speakers.style.display = 'none'
newElement.innerHTML = content;
}
speakers.addEventListener('click', handleClick)
