function createInputFields() {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var meals = ["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner"];

  for (var i = 0; i < days.length; i++) {
    var dayLabel = document.createElement("label");
    dayLabel.textContent = `${days[i]}:`;

    document.getElementById("mealPlanForm").appendChild(dayLabel);

    for (var j = 0; j < meals.length; j++) {
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("id", days[i] + meals[j]);
      input.setAttribute("name", days[i] + "[]");
      input.setAttribute("required", "true");
      input.setAttribute("placeholder", meals[j]);

      document.getElementById("mealPlanForm").appendChild(input);
    }

    document
      .getElementById("mealPlanForm")
      .appendChild(document.createElement("br"));
  }
}

createInputFields();

function generateMealPlan() {
  var emailInput = document.getElementById("email");
  var isEmailValid = validateEmail(emailInput.value);

  if (!isEmailValid) {
    alert("Please enter a valid email address.");
    return;
  }

  var name = document.getElementById("name").value;
  var goal = document.getElementById("goal").value;
  
    var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    var mealPlan = {};
  
    for (var i = 0; i < days.length; i++) {
      mealPlan[days[i]] = getDayMeals(days[i]);
    }
  
    var mealPlanWindow = window.open("", "_blank");
  
    mealPlanWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Meal Plan</title>
              <style>
                  body {
                      font-family: monospace;
                  }
                  table {
                      border-collapse: collapse;
                      width: 100%;
                  }
        
                  th, td {
                      text-align: left;
                      padding: 8px;
                      font-size: 15px;
                  }
        
                  tr:nth-child(even) {
                      background-color: #D6EEEE;
                }
              </style>
          </head>
          <body>
              <h1>Weekly Meal Plan for ${name}</h1>
              <p>Weekly Goal: ${goal}</p>
              <table>
              <tr><td></td><td>Breakfast</td><td>Snack</td><td>Lunch</td><td>Snack</td><td>Dinner</td><tr>
              ${generateMealList(mealPlan)}
              </table>
              <button onclick="window.print()">Print this page</button>
          </body>
          </html>
      `);
  
    function getDayMeals(day) {
      var meals = [];
      var mealInputs = document.getElementsByName(day + "[]");
      for (var i = 0; i < mealInputs.length; i++) {
        meals.push(mealInputs[i].value);
      }
      return meals;
    }
  }
  
  function generateMealList(mealPlan) {
    var mealList = "";
    var days = Object.keys(mealPlan);
    var meals = ["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner"];
  
    for (var i = 0; i < days.length; i++) {
      mealList += `<tr><td>${days[i]}</td>`;
  
      for (var j = 0; j < mealPlan[days[i]].length; j++) {
        mealList += `<td>${meals[j]}: ${mealPlan[days[i]][j]}</td>`;
      }
  
      // Add line break after each day to make sure they each have their own line
      mealList += "</tr>";
    }
  
    return mealList;
  }
  
  function clearForm() {
    document.getElementById("mealPlanForm").reset();
  }
  
  function printOrDownload() {
    // have to look into print/download...
  }
  
  function validateEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      return false;
    }
    return true;
  }