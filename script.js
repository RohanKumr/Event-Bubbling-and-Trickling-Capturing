console.clear();
const grandParents = document.getElementsByClassName("grand-parent");
const parents = document.getElementsByClassName("parent");
const children = document.getElementsByClassName("child");
const lists = document.getElementsByClassName("list");
const clearAll = document.getElementsByClassName("clear");
const colors = {
  gp: "#827397",
  p: "#4d4c7d",
  c: "#363062",
  r: "#ff7070",
  w: "#ffffff",
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function removeFirstChild(parent) {
  const totalChildren = parent.childElementCount;
  if (totalChildren > 2) {
    parent.firstChild.style.background = colors.r;
    parent.firstChild.style.color = colors.w;
    parent.firstChild.style.transitionDuration = "0";
    setTimeout(() => {
      parent.removeChild(parent.firstChild);
    }, 600);
  }
}

const clearList = (ind) => {
  removeAllChildNodes(lists[ind]);
};
function createElement(name, ind) {
  removeFirstChild(lists[ind]);
  const li = document.createElement("li");
  li.innerHTML = name;

  lists[ind].append(li);

  const lastChild = lists[ind].lastChild;
  lastChild.style.color = colors.w;
  switch (name) {
    case "grandparent":
      lastChild.style.background = colors.gp;
      break;
    case "parent":
      lastChild.style.background = colors.p;
      break;
    case "child":
      lastChild.style.background = colors.c;
      break;
    default:
      lastChild.style.background = "white";
      break;
  }

  setTimeout(() => {
    lastChild.style.background = "transparent";
    lastChild.style.color = "black";
    lastChild.style.transitionDuration = "0.4s";
  }, 1000);
}

function bubbling() {
  let c = false;
  let ind = 0;
  grandParents[0].addEventListener(
    "click",
    () => createElement("grandparent", ind),
    c
  );
  parents[0].addEventListener("click", () => createElement("parent", ind), c);
  children[0].addEventListener("click", () => createElement("child", ind), c);
}
function capturing() {
  let c = true;
  let ind = 1;
  grandParents[1].addEventListener(
    "click",
    () => createElement("grandparent", ind),
    c
  );
  parents[1].addEventListener("click", () => createElement("parent", ind), c);
  children[1].addEventListener("click", () => createElement("child", ind), c);
}

bubbling();
capturing();

for (let index = 0; index < 2; index++) {
  clearAll[index].addEventListener("click", () => {
    clearList(index);
  });
}
