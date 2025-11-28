const text_area = document.getElementById("text-area");
const char_count = document.getElementById("char-count");

const open_button = document.getElementById("show-char-count");
const modal = document.getElementById("additional-info");
const close_modal = document.getElementById("close-modal");

const char_count_modal = document.getElementById("char-count-modal");
const char_count_nows_modal = document.getElementById("char-count-no-whitespace");
const word_count_modal = document.getElementById("word-count");

char_count.textContent = `${text_area.value.length}`;

let observer = new MutationObserver(function() {
  char_count.style.marginInlineStart = (text_area.scrollWidth - 20).toString() + "px";
});

observer.observe(text_area, {
  attributes: true,
  childList: true,
  characterData: true
})

text_area.addEventListener("input", () => {
  char_count.textContent = `${text_area.value.length}`;
  console.log(text_area.scrollWidth)
})

open_button.addEventListener("click", () => {
  showCount();
  modal.showModal();
})

close_modal.addEventListener("click", () => {
  modal.close();
})

function showCount() {
  const source = document.getElementById("text-area").value;
  const charCount = source.length;
  const sourceNoWhitespace = source.replace(/\s/g, "");
  const charCountNoWhitespace = sourceNoWhitespace.length;
  const spaceRemoved = source.trim().split(/\s+/);
  const wordCount = spaceRemoved.length;

  char_count_modal.textContent = charCount;
  char_count_nows_modal.textContent = charCountNoWhitespace;
  word_count_modal.textContent = wordCount;
}