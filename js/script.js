
// const affichageImage = () => {

//   let imgGaleryFirst = [
//     //    NOIR ET BLANC 
//     "biseray9.jpg",
//     "biseray3.jpg",
//     "biseray4.jpg",
//     "biseray5.jpg",
//     "biseray6.jpg",
//     "biseray7.jpg",
//     "biseray10.jpg",
//     "biseray12.jpg",
//     "biseray13.jpg",
//     "biseray14.jpg",
//     "biseray15.jpg",
//     "biseray23.jpg",
//     "biseray24.jpg",
//     "biseray.jpg ",
//     "DSCF1523.jpg",
//     "DSCF1528-2.jpg",
//     "DSCF1557.jpg",
//     "DSCF1545.jpg",
//     "DSCF1543.jpg",
//     "DSCF1542.jpg",
//     "DSCF1539.jpg",
//     "DSCF1536.jpg",
//     "DSCF1536-2.jpg",
//     "DSCF1535.jpg",


//   ];

//   const contenaire = document.querySelector(".containerNb");

//   let divImg = '';

//   imgGaleryFirst.forEach(img => {
//     divImg +=
//       `<div class="cards2" > 
//     <div class="cards" >
//      <p class="retour">  retour  </p> 
//     <img class="imageV annimationImg" src="./img/${img}" alt="image">
// </div>
// </div>`
//   });

//   contenaire.innerHTML = divImg;


//   const imgGalerySecond = [


//     "biseray16.jpg",
//     // "biseray17.jpg",
//     // "biseray18.jpg",
//     // "biseray19.jpg",
//     // "biseray20.jpg",
//     // "biseray21.jpg",
//     // "biseray22.jpg",
//     // "biseray8.jpg",
//     // "biseray2.png",
//     // "biseray11.jpg"
//   ];
//   const contenairecolor = document.querySelector(".containerCouleur");

//   let divImgColor = '';

//   imgGalerySecond.forEach(img => {
//     divImgColor +=
//       ` <div class="cards">
//     <p class="retour"> retour </p> 
//     <img class="imageV annimationImg" id="imageV" src="./img/${img}" alt="image">
// </div>` });
//   contenairecolor.innerHTML = divImgColor;
//   const clickImage = document.querySelectorAll('.cards img');
//   const clickP = document.querySelectorAll('.cards .retour');

//   // Initialiser la variable pour suivre l'état actuel de l'image
//   let isImageEnlarged = false;

//   for (let a = 0; a < clickImage.length; a++) {
//     clickImage[a].addEventListener("click", () => {
//       if (!isImageEnlarged) { // Si l'image n'est pas agrandie
//         // Ajouter la classe pour masquer les éléments qui se trouvent derrière l'image agrandie


//         // Définir les propriétés CSS pour agrandir l'image
//         clickImage[a].style.width = '45em';
//         clickImage[a].style.position = 'fixed';
//         clickImage[a].style.top = '0';
//         clickImage[a].style.left = '0';
//         clickImage[a].style.bottom = '0';
//         clickImage[a].style.right = '0';
//         clickImage[a].style.padding = '10em 40% 1em 40%';
//         clickImage[a].classList.add("no-hover");
//         clickImage[a].style.zIndex = '9989';
//         clickImage[a].style.transition = 'all 3s';
//         clickImage[a].style.backgroundColor = "#DBDBDB";
//         clickP[a].style.padding = '10em 40% 1em 40%';
//         clickP[a].style.zIndex = '9999';
//         clickP[a].style.position = 'fixed';
//         clickP[a].style.top = '0';
//         clickP[a].style.left = '0';
//         clickP[a].style.bottom = '0';
//         clickP[a].style.right = '0';
//         clickP[a].classList.add("no-hover");
//         isImageEnlarged = true; // Définir la variable sur true pour suivre l'état actuel de l'image
//       }





//     });
//     for (let a = 0; a < clickP.length; a++) {
//       clickP[a].addEventListener("click", () => {
//         console.log('here');
//         // Réinitialiser les propriétés CSS pour réduire l'image à sa taille initiale
//         clickImage[a].style.width = '';
//         clickImage[a].style.position = '';
//         clickImage[a].style.top = '';
//         clickImage[a].style.left = '';
//         clickImage[a].style.bottom = '';
//         clickImage[a].style.right = '';
//         clickImage[a].style.margin = '';
//         clickImage[a].style.zIndex = '';
//         clickImage[a].style.transition = '';
//         clickImage[a].style.backgroundColor = "";
//         clickImage[a].classList.remove("no-hover");
//         clickP[a].style.color = "#DBDBDB";

//         isImageEnlarged = false; // Définir la variable sur false pour suivre l'état actuel de l'image
//       });
//     }

//   }
// }

// affichageImage();




































































const affichageImage = () => {

  let imgGaleryFirst = [
    //    NOIR ET BLANC 
    "biseray9.jpg",
    "biseray3.jpg",
    "biseray4.jpg",
    "biseray5.jpg",
    "biseray6.jpg",
    "biseray7.jpg",
    "biseray10.jpg",
    "biseray12.jpg",
    "biseray13.jpg",
    "biseray14.jpg",
    "biseray15.jpg",
    "biseray23.jpg",
    "biseray24.jpg",
    "biseray.jpg ",
    "DSCF1523.jpg",
    "DSCF1528-2.jpg",
    "DSCF1557.jpg",
    "DSCF1545.jpg",
    "DSCF1543.jpg",
    "DSCF1542.jpg",
    "DSCF1539.jpg",
    "DSCF1536.jpg",
    "DSCF1536-2.jpg",
    "DSCF1535.jpg",


  ];

  const contenaire = document.querySelector(".containerNb");

  let divImg = '';

  imgGaleryFirst.forEach(img => {
    divImg +=
      `<div class="cards2" > 
      <div class="cards" >
      
        <img class="imageV annimationImg" src="./img/${img}" id="12" alt="image">
        
      </div>
    </div>`;
  });

  contenaire.innerHTML = divImg;


  const imgGalerySecond = [


    "biseray16.jpg",
    // "biseray17.jpg",
    // "biseray18.jpg",
    // "biseray19.jpg",
    // "biseray20.jpg",
    // "biseray21.jpg",
    // "biseray22.jpg",
    // "biseray8.jpg",
    // "biseray2.png",
    // "biseray11.jpg"
  ];
  const contenairecolor = document.querySelector(".containerCouleur");

  let divImgColor = '';

  imgGalerySecond.forEach(img => {
    divImgColor +=
      ` <div class="cards">
    
    <img class="imageV annimationImg" id="imageV" src="./img/${img}" alt="image">
</div>` });
  contenairecolor.innerHTML = divImgColor;
  const clickImage = document.querySelectorAll('.cards img');
let popupBG = document.getElementById('popup-bg');
let popupImg = document.getElementById('popup-img');;

const openPopup = (e) => {
let imageCliked = e.target.closest(".cards img");
let clickImageName = imageCliked.src;
popupBG.classList.add("active");
popupImg.src =`${clickImageName}`;
popupBG.style.animation = ' animPopUp 3s forwards'
popupImg.style.animation = ' imagePopUp 1.4s forwards';
console.log(popupImg.src)
};

  const closePopup = () => {
    
  
    popupBG.classList.remove('active');
    
  }
    clickImage.forEach(el => el.addEventListener("click", openPopup ));
  popupImg.addEventListener("click", (e) => e.stopPropagation());
  popupBG.addEventListener("click", closePopup);




}



affichageImage();





