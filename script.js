
  const titles = [
    "A Full Stack Developer",
    "A UI/UX Designer",
    "A Brand Identity Designer"
  ];

  const typedText = document.getElementById("typed-text");
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = titles[titleIndex];
    const displayedText = currentText.substring(0, charIndex);

    typedText.textContent = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 60);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        titleIndex = (titleIndex + 1) % titles.length;
      }
      setTimeout(typeEffect, 1000);
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);

