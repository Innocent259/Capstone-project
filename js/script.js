const menuList = document.querySelector('.menu-section');
const menuIcon = document.querySelector('.menu');
const allSpeakers = document.querySelector('.speakers');

menuIcon.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu')) {
    menuList.style.display = 'flex';
    menuIcon.style.display = 'none';
  }
});

menuList.addEventListener('click', (e) => {
  const clicked = e.target.classList.contains('links');
  if (clicked) {
    menuList.style.display = 'none';
    menuIcon.style.display = 'flex';
  }
});

const data = [
  {
    Name: 'Paul Kagame',
    Title: 'President of the Republic of Rwanda',
    Description: 'Paul Kagame is a Rwandan politician and former military officer who is the fourth and current president of Rwanda since 2000.',
    Img: './images/speaker1.png',
    Alt: 'speaker1',
  },

  {
    Name: 'Gianni Infantino',
    Title: 'FIFA President',
    Description: 'Giovanni Vincenzo "Gianni" Infantino is a Swiss football administrator and the current president of FIFA. He was first elected to the office during the 2016.',
    Img: './images/speaker2.png',
    Alt: 'speaker2',
  },

  {
    Name: 'Fatma Samoura',
    Title: 'Secretary General',
    Description: 'Fatma Samba Diouf Samoura is a Senegalese former diplomat and senior executive. She was appointed as the first female Secretary General of FIFA by President Gianni Infantino.',
    Img: './images/fifaspeaker2.png',
    Alt: 'speaker3',
  },

  {
    Name: 'Gianni Infantino',
    Title: 'FIFA President',
    Description: 'Giovanni Vincenzo "Gianni" Infantino is a Swiss football administrator and the current president of FIFA. He was first elected to the office during the 2016.',
    Img: './images/speaker2.png',
    Alt: 'speaker4',
  },

  {
    Name: 'Fatma Samoura',
    Title: 'Secretary General',
    Description: 'Fatma Samba Diouf Samoura is a Senegalese former diplomat and senior executive. She was appointed as the first female Secretary General of FIFA by President Gianni Infantino.',
    Img: './images/fifaspeaker2.png',
    Alt: 'speaker5',
  },

  {
    Name: 'Paul Kagame',
    Title: 'President of the Republic of Rwanda',
    Description: 'Paul Kagame is a Rwandan politician and former military officer who is the fourth and current president of Rwanda since 2000.',
    Img: './images/speaker1.png',
    Alt: 'speaker6',
  },
];

function guestSpeakers() {
  let content = '';
  for (let i = 0; i < data.length; i += 1) {
    content += `
        <li class="guest">
        <img src="${data[i].Img}" alt="${data[i].Alt}">
        <section>
        <h3>
        ${data[i].Name}
        </h3>
        <p class="p1">
        ${data[i].Title}
        </p>
        <p class="p2">
        ${data[i].Description}
        </p>
        </section>
        </li>`;
  }

  allSpeakers.innerHTML = content;
}

guestSpeakers();

const loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  const boxes = [...document.querySelectorAll('.sec3 .speakers .guest')];
  for (let i = currentItem; i < currentItem + 2; i += 1) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 2;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
