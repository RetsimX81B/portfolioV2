

const projects = [

    {
        title: {
            en: "BFL MotoGP",
            fr: "BFL MotoGP"
        },

        cat: "logo",

        year: "2026",

        desc: {
            en: "Visual identity for an online MotoGP championship.",
            fr: "Identité visuelle pour un championnat MotoGP en ligne."
        },

        images: [
            "bfl motogp.png"
        ]
    },


    {
        title: {
            en: "BFL SBK",
            fr: "BFL SBK"
        },

        cat: "logo",

        year: "2026",

        desc: {
            en: "A complementary Superbike identity built as part of the BFL visual system.",
            fr: "Une identité Superbike complémentaire créée dans le cadre du système visuel BFL."
        },

        images: [
            "bfl sbk.png"
        ]
    },


    {
        title: {
            en: "Motorsport Poster",
            fr: "Affiche Motorsport"
        },

        cat: "poster",

        year: "2026",

        desc: {
            en: "Editorial motorsport poster exploring speed, typography and contrast.",
            fr: "Affiche éditoriale autour du motorsport explorant la vitesse, la typographie et le contraste."
        },

        images: [
            "poster aprilia.png"
        ]
    },


    {
        title: {
            en: "Lando Norris",
            fr: "Lando Norris"
        },

        cat: "motorsport",

        year: "2026",

        desc: {
            en: "Motorsport digital artwork.",
            fr: "Illustration digitale autour du motorsport."
        },

        images: [
            "lando head copie.png"
        ]
    },


    {
        title: {
            en: "Traditional Studies",
            fr: "Études Traditionnelles"
        },

        cat: "traditional",

        year: "2026",

        desc: {
            en: "Traditional drawing and observational studies.",
            fr: "Dessins traditionnels et études d'observation."
        },

        images: [
            "gracie.png",
            "ollie.png"
        ]
    },


    {
        title: {
            en: "Digital Illustration",
            fr: "Illustration Digitale"
        },

        cat: "digital",

        year: "2026",

        desc: {
            en: "Personal digital illustration project.",
            fr: "Projet personnel d'illustration digitale."
        },

        images: [
            "dorine_draw copie.jpg"
        ]
    },


    {
        title: {
            en: "Gym Identity",
            fr: "Identité Gym"
        },

        cat: "logo",

        year: "2026",

        desc: {
            en: "Logo and visual identity exploration for a gym project.",
            fr: "Recherche de logo et d'identité visuelle pour un projet lié au sport."
        },

        images: [
            "logo_gym_V1-blanc-rond.jpg"
        ]
    },


    {
        title: {
            en: "Experimental Poster",
            fr: "Affiche Expérimentale"
        },

        cat: "poster",

        year: "2026",

        desc: {
            en: "Graphic experiment combining typography and imagery.",
            fr: "Expérimentation graphique combinant typographie et image."
        },

        images: [
            "poster leclerc.png"
        ]
    },


    {
        title: {
            en: "Sketchbook",
            fr: "Carnet de Croquis"
        },

        cat: "traditional",

        year: "2026",

        desc: {
            en: "Selected traditional artwork and sketches.",
            fr: "Sélection de dessins et travaux réalisés traditionnellement."
        },

        images: [
            "mandalorian.png"
        ]
    },


    {
        title: {
            en: "Visual Experiment",
            fr: "Expérimentation Visuelle"
        },

        cat: "other",

        year: "2026",

        desc: {
            en: "An experimental visual composition.",
            fr: "Une composition visuelle expérimentale."
        },

        images: [
            "BANNIERE copie.png"
        ]
    }

];


// ==========================================
// LANGUAGE
// ==========================================

let currentLanguage = "en";


const translations = {

    en: {

        navWork: "Work",
        navAbout: "About",
        navContact: "Contact",

        mobileWork: "Work",
        mobileAbout: "About",
        mobileContact: "Contact",

        eyebrow: "GRAPHIC DESIGNER / VISUAL ARTIST",

        heroCopy:
            "I create bold visual identities, posters, digital art and experimental designs with a strong focus on motorsport and visual storytelling.",

        explore: "Explore work",

        talk: "Let's talk",

        scroll: "SCROLL TO EXPLORE",

        aboutWork: "ABOUT MY WORK",

        introTitle:
            "Design with <em>speed, identity</em><br>and personality.",

        introLead:
            "A multidisciplinary portfolio mixing graphic design, illustration, traditional art and motorsport culture.",

        selectedWork: "Selected work",

        workDescription:
            "Logos, posters, illustrations, traditional studies and visual experiments.",

        aboutLabel: "ABOUT",

        aboutTitle:
            "More than<br><em>just visuals.</em>",

        aboutLead:
            "I'm Alex, a graphic designer and visual artist interested in creating identities that feel distinctive and memorable.",

        aboutText1:
            "My work ranges from logos and brand systems to posters, digital illustrations, traditional drawings and motorsport graphics. ( request a second portfolio via Discord )",

        aboutText2:
            "I like simple shapes, strong typography, movement and clean compositions.",

        contactLabel:
            "HAVE A PROJECT?",

        contactTitle:
            "LET'S MAKE<br><em>SOMETHING.</em>",

        email:
            "discord : retsimxsora",

        footerLeft:
            "ALEX © 2026",

        footerMiddle:
            "GRAPHIC DESIGN / VISUAL ART",

        backTop:
            "BACK TO TOP ↑",

        filters: [
            "All",
            "Logos",
            "Posters",
            "Digital Art",
            "Traditional Art",
            "Motorsport",
            "Other"
        ]

    },


    fr: {

        navWork: "Projets",
        navAbout: "À propos",
        navContact: "Contact",

        mobileWork: "Projets",
        mobileAbout: "À propos",
        mobileContact: "Contact",

        eyebrow: "GRAPHISTE / ARTISTE VISUEL",

        heroCopy:
            "Je crée des identités visuelles fortes, des affiches, des illustrations digitales et des designs expérimentaux, avec un intérêt particulier pour le motorsport et le storytelling visuel.",

        explore: "Voir mes projets",

        talk: "Me contacter",

        scroll: "DÉFILEZ POUR EXPLORER",

        aboutWork: "À PROPOS DE MON TRAVAIL",

        introTitle:
            "Du design avec <em>du mouvement,<br>de l'identité</em> et de la personnalité.",

        introLead:
            "Un portfolio multidisciplinaire mêlant design graphique, illustration, art traditionnel et culture motorsport.",

        selectedWork:
            "Projets sélectionnés",

        workDescription:
            "Logos, affiches, illustrations, dessins traditionnels et expérimentations visuelles.",

        aboutLabel:
            "À PROPOS",

        aboutTitle:
            "Plus que<br><em>des visuels.</em>",

        aboutLead:
            "Je suis Alex, graphiste et artiste visuel, intéressé par la création d'identités distinctives et mémorables.",

        aboutText1:
            "Mon travail va de la création de logos et d'identités visuelles aux affiches, illustrations digitales, dessins traditionnels et visuels liés au motorsport. ( demande deuxième portfolio via discord )",

        aboutText2:
            "J'aime les formes simples, les typographies fortes, le mouvement et les compositions propres.",

        contactLabel:
            "UN PROJET ?",

        contactTitle:
            "CRÉONS<br><em>QUELQUE CHOSE.</em>",

        email:
            "discord : retsimxsora",

        footerLeft:
            "ALEX © 2026",

        footerMiddle:
            "DESIGN GRAPHIQUE / ART VISUEL",

        backTop:
            "RETOUR EN HAUT ↑",

        filters: [
            "Tout",
            "Logos",
            "Affiches",
            "Art Digital",
            "Art Traditionnel",
            "Motorsport",
            "Autre"
        ]

    }

};


// ==========================================
// DOM ELEMENTS
// ==========================================

const grid =
    document.querySelector("#projects");

const modal =
    document.querySelector("#modal");

const modalImg =
    document.querySelector("#modal-img");

const modalTitle =
    document.querySelector("#modal-title");

const modalCat =
    document.querySelector("#modal-cat");

const modalDesc =
    document.querySelector("#modal-desc");

const modalThumbs =
    document.querySelector("#modal-thumbs");

const lang =
    document.querySelector("#lang");

const menu =
    document.querySelector("#menu");

const mobile =
    document.querySelector(".mobile-nav");

const light =
    document.querySelector(".mouse-light");

const cursor =
    document.querySelector(".cursor");

const dot =
    document.querySelector(".cursor-dot");


// ==========================================
// CURRENT PROJECT / IMAGE
// ==========================================

let currentProject = null;

let currentImageIndex = 0;

let currentFilter = "all";


// ==========================================
// GET PROJECT CATEGORY NAME
// ==========================================

function getCategoryName(category) {

    const categoryIndex = {

        logo: 1,
        poster: 2,
        digital: 3,
        traditional: 4,
        motorsport: 5,
        other: 6

    };

    return translations[currentLanguage]
        .filters[categoryIndex[category]];

}


// ==========================================
// RENDER PROJECTS
// ==========================================

function render(filter = "all") {

    currentFilter = filter;

    grid.innerHTML = "";


    const filteredProjects =
        projects.filter(project => {

            return (
                filter === "all" ||
                project.cat === filter
            );

        });


    filteredProjects.forEach(project => {

        const element =
            document.createElement("article");


        element.className =
            "project reveal visible";


        const title =
            project.title[currentLanguage];


        const category =
            getCategoryName(project.cat);


        element.innerHTML = `

            <img
                src="${project.images[0]}"
                alt="${title}"
                loading="lazy"
                onerror="
                    this.style.display='none';
                    this.parentElement.classList.add('missing');
                "
            >

            <div class="project-info">

                <small>
                    ${category} · ${project.year}
                </small>

                <h3>
                    ${title}
                </h3>

            </div>

        `;


        element.addEventListener(
            "click",
            () => openModal(project)
        );


        grid.appendChild(element);

    });

}


// Initial render

render();


// ==========================================
// FILTERS
// ==========================================

document
    .querySelectorAll(".filters button")
    .forEach((button, index) => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelector(".filters .active")
                    .classList.remove("active");


                button.classList.add("active");


                render(
                    button.dataset.filter
                );

            }
        );

    });


// ==========================================
// OPEN MODAL
// ==========================================

function openModal(project) {

    currentProject = project;

    currentImageIndex = 0;


    modal.classList.add("open");

    document.body.style.overflow =
        "hidden";


    updateModal();

}


// ==========================================
// UPDATE MODAL
// ==========================================

function updateModal() {

    if (!currentProject) {
        return;
    }


    const title =
        currentProject.title[currentLanguage];


    const description =
        currentProject.desc[currentLanguage];


    const category =
        getCategoryName(
            currentProject.cat
        );


    modalImg.src =
        currentProject.images[
            currentImageIndex
        ];


    modalImg.alt =
        title;


    modalTitle.textContent =
        title;


    modalCat.textContent =
        `${category} · ${currentProject.year}`;


    modalDesc.textContent =
        description;


    modalThumbs.innerHTML = "";


    currentProject.images.forEach(
        (image, index) => {

            const thumbnail =
                document.createElement("img");


            thumbnail.src = image;


            thumbnail.alt =
                `${title} image ${index + 1}`;


            thumbnail.className =
                index === currentImageIndex
                    ? "active"
                    : "";


            thumbnail.addEventListener(
                "click",
                () => {

                    currentImageIndex =
                        index;

                    updateModal();

                }
            );


            modalThumbs.appendChild(
                thumbnail
            );

        }
    );

}


// ==========================================
// CLOSE MODAL
// ==========================================

function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}


// Close button

document
    .querySelector(".close")
    .addEventListener(
        "click",
        closeModal
    );


// ==========================================
// PREVIOUS IMAGE
// ==========================================

document
    .querySelector(".prev")
    .addEventListener(
        "click",
        () => {

            if (!currentProject) {
                return;
            }


            currentImageIndex =
                (
                    currentImageIndex -
                    1 +
                    currentProject.images.length
                )
                %
                currentProject.images.length;


            updateModal();

        }
    );


// ==========================================
// NEXT IMAGE
// ==========================================

document
    .querySelector(".next")
    .addEventListener(
        "click",
        () => {

            if (!currentProject) {
                return;
            }


            currentImageIndex =
                (
                    currentImageIndex +
                    1
                )
                %
                currentProject.images.length;


            updateModal();

        }
    );


// ==========================================
// KEYBOARD CONTROLS
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (!modal.classList.contains("open")) {
            return;
        }


        if (event.key === "Escape") {

            closeModal();

        }


        if (event.key === "ArrowLeft") {

            document
                .querySelector(".prev")
                .click();

        }


        if (event.key === "ArrowRight") {

            document
                .querySelector(".next")
                .click();

        }

    }
);


// ==========================================
// CLOSE MODAL WHEN CLICKING BACKGROUND
// ==========================================

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


// ==========================================
// MOBILE MENU
// ==========================================

if (menu && mobile) {

    menu.addEventListener(
        "click",
        () => {

            mobile.classList.toggle(
                "open"
            );

        }
    );


    mobile
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobile.classList.remove(
                        "open"
                    );

                }
            );

        });

}


// ==========================================
// LANGUAGE SWITCH
// ==========================================

function setLanguage(language) {

    currentLanguage = language;


    document.documentElement.lang =
        language;


    const t =
        translations[language];


    // Navigation

    const navLinks =
        document.querySelectorAll(
            "header nav a"
        );


    if (navLinks.length >= 3) {

        navLinks[0].textContent =
            t.navWork;

        navLinks[1].textContent =
            t.navAbout;

        navLinks[2].textContent =
            t.navContact;

    }


    // Mobile navigation

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-nav a"
        );


    if (mobileLinks.length >= 3) {

        mobileLinks[0].textContent =
            t.mobileWork;

        mobileLinks[1].textContent =
            t.mobileAbout;

        mobileLinks[2].textContent =
            t.mobileContact;

    }


    // Hero

    const eyebrow =
        document.querySelector(
            ".eyebrow"
        );


    if (eyebrow) {

        eyebrow.textContent =
            t.eyebrow;

    }


    const heroCopy =
        document.querySelector(
            ".hero-copy"
        );


    if (heroCopy) {

        heroCopy.textContent =
            t.heroCopy;

    }


    const explore =
        document.querySelector(
            ".btn"
        );


    if (explore) {

        explore.innerHTML =
            `${t.explore} <b>↗</b>`;

    }


    const talk =
        document.querySelector(
            ".ghost"
        );


    if (talk) {

        talk.textContent =
            t.talk;

    }


    const heroMeta =
        document.querySelectorAll(
            ".hero-meta span"
        );


    if (heroMeta.length > 0) {

        heroMeta[0].textContent =
            t.scroll;

    }


    // Intro

    const introLabel =
        document.querySelector(
            ".intro .label"
        );


    if (introLabel) {

        introLabel.textContent =
            t.aboutWork;

    }


    const introTitle =
        document.querySelector(
            ".intro h2"
        );


    if (introTitle) {

        introTitle.innerHTML =
            t.introTitle;

    }


    const introLead =
        document.querySelector(
            ".intro .lead"
        );


    if (introLead) {

        introLead.textContent =
            t.introLead;

    }


    // Work

    const workTitle =
        document.querySelector(
            ".section-head h2"
        );


    if (workTitle) {

        workTitle.textContent =
            t.selectedWork;

    }


    const workDescription =
        document.querySelector(
            ".section-head > p"
        );


    if (workDescription) {

        workDescription.textContent =
            t.workDescription;

    }


    // Filters

    const filters =
        document.querySelectorAll(
            ".filters button"
        );


    filters.forEach(
        (button, index) => {

            button.textContent =
                t.filters[index];

        }
    );


    // About

    const aboutLabel =
        document.querySelector(
            "#about .label"
        );


    if (aboutLabel) {

        aboutLabel.textContent =
            t.aboutLabel;

    }


    const aboutTitle =
        document.querySelector(
            "#about h2"
        );


    if (aboutTitle) {

        aboutTitle.innerHTML =
            t.aboutTitle;

    }


    const aboutParagraphs =
        document.querySelectorAll(
            "#about p"
        );


    if (aboutParagraphs.length >= 3) {

        aboutParagraphs[1].textContent =
            t.aboutLead;

        aboutParagraphs[2].textContent =
            t.aboutText1;

        if (aboutParagraphs[3]) {

            aboutParagraphs[3].textContent =
                t.aboutText2;

        }

    }


    // Contact

    const contactLabel =
        document.querySelector(
            "#contact .label"
        );


    if (contactLabel) {

        contactLabel.textContent =
            t.contactLabel;

    }


    const contactTitle =
        document.querySelector(
            "#contact h2"
        );


    if (contactTitle) {

        contactTitle.innerHTML =
            t.contactTitle;

    }


    // Email

    const email =
        document.querySelector(
            ".mail"
        );


    if (email) {

        email.innerHTML =
            `${t.email} <span>↗</span>`;

    }


    // Footer

    const footer =
        document.querySelectorAll(
            "footer span"
        );


    if (footer.length >= 3) {

        footer[0].textContent =
            t.footerLeft;

        footer[1].textContent =
            t.footerMiddle;

        footer[2].querySelector("a").textContent =
            t.backTop;

    }


    // Language button

    lang.textContent =
        language === "en"
            ? "FR"
            : "EN";


    // Re-render projects

    render(currentFilter);


    // Update modal if open

    if (
        modal.classList.contains("open") &&
        currentProject
    ) {

        updateModal();

    }

}


// ==========================================
// LANGUAGE BUTTON
// ==========================================

lang.addEventListener(
    "click",
    () => {

        const newLanguage =
            currentLanguage === "en"
                ? "fr"
                : "en";


        setLanguage(
            newLanguage
        );

    }
);


// ==========================================
// MOUSE LIGHT
// ==========================================

if (light) {

    window.addEventListener(
        "mousemove",
        event => {

            light.style.left =
                `${event.clientX}px`;

            light.style.top =
                `${event.clientY}px`;

        }
    );

}


// ==========================================
// CUSTOM CURSOR
// ==========================================

if (cursor && dot) {

    window.addEventListener(
        "mousemove",
        event => {

            cursor.style.left =
                `${event.clientX}px`;

            cursor.style.top =
                `${event.clientY}px`;


            dot.style.left =
                `${event.clientX}px`;

            dot.style.top =
                `${event.clientY}px`;

        }
    );


    function setupCursorHover() {

        document
            .querySelectorAll(
                "a, button, .project"
            )
            .forEach(element => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        cursor.style.width =
                            "55px";

                        cursor.style.height =
                            "55px";

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        cursor.style.width =
                            "34px";

                        cursor.style.height =
                            "34px";

                    }
                );

            });

    }


    setupCursorHover();

}


// ==========================================
// SCROLL REVEAL
// ==========================================

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


// ==========================================
// INITIAL LANGUAGE
// ==========================================

setLanguage("en");
