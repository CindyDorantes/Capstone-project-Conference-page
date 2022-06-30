const sectionSpeakers = document.querySelector('.speaker-wrap');
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.mobile-menu');

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const closing = document.querySelector('.close');

closing.addEventListener('click', () => {
  menu.classList.remove('active');
});

const closingItem = document.querySelector('.mobile-nav');

closingItem.addEventListener('click', () => {
  menu.classList.remove('active');
});

// SPEAKERS INFORMATION //

const speakersInfo = [
  {
    photo: './images/speakers/Riccardo_Accolla.png',
    alt: 'Riccardo Acollas portrait',
    name: 'Riccardo Acolla',
    title: 'Director of Digital Food Science at Ripe Technology',
    career: 'He has scientific and technical experience in flavor and nutrition, as well as knowledge in the process of developing ingredients and products.',
  },
  {
    photo: './images/speakers/Roger_Clemens.png',
    alt: 'Roger Clemens portrait',
    name: 'Roger Clemens',
    title: 'DrPH, USC School of Pharmacy, Los Angeles, CA USA',
    career: 'He is a third-term member of the US Pharmacopeia Food Ingredient Expert Committee. He was president of the IFT. ',
  },
  {
    photo: './images/speakers/Sara_Valdes.png',
    alt: 'Sara Valdes portrait',
    name: 'Sara Valdes',
    title: 'International Academy of the Union of Food Science and Technology (IAUFoST)',
    career: 'Actively participates with the National Association of Food Technologists, National Association of Specialists in Natural Colorants.',
  },
  {
    photo: './images/speakers/jorge_toro.png',
    alt: 'Jorge F. Toro Vazquez portrait',
    name: 'Jorge F. Toro Vazquez',
    title: 'Ph.D. in Food Chemistry from Cornell University, Department of Food Science',
    career: 'His current research projects are associated with phase transitions and structural organization of lipids and their application.',
  },
  {
    photo: './images/speakers/tatiana_koutchma.png',
    alt: 'Tatiana Koutchma portrait',
    name: 'Tatiana Koutchma',
    title: 'Research Scientist at the Agriculture and Agri-Food Canada',
    career: 'Tatiana’s activity focuses on application of novel processing technologies to enhance microbial safety and functionality of foods and feed, addresses issues of chemical safety.',
  },
  {
    photo: './images/speakers/giovanna_ferrari.png',
    alt: 'Giovanna Ferrari portrait',
    name: 'Giovanna Ferrari',
    title: 'Professor of Chemical Engineering at the University of Salerno',
    career: 'Her research activity is mainly focused on the study of novel technologies and their application in the food industry, including sustainability aspects.',
  },
];

// CREATE SPEAKERS CARDS //

for (let i = 0; i < speakersInfo.length; i += 1) {
  const speakerItem = document.createElement('div');
  speakerItem.classList.add('speaker-item');
  sectionSpeakers.appendChild(speakerItem);

  const speakerImgWrap = document.createElement('div');
  speakerImgWrap.classList.add('speaker-img');
  speakerItem.appendChild(speakerImgWrap);

  const speakerImg = document.createElement('img');
  speakerImg.src = speakersInfo[i].photo;
  speakerImg.alt = speakersInfo[i].alt;
  speakerImgWrap.appendChild(speakerImg);

  const speakerDescription = document.createElement('div');
  speakerDescription.classList.add('speaker-description');
  speakerItem.appendChild(speakerDescription);

  const speakerName = document.createElement('h3');
  speakerName.textContent = speakersInfo[i].name;
  speakerDescription.appendChild(speakerName);

  const speakerTitle = document.createElement('h4');
  speakerTitle.textContent = speakersInfo[i].title;
  speakerDescription.appendChild(speakerTitle);

  const guide = document.createElement('div');
  guide.classList.add('guide-grey');
  speakerDescription.appendChild(guide);

  const speakerCareer = document.createElement('p');
  speakerCareer.textContent = speakersInfo[i].career;
  speakerDescription.appendChild(speakerCareer);
}
