
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
      
        <img class="imageV annimationImg" src="./img/${img}"  alt="image">
        
      </div>
    </div>`;
  });

  contenaire.innerHTML = divImg;


  const imgGalerySecond = [
    "biseray16.jpg",
    "biseray17.jpg",
    "biseray18.jpg",
    "biseray19.jpg",
    "biseray20.jpg",
    "biseray21.jpg",
    "biseray22.jpg",
    "biseray8.jpg",
    "biseray2.png",
    "biseray11.jpg"
  ];
  const contenairecolor = document.querySelector(".containerCouleur");

  let divImgColor = '';

  imgGalerySecond.forEach(img => {
    divImgColor +=
      ` 
      <div class="cards2" > 
      <div class="cards" >
      
        <img class="imageV annimationImg" id="imageV" src="./img/${img}" alt="image">
        
      </div>
    </div>`
  });


  contenairecolor.innerHTML = divImgColor;
  const clickImage = document.querySelectorAll('.cards img');
  let popupBG = document.getElementById('popup-bg');
  let popupImg = document.getElementById('popup-img');;





  const openPopup = (e) => {
    let imageCliked = e.target.closest(".cards img");
    let clickImageName = imageCliked.src;
    popupBG.classList.add("active");
    popupImg.src = `${clickImageName}`;
    popupBG.style.animation = ' animPopUp 3s forwards'
    popupImg.style.animation = ' imagePopUp 1.4s forwards';
    console.log(popupImg.src)
  };



  const closePopup = () => {
    popupBG.classList.remove('active');
  }


  clickImage.forEach(el => el.addEventListener("click", openPopup));
  popupImg.addEventListener("click", (e) => e.stopPropagation());
  popupBG.addEventListener("click", closePopup);




}



affichageImage();





