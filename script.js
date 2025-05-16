// Grab elements from the page
const form = document.getElementById("goalForm");
const goalInput = document.getElementById("goalText");
const goalsList = document.getElementById("goals");
const progressCount = document.getElementById("progressCount");

let completedGoals = 0;

// Function to add a new goal
function addGoal(goalText) {
  const li = document.createElement("li");
  li.classList.add("goal-item");

  const span = document.createElement("span");
  span.textContent = goalText;

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("complete-btn");

  completeButton.addEventListener("click", () => {
    span.classList.toggle("completed");
    if (span.classList.contains("completed")) {
      completeButton.textContent = "Completed";
      completedGoals++;
    } else {
      completeButton.textContent = "Complete";
      completedGoals--;
    }
    progressCount.textContent = completedGoals;
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");

  deleteButton.addEventListener("click", () => {
    if (span.classList.contains("completed")) {
      completedGoals--;
      progressCount.textContent = completedGoals;
    }
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  goalsList.appendChild(li);
}

// When the form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const goalText = goalInput.value.trim();

  if (goalText === "") return;

  addGoal(goalText);
  goalInput.value = "";
});

// Dark mode toggle
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference to localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});

// Load saved preference
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
