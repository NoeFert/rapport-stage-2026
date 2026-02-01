document.querySelectorAll(".accordion").forEach((accordion) => {
  const button = accordion.querySelector(".accordion-toggle");
  const content = accordion.querySelector(".accordion-content");

  button.addEventListener("click", () => {
    const isOpen = accordion.classList.toggle("open");

    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      button.textContent = "Voir moins";
    } else {
      content.style.maxHeight = null;
      button.textContent = "Voir plus";
    }
  });
});
