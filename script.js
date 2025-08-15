let newX = 0,
  newY,
  startX = 0,
  startY = 0;
let activeCard = null;

const movcards = document.getElementsByClassName("dragCard");

const homeImage = document.getElementsByClassName("homePic")[0];

for (let card of movcards) {
  card.addEventListener("mousedown", mouseDown);
  let collide = card.getBoundingClientRect();
}

// Moving Box //

function mouseDown(e) {
  activeCard = e.target;
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  if (!activeCard) {return;}
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  activeCard.style.top = activeCard.offsetTop - newY + "px";
  activeCard.style.left = activeCard.offsetLeft - newX + "px";
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
  activeCard = null;
}


 // Resizing Areas //
function resizeAreas() {
  const areas = document.querySelectorAll("area");
  const widthRatio = homeImage.offsetWidth / homeImage.naturalWidth;
  const heightRatio = homeImage.offsetHeight / homeImage.naturalHeight;

  areas.forEach((area) => {
    const coords = area.dataset.coords.split(",").map(Number);
    const newCoords = coords.map((coord, index) => {
      return index % 2 === 0
        ? Math.round(coord * widthRatio)
        : Math.round(coord * heightRatio);
    });
    area.coords = newCoords.join(",");
  });
}

// Theme Change //
function changeTheme() {
  audio = document.querySelector("audio");
  if (audio) {
    audio.volume = 0.05;
    audio.play();
  }

  const currTheme = document.querySelector("#darkbackground") || document.querySelector("#lightbackground");
    const currBut = document.querySelector("#Dpagebutton") || document.querySelector("#Lpagebutton");
  const dragCards = document.getElementsByClassName("dragCard");
  const navButtons = document.getElementsByClassName("navButton");

  if (currTheme && currTheme.id === "darkbackground") {
    currTheme.id = "lightbackground";
    currBut.id = "Lpagebutton";

    for (let navButton of navButtons) {
      navButton.style.border = "3px solid black";
    }

    for (let dragCard of dragCards) {
      dragCard.style.border = "3px solid black";
      dragCard.style.backgroundColor = "rgba(84, 205, 241, 1)";
    }

  } else if (currTheme && currTheme.id === "lightbackground") {
    currTheme.id = "darkbackground";
    currBut.id = "Dpagebutton";

    for (let navButton of navButtons) {
      navButton.style.border = "3px solid white";
    }

    for (let dragCard of dragCards) {
      dragCard.style.border = "3px solid white";
      dragCard.style.backgroundColor = "rgba(250, 150, 29, 1)";
    }
  }
}
// Housing //

document.getElementById("bookMap").addEventListener("click", function (event) {
  event.preventDefault();

  const card = document.getElementById("bookCard");

  if (card) {
    card.style.display = "grid";
  }

  event.stopPropagation();
});

document.getElementById("wallMap").addEventListener("click", function (event) {
  event.preventDefault();

  const card = document.getElementById("wallCard");

  if (card) {
    card.style.display = "grid";
  }

  event.stopPropagation();
});

document.getElementById("skyMap").addEventListener("click", function (event) {
  event.preventDefault();

  const card = document.getElementById("skyCard");

  if (card) {
    card.style.display = "grid";
  }

  event.stopPropagation();
});

document
  .getElementById("gardenMap")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const card = document.getElementById("gardenCard");

    if (card) {
      card.style.display = "grid";
    }

    event.stopPropagation();
  });

document.getElementById("tableMap").addEventListener("click", function (event) {
  event.preventDefault();

  const card = document.getElementById("tableCard");

  if (card) {
    card.style.display = "grid";
  }

  event.stopPropagation();
});

document
  .getElementById("counterMap")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const card = document.getElementById("counterCard");

    if (card) {
      card.style.display = "grid";
    }

    event.stopPropagation();
  });

document
  .getElementById("kitchenMap")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const card = document.getElementById("kitchenCard");

    if (card) {
      card.style.display = "grid";
    }

    event.stopPropagation();
  });

document.addEventListener("click", function (e) {
  book = document.getElementById("bookCard");
  sky = document.getElementById("skyCard");
  wall = document.getElementById("wallCard");
  garden = document.getElementById("gardenCard");
  table = document.getElementById("tableCard");
  counter = document.getElementById("counterCard");
  kitchen = document.getElementById("kitchenCard");

  if (book && sky && wall) {
    if (e.target != book) {
      book.style.display = "none";
    }

    if (e.target != sky) {
      sky.style.display = "none";
    }

    if (e.target != wall) {
      wall.style.display = "none";
    }
  }

  if (garden && table && counter) {
    if (e.target != garden) {
      garden.style.display = "none";
    }

    if (e.target != table) {
      table.style.display = "none";
    }

    if (e.target != counter) {
      counter.style.display = "none";
    }
  }

  if (kitchen) {
    if (e.target != kitchen) kitchen.style.display = "none";
  }
});

document.getElementById("apt").addEventListener("click", function (event) {
  homeImage.src = "HomePics/ffxiv_04102023_231534_130.png";
  homeImage.useMap = "#apt-map";
  homeImage.onload = resizeAreas;
});

document.getElementById("cafe").addEventListener("click", function (event) {
  homeImage.src = "HomePics/ffxiv_01292023_012335_889.png";
  homeImage.useMap = "#cafe-map";
  homeImage.onload = resizeAreas;
});

document.getElementById("base").addEventListener("click", function (event) {
  homeImage.src = "HomePics/ffxiv_01292023_012707_813.png";
  homeImage.useMap = "#base-map";
  homeImage.onload = resizeAreas;
});

window.addEventListener("resize", resizeAreas);

window.onload = resizeAreas;
