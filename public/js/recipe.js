$(document).ready(() => {

    // Get logged in user's data
    let user = $.get("/api/user_data").then(function (data) {
        console.log('user.email: ', data.email);
        console.log('user.id: ', data.id);
        return data;
    });

    // ********** Event listeners ***********
    let currentRecipeId;
    $(document).on('click', (event) => {

        // Click on any category name
        if ($(event.target).attr('class') === 'categoryLink') {

            // Get the Recipes within the category
            $.ajax({
                method: "GET",
                url: `/api/recipe/category/${event.target.text}`
            }).then((recipes) => {
                console.log(`Recipes within ${event.target.text}: `, recipes);

                // Empty the RecipesCards area
                $('#recipesCards').empty();

                // Create the Recipe cards
                recipes.forEach((recipe) => {
                    // data-toggle="modal" data-target="#recipeModal"
                    let card = `
                <div class="card" style="width: 12rem;">
                    <img src="${recipe.thumbnail}" class="card-img-top" alt="${recipe.title} recipe image" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="#" class="modalTrigger" recipeId="${recipe.id}">${recipe.title}</a></h5>
                    </div>
                </div>
                `;
                    $('#recipesCards').append(card);
                });
            });
        }

        // Click on the modal
        else if ($(event.target).attr('class') == 'modalTrigger') {

            // Get Recipe details by its id
            $.ajax({
                method: "GET",
                url: `/api/recipes/${$(event.target).attr('recipeId')}`
            }).then((recipe) => {
                console.log('Modal recipe: ', recipe);

                // Empty the modal area
                $('.modal-body').empty();

                // Create the modal recipe card
                let modalRecipeCard = `
                <div class="card">
                    <img src="${recipe.thumbnail}" class="card-img-top" alt="${recipe.thumbnail}" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="#" class="modalTrigger" recipeId="${recipe.id}">${recipe.title}</a></h5>
                        <p class="card-text"> <strong> Subtitle </strong> ${recipe.categories}</p>
                        <p class="card-text"> <strong> Cooking_time </strong> ${recipe.cooking_time}</p>
                        <p class="card-text"> <strong> Ingredients </strong> ${recipe.ingredients}</p>
                        <p class="card-text"> <strong> Servings </strong> ${recipe.Servings}</p>

                    </div>
                </div>
                `;
                $('.modal-body').append(modalRecipeCard);

                // Display the modal
                $('#recipeModal').modal();

                currentRecipeId = recipe.id;
            });
        }

    });




    // Load the recipes
    $.ajax({
        method: "GET",
        url: "/api/recipes/"
    }).then((recipes) => {
        // console.log('recipe: ', recipe);

        // Create the list of categories
        let categories = recipes.map((recipe) => {
            return recipe.categories;
        });
        // console.log('Categories: ', categories);

        let uniqueCategories = Array.from(new Set(categories));

        // console.log('uniqueCategories: ', uniqueCategories);

        uniqueCategories.forEach((category) => {
            let li = $('<li>');
            let a = $('<a>');
            a.attr('href', `#`);
            a.attr('class', 'categoryLink');
            a.text(category);
            li.append(a);
            $('#categories').append(li);
        });
    });
});