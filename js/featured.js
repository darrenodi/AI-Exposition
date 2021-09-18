const speakers = [
  {
    name: 'Elon Musk',
    profession: 'CEO Neuralink, OpenAI, Tesla',
    info: 'Musk has an epic saga of voicing severe concerns over the harsh potential of AI',
    image: {
      url: '/images/elon-musk.jpg',
      alt: 'Elon Musk',
    },
  },
  {
    name: 'Mark Zuckerberg',
    profession: 'CEO Facebook',
    info: 'He worked last year on developing an artificial intelligence system to help run his life and his home. ',
    image: {
      url: '/images/mark.jpg',
      alt: 'Mark Zuckerberg',
    },
  },
  {
    name: 'Jeff Bezoz',
    profession: 'CEO Amazon, BlueOrigins',
    info: 'Jeff Bezos on AI: Autonomous weapons are genuinely scary, robots wont put us all out of work',
    image: {
      url: '/images/jeff.jpg',
      alt: 'Jeff Bezoz',
    },
  },
  {
    name: 'Greg Brockman',
    profession: 'Co-founder and Chairman of OpenAI',
    info: 'Brockman plays many roles at the firm, from recruiting to helping researchers test new learning algorithms.',
    image: {
      url: '/images/greg.jpg',
      alt: 'Greg Brockman',
    },
  },
  {
    name: 'Cynthia Breazeal',
    profession: 'Founder & Chief Scientist at Jibo, Inc.',
    info: ' Cynthia Breazeal pioneered research into social interaction between humans and robots.',
    image: {
      url: '/images/cynthia.jpg',
      alt: 'Cynthia Breazeal',
    },
  },
  {
    name: 'Timnit Gebru',
    profession: 'Eritrean American computer scientist, Co-Founder Black in AI',
    info: ' Timnit, is a Research Scientist in the Ethical AI Team at Google and also Cofounder of Black in AI. ',
    image: {
      url: '/images/timnit.jpg',
      alt: 'Timnit Gebru',
    },
  },

];

function myFunction(item) {
  const speakerContainer = document.getElementById('speakers-container');
  const speakerDiv = document.createElement('div');
  speakerDiv.className = 'speakerBox';
  speakerContainer.appendChild(speakerDiv);
  const speakerPic = document.createElement('img');
  speakerPic.className = 'speakerPic';
  speakerPic.src = item.image.url;
  speakerPic.alt = item.image.alt;
  const speakerAtt = document.createElement('div');
  speakerAtt.className = 'speakerAtt';
  const speakerName = document.createElement('h2');
  speakerName.textContent = item.name;
  const speakerPos = document.createElement('h5');
  speakerPos.textContent = item.profession;
  const speakerDet = document.createElement('p');
  speakerDet.textContent = item.info;
  speakerDiv.appendChild(speakerPic);
  speakerDiv.appendChild(speakerAtt);
  speakerAtt.appendChild(speakerName);
  speakerAtt.appendChild(speakerPos);
  speakerAtt.appendChild(speakerDet);
}

speakers.forEach(myFunction);
