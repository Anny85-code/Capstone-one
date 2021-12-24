const navMenu = document.getElementById("fa");
const getSideBar = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".aside-close");
const navLinks = document.querySelectorAll(".mobile-nav li");
const moreWrapper  = document.querySelector(".more-wrapper");
const lessWrapper  = document.querySelector(".less-wrapper");
const hiddenSpeakers = document.getElementsByClassName("unhide")
const toggleSideBar = false;
const closeButton = false;
const body = document.querySelector("body")

navMenu.addEventListener("click", function () {
  if (toggleSideBar === false) {
    getSideBar.style.visibility = "visible";
    body.style.overflow = 'hidden';
  }
});
closeBtn.addEventListener("click", function () {
  if (closeButton === false) {
    getSideBar.style.visibility = "hidden";
    body.style.overflow = 'auto';
  }
});

moreWrapper.style.display = 'block';
lessWrapper.style.display = 'none';

moreWrapper.addEventListener("click", function () {
  for (let i = 0; i < hiddenSpeakers.length; i += 1) {
    hiddenSpeakers[i].classList.remove('mob-hidden');
   }
   moreWrapper.style.display = 'none';
   lessWrapper.style.display = 'block';
});

lessWrapper.addEventListener("click", function () {
  for (let i = 0; i < hiddenSpeakers.length; i += 1) {
    hiddenSpeakers[i].classList.add('mob-hidden');
   }
   lessWrapper.style.display = 'none';
   moreWrapper.style.display = 'block'
});

function closeLinks() {
  getSideBar.style.visibility = "hidden";
}

navLinks.forEach((links) => links.addEventListener("click", closeLinks));

const speakers = [{
    name : "Mary Beth Leonard",
    title: "Us Ambassador to Nigeria",
    others: "Professor of Criminology, Harvard. Chairman African Security council.",
    checkerImage: "assets/image/checker-img.jpg",
    speakerImage: "assets/image/speaker-1.jpeg",
    order: '1',
},
{
    name : "Micheal Anyanwu",
    title: "MD/CEO, DataSixth Security Consulting",
    others: "Level 10 Analyst with several years of experience in Cybersecurity and other related fields.",
    checkerImage: "assets/image/checker-img.jpg",
    speakerImage: "assets/image/speaker-2.jpeg",
    order: '2',
},
{
    name : "Anand Ramaswamy",
    title: "Guest Speaker(Facilitator)",
    others: "International Computer Hacking and Intellectual Property Attorney Advisor(ICHIP) for Africa. Us Mission to the Africa Union.",
    checkerImage: "assets/image/checker-img.jpg",
    speakerImage: "assets/image/speaker-3.jpeg",
    order: 'mob-hidden unhide',
},
{
    name : "Confidence Staveley",
    title: "CEO, Cybersafe Foundation",
    others: "Cybersecurity Evangelist | Cybersecurity Woman of the Year 2021 | IFSEC Global Influencers in Security $ Fire 2021.",
    checkerImage: "assets/image/checker-img.jpg",
    speakerImage: "assets/image/speaker-4.jpeg",
    order:'mob-hidden unhide',
},
{
    name : "Oluseye Banjoko",
    title: "Partner, CLP legal",
    others: "Professor Law and Criminology, years of experience in internal relation and Cybersecurity.",
    checkerImage: "assets/image/checker-img.jpg",
    speakerImage: "assets/image/speaker-5.jpeg",
    order:'mob-hidden unhide',
},
{
    name : "Tanja Hills",
    title: "Us Ambassador to Nigeria",
    others: "International Computer Hacking and Intellectual Property Attorney Advisor(ICHIP) for Africa. Us Embassey, Nigeria.",
    checkerImage: "assets/image/checker-img.jpg",
    speakerImage: "assets/image/speaker-6.jpeg",
    order:'mob-hidden unhide',
}
];
function render(){
let displaySpeakers = "";
for (let i = 0; i < speakers.length; i += 1) {
  console.log(speakers[i].order)
    displaySpeakers += `<div class="speaker-property desktop-speaker ${speakers[i].order}" >
    <div>
    <img src="${speakers[i].checkerImage}" class="checker-image" alt="checker-image">
    <img src="${speakers[i].speakerImage}" class="speaker-image" alt="speaker-1-image">
  </div>
  <ul>
      <li class="name speaker-list">${speakers[i].name}</li>
      <li class="title speaker-list">${speakers[i].title}</li>
      <li class="others speaker-list" >${speakers[i].others}</li>
  </ul>
</div>`
document.querySelector(".speaker-container2").innerHTML = displaySpeakers;
}
};
render();
