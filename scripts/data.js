// Recipe Data
const recipes = [
    {
        id: 1,
        title: "Classic American Burger",
        description: "A juicy, perfectly seasoned beef burger with all the classic fixings on a toasted bun.",
        image: "https://images.unsplash.com/photo-1633424411431-5eb8d0e96488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGJ1cmdlciUyMGdvdXJtZXR8ZW58MXx8fHwxNzYxNzQzNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "15 mins",
        cookTime: "10 mins",
        servings: 4,
        featured: true,
        ingredients: [
            "1.5 lbs ground beef (80/20)",
            "4 hamburger buns",
            "4 slices cheddar cheese",
            "4 lettuce leaves",
            "1 large tomato, sliced",
            "1 red onion, sliced",
            "Pickles",
            "Salt and pepper to taste",
            "Ketchup, mustard, and mayo"
        ],
        instructions: [
            "Divide the ground beef into 4 equal portions and shape into patties slightly larger than your buns.",
            "Season both sides generously with salt and pepper.",
            "Heat a grill or skillet over medium-high heat.",
            "Cook patties for 4-5 minutes per side for medium doneness.",
            "Add cheese slices in the last minute of cooking and cover to melt.",
            "Toast the buns lightly on the grill.",
            "Assemble burgers with your favorite toppings and condiments.",
            "Serve immediately while hot."
        ]
    },
    {
        id: 2,
        title: "BBQ Ribs",
        description: "Fall-off-the-bone tender ribs slathered in a sweet and tangy barbecue sauce.",
        image: "https://images.unsplash.com/photo-1691200170948-beca4be90d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjByaWJzJTIwYmFyYmVjdWV8ZW58MXx8fHwxNzYxNzQzNTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "20 mins",
        cookTime: "3 hours",
        servings: 6,
        featured: true,
        ingredients: [
            "2 racks baby back ribs",
            "2 tbsp brown sugar",
            "1 tbsp paprika",
            "1 tbsp garlic powder",
            "1 tbsp onion powder",
            "1 tsp cayenne pepper",
            "Salt and black pepper",
            "2 cups BBQ sauce",
            "1/4 cup apple cider vinegar"
        ],
        instructions: [
            "Preheat oven to 275°F (135°C).",
            "Remove the membrane from the back of the ribs.",
            "Mix brown sugar, paprika, garlic powder, onion powder, cayenne, salt, and pepper for the dry rub.",
            "Rub the spice mixture all over the ribs.",
            "Wrap ribs tightly in aluminum foil and place on a baking sheet.",
            "Bake for 2.5 hours until tender.",
            "Remove from oven and unwrap. Brush with BBQ sauce.",
            "Broil for 5-7 minutes until sauce is caramelized. Serve hot."
        ]
    },
    {
        id: 3,
        title: "Classic Apple Pie",
        description: "A timeless American dessert with flaky crust and sweet cinnamon apples.",
        image: "https://images.unsplash.com/photo-1506127946181-abb01a32593c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHBpZSUyMHNsaWNlfGVufDF8fHx8MTc2MTY5MTcwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "30 mins",
        cookTime: "50 mins",
        servings: 8,
        featured: true,
        ingredients: [
            "2 pie crusts (homemade or store-bought)",
            "6-7 Granny Smith apples, peeled and sliced",
            "3/4 cup granulated sugar",
            "1/4 cup brown sugar",
            "2 tbsp all-purpose flour",
            "1 tsp cinnamon",
            "1/4 tsp nutmeg",
            "2 tbsp butter",
            "1 egg (for egg wash)"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Place one pie crust in a 9-inch pie dish.",
            "In a large bowl, mix apples with sugars, flour, cinnamon, and nutmeg.",
            "Pour apple mixture into the crust and dot with butter.",
            "Cover with the second crust, seal edges, and cut slits for venting.",
            "Brush with beaten egg for a golden finish.",
            "Bake for 45-50 minutes until crust is golden and filling is bubbly.",
            "Cool for at least 2 hours before slicing. Serve with vanilla ice cream."
        ]
    },
    {
        id: 4,
        title: "Creamy Mac and Cheese",
        description: "Ultra-creamy, cheesy comfort food that's perfect as a side or main dish.",
        image: "https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWMlMjBjaGVlc2UlMjBjcmVhbXl8ZW58MXx8fHwxNzYxNzQzNTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "10 mins",
        cookTime: "20 mins",
        servings: 6,
        featured: true,
        ingredients: [
            "1 lb elbow macaroni",
            "4 tbsp butter",
            "1/4 cup all-purpose flour",
            "3 cups whole milk",
            "2 cups shredded sharp cheddar cheese",
            "1 cup shredded mozzarella cheese",
            "1/2 cup grated Parmesan cheese",
            "Salt and pepper to taste",
            "1/2 tsp garlic powder"
        ],
        instructions: [
            "Cook macaroni according to package directions. Drain and set aside.",
            "In a large pot, melt butter over medium heat.",
            "Whisk in flour and cook for 1 minute to make a roux.",
            "Gradually add milk, whisking constantly until smooth and thickened.",
            "Reduce heat to low and add all the cheeses, stirring until melted.",
            "Season with salt, pepper, and garlic powder.",
            "Add cooked macaroni and stir to coat evenly.",
            "Serve immediately, garnished with extra cheese if desired."
        ]
    },
    {
        id: 5,
        title: "Southern Fried Chicken",
        description: "Crispy, golden-brown fried chicken with a perfectly seasoned coating.",
        image: "https://images.unsplash.com/photo-1672856399624-61b47d70d339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW4lMjBjcmlzcHl8ZW58MXx8fHwxNzYxNjQ2ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "20 mins",
        cookTime: "25 mins",
        servings: 4,
        ingredients: [
            "3 lbs chicken pieces (drumsticks, thighs, breasts)",
            "2 cups buttermilk",
            "2 cups all-purpose flour",
            "2 tsp paprika",
            "1 tsp garlic powder",
            "1 tsp onion powder",
            "1 tsp cayenne pepper",
            "Salt and black pepper",
            "Vegetable oil for frying"
        ],
        instructions: [
            "Marinate chicken in buttermilk for at least 2 hours or overnight.",
            "In a large bowl, mix flour with paprika, garlic powder, onion powder, cayenne, salt, and pepper.",
            "Heat oil in a deep skillet to 350°F (175°C).",
            "Remove chicken from buttermilk and dredge in seasoned flour, coating thoroughly.",
            "Carefully place chicken in hot oil, don't overcrowd.",
            "Fry for 12-15 minutes per side until golden and internal temp reaches 165°F.",
            "Drain on paper towels.",
            "Serve hot with your favorite sides."
        ]
    },
    {
        id: 6,
        title: "Fluffy Buttermilk Pancakes",
        description: "Light, fluffy pancakes perfect for a weekend breakfast or brunch.",
        image: "https://images.unsplash.com/photo-1668507740203-0654d38b6201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMGJyZWFrZmFzdCUyMHN0YWNrfGVufDF8fHx8MTc2MTY2MzgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 4,
        ingredients: [
            "2 cups all-purpose flour",
            "2 tbsp sugar",
            "2 tsp baking powder",
            "1 tsp baking soda",
            "1/2 tsp salt",
            "2 cups buttermilk",
            "2 large eggs",
            "1/4 cup melted butter",
            "Butter and maple syrup for serving"
        ],
        instructions: [
            "In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.",
            "In another bowl, whisk buttermilk, eggs, and melted butter.",
            "Pour wet ingredients into dry ingredients and stir until just combined (lumps are okay).",
            "Heat a griddle or skillet over medium heat and lightly grease.",
            "Pour 1/4 cup batter for each pancake onto the griddle.",
            "Cook until bubbles form on surface, about 2-3 minutes.",
            "Flip and cook until golden brown, another 2 minutes.",
            "Serve hot with butter and maple syrup."
        ]
    },
    {
        id: 7,
        title: "Classic Caesar Salad",
        description: "Crisp romaine lettuce with creamy Caesar dressing, croutons, and Parmesan.",
        image: "https://images.unsplash.com/photo-1585285072892-a52481577926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzYxNzQzNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "15 mins",
        cookTime: "0 mins",
        servings: 4,
        ingredients: [
            "2 heads romaine lettuce, chopped",
            "1 cup croutons",
            "1/2 cup grated Parmesan cheese",
            "1/2 cup mayonnaise",
            "2 tbsp lemon juice",
            "2 cloves garlic, minced",
            "2 tsp Dijon mustard",
            "2 tsp Worcestershire sauce",
            "1/4 cup olive oil"
        ],
        instructions: [
            "In a small bowl, whisk together mayonnaise, lemon juice, garlic, Dijon, and Worcestershire sauce.",
            "Slowly drizzle in olive oil while whisking to emulsify.",
            "Season dressing with salt and pepper to taste.",
            "Place chopped romaine in a large bowl.",
            "Add dressing and toss to coat evenly.",
            "Add croutons and half the Parmesan, toss again.",
            "Top with remaining Parmesan.",
            "Serve immediately."
        ]
    },
    {
        id: 8,
        title: "New England Clam Chowder",
        description: "A rich and creamy soup loaded with clams, potatoes, and bacon.",
        image: "https://images.unsplash.com/photo-1593980235000-5cf185e8df10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFtJTIwY2hvd2RlciUyMHNvdXB8ZW58MXx8fHwxNzYxNzQzNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "15 mins",
        cookTime: "30 mins",
        servings: 6,
        ingredients: [
            "4 slices bacon, chopped",
            "1 onion, diced",
            "2 celery stalks, diced",
            "3 cloves garlic, minced",
            "3 cups diced potatoes",
            "3 cups clam juice",
            "2 cans (10 oz each) chopped clams",
            "2 cups heavy cream",
            "Salt, pepper, and thyme to taste"
        ],
        instructions: [
            "Cook bacon in a large pot until crispy. Remove and set aside.",
            "In the same pot, sauté onion and celery until softened, about 5 minutes.",
            "Add garlic and cook for 1 minute.",
            "Add potatoes and clam juice, bring to a boil.",
            "Reduce heat and simmer until potatoes are tender, about 15 minutes.",
            "Add clams with their juice and heavy cream.",
            "Season with salt, pepper, and thyme.",
            "Simmer for 5 more minutes. Serve topped with crispy bacon."
        ]
    },
    {
        id: 9,
        title: "Classic Meatloaf",
        description: "A hearty, flavorful meatloaf topped with tangy ketchup glaze.",
        image: "https://images.unsplash.com/photo-1581597096506-acefe678d02b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0bG9hZiUyMGRpbm5lciUyMHBsYXRlfGVufDF8fHx8MTc2MTc0MzUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "15 mins",
        cookTime: "1 hour",
        servings: 6,
        ingredients: [
            "2 lbs ground beef",
            "1 cup breadcrumbs",
            "1 onion, finely diced",
            "2 eggs",
            "1/2 cup milk",
            "2 cloves garlic, minced",
            "1 tsp Worcestershire sauce",
            "Salt and pepper to taste",
            "1/2 cup ketchup (for topping)"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "In a large bowl, combine ground beef, breadcrumbs, onion, eggs, milk, garlic, Worcestershire sauce, salt, and pepper.",
            "Mix gently until just combined (don't overmix).",
            "Shape mixture into a loaf and place in a baking dish.",
            "Spread ketchup evenly over the top.",
            "Bake for 1 hour until internal temperature reaches 160°F.",
            "Let rest for 10 minutes before slicing.",
            "Serve with mashed potatoes and green beans."
        ]
    },
    {
        id: 10,
        title: "Chocolate Chip Cookies",
        description: "Soft and chewy cookies loaded with chocolate chips - an American classic.",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjaGlwJTIwY29va2llc3xlbnwxfHx8fDE3NjE2NjA5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: 24,
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, cream together butter and both sugars until fluffy.",
            "Beat in eggs and vanilla extract.",
            "Gradually stir in flour mixture until just combined.",
            "Fold in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 10-12 minutes until golden. Cool on wire racks."
        ]
    }
];
