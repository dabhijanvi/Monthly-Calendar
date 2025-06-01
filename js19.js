const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  monthYear.innerText = `${monthNames[month]} ${year}`;
  calendarDays.innerHTML = "";

  // Empty slots before the first day
  for (let i = 0; i < firstDayOfMonth; i++) {
    const empty = document.createElement("div");
    calendarDays.appendChild(empty);
  }

  // Days of the month
  for (let i = 1; i <= lastDateOfMonth; i++) {
    const day = document.createElement("div");
    day.innerText = i;
    calendarDays.appendChild(day);
  }
}

prevBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
