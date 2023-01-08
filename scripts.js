const d = document;
const button = d.getElementById("button");
const toasts = d.getElementById("toasts");

const messages = [
  "New notification 1",
  "New notification 2",
  "New notification 3",
  "New notification 4",
];

const types = ["info", "success", "error"];

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};

const createNotification = () => {
  const notification = d.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(getRandomType());

  notification.innerText = getRandomMessage();

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2500);
};

button.addEventListener("click", () => createNotification());
