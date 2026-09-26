document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. MENU MOBILE
    ========================================= */

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {

        const menuButton = document.createElement("button");

        menuButton.className = "menu-button";
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Ouvrir le menu");

        navbar.insertBefore(menuButton, navLinks);

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuButton.innerHTML = "✕";
            } else {
                menuButton.innerHTML = "☰";
            }

        });


        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuButton.innerHTML = "☰";

            });

        });

    }


    /* =========================================
       2. EFFET D'ÉCRITURE
    ========================================= */

    const heroTitle = document.querySelector(".hero h2");

    if (heroTitle) {

        const text = "Développeur Web & Expert en Marketing Digital";

        heroTitle.textContent = "";

        let index = 0;

        function typeWriter() {

            if (index < text.length) {

                heroTitle.textContent += text.charAt(index);

                index++;

                setTimeout(typeWriter, 60);

            }

        }

        typeWriter();

    }


    /* =========================================
       3. ANIMATION AU SCROLL
    ========================================= */

    const animatedElements = document.querySelectorAll(
        "section, .service-card, .project-card, .services-preview article, .skills li"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });


    /* =========================================
       4. MODE SOMBRE
    ========================================= */

    const darkModeButton = document.createElement("button");

    darkModeButton.className = "dark-mode-button";
    darkModeButton.innerHTML = "🌙";
    darkModeButton.setAttribute(
        "aria-label",
        "Activer le mode sombre"
    );

    document.body.appendChild(darkModeButton);


    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {

        document.body.classList.add("dark-mode");

        darkModeButton.innerHTML = "☀️";

    }


    darkModeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("darkMode", "enabled");

            darkModeButton.innerHTML = "☀️";

        } else {

            localStorage.setItem("darkMode", "disabled");

            darkModeButton.innerHTML = "🌙";

        }

    });


    /* =========================================
       5. BOUTON RETOUR EN HAUT
    ========================================= */

    const topButton = document.createElement("button");

    topButton.className = "top-button";
    topButton.innerHTML = "↑";
    topButton.setAttribute(
        "aria-label",
        "Retour en haut"
    );

    document.body.appendChild(topButton);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.classList.add("visible");

        } else {

            topButton.classList.remove("visible");

        }

    });


    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================================
       6. FORMULAIRE DE CONTACT
    ========================================= */

    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = document.querySelector("#name").value;

            alert(
                `Merci ${name} ! Votre message a bien été préparé.`
            );

            contactForm.reset();

        });

    }


    /* =========================================
       7. ANNÉE AUTOMATIQUE DU FOOTER
    ========================================= */

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} Messie Tamfutu — Tous droits réservés.`;

    }

});

