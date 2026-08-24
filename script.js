/* ========================================
   ANIMAÇÃO DOS ELEMENTOS
======================================== */

const elements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach((element) => {

    observer.observe(element);

});



/* ========================================
   ROLAGEM SUAVE
======================================== */

const scrollButton =
    document.querySelector(".scroll-button");


if (scrollButton) {

    scrollButton.addEventListener(
        "click",

        function (event) {

            event.preventDefault();


            const target =
                document.querySelector("#introducao");


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}



/* ========================================
   EFEITO DE CLIQUE NOS CARDS
======================================== */

const cards = document.querySelectorAll(
    ".role-card, .game-card, .function-card"
);


cards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform =
            "scale(0.96)";


        setTimeout(() => {

            card.style.transform = "";

        }, 150);

    });

});
