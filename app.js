document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.getElementById('add-recipe-form');
    const recipeList = document.getElementById('recipes');

    // Cargar recetas almacenadas en localStorage al cargar la página
    loadRecipes();

    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Obtener valores del formulario
        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        // Validar que los campos no estén vacíos
        if (recipeName && ingredients && instructions) {
            // Crear nuevo elemento de receta
            const recipeItem = document.createElement('li');
            recipeItem.innerHTML = `<strong>${recipeName}</strong><br><em>Ingredientes:</em> ${ingredients}<br><em>Instrucciones:</em> ${instructions}`;

            // Agregar la nueva receta a la lista
            recipeList.appendChild(recipeItem);

            // Limpiar el formulario
            recipeForm.reset();

            // Guardar la nueva receta en localStorage
            saveRecipe(recipeName, ingredients, instructions);
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Función para cargar recetas almacenadas en localStorage
    function loadRecipes() {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        
        recipes.forEach((recipe) => {
            const recipeItem = document.createElement('li');
            recipeItem.innerHTML = `<strong>${recipe.name}</strong><br><em>Ingredientes:</em> ${recipe.ingredients}<br><em>Instrucciones:</em> ${recipe.instructions}`;
            
            recipeList.appendChild(recipeItem);
        });
    }

    // Función para guardar una receta en localStorage
    function saveRecipe(name, ingredients, instructions) {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const newRecipe = { name, ingredients, instructions };
        recipes.push(newRecipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }
});
