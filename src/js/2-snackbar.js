import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const delayInput = document.querySelector('input[name="delay"]');
    const stateInput = document.querySelector('input[name="state"]:checked');

    const delay = parseInt(delayInput.value);
    const state = stateInput.value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise.then(
      (delay) => {
        showNotification(`✅ Fulfilled promise in ${delay}ms`, 'success');
      },
      (delay) => {
        showNotification(`❌ Rejected promise in ${delay}ms`, 'error');
      }
    );
  });
});

function showNotification(message, type) {
  iziToast[type]({
    title: type === 'success' ? 'Success' : 'Error',
    message: message
  });
}