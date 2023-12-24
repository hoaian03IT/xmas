const $ = document.querySelector.bind(document);

let fireScreen = document.querySelector(".screen");

let screen_width = window.innerWidth;

let screen_height = window.innerHeight;

let cracker_x = 0,
    cracker_y = 0;

let fireTiming = setInterval(fireStart, 6000);

let fireWorks = document.querySelectorAll(".fireG");

let colors = ["#ff7f00", "#00ddff", "#ff53d1", "#FFFF00", "#FF4500", "#98FB98", "#6A5ACD"];

function fireStart() {
    setInterval(() => {
        fireWorks.forEach((fireWork, i) => {
            let rndColor = Math.floor(Math.random() * colors.length + 1);

            fireWork.classList.remove("fired");
            fireWork.style.color = `${colors[rndColor]}`;

            cracker_x = Math.floor(Math.random() * 2000 + 1);
            cracker_y = Math.floor(Math.random() * 500 + 1);

            fireWork.style.setProperty("--animationDelay", i * 2 + "s");
            fireWork.style.top = cracker_y + "px";
            fireWork.style.left = cracker_x + "px";

            setTimeout(() => {
                fireWork.classList.add("fired");
            }, 1);
        });
    }, 1000);
}

fireStart();

// --- star
let lights = document.querySelectorAll(".light");
let light1s = document.querySelectorAll(".light1");

const colorLight = ["#FF0000", "#FFF200"];

randomLight();

function randomLight() {
    setInterval(() => {
        lights.forEach((light, i) => {
            const rnd = Math.floor(Math.random() * (2 - 0) + 0);
            light.style.color = rnd % 2 ? colorLight[0] : colorLight[1];
        });
    }, 400);
    setInterval(() => {
        light1s.forEach((light, i) => {
            const rnd = Math.floor(Math.random() * (2 - 0) + 0);
            light.style.color = rnd % 2 ? colorLight[0] : colorLight[1];
        });
    }, 400);
    light1s.forEach((light, i) => {
        light.style.color = i % 2 ? colorLight[0] : colorLight[1];
    });
}

function textRun() {
    const chars = document.querySelectorAll(".char");
    setInterval(() => {
        chars.forEach((char) => {
            let rndColor = Math.floor(Math.random() * colors.length + 1);
            char.style.color = colors[rndColor];
        });
    }, 1000);
}

textRun();

let handler;

const hearts = document.querySelectorAll(".heart");
function heartUp() {
    handler = setInterval(() => {
        hearts.forEach((heart) => {
            let randX = Math.floor(Math.random() * (3 - 0) - 1);
            let randY = Math.floor(Math.random() * (2 - 0) + 0);
            heart.style.top = heart.offsetTop - randY + "px";
            heart.style.left = heart.offsetLeft + randX + "px";
            if (heart.offsetTop < -400) {
                heart.style.top = "0px";
            }

            if (heart.offsetLeft > 100 || heart.offsetLeft < 0) {
                heart.style.left = "50%";
            }
        });
    });
}

$(".gift").onmouseover = () => {
    hearts.forEach((heart) => {
        heart.style.top = "0px";
        heart.style.transform = "scale(1)";
    });
    heartUp();
};
$(".gift").onmouseout = () => {
    console.log(handler);
    hearts.forEach((heart) => {
        heart.style.top = "0px";
        heart.style.transform = "scale(0)";
    });
    clearInterval(handler);
};

const img = document.createElement("img");
const modal = document.createElement("div");
let i = 0;
$(".gift").onclick = () => {
    document.body.appendChild(modal);
    if (i === 0) {
        modal.classList.add("modal");
        modal.appendChild(img);
        img.src = "./money.png";
        i++;
    } else if (i === 1) {
        modal.classList.add("modal");
        modal.appendChild(img);
        img.src = "./banhkeo.png";
        i++;
    } else if (i === 2) {
        modal.classList.add("modal");
        modal.appendChild(img);
        img.src = "./xemay.png";
        i++;
    } else if (i === 3) {
        modal.textContent = "Merry XMas❤️";
        text.textContent = `Hết quà rùi😢`;
        i++;
    } else {
        modal.textContent = "Hết quà rồi còn cố mở😁";
    }
    $(".fade").style.display = "block";
};
const text = $(".gift .text");

$(".fade").onclick = function () {
    modal.remove();
    this.style.display = "none";
    if (i < 4) text.textContent = `Còn ${4 - i} món quà đang chờ đợi`;
};
