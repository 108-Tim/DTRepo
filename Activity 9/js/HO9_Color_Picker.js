const bg_color = document.getElementById("bg-color-picker");
const para_color = document.getElementById("para-color-picker");
const text_content = document.getElementById("change-text-content");
const web_source = document.getElementById("web-source");

const body = document.querySelector("body");
const p_color_change = document.getElementById("p-color-change");
const image_wrapper = document.getElementById("image-wrapper");

let bg_color_picked;
let para_color_picked;
let image_source_counter = 1;

bg_color.addEventListener('change', (event) => {
  bg_color_picked = event.target.value;
  body.style.backgroundColor = bg_color_picked;
});

para_color.addEventListener('change', (event) => {
  para_color_picked = event.target.value;
  p_color_change.style.color = para_color_picked;
});

function change_text() {
  const p_text_change = document.getElementById("p-text-change");
  p_text_change.textContent = text_content.value;
}

function change_img() {
  image_source_counter = (image_source_counter + 1) % 5;
  image_wrapper.src = `img/acer${image_source_counter}.jpg`;
}

function change_link() {
  if (web_source.value) image_wrapper.src = web_source.value;
}