let newX = 0,
  newY,
  startX = 0,
  startY = 0;

const movcard = document.getElementsByClassName("dragCard")[0];

const homeImage = document.getElementsByClassName("homePic")[0];

if (movcard) {
  movcard.addEventListener("mousedown", mouseDown);
}

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

function changeTheme() {
  audio = document.querySelector("audio");
  if (audio) {
    audio.volume = 0.05;
    audio.play();
  }

  curr = document.querySelector("body");
  let currTheme = document.querySelector("#darkbackground");
  let currBox = document.querySelector("#darksquare");
  let navButtons = document.getElementsByClassName("navButton");

  if (curr.id == "darkbackground") {
    currTheme.id = "lightbackground";
    currBox.id = "lightsquare";

    for (let navButton of navButtons) {
      navButton.style.border = "3px solid black";
    }
  } else {
    let currTheme = document.querySelector("#lightbackground");
    let currBox = document.querySelector("#lightsquare");

    currTheme.id = "darkbackground";
    currBox.id = "darksquare";

    for (let navButton of navButtons) {
      navButton.style.border = "3px solid white";
    }
  }
}

function showButton() {
  const card = document.getElementsByClassName("dragCard")[0];

  if (card) {
    card.style.pointerEvents = "auto";
    card.style.opacity = "1";
  }
}

function hideButton() {
  const card = document.getElementsByClassName("dragCard")[0];

  if (card) {
    card.style.pointerEvents = "none";
    card.style.opacity = "0";
  }
}

function mouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  movcard.style.top = movcard.offsetTop - newY + "px";
  movcard.style.left = movcard.offsetLeft - newX + "px";
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
}

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

document.getElementById("gardenMap").addEventListener("click", function (event) {
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

document.getElementById("counterMap").addEventListener("click", function (event) {
  event.preventDefault();

  const card = document.getElementById("counterCard");

  if (card) {
    card.style.display = "grid";
  }

  event.stopPropagation();
});

document.getElementById("kitchenMap").addEventListener("click", function (event) {
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
  
  if(garden && table && counter) {
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
    if (e.target != kitchen)
      kitchen.style.display = "none";
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

window.onload = resizeAreas


