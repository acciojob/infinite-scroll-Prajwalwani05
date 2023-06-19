//your code here!
// Get the list element
const list = document.querySelector('infi-list');

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `List Item ${i}`;
  list.appendChild(listItem);
}

// Function to add 2 more list items automatically
function addMoreItems() {
  for (let i = 1; i <= 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List Item ${list.children.length + i}`;
    list.appendChild(listItem);
  }
}

// Event listener to check if user has reached the end of the list
list.addEventListener('scroll', function() {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;
  const clientHeight = list.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    addMoreItems();
  }
});



