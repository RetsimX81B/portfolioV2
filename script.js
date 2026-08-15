const projects = [

    {
        title: "BFL MotoGP",
        cat: "logo",
        year: "2026",
        desc: "Visual identity for an online MotoGP championship.",
        images: [
            "bfl motogp.png"
        ]
    },

    {
        title: "BFL SBK",
        cat: "logo",
        year: "2026",
        desc: "A complementary Superbike identity built as part of the BFL visual system.",
        images: [
            "bfl sbk.png"
        ]
    },

    {
        title: "Motorsport Poster",
        cat: "poster",
        year: "2026",
        desc: "Editorial motorsport poster exploring speed, typography and contrast.",
        images: [
            "poster aprilia.png"
        ]
    },

    {
        title: "Lando Norris",
        cat: "motorsport",
        year: "2026",
        desc: "Motorsport digital artwork.",
        images: [
            "landowallpaper.jpg"
        ]
    },

    {
        title: "Traditional Studies",
        cat: "traditional",
        year: "2026",
        desc: "Traditional drawing and observational studies.",
        images: [
            "lando head copie.png",
            "images/traditional-2.jpg"
        ]
    },

    {
        title: "Digital Illustration",
        cat: "digital",
        year: "2026",
        desc: "Personal digital illustration project.",
        images: [
            "dorine_draw copie.jpg"
        ]
    },

    {
        title: "Gym Identity",
        cat: "logo",
        year: "2026",
        desc: "Logo and visual identity exploration for a gym project.",
        images: [
            "logo_gym_V1-blanc-rond.jpg"
        ]
    },

    {
        title: "Experimental Poster",
        cat: "poster",
        year: "2026",
        desc: "Graphic experiment combining typography and imagery.",
        images: [
            "poster leclerc.png"
        ]
    },

    {
        title: "Sketchbook",
        cat: "traditional",
        year: "2026",
        desc: "Selected traditional artwork and sketches.",
        images: [
            "gracie.png"
        ]
    },

    {
        title: "Visual Experiment",
        cat: "other",
        year: "2026",
        desc: "An experimental visual composition.",
        images: [
            "BANNIERE copie.png"
        ]
    }

];


// =========================
// PROJECT GRID
// =========================

const grid = document.querySelector("#projects");


function render(filter = "all") {

    grid.innerHTML = "";

    projects
        .filter(
            p => filter === "all" || p.cat === filter
        )
        .forEach((p, i) => {

            const el = document.createElement("article");

            el.className = "project reveal visible";

            el.innerHTML = `
                <img
                    src="${p.images[0]}"
                    alt="${p.title}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.classList.add('missing');
                    "
                >

                <div class="project-info">

                    <small>
                        ${p.cat} · ${p.year}
                    </small>

                    <h3>
                        ${p.title}
                    </h3>

                </div>
            `;

            el.onclick = () => openModal(p);

            grid.appendChild(el);
        });
}


render();


// =========================
// FILTERS
// =========================

document
    .querySelectorAll(".filters button")
    .forEach(button => {

        button.onclick = () => {

            document
                .querySelector(".filters .active")
                .classList.remove("active");

            button.classList.add("active");

            render(button.dataset.filter);
        };

    });


// =========================
// MODAL
// =========================

const modal = document.querySelector("#modal");

const modalImg = document.querySelector("#modal-img");

const title = document.querySelector("#modal-title");

const cat = document.querySelector("#modal-cat");

const desc = document.querySelector("#modal-desc");

const thumbs = document.querySelector("#modal-thumbs");


let current = null;

let index = 0;


// =========================
// OPEN MODAL
// =========================

function openModal(p) {

    current = p;

    index = 0;

    modal.classList.add("open");

    document.body.style.overflow = "hidden";

    updateModal();
}


// =========================
// UPDATE MODAL
// =========================

function updateModal() {

    modalImg.src = current.images[index];

    title.textContent = current.title;

    cat.textContent =
        `${current.cat} · ${current.year}`;

    desc.textContent = current.desc;

    thumbs.innerHTML = "";


    current.images.forEach((src, i) => {

        const im = document.createElement("img");

        im.src = src;

        im.className =
            i === index
                ? "active"
                : "";


        im.onclick = () => {

            index = i;

            updateModal();

        };


        thumbs.appendChild(im);

    });

}


// =========================
// CLOSE MODAL
// =========================

function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";
}


document
    .querySelector(".close")
    .onclick = closeModal;


// =========================
// PREVIOUS / NEXT
// =========================

document
    .querySelector(".prev")
    .onclick = () => {

        if (current) {

            index =
                (index - 1 + current.images.length)
                % current.images.length;

            updateModal();

        }

    };


document
    .querySelector(".next")
    .onclick = () => {

        if (current) {

            index =
                (index + 1)
                % current.images.length;

            updateModal();

        }

    };


// =========================
// KEYBOARD NAVIGATION
// =========================

document.addEventListener(
    "keydown",
    e => {

        if (!modal.classList.contains("open")) {
            return;
        }

        if (e.key === "Escape") {
            closeModal();
        }

        if (e.key === "ArrowLeft") {
            document.querySelector(".prev").click();
        }

        if (e.key === "ArrowRight") {
            document.querySelector(".next").click();
        }

    }
);


// =========================
// CLICK OUTSIDE MODAL
// =========================

modal.onclick = e => {

    if (e.target === modal) {
        closeModal();
    }

};


// =========================
// MOBILE MENU
// =========================

const menu = document.querySelector("#menu");

const mobile =
    document.querySelector(".mobile-nav");


menu.onclick = () => {

    mobile.classList.toggle("open");

};


mobile
    .querySelectorAll("a")
    .forEach(a => {

        a.onclick = () => {

            mobile.classList.remove("open");

        };

    });


// =========================
// LANGUAGE BUTTON
// =========================

const lang = document.querySelector("#lang");


lang.onclick = () => {

    document.documentElement.lang =
        document.documentElement.lang === "en"
            ? "fr"
            : "en";


    lang.textContent =
        document.documentElement.lang === "en"
            ? "FR"
            : "EN";

};


// =========================
// MOUSE LIGHT / CURSOR
// =========================

const light =
    document.querySelector(".mouse-light");

const cursor =
    document.querySelector(".cursor");

const dot =
    document.querySelector(".cursor-dot");


window.addEventListener(
    "mousemove",
    e => {

        light.style.left =
            e.clientX + "px";

        light.style.top =
            e.clientY + "px";


        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";


        dot.style.left =
            e.clientX + "px";

        dot.style.top =
            e.clientY + "px";

    }
);


// =========================
// CURSOR HOVER EFFECT
// =========================

document
    .querySelectorAll("a, button, .project")
    .forEach(el => {

        el.addEventListener(
            "mouseenter",
            () => {

                cursor.style.width = "55px";

                cursor.style.height = "55px";

            }
        );


        el.addEventListener(
            "mouseleave",
            () => {

                cursor.style.width = "34px";

                cursor.style.height = "34px";

            }
        );

    });


// =========================
// SCROLL REVEAL
// =========================

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(e => {

                if (e.isIntersecting) {

                    e.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(el => {

        observer.observe(el);

    });