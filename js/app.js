const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});




ScrollReveal().reveal(".fotoHero", { delay: 250, distance: '-500px', origin:'Left', });
ScrollReveal().reveal(".tituloFotoHero", { delay: 450, origin:'Right', distance: '100px'  });
ScrollReveal().reveal(".tituloFotoHeroSecundario", { delay: 750, origin:'Right', distance: '100px'   });
ScrollReveal().reveal(".SkillsTittle", { delay: 250 });
ScrollReveal().reveal(".SkillsTittleSmall", { delay: 350 });
ScrollReveal().reveal(".SkillsText", { delay: 450 });
ScrollReveal().reveal(".iconoSkillsContainer", { delay: 450});
ScrollReveal().reveal(".containerButton", { delay: 650});
ScrollReveal().reveal(".ContactContainer", { delay: 250});
ScrollReveal().reveal(".ServicesTittle", { delay: 350 });
ScrollReveal().reveal(".ServicesTittleSmall", { delay: 450});
ScrollReveal().reveal(".serviceContainer", { delay: 650});
ScrollReveal().reveal(".Portfoliotittle", { delay: 350 });
ScrollReveal().reveal(".PortfolioText", { delay: 450});
ScrollReveal().reveal(".parentPortfolio", { delay: 650});
ScrollReveal().reveal(".footerTittle", { delay: 650});
ScrollReveal().reveal(".footerText", { delay: 850});

footerTittle
footerText
