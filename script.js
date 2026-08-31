(function(){
	const imageFolder = 'Assets/SeniorPortfolio/';
	const imageFiles = [
		'Image2.jpg',
		'Image8.jpg',
		'Image10.jpg',
		'Image13.jpg',
		'Image14.jpg',
		'Image15.jpg',
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'PrintS2Final.jpg',
		'Untitled-1.jpg',
		'FinalCover11.jpg'
	];

	const container = document.getElementById('imgs');
	if (container) {
		imageFiles.forEach(filename => {
			const src = imageFolder + filename;
			const figure = document.createElement('figure');
			const img = document.createElement('img');
			img.src = src;
			img.alt = filename;
			img.loading = 'lazy';

			img.addEventListener('load', () => {
				if (img.naturalWidth > img.naturalHeight * 1.4) {
					figure.classList.add('span-2');
				}
			});

			figure.appendChild(img);
			container.appendChild(figure);
		});
	}

	const cruiseFolder = 'Assets/Cruise/';
	const cruiseFiles = [
		'3e527d67-968c-4c89-a12e-712401dfb487.JPG',
		'8b72828d-1db4-4fe4-ba38-f9fe6821266b.JPG',
		'IMG_2606.JPG',
		'IMG_2983.JPG',
	];
	const researchSlides = document.getElementById('researchSlides');
	const researchCounter = document.getElementById('researchCounter');
	const researchPrevious = document.getElementById('researchPrevious');
	const researchNext = document.getElementById('researchNext');
	if (!researchSlides || !researchCounter || !researchPrevious || !researchNext) {
		return;
	}
	let currentResearchSlide = 0;

	cruiseFiles.forEach((filename, index) => {
		const img = document.createElement('img');
		img.src = cruiseFolder + filename;
		img.alt = `NOAA cruise research image ${index + 1}`;
		img.className = 'research-slide';
		img.loading = index === 0 ? 'eager' : 'lazy';
		researchSlides.appendChild(img);
	});

	function showResearchSlide(index) {
		currentResearchSlide = (index + cruiseFiles.length) % cruiseFiles.length;
		researchSlides.style.transform = `translateX(-${currentResearchSlide * 100}%)`;
		researchCounter.textContent = `${currentResearchSlide + 1} / ${cruiseFiles.length}`;
	}

	researchPrevious.addEventListener('click', () => showResearchSlide(currentResearchSlide - 1));
	researchNext.addEventListener('click', () => showResearchSlide(currentResearchSlide + 1));
})();
