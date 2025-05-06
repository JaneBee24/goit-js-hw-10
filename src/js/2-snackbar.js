import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  if (!delay) {
    iziToast.error({
      title: "⛔",
      message: "Please enter a valid delay!",
    });
    return;
  }

  createPromise(delay, state)
    .then((value) => {
      iziToast.success({
        title: "✅",
        message: `Fulfilled promise in ${value}ms`,
      });
    })
    .catch((value) => {
      iziToast.error({
        title: "❌",
        message: `Rejected promise in ${value}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
