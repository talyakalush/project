let date = new Date();
let day = date.getDate();
let years = date.getFullYear();
let Monthe = date.getMonth();
const Today = document.getElementById("today");

function showCalendar() {
  const calTable = document.getElementById("calTable");
  const currentMonthElement = document.getElementById("month");
  currentMonthElement.textContent = `${getMonthName(Monthe)} ${years}`;
  let day = 1;
  let tableContent = "<tr>";
  let dayofMonth = new Date(years, Monthe + 1, 0).getDate();
  tableContent += "<tr>";

  for (let i = 0; i < 7; i++) {
    tableContent += `<td class="week">${theday(i)}</<td>`;
  }
  tableContent += "</tr>";

  for (let i = 0; i < dayofMonth + getStartInDay(); i++) {
    if (i < getStartInDay()) {
      tableContent += "<td></td>";
    } else {
      const eventKey = `${years}-${Monthe + 1}-${day}`;
      const eventData = JSON.parse(localStorage.getItem(eventKey)) || {};
      const eventColor = eventData.color || "";
      const tdClass = eventColor ? "event" : "";
      const tdStyle = eventColor ? `background-color: ${eventColor};` : "";
      const currentDayClass = isCurrentDay(day) ? "current-day" : "";
      const eventContent = eventData.description || "";
      const eventTime = eventData.time || "";

      tableContent += `<td class="${tdClass} ${currentDayClass}" style="${tdStyle}"
                 onclick="openEvent(${day}, '${eventColor}')">${day}${eventContent}${eventTime} </td>`;
      day++;
    }
    if (i % 7 === 6) {
      tableContent += "</tr><tr>";
    }
  }
  tableContent += "</tr>";
  calTable.innerHTML = tableContent;
}

function theday(dayindex) {
  let daysofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return daysofweek[dayindex];
}

function getStartInDay() {
  const firstDayOfMonth = new Date(years, Monthe, 1);
  return firstDayOfMonth.getDay();
}
function getMonthName(monthIndex) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthIndex];
}
showCalendar();

const changeMonth = (change) => {
  Monthe += change;
  showCalendar();

  if (Monthe === -1) {
    Monthe = 11;
    years--;
  } else if (Monthe === 12) {
    Monthe = 0;
    years++;
  }
};
const icons = document.getElementById("icon").children;
Array.from(icons).forEach((icon) => {
  icon.addEventListener("click", () => {
    Monthe = icon.id === "prev" ? Monthe - 1 : Monthe + 1;
    if (Monthe < 0 || Monthe > 11) {
      date = new Date(years, Monthe);
      years = date.getFullYear();
      Monthe = date.getMonth();
    } else {
      date = new Date();
    }
    showCalendar();
  });
});

function TheDay() {
  Today.innerText = `${day} / ${Monthe + 1} / ${years}`;
}
TheDay();

function isCurrentDay(day) {
  const currentDate = new Date();
  return (
    day === currentDate.getDate() &&
    Monthe === currentDate.getMonth() &&
    years === currentDate.getFullYear()
  );
}

function openEvent(day, defaultColor) {
  const open = document.getElementById("box");
  const overlay = document.getElementById("overlay");
  document.getElementById("color").value = defaultColor || "rgb(235, 225, 235)";
  overlay.style.display = "block";
  open.style.display = "block";
  open.dataset.date = `${years}-${Monthe + 1}-${day}`;
}

function closeEvent() {
  const open = document.getElementById("box");
  const overlay = document.getElementById("overlay");
  open.style.display = "none";
  overlay.style.display = "none";
}

function saveEvent() {
  const open = document.getElementById("box");
  const eventKey = open.dataset.date;
  const colorevent = document.getElementById("color").value;
  const eventDescription = document.getElementById("eventDescription").value;
  const eventTime = document.getElementById("eventime").value;

  if (colorevent || eventDescription || eventTime) {
    const eventData = {
      time: eventTime,
      color: colorevent,
      description: eventDescription,
    };

    localStorage.setItem(eventKey, JSON.stringify(eventData));

    showCalendar();
  } else {
    alert("Please fill in at least one field.");
  }
  closeEvent();
  showCalendar();
}

function daletEvent() {
  const open = document.getElementById("box");
  const eventKey = open.dataset.date;
  if (localStorage.getItem(eventKey)) {
    const deltevent = confirm("Are you sure delete event?");
    if (deltevent) {
      localStorage.removeItem(eventKey);
      showCalendar();
      closeEvent();
    }
  } else {
    alert("The event is not deleted");
  }
}

closeEvent();

function addDiv() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    let style = window.getComputedStyle(box);
    if (style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}
addDiv();
function addEvent() {
  const btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", () => {
    let color1 = document.getElementById("color");
    let date1 = document.getElementById("date1");
    let event = document.getElementById("event");

    if (date1 == days) {
      days.date.innerHTML = event;
      event.style.color = color1;
    }
  });
}
addEvent();
