// Grab elements from the page
const form = document.getElementById("goalForm");
const goalInput = document.getElementById("goalText");
const goalsList = document.getElementById("goals");
const progressCount = document.getElementById("progressCount");

let completedGoals = 0;

// When the form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const goalText = goalInput.value.trim();

  if (goalText === "") return;

// Create the <li> element
const li = document.createElement("li");
li.textContent = goalText;

// Add click-to-complete functionality
li.addEventListener("click", function () {
  li.style.textDecoration = "line-through";
  li.style.color = "gray";
  li.style.cursor = "default";
  li.removeEventListener("click", arguments.callee);
  completedGoals++;
  progressCount.textContent = completedGoals;
});

// Create the delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.style.marginLeft = "10px";
deleteBtn.style.padding = "2px 6px";
deleteBtn.style.border = "none";
deleteBtn.style.backgroundColor = "#ff4d4d";
deleteBtn.style.color = "white";
deleteBtn.style.borderRadius = "4px";
deleteBtn.style.cursor = "pointer";

// Prevent goal completion if delete is clicked
deleteBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // stops the "complete" click from firing
  li.remove();
});

// Add the button to the <li>
li.appendChild(deleteBtn);

// Add the <li> to the goals list
goalsList.appendChild(li);

// Clear the input for next goal
goalInput.value = "";
});

