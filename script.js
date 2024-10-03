// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut (height)

// Faire apparaitre l'image de la partie improvise (en descendant) -> la ramener de la gauche vers la droite à un certain niveau de scroll

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

// --------------------------------------------------------------
const popup = document.querySelector(".pop-up");
console.log(popup);

let scroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
});

window.addEventListener("scroll", () => {
  // Variable permettant de savoir le pourcentage de la page  (rapport hauteur/largeur):
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  // Image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  }

  // Pop-up
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    popup.style.opacity = "1";
    popup.style.transform = "none";
  } else {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
  }

  //Pop-up possible d'être mise plus haute et autre façon de cacher la popup une fois vue:
  // if(scrollValue > 0.85 && playOnce) {
  //   popup.style.opacity = 1;
  //   popup.style.transform = "none";
  // playOnce = false;
  // }
});

// Si on veut que la pop-up ne réapparaisse plus :
closeBtn.addEventListener("click", () => {
  popup.remove();
});
