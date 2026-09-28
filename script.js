/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =====================================================
   INTERACTIVE RHYTHM CLOCK
===================================================== */

const slider = document.getElementById("timeSlider");
const timeValue = document.getElementById("timeValue");
const timeDescription = document.getElementById("timeDescription");
const pickerHand = document.querySelector(".picker-hand");

const descriptions = {

    0: "Глубокая ночь. Время, когда город обычно спит.",
    1: "Ночной ритм. Для тех, кто активен глубокой ночью.",
    2: "Поздняя ночь. Организм всё ещё находится в режиме отдыха.",
    3: "Очень раннее утро. Город ещё только начинает просыпаться.",
    4: "Ранний ритм. Для тех, кто любит начинать день раньше.",
    5: "Ранний старт. Энергия появляется с самого утра.",
    6: "Жаворонок. Раннее начало рабочего дня.",
    7: "Утренний ритм. Хорошее время для концентрации.",
    8: "Классическое утро.",
    9: "Классический дневной график.",
    10: "Утренний пик активности.",
    11: "Переход к дневному ритму.",
    12: "Середина дня.",
    13: "Дневной пик.",
    14: "Дневной рабочий ритм.",
    15: "Послеобеденный ритм.",
    16: "Активность постепенно смещается к вечеру.",
    17: "Вечерний ритм начинается.",
    18: "Для тех, кто продуктивнее вечером.",
    19: "Вечерний пик концентрации.",
    20: "Поздний рабочий период.",
    21: "Вечерняя активность.",
    22: "Сова. Для тех, кто раскрывается вечером.",
    23: "Поздний вечер. Город постепенно засыпает."

};


function updateClock() {

    const hour = Number(slider.value);

    const formatted =
        String(hour).padStart(2, "0") + ":00";

    timeValue.textContent = formatted;

    timeDescription.textContent =
        descriptions[hour];


    const degrees = hour * 15;

    pickerHand.style.transform =
        `translateX(-50%) rotate(${degrees}deg)`;

}


slider.addEventListener("input", updateClock);

updateClock();


/* =====================================================
   ACCORDION
===================================================== */

const accordionButtons =
    document.querySelectorAll(".accordion-item");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const wasActive =
            button.classList.contains("active");

        accordionButtons.forEach(item => {
            item.classList.remove("active");
        });

        if (!wasActive) {
            button.classList.add("active");
        }

    });

});


/* =====================================================
   PARALLAX HERO CLOCK
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");

const heroClock =
    document.querySelector(".clock");

if (heroVisual && heroClock) {

    window.addEventListener("mousemove", event => {

        const x =
            (event.clientX / window.innerWidth - .5);

        const y =
            (event.clientY / window.innerHeight - .5);

        heroClock.style.transform =
            `translate(${x * 12}px, ${y * 12}px)`;

    });

}


/* =====================================================
   RANDOM LITTLE PAPER MOVEMENT
===================================================== */

const floatingCards =
    document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    card.animate(
        [
            {
                transform:
                    `translateY(0) rotate(${index % 2 ? 5 : -6}deg)`
            },
            {
                transform:
                    `translateY(-10px) rotate(${index % 2 ? 7 : -4}deg)`
            },
            {
                transform:
                    `translateY(0) rotate(${index % 2 ? 5 : -6}deg)`
            }
        ],
        {
            duration: 3500 + index * 500,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

});


/* =====================================================
   CHANGE PAGE TITLE WHEN TAB IS LEFT
===================================================== */

let originalTitle = document.title;

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "Рђ РєР°РєРѕР№ С‚РІРѕР№ СЂРёС‚Рј? вЏ°";

    } else {

        document.title = originalTitle;

    }

});


/* =====================================================
   BUTTON MICRO-INTERACTION
===================================================== */

document.querySelectorAll(".main-button, .vote-button")
    .forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.letterSpacing = "1px";

        });

        button.addEventListener("mouseleave", () => {

            button.style.letterSpacing = "";

        });

    });


/* =====================================================
   SMOOTH MOUSE MOVEMENT FOR CITY
===================================================== */

const city = document.querySelector(".city-illustration");

if (city) {

    window.addEventListener("mousemove", event => {

        if (window.innerWidth < 700) return;

        const movement =
            (event.clientX / window.innerWidth - .5) * 20;

        city.style.transform =
            `translateX(${movement}px)`;

    });

}