let addClasses = document.getElementById("add-class");
let removeClasses = document.getElementById("remove-class");
let noClass = document.getElementById("no-class");
let currentElement = document.getElementById("current");
let spanContainer = document.getElementById("span-container");
let span = "";
let text = "";
addClasses.onblur = function (element) {
  if (addClasses.value !== "") {
    noClass.style.display = "none";
    let classList = addClasses.value.split(" ");
    for (i = 0; i < classList.length; i++) {
      if (!currentElement.classList.contains(classList[i])) {
        currentElement.classList.add(classList[i].toLowerCase());
        span = document.createElement("span");
        text = document.createTextNode(classList[i].toLowerCase());
        span.appendChild(text);
        span.className = classList[i].toLowerCase();
        spanContainer.appendChild(span);
      }
    }
    addClasses.value = "";
  }
};

removeClasses.onblur = function (element) {
  if (removeClasses.value !== "") {
    let classList = removeClasses.value.split(" ");
    let spans = document.getElementsByTagName("span");
    for (i = 0; i < classList.length; i++) {
      if (currentElement.classList.contains(classList[i].toLowerCase())) {
        currentElement.classList.remove(classList[i].toLowerCase());
        for (j = 0; j < spans.length; j++) {
          if (spans[j].classList.contains(classList[i].toLowerCase())) {
            spans[j].remove();
          }
        }
      }
    }
    removeClasses.value = "";
  }
  if (currentElement.classList.length === 0) {
    noClass.style.display = "block";
  }
};
