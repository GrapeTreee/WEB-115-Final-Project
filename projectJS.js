document.getElementById("btn").addEventListener("click",function() {
    const mon = ["monbrf", "monsn1", "monlun", "monsn2", "mondin"]
    const tue = ["tuebrf", "tuesn1", "tuelun", "tuesn2", "tuedin"]
    const wed = ["wedbrf", "wedsn1", "wedlun", "wedsn2", "weddin"]
    const thu = ["thubrf", "thusn1", "thulun", "thusn2", "thudin"]
    const fri = ["fribrf", "frisn1", "frilun", "frisn2", "fridin"]
    const sat = ["satbrf", "satsn1", "satlun", "satsn2", "satdin"]
    const sun = ["sunbrf", "sunsn1", "sunlun", "sunsn2", "sundin"]
    let tableContent = "<tr><td></td><td>Breakfast</td><td>Snack</td><td>Lunch</td><td>Snack</td><td>Dinner</td><tr>"
    const days = [mon, tue, wed, thu, fri, sat, sun]
    const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    for (let day = 0; day < days.length; day++) {
        tableContent += "<td>" + dayName[day] + "</td>"
        for (let i = 0; i < days[day].length; i++) {
            tableContent += "<td>" + document.getElementById(days[day][i]).value + "</td><br>"  
        }
        tableContent += "</tr>"
    }
    document.getElementById("planner").innerHTML = tableContent + "</tr>"
})
document.getElementById("clr").addEventListener("click",function() {
    document.getElementById("planner").innerHTML = "<tr></tr>"
    })

document.getElementById("myButton").addEventListener('click',myWindow)
function myWindow()
{
    visitorName = document.getElementById("myInput").value;
    myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    myText += ("Hello " + visitorName);
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    flyWindow.document.write(myText);
}
//add event listener and funtion that uses innerHTML to display meal plan form in a table


//add event listener for clearing meal plan table from 'clear meal plan' button

/*function replaceTable() {
    const old_tbody = document.getElementById('tableBody')
    const new_tbody = document.createElement('tbody');
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
  }*/
