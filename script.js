// Initialize Sidenav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Initialize Carousel
const slider = document.querySelector('.slider');
M.Carousel.init(slider, {
	fullWidth: true,
	indicators: true
});
const bestsellers = document.querySelector('.bestsellers');
M.Carousel.init(bestsellers, {numVisible: 3});
const testimonials = document.querySelector('.testimonials');
M.Carousel.init(testimonials, {numVisible: 3});
// Autoplay function for carousel
// Forward carousel every 5 seconds
const interval = 5000;
setTimeout(
	(autoplay = () => {
		M.Carousel.getInstance(slider).next();
		M.Carousel.getInstance(bestsellers).next();
		M.Carousel.getInstance(testimonials).next();
		setTimeout(autoplay, interval);
	}),
	interval
);

// Form submission
const handleSubmit = (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	formData.append('timestamp', new Date().toLocaleString());
	const formProps = Object.fromEntries(formData);
	localStorage.setItem('form', JSON.stringify(formProps));
	location.href = '/collected_data.html';
};

// Numbers only for phone input
const onlyNumberKey = (e) => {
	// Only ASCII character in that range allowed
	var ASCIICode = e.which ? e.which : e.keyCode;
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
	return true;
};

// Material Boxed
const materialBoxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBoxed, {});

// Masonry
const grid = document.querySelector('.grid');
const masonry = new Masonry(grid, {
	// options
	itemSelector: '.grid-item',
	gutter: 26
});
