// Get recipe ID from URL
function getRecipeIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Render Recipe Detail
function renderRecipeDetail() {
    const recipeId = getRecipeIdFromURL();
    const recipe = recipes.find(r => r.id === recipeId);
    const contentContainer = document.getElementById('recipeDetailContent');

    if (!recipe || !contentContainer) {
        contentContainer.innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <h2>Recipe Not Found</h2>
                <p style="margin: 1rem 0;">The recipe you're looking for doesn't exist.</p>
                <a href="index.html" class="btn btn-primary">Back to Home</a>
            </div>
        `;
        return;
    }

    // Update page title
    document.title = `${recipe.title} - American Eats`;

    contentContainer.innerHTML = `
        <!-- Hero Image -->
        <div class="recipe-hero">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-hero-overlay"></div>
            <div class="recipe-hero-content">
                <h1>${recipe.title}</h1>
                <div class="recipe-meta">
                    <div class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>Prep: ${recipe.prepTime}</span>
                    </div>
                    <div class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
                            <line x1="6" y1="17" x2="18" y2="17"/>
                        </svg>
                        <span>Cook: ${recipe.cookTime}</span>
                    </div>
                    <div class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>Serves: ${recipe.servings}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recipe Content -->
        <div class="recipe-layout">
            <!-- Ingredients -->
            <div>
                <div class="recipe-card-detail sticky-card">
                    <div class="section-title">
                        <div class="section-icon">📝</div>
                        <h2>Ingredients</h2>
                    </div>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ingredient => `
                            <li>${ingredient}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <!-- Instructions -->
            <div>
                <div class="recipe-card-detail">
                    <div class="section-title">
                        <div class="section-icon">👨‍🍳</div>
                        <h2>Instructions</h2>
                    </div>
                    <ol class="instructions-list">
                        ${recipe.instructions.map((instruction, index) => `
                            <li class="instruction-item">
                                <div class="instruction-number">${index + 1}</div>
                                <div class="instruction-text">${instruction}</div>
                            </li>
                        `).join('')}
                    </ol>
                </div>

                <!-- Description -->
                <div class="recipe-description">
                    <h3>About This Recipe</h3>
                    <p>${recipe.description}</p>
                </div>
            </div>
        </div>
    `;
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRecipeDetail();
    setupBackToTop();
});
