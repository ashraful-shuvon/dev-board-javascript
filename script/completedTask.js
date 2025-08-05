document
  .getElementById("card-container")
  .addEventListener("click", function (event) {
    const button = event.target;
    console.log(button);
    if (button.classList.contains("completed-btn") && !button.disabled) {
      const assignedTask = getInnerText("task");
      const totalCompleted = getInnerText("total-task");

      if (assignedTask <= 0) {
        alert("All tasks are completed.");
        return;
      }

      const remainingTask = assignedTask - 1;
      const updatedTotalTask = totalCompleted + 1;

      setInnerText("task", remainingTask);
      setInnerText("total-task", updatedTotalTask);

      button.disabled = true;

      // Activity log section

      let parent = button.parentElement;
      console.log(parent);
      while (parent && !parent.classList.contains("card")) {
        parent = parent.parentElement;
      }

      const title = parent.getElementsByClassName("card-title")[0].innerText;
      //   console.log(title);
      //   for (const title of titles) {
      //     const titleText = title.innerText;
      //   }
      const container = document.getElementById("history-container");
      const p = document.createElement("p");
      p.innerText = `You have successfully added ${title}.`;

      p.className = "bg-blue-50 rounded-lg p-2 m-4 text-sm";
      container.appendChild(p);

      alert("Task completed");

      if (assignedTask === 1) {
        alert("All the task have been completed.");
      }
    }
  });
