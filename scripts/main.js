// Hero Slider
let currentSlide = 0;
let slideInterval;

function initSlider() {
    const featuredRecipes = recipes.filter(recipe => recipe.featured);
    const sliderContainer = document.getElementById('heroSlider');
    const dotsContainer = document.getElementById('sliderDots');
    
    if (!sliderContainer || !dotsContainer) return;

    // Create slides
    featuredRecipes.forEach((recipe, index) => {
        const slide = document.createElement('div');
        slide.className = `slider-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="slider-overlay"></div>
            <div class="slider-content">
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
                <a href="recipe-detail.html?id=${recipe.id}" class="btn btn-primary">See Full Recipe</a>
            </div>
        `;
        sliderContainer.appendChild(slide);

        // Create dot
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Auto advance
    slideInterval = setInterval(nextSlide, 5000);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slider-slide');
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slider-slide');
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function goToSlide(index) {
    clearInterval(slideInterval);
    showSlide(index);
    slideInterval = setInterval(nextSlide, 5000);
}

// Recipe Grid
function renderRecipes(recipesToShow = recipes) {
    const recipeGrid = document.getElementById('recipeGrid');
    if (!recipeGrid) return;

    if (recipesToShow.length === 0) {
        recipeGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
                <p style="color: #999; font-size: 1.125rem;">No recipes found. Try a different search term.</p>
            </div>
        `;
        return;
    }

    recipeGrid.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card">
            <div class="recipe-card-image">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-card-overlay"></div>
                <div class="recipe-card-info">
                    <div class="info-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${recipe.prepTime}
                    </div>
                    <div class="info-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        ${recipe.servings}
                    </div>
                </div>
            </div>
            <div class="recipe-card-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <a href="recipe-detail.html?id=${recipe.id}" class="btn btn-primary btn-full">See Full Recipe</a>
            </div>
        </div>
    `).join('');
}

// Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const sectionTitle = document.getElementById('sectionTitle');
    const sectionDescription = document.getElementById('sectionDescription');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query === '') {
            renderRecipes(recipes);
            if (sectionTitle) sectionTitle.textContent = 'Popular American Recipes';
            if (sectionDescription) sectionDescription.textContent = 'Discover classic American dishes that have been bringing families together for generations';
        } else {
            const filtered = recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query)
            );
            renderRecipes(filtered);
            if (sectionTitle) sectionTitle.textContent = 'Search Results';
            if (sectionDescription) {
                sectionDescription.textContent = `Found ${filtered.length} recipe${filtered.length !== 1 ? 's' : ''} matching "${e.target.value}"`;
            }
        }
    });
}

// Back to Top Button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Slider Navigation Buttons
function setupSliderButtons() {
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    renderRecipes();
    setupSearch();
    setupBackToTop();
    setupSliderButtons();
});
