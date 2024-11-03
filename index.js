import "./index.css";
import MY_IMAGE from './assets/NXslL.png';

// Создаем элементы
const header = document.createElement("h1");
header.innerText = "I love JavaScript!";

const img = document.createElement("img");
img.src = MY_IMAGE;

// Создаем контейнер и добавляем заголовок и изображение
const container = document.createElement("div");
container.classList.add("container");
container.append(header); // Заголовок добавляется первым
container.append(img); // Изображение добавляется после заголовка

// Добавляем контейнер в body
document.body.append(container);
