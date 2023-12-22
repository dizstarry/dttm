document.addEventListener("DOMContentLoaded", function () {
  const calendarElement = document.getElementById("calendar");
  const scheduleContainer = document.getElementById("schedule-container");

 
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const currentDate = new Date();

   renderCalendar(currentDate);

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const calendarElement = document.getElementById("calendar");

    const calendarHTML = `
      <div>
        <h2>${monthNames[month]} ${year}</h2>
        <div class="month">
          <div class="weekday">Sun</div>
          <div class="weekday">Mon</div>
          <div class="weekday">Tue</div>
          <div class="weekday">Wed</div>
          <div class="weekday">Thu</div>
          <div class="weekday">Fri</div>
          <div class="weekday">Sat</div>
          ${renderDays(year, month)}
        </div>
      </div>
    `;

    calendarElement.innerHTML = calendarHTML;

        const dayElements = document.querySelectorAll('.day');
    dayElements.forEach(dayElement => {
      dayElement.addEventListener('click', () => {
      
        const selectedDay = dayElement.innerText;

      
        const isConfirmed = confirm(`Confirm Date for ${monthNames[month]} ${selectedDay}, ${year}?`);

        if (isConfirmed) {
          scheduleContainer.style.display = 'block';
        }
      });
    });
  }

  function renderDays(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    let calendarDaysHTML = '';

    
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDaysHTML += '<div class="day"></div>';
    }

 
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDaysHTML += `<div class="day">${day}</div>`;
    }

    return calendarDaysHTML;
  }
});

function showPopup() {
  const selectedTime = document.getElementById('time-select').value;
  document.getElementById('selected-time').textContent = selectedTime;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function confirmAppointment() {

  closePopup();

  window.location.href = 'https://codepen.io/dizstarry/full/WNmNXda';
}
        
