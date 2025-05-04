import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  console.log("Создаем промис:", { delay, state }); 

  if (!delay) {
    iziToast.error({ title: "Ошибка", message: "Введите корректную задержку!" });
    return;
  }

  createPromise(delay, state)
    .then((message) => {
      console.log("✅", message);
      iziToast.success({ title: "✅ Успех", message });
    })
    .catch((message) => {
      console.log("❌", message);
      iziToast.error({ title: "❌ Ошибка", message });
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
