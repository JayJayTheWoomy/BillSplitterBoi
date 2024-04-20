// Get elements
const nameInput = document.getElementById('nameInput');
const nameList = document.getElementById('nameList');
const continueBtn = document.getElementById('continueBtn');

// Array to store names
let names = [];

// Function to add a name to the list
function addName() {
  const newName = nameInput.value.trim();
  if (newName !== '') {
    names.push(newName);
    renderNames();
    nameInput.value = '';
    continueBtn.disabled = names.length < 2;
  }
}

// Function to remove a name from the list
function removeName(index) {
  names.splice(index, 1);
  renderNames();
  continueBtn.disabled = names.length < 2;
}

// Function to render the list of names
function renderNames() {
  nameList.innerHTML = '';
  names.forEach((name, index) => {
    const li = document.createElement('li');
    li.textContent = name;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeName(index));
    li.appendChild(removeBtn);
    nameList.appendChild(li);
  });
}

// Function to continue to the next page
function continueToNextPage() {
  window.location.href = 'second_page.html'; // Replace with the path to your second page
}