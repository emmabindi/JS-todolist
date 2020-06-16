/* 
1. Add an input box and a button to your app.
2. When the user clicks the button, make a new todo item appear on the page.
3. Set the input box back to an empty value when a task is added.
4. Show the total number of tasks somewhere.
5. We should be using forms with our input! Wrap your input box and button in a form. Make sure the button is a submit button. You'll need to update your event listener from `on button click` to `on form submit`. Pro tip: preventDefault will be helpful here.
6. We can remove the button. Pressing enter will submit the form.
7. Add some style to make it look similar to what is in the demo above */

const form = document.querySelector('form');
const input = document.querySelector('form input');
const tasks = document.querySelector('#tasks')
const count = document.querySelector('h2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(input.value);
  input.value = '';
})

addTask = (task) => {
  const item = document.createElement('div');
  item.innerText = task;
  tasks.prepend(item);
  count.innerText = tasks.children.length;
}

// let newTask = document.createElement("p");
// newTask.textContent = (whatever they type in....???); form[0].value?
// document.querySelector("p").insertAdjacentElement(newTask);
