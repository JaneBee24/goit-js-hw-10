import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const dateTimePicker = document.getElementById("datetime-picker");
const startBtn = document.getElementById("start-btn");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let countdownInterval;
let selectedDate = null;

// Инициализация flatpickr
flatpickr(dateTimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const userSelectedDate = selectedDates[0];
        if (userSelectedDate <= new Date()) {
            iziToast.error({
                title: "Error",
                message: "Please choose a date in the future",
                position: "topRight",
            });
            startBtn.disabled = true;
        } else {
            selectedDate = userSelectedDate;
            startBtn.disabled = false;
        }
    },
});

// Запуск таймера
startBtn.addEventListener("click", () => {
    if (!selectedDate) return;

    startBtn.disabled = true;
    dateTimePicker.disabled = true;

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = selectedDate.getTime() - now;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            updateTimerUI(0, 0, 0, 0);
            dateTimePicker.disabled = false;
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeRemaining);
        updateTimerUI(days, hours, minutes, seconds);
    }, 1000);
});

// Функция форматирования времени
function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

// Обновление UI таймера
function updateTimerUI(days, hours, minutes, seconds) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}

// Функция конвертации миллисекунд в дни/часы/минуты/секунды
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
