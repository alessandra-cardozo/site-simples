// Função para rolar suavemente até a seção "especialidades" ao clicar no botão
document.querySelector(".btn-hero").addEventListener("click", function (e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    const targetSection = document.querySelector(".especialidades");
    targetSection.scrollIntoView({ behavior: "smooth" }); // Rolagem suave
});

// Adicionando animação ao passar o mouse sobre os quadrados (box-item)
const boxItems = document.querySelectorAll(".box-item");

boxItems.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.transform = "scale(1.05)"; // Ampliação leve
        box.style.boxShadow = "4px 8px 16px rgba(0, 0, 0, 0.3)"; // Sombra mais pronunciada
    });

    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)"; // Volta ao tamanho original
        box.style.boxShadow = "2px 4px 8px rgba(0, 0, 0, 0.2)"; // Sombra original
    });
});

// Mensagem de alerta ao clicar no botão (opcional)
document.querySelector(".btn-hero").addEventListener("click", () => {
    alert("Marque sua consulta hoje mesmo! Estamos esperando por você."); // Mensagem informativa
});

// Adicionando uma animação de entrada suave nos quadrados ao carregar a página
window.addEventListener("load", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        {
            threshold: 0.5, // Gatilho quando 50% do elemento está visível
        }
    );

    boxItems.forEach((box) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";
        box.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(box);
    });
});

// Adicionando interatividade no footer
const socialLinks = document.querySelectorAll(".social-icons a");

socialLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.2)"; // Efeito de ampliação
        link.style.color = "#ffe6f2"; // Alterando cor do texto ao passar o mouse
        link.style.transition = "0.3s ease-in-out";
    });

    link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)"; // Retorna ao tamanho original
        link.style.color = "white"; // Retorna à cor original
    });
});

// Função para destacar o footer ao carregá-lo
window.addEventListener("load", () => {
    const footer = document.querySelector("footer");
    footer.style.opacity = "0";
    footer.style.transform = "translateY(30px)";
    footer.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0)";
    }, 300); // Animação após um pequeno atraso
});
