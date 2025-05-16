// Get page elements
const form = document.getElementById("goalForm");
const goalInput = document.getElementById("goalText");
const goalsList = document.getElementById("goals");
const progressCount = document.getElementById("progressCount");

let completedGoals = 0;

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from refreshing

  const goalText = goalInput.value.trim();
  if (goalText === "") return;

  addGoal(goalText); // call your function
  goalInput.value = ""; // clear the input
});

// This function creates the goal <li> and button
function addGoal(goalText) {
    const li = document.createElement("li");
    li.classList.add("goal-item");
  
    const span = document.createElement("span");
    span.textContent = goalText;
  
    // Complete/Undo Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");
  
    completeBtn.addEventListener("click", () => {
      span.classList.toggle("completed");
  
      const isNowCompleted = span.classList.contains("completed");
  
      completeBtn.textContent = isNowCompleted ? "Undo" : "Complete";
  
      // Update progress count
      completedGoals += isNowCompleted ? 1 : -1;
      progressCount.textContent = completedGoals;
    });
  
    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
  
    deleteBtn.addEventListener("click", () => {
      // If the goal was completed, subtract from progress count
      if (span.classList.contains("completed")) {
        completedGoals--;
        progressCount.textContent = completedGoals;
      }
  
      li.remove(); // Remove the list item
    });
  
    // Add elements to the list item
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    goalsList.appendChild(li);
  }
  

// Dark mode toggle

const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
