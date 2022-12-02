const body = document.body;
body.setAttribute(
    "style",
    "display:flex"
)

const humburger = document.createElement("div");
humburger.classList.add("humburger_menu");
body.appendChild(humburger);

humburger.setAttribute(
    "style",
    "margin-top:20px; margin-left:30px; display:inline-block; vertical-align:top; margin-right: 10px; cursor:pointer"
);

const humburgerItemOne = document.createElement("span");
humburgerItemOne.classList.add("humburger_item_one");
humburger.appendChild(humburgerItemOne);

const colorItemOne = document.querySelector(".humburger_item_one");
colorItemOne.setAttribute(
    "style",
    "background-color: blue; width: 30px; height: 4px; margin-bottom:3px; display:block"
);

const humburgerItemTwo = document.createElement("span");
humburgerItemTwo.classList.add("humburger_item_two");
humburger.appendChild(humburgerItemTwo);

const colorItemTwo = document.querySelector(".humburger_item_two");
colorItemTwo.setAttribute(
    "style",
    "background-color: blue; width: 30px; height: 4px; margin-bottom:3px; display:block"
);

const humburgerItemThree = document.createElement("span");
humburgerItemThree.classList.add("humburger_item_three");
humburger.appendChild(humburgerItemThree);

const colorItemThree = document.querySelector(".humburger_item_three");
colorItemThree.setAttribute(
    "style",
    "background-color: blue; width: 30px; height: 4px; margin-bottom:3px; display:block"
);


const humburgerList = document.querySelector("ul");
humburgerList.classList.add("list_menu");
humburgerList.setAttribute(
    "style",
    "list-style:none; cursor:pointer; color:blue; font-size:20px; width: 170px; height:180px; border-radius:10px; background-color: lightblue; padding-top:10px; margin-left:25px; display:none"
);

humburger.insertAdjacentElement("afterend", humburgerList);

humburger.addEventListener("click", function () {
    humburgerList.style.display = "block";
});

const item = document.querySelector("li");
item.classList.add("criss_cross");
item.setAttribute(
    "style",
    "color: red; padding-bottom:13px"
);

const itemOne = document.querySelectorAll("li");
itemOne[1].setAttribute(
    "style",
    "padding-bottom:7px"
);

const itemTwo = document.querySelectorAll("li");
itemTwo[2].setAttribute(
    "style",
    "padding-bottom:7px"
);

const itemThree = document.querySelectorAll("li");
itemThree[3].setAttribute(
    "style",
    "padding-bottom:7px"
);

const itemLink = document.querySelector("a");
itemLink.classList.add("link");
itemLink.setAttribute(
    "style",
    "text-decoration:none; color: blue"
)

item.addEventListener("click", function () {
    humburgerList.style.display = "none";
});



