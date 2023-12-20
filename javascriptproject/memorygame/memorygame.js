const imge = [
  '<img src="./חנוכיה.png" alt="חנוכיה">',
  '<img src="./חנוכיה.png" alt="חנוכיה">',
  '<img src="./חנוכה.jpg" alt="חנוכה">',
  '<img src="./חנוכה.jpg" alt="חנוכה">',
  '<img src="./הורדה.jpg" alt="סופגניה">',
  '<img src="./הורדה.jpg" alt="סופגניה">',
  '<img src="./דמי חנוטכה3.jpg" alt="דמיחנוכה">',
  '<img src="./דמי חנוטכה3.jpg" alt="דמיחנוכה">',
  '<img src="./סביבון.jpg" alt="סביבון">',
  '<img src="./סביבון.jpg" alt="סביבון">',
  '<img src="./כדe.jpg" alt="כד">',
  '<img src="./כדe.jpg" alt="כד">',
  '<img src="./נרות.png" alt="נרות">',
  '<img src="./נרות.png" alt="נרות">',
  '<img src="./מגש-עגוטל-חנוכה.jpg" alt="מגש">',
  '<img src="./מגש-עגוטל-חנוכה.jpg" alt="מגש">',
  '<img src="./happy.jpg" alt="happy">',
  '<img src="./happy.jpg" alt="happy">',
  '<img src="./26.png" alt="imge">',
  '<img src="./26.png" alt="imge">',
];

let randomimge = imge.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < imge.length; i++) {
  let card = document.createElement("div");
  card.className = "item";
  card.innerHTML = randomimge[i];
  card.onclick = function () {
    this.classList.add("open");

    setTimeout(function () {
      const open = document.querySelectorAll(".open");
      if (open.length > 1) {
        if (open[0].innerHTML == open[1].innerHTML) {
          open[0].classList.add("good");
          open[1].classList.add("good");
          open[0].classList.remove("open");
          open[1].classList.remove("open");
        }
        if (document.querySelectorAll(".good").length == imge.length) {
          alert("win! good job");
        } else {
          open[0].classList.remove("open");
          open[1].classList.remove("open");
        }
      }
    }, 500);
  };
  document.querySelector(".game").appendChild(card);
}
