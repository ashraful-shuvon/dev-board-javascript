document
  .getElementById("card-container")
  .addEventListener("click", function (event) {
    const button = event.target;

    if (button.classList.contains("completed-btn") && !button.disabled) {
      const assignedTask = getInnerText("task");
      const totalCompleted = getInnerText("total-task");

      if (assignedTask <= 0) {
        alert("All task are completed.");
        return;
      }

      const remainingTask = assignedTask - 1;
      const updatedTotalTask = totalCompleted + 1;

      setInnerText("task", remainingTask);
      setInnerText("total-task", updatedTotalTask);

      button.disabled = true;

      alert("Task completed");

      if (assignedTask === 1) {
        alert("All the task have been completed.");
      }
    }
  });
