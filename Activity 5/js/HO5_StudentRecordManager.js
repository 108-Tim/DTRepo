function processData() {
  const form = document.getElementById("form-id");
  const submitButton = document.querySelector("button[id=submit-button]");
  const formData = new FormData(form, submitButton);

  form.addEventListener("submit", handleSubmission);

  const table = document.querySelector("table");

  if (!table) {
    createTable(formData);
  }

  addRow(formData);
}

function handleSubmission(event) {
  event.preventDefault();
}

function createTable(formData) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");

  table.appendChild(thead);
  thead.appendChild(headerRow);

  for (const key of formData.keys()) {
    const theader = document.createElement("th");
    const headerTitle = key.split("-").join(" ");

    theader.textContent = headerTitle;
    headerRow.appendChild(theader);
  }

  table.appendChild(tbody);
  document.getElementById("table-wrapper").appendChild(table);
}

function addRow(formData) {
  const tbody = document.querySelector("tbody");
  const dataRow = document.createElement("tr");

  for (const value of formData.values()) {
    const tdata = document.createElement("td");
    const data = value.split("/[ ]+/").join(" ");

    tdata.textContent = titleCase(data);
    dataRow.appendChild(tdata);
  }

  tbody.appendChild(dataRow);
}

function titleCase(str) {
  return str.replace(/\b\w+/g, name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
}