const bottom = document.querySelector("#bottom"),
		shareImg = document.querySelector(".share__img");

shareImg.addEventListener('click',()=>{
	bottom.classList.toggle('active');
});