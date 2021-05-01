const colorGrd = () => {
  const page = document.querySelector(".intro");
  const blue = document.querySelector(".blue");
  const red = document.querySelector(".red");
  const green = document.querySelector(".green");
  const pink = document.querySelector(".pink");

  blue.addEventListener("click", () => {
    color("rgb(0, 153, 173)", "rgb(2, 120, 136)");
  });
  red.addEventListener("click", () => {
    color("rgb(220, 20, 60)", "rgb(189, 18, 52)");
  });
  green.addEventListener("click", () => {
    color("rgb(7, 160, 109)", "rgb(6, 126, 86)");
  });
  pink.addEventListener("click", () => {
    color("rgb(219, 111, 129)", "rgb(190, 78, 97)");
  });

  // function color(clr) {
  //   document.body.style.background = clr;
  // }

  // function color(clr, grd) {
  //   page.style.background = `linear-gradient(to bottom right, ${clr}, ${grd})`;
  // }

  function color(clr, grd) {
    page.style.background = `linear-gradient(to bottom right, ${clr} 50%, ${grd} 50%)`;
  }
};

// colorGrd();
const linearGrd = () => {
  const page = document.querySelector(".intro");
  page.addEventListener("click", (e) => {
    if (e.target.classList.contains("blue")) {
      color("rgb(0, 153, 173)", "rgb(2, 120, 136)");
    } else if (e.target.classList.contains("red")) {
      color("rgb(220, 20, 60)", "rgb(189, 18, 52)");
    } else if (e.target.classList.contains("green")) {
      color("rgb(7, 160, 109)", "rgb(6, 126, 86)");
    } else if (e.target.classList.contains("pink")) {
      color("rgb(219, 111, 129)", "rgb(190, 78, 97)");
    }
  });
  function color(clr, grd) {
    page.style.background = `linear-gradient(to bottom right, ${clr} 50%, ${grd} 50%)`;
  }
};

// linearGrd();
const radialGrd = () => {
  const page = document.querySelector(".intro");
  page.addEventListener("click", (e) => {
    if (e.target.classList.contains("blue")) {
      color("rgb(2, 120, 136)", "rgb(0, 153, 173)");
    } else if (e.target.classList.contains("red")) {
      color("rgb(189, 18, 52)", "rgb(220, 20, 60)");
    } else if (e.target.classList.contains("green")) {
      color("rgb(6, 126, 86)", "rgb(7, 160, 109)");
    } else if (e.target.classList.contains("pink")) {
      color("rgb(190, 78, 97)", "rgb(219, 111, 129)");
    }
  });

  function color(clr, grd) {
    page.style.background = `repeating-radial-gradient(
      ${clr},
      ${grd} 50px,
      ${clr} 50px
    )`;
  }
};

radiaGrd();
