function addNewWEField() {
  // Create a new textarea element
  let newNode = document.createElement('textarea');

  // Add classes to the new textarea element
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add('mt-2');

  // Set attributes for the new textarea element row wala karo ya na laro chalega
  newNode.setAttribute("rows", 2);
  newNode.setAttribute('placeholder', 'Enter here');

  // Get the parent element where the new element will be inserted
  let weOb = document.getElementById("we");

  // Get the element with the id "weAddButton"
  let weAddButtonOb = document.getElementById("weAddButton");

  // Insert the new textarea element before the "weAddButton" element
  weOb.insertBefore(newNode, weAddButtonOb);
}
//This function can be used to dynamically add new textarea fields to a form or section 
//of a webpage. When called, it creates a new textarea element, sets its attributes and classes, 
//and inserts it into the desired location within the DOM (Document Object Model).  
function addNewAQField() {
  // Create a new textarea element
  let newNode = document.createElement('textarea');

  // Add classes to the new textarea element
  newNode.classList.add('form-control');
  newNode.classList.add('aqField');
  newNode.classList.add('mt-2');

  // Set attributes for the new textarea element ,,row wala karo ya na karo chalega
  newNode.setAttribute("rows", 2);
  newNode.setAttribute('placeholder', 'Enter here');

  // Get the parent element where the new element will be inserted
  let aqOb = document.getElementById("aq");

  // Get the element with the id "aqAddButton"
  let aqAddButtonOb = document.getElementById("aqAddButton");

  // Insert the new textarea element before the "aqAddButton" element
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating resume
function generateResume() {

  //let nameField = document.getElementById("nameField").value;
  //let nameT = document.getElementById("nameT");
  //nameT.innerHTML = nameField;
  document.getElementById("nameT").innerHTML = document.getElementById("nameField").value;
  //direct calling 
  //contact
  document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

  //emailField
  document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

  //addressField
  document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

  //linkedField
  document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

  //leetcodeField
  document.getElementById("leetcodeT").innerHTML = document.getElementById("leetcodeField").value;

  //githubField
  document.getElementById("gitT").innerHTML = document.getElementById("githubField").value;

  //objectiveField
  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

  //weField
  //get element by class name as weField is a class name
  let wes = document.getElementsByClassName("weField");
  let str = "";

  //off loop used here
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //eqField
  let aqs = document.getElementsByClassName('eqField');

  let str1 = "";
  //off loop used here
  for (let e of aqs) {
    str1 = str1 + `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  //code for setting image
  let file=document.getElementById("imgField").files[0];
  console.log(file);
  let reader=new FileReader()
  reader.readAsDataURL(file);
  console.log(reader.result);
  //set the image to template
  reader.onloadend = function (){
    document.getElementById("imgTemplate").src =reader.result;
  };

  document.getElementById('resume-form').style.display = "none";
  document.getElementById('resume-template').style.display = "block";
}

function printResume() {
  window.print();
}