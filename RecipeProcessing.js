let imageNames = [];
recipes.forEach(function(recipe) {
    imageNames.push(recipe.image)
})
console.log(imageNames)

let mapedImageNames = recipes.map(recipe => recipe.image)
console.log(mapedImageNames)

let recipeNames = recipes.map(function(recipe) {
    return recipe.name
})
console.log(recipeNames)

let searchCategory = "Dinner"
let dinners = recipes.filter(recipes => recipes.category === searchCategory)
let dinnersCount = dinners.length
console.log(`you have ${dinnersCount} recipes in the ${searchCategory.toLowerCase()} catergory`)

let mealTypesCount = {}

for (const mealType of recipes) {
    mealTypesCount[mealType.category] = mealTypesCount[mealType.category] ? mealTypesCount[mealType.category] + 1 : 1;
}
console.log(mealTypesCount)

let recipeCount = recipes.length
let recipeWithSearchedIngredient = 0
let searchIngredient = "milk"


function ingredientTally(searchIngredient) {
    for (const recipe of recipes) {
        for (const ingredient of recipe.ingredients) {
            if (ingredient.includes(searchIngredient)) {
                recipeWithSearchedIngredient++
            }
        }
    }
}
ingredientTally(searchIngredient)
let recipeIngredientPercentage = Math.floor((recipeWithSearchedIngredient / recipeCount) * 100)
console.log(`number of recipes: ${recipeCount}`)
console.log(`recipies with ${searchIngredient}: ${recipeWithSearchedIngredient}`)
console.log(`percent of recipes with ${searchIngredient}: ${recipeIngredientPercentage}%`)


// Recipe Data
const recipes = [{
        "image": "CheeseBiscuit",
        "name": "Cheese Biscuits",
        "category": "Breakfast",
        "favourite": true,
        "ingredients": [
            "1 1/2 cups white flour",
            "1/2 cups brown flour",
            "1 Tbsp baking powder",
            "1 tsp salt",
            "1/4 cups oil or butter",
            "1/4 cup of plain yogurt or sour cream",
            "5-6 Slices of cheese cut into cubes",
            "1/2 cup of milk"
        ],
        "directions": [
            "Preheat oven to 450 degrees F.",
            "Mix dry ingredients together with a pastry cutter until well mixed into pea sized granules",
            "Add cheese, milk, and sour cream",
            "Mix and kneed until it's all combined into a smooth dough",
            "Roll out tilts about 1/2 inch thick",
            "Cut into biscuits about 2 1/4 inch diameter",
            "Bake in preheated oven for 11 minutes, or until golden brown."
        ]
    },
    {
        "image": "SheperdsPie",
        "name": "Shepherds Pie",
        "category": "Dinner",
        "favourite": true,
        "ingredients": [
            "MEAT FILLING:",
            "2 tablespoons olive oil",
            "1 cup chopped yellow onion",
            "1 lb. 90% lean ground beef -or ground lamb",
            "2 teaspoons dried parsley leaves",
            "1 teaspoon dried rosemary leaves",
            "1 teaspoon dried thyme leaves",
            "1/2 teaspoon salt",
            "1/2 teaspoon ground black pepper",
            "1 tablespoon Worcestershire sauce",
            "2 garlic cloves -minced",
            "2 tablespoons all purpose flour",
            "2 tablespoons tomato paste",
            "1 cup beef broth",
            "1 cup frozen mixed peas & carrots",
            "1/2 cup frozen corn kernels",
            "POTATO TOPPING:",
            "1 ½ - 2 lb. russet potatoes -about 2 large potatoes peeled and cut into 1 inch cubes",
            "8 tablespoons unsalted butter -1 stick",
            "1/3 cup half & half",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon salt",
            "1/4 teaspoon ground black pepper",
            "1/4 cup parmesan cheese"
        ],
        "directions": [
            "MAKE THE MEAT FILLING.",
            "Add the oil to a large skillet and place it over medium-high heat for 2 minutes. Add the onions. Cook 5 minutes, stirring occasionally.",
            "Add the ground beef (or ground lamb) to the skillet and break it apart with a wooden spoon. Add the parsley, rosemary, thyme, salt, and and pepper. Stir well. Cook for 6-8 minutes, until the meat is browned, stirring occasionally.",
            "Add the Worcestershire sauce and garlic. Stir to combine. Cook for 1 minute.",
            "Add the flour and tomato paste. Stir until well incorporated and no clumps of tomato paste remain.",
            "Add the broth, frozen peas and carrots, and frozen corn. Bring the liquid to a boil then reduce to simmer. Simmer for 5 minutes, stirring occasionally.",
            "Set the meat mixture aside. Preheat oven to 400 degrees F.",
            "MAKE THE POTATO TOPPING.",
            "Place the potatoes in a large pot. Cover the potatoes with water. Bring the water to a boil. Reduce to a simmer. Cook until potatoes are fork tender, 10-15 minutes.",
            "Drain the potatoes in a colander. Return the potatoes to the hot pot. Let the potatoes rest in the hot pot for 1 minute to evaporate any remaining liquid.",
            "Add butter, half & half, garlic powder, salt, and pepper. Mash the potatoes and stir until all the ingredients are mixed together.",
            "Add the parmesan cheese to the potatoes. Stir until well combined.",
            "ASSEMBLE THE CASSEROLE.",
            "Pour the meat mixture into a 9x9 (or 7x11) inch baking dish. Spread it out into an even layer. Spoon the mashed potatoes on top of the meat. Carefully spread into an even layer.",
            "If the baking dish looks very full, place it on a rimmed baking sheet so that the filling doesn’t bubble over into your oven. Bake uncovered for 25-30 minutes.** Cool for 15 minutes before serving."
        ]
    },
    {
        "image": "BananaBread",
        "name": "Chocolate Chip Banana Bread",
        "category": "Dessert",
        "favourite": false,
        "ingredients": [
            "6 ripe bananas, mashed",
            "1/2 cup melted butter",
            "1/2 cup canola oil (or coconut oil)",
            "1 cup sugar",
            "1 cup brown sugar",
            "2 eggs beaten",
            "1 tsp salt",
            "2 tsp baking soda",
            "4 cups flour",
            "1 bag dark chocolate chips"
        ],
        "directions": [
            "Pre-heat oven to 350F",
            "Mix in order.",
            "Fill two greased loaf pans 3/4 full. Can also bake these as cupcakes",
            "Bake about 20 minutes"
        ]
    },
    {
        "image": "Waffle",
        "name": "Waffles",
        "category": "Breakfast",
        "favourite": false,
        "ingredients": [
            "2 cups all-purpose flour",
            "1 teaspoon salt",
            "4 teaspoons baking powder",

            "2 tablespoons white sugar",
            "2 eggs",
            "1 1/2 cups warm milk",
            "1/3 cup butter, melted",
            "1 teaspoon vanilla extract"
        ],
        "directions": [
            "Mix in order",
            "Fill waffle iron just below peaks"
        ]
    },
    {
        "image": "Pancake",
        "name": "Pancakes",
        "category": "Breakfast",
        "favourite": false,
        "ingredients": [
            "1 1/2 cups all-purpose flour",
            "1/2 teaspoon salt",
            "3 1/2 teaspoons baking powder",

            "1 tablespoons white sugar",
            "1 egg",
            "1 1/4 cups warm milk",
            "3 tablespoons butter, melted",
            "1 teaspoon vanilla extract"
        ],
        "directions": [
            "Mix in order",
            "Poor onto hot pan in hockey puck sized disks",
            "flip when surface bubbles",
            "remove once pancakes slide freely"
        ]
    },
    {
        "image": "Twix",
        "name": "Twix Bar",
        "category": "Dessert",
        "favourite": false,
        "ingredients": [
            "SHORTBREAD COOKIE BASE:",
            "2 cups (300g) all-purpose flour",
            "3/4 cup  (100g) powdered sugar",
            "1 cup (225g) salted butter, softened",
            "1 teaspoon (10g) vanilla extract",
            "CARAMEL:",
            "1.25 cups (195g) light brown sugar",
            "1.25 cups (370g) light corn syrup",
            "14 ounces (397g) sweetened condensed milk",
            "1 cup (227g) butter ",
            "1 vanilla bean pod scraped",
            "CHOCOLATE COATING:",
            "12 oz semi-sweet chocolate, finely chopped"
        ],
        "directions": [
            "SALTED BUTTER SHORTBREAD COOKIE BASE:",
            "Pre-heat oven at 325F",
            "Place flour and powdered sugar in a bowl and mix; add the butter, use a pastry cutter or two forks, and cut the butter until you get a crumbly-shaggy dough. Next, add vanilla extract, switch to a spatula and repeatedly fold the mixture together until you get a soft dough. ",
            "Heavily spray a 9 x 13 baking dish with non-stick cooking spray.",
            "Place your dough in the baking dish, and press it until it coats the bottom evenly—Bake for 15 to 20 minutes, or until lightly golden and dry. ",
            "Take it out, and cool down completely.",
            "CARAMEL: ",
            "Place brown sugar, corn syrup, condensed milk, and butter in a medium saucepot set it up to medium-high, bring it to a boil, stirring occasionally, and let it reduce until it reaches 235F; turn it off.  ",
            "Add the vanilla and mix. ",
            "Pour the caramel (hot) over the shortbread, let it cool down, cover with plastic wrap, and let it sit in the fridge for two hours or overnight. ",
            "Using a bench scraper or a sharp knife, run it around the edges until you’ve loosened your candy from the baking pan. ",
            "Remove the candy and cut it into 3.5” by 1” bars, starting by cutting one inch long wide bars and then cutting those bars in half.",
            "CHOCOLATE COATING: ",
            "In a heat-proof glass bowl, place the chocolate in the microwave on high for 30 seconds, stir, put it back for 30 more seconds, stir, put it back for 15 seconds, and check the temperature to ensure it does not go above 90F. (If it is close to that temperature, keep stirring until it melts or put it back in the microwave for ten more seconds)",
            "Dip your bars into the melted chocolate, coat thoroughly, remove with a fork and drain on chopsticks. (optional)",
            "Place it in a Silpat (silicone baking mat) and top with flaky smoked salt. Cool down until hardened, and trim the edges."
        ]
    },
    {
        "image": "HamSteak",
        "name": "Ham Steak with Brown Sugar Glaze",
        "category": "Dinner",
        "favourite": true,
        "ingredients": [
            "1 ham steak (1–1 1/4 lbs)",
            "1/4 cup brown sugar",
            "1/4 cup honey",

            "1 tablespoon Dijon mustard",
            "1 teaspoon apple cider vinegar"
        ],
        "directions": [
            "Preheat grill to medium or 350 degrees. In a saucepan over low heat combine the brown sugar, honey, Dijon mustard and cider vinegar.  Simmer over low heat until the brown sugar is dissolved.",
            "Place the ham steak on the grill over direct heat and brush the top with brown sugar glaze.  Once basted flip and baste the other side.  Close lid and cook for 4 minutes. Flip once again and baste the top.  Again close the lid and cook for 4 minutes."
        ]
    },
    {
        "image": "BeefStew",
        "name": "Beef Stew",
        "category": "Dinner",
        "favourite": false,
        "ingredients": [
            "3 pounds boneless beef chuck (well-marbled) cut into 1-1\/2-inch pieces",
            "2 teaspoons salt", "* 1 teaspoon freshly ground black pepper",
            "3 tablespoons olive oil",
            "2 medium yellow onions, cut into 1-inch chunks", "* 7 cloves garlic, peeled and smashed",
            "2 tablespoons balsamic vinegar",
            "* 1-1/2 tablespoons tomato paste",
            "1/4 cup all-purpose flour", "* 2 cups dry red wine",
            "2 cups beef broth",
            "2 cups water",
            "1 bay leaf",
            "1/2 teaspoon dried thyme",
            "1-1/2 teaspoons sugar",
            "4 large carrots, peeled and cut into one-inch chunks on a diagonal",
            "1 pound small white boiling potatoes (baby yukons), cut in half",
            "Fresh chopped parsley, for serving (optional)"
        ],
        "directions": [
            "Preheat the oven to 325F and set a rack in the lower middle position.",
            "Pat the beef dry and season with the salt and pepper.",
            "In a large Dutch oven or heavy soup pot, heat 1 tablespoon of the olive oil over medium-high heat until hot and shimmering. Brown the meat in 3 batches, turning with tongs, for about 5 minutes per batch; add one tablespoon more oil for each batch. (To sear the meat properly, do not crowd the pan and let the meat develop a nice brown crust before turning with tongs.) Transfer the meat to a large plate and set aside.",
            "Add the onions, garlic and balsamic vinegar; cook, stirring with a wooden spoon and scraping the brown bits from bottom of the pan, for about 5 minutes.",
            "Add the tomato paste and cook for a minute more. ",
            "Add the beef with its juices back to the pan and sprinkle with the flour. Stir with wooden spoon until the flour is dissolved, 1 to 2 minutes. ",
            "Add the wine, beef broth, water, bay leaf, thyme, and sugar. Stir with a wooden spoon to loosen any brown bits from the bottom of the pan and bring to a boil. Cover the pot with a lid, transfer to the preheated oven, and braise for 2 hours.",
            "Remove the pot from the oven and add the carrots and potatoes. Cover and place back in oven for about an hour more, or until the vegetables are cooked, the broth is thickened, and the meat is tender. ",
            "Fish out the bay leaf and discard, then taste and adjust seasoning, if necessary. Serve the stew warm -- or let it come to room temperature and then store in the refrigerator overnight or until ready to serve. This stew improves in flavor if made at least 1 day ahead. Reheat, covered, over medium heat or in a 350F oven. Garnish with fresh parsley, if desired."
        ]
    },
    {
        "image": "BlueberryScones",
        "name": "Blueberry Scones",
        "category": "Breakfast",
        "favourite": false,
        "ingredients": [
            "2 cups (241g) Flour",
            "1/2 teaspoon salt",
            "1/4 cup (50g) granulated sugar",
            "1 tablespoon (12g) baking powder",
            "6 tablespoons (85g) cold butter, cut into pieces",
            "1 cup (142g) fresh blueberries or Blueberry Jammy Bits",
            "2 large eggs, beaten",
            "1/4 cup (57g) yogurt, plain or flavored (vanilla is good)",
            "1 teaspoon vanilla extract",
            "1 tablespoon (6g) grated lemon rind (zest), or 1/4 teaspoon lemon oil",
            "1\/2 teaspoon almond extract",
            "2 tablespoons (36g) sparkling white sugar, for sprinkling on top"
        ],
        "directions": [
            "Preheat the oven to 375F. Lightly grease a baking sheet, or line with parchment.",
            "Whisk the dry ingredients in a bowl.",
            "Add the butter and work it into the dry ingredients until the mixture is unevenly crumbly; use your fingers, a pastry blender, or an electric mixer.",
            "Gently mix the blueberries with the dry ingredients.",
            "Stir together the eggs, yogurt, vanilla extract, lemon zest or oil, and almond extract. Add to the dry ingredients and stir very gently, just until combined. The dough is more moist than traditional scone dough; it should be soft and scoopable, like cookie dough.",
            "Use a muffin scoop, jumbo cookie scoop, or 1/4-cup measure to scoop the dough onto the prepared sheet in scant 1/4-cupfuls, leaving about 2 inches between each.",
            "Brush each ball of dough with a bit of milk or cream, and sprinkle with coarse sparkling sugar.",
            "Bake the scones for 20 to 24 minutes, or until lightly browned and a cake tester or toothpick inserted into a scone comes out dry.",
            "Remove from the oven, and serve warm. To reheat, wrap loosely in aluminum foil, and bake in a preheated 350F oven for about 8 to 10 minutes.",
            "Store scones, well wrapped, at room temperature for several days. Freeze for longer storage."
        ]
    },
    {
        "image": "FrenchFries",
        "name": "French Fries",
        "category": "Dinner",
        "favourite": false,
        "ingredients": ["Potato"],
        "directions": ["Peel and rinse the potatoes. Then cut them into sticks by cutting the potato in 4 or 5 vertical pieces, and then cutting each piece into sticks.",
            "Place them in a large bowl and cover with cold water. Allow them to soak, 2 to 3 hours. (You can also stick them in the fridge and let them soak overnight.)",
            "When you're ready to make the fries, drain off the water and lay the potatoes on 2 baking sheets lined with paper towels. Blot with paper towels to dry them.",
            "Heat a few inches of oil in a heavy pot to 300 degrees F. In 3 or 4 batches, cook the potatoes until soft, 4 to 5 minutes per batch. They should not be brown at this point! You just want to start the cooking process. Remove each batch and drain on new/dry paper towels.",
            "Once all the potatoes have been fried at 300 degrees F, turn up the heat until the oil reaches 400 degrees F. When the oil's hot, start frying the potatoes in batches again, cooking until the fries are golden and crisp. Remove the potatoes from the oil and drain on paper towels.",
            "Sprinkle with sea salt and dive in!"
        ]
    },
    {
        "image": "SousVideSteak",
        "name": "Sous Vide Steak",
        "category": "Dinner",
        "favourite": false,
        "ingredients": ["Steak", "Salt", "Pepper"],
        "directions": ["Season the Steak: Rub the steak with 1/2 tablespoon oil on all sides.",
            "Season both sides with salt, pepper, minced garlic and optional herbs.",
            "Sous Vide Steak: Add water to the sous vide container or a large pot, set the Sous Vide Precision Cooker to (135°F/56°C) for medium doneness. If you’d like to cook it more or less, see the chart",
            "Add the seasoned steak to a zip-lock bag.",
            "Vacuum-seal the bag using 'water displacement' technique: Seal all but one corner of the bag, and slowly place it into a container with water. Make sure everything below the zip-line is covered by water. Then seal the rest of the bag.",
            "Place the bag into the water bath in the sous vide container. Make sure it is fully submerged.",
            "Cook for 1 hour for a 1-inch steak. (It takes 1.5 hours for 1.5 inches, and 2 hours for 2 inches.)",
            "Sear the steak: When your steak is cooked in the sous vide machine, remove the bag from the water bath and transfer it to the fridge or an ice bath. Let it chill for about 10 minutes.",
            "Remove the steak from the ziploc bag and wipe off the moisture with paper towels.",
            "Season with more salt and pepper if necessary.",
            "Place the cast-iron skillet on medium-high heat. Add the remaining olive oil. Once hot, add the steak and sear about 1 minute per side until nicely browned.",
            "Slice against the grain and serve with potatoes and veggies."
        ]
    },
    {
        "image": "ChocolateMacaroons",
        "name": "Chocolate Macaroons",
        "category": "Breakfast",
        "favourite": false,
        "ingredients": ["6 tablespoons cocoa", "1/2 cup butter", "1/2cup milk", "1 1/2 cups sugar", "1/2 teaspoon vanilla", "3 cups oatmeal", "1 cup shredded coconut"],
        "directions": ["Boil first 4 ingredients for 2 minutes.",
            "Remove from heat and add vanilla.",
            "Pour over oatmeal and coconut and mix well.",
            "Drop tsp fulls onto wax paper and wait until dry and easy to lift off paper."
        ]
    },
    {
        "image": "ChocolateChipCookies",
        "name": "Chocolate Chip Cookies",
        "category": "Dessert",
        "favourite": false,
        "ingredients": [
            "1 cup (2 sticks) unsalted butter, melted and cooled to room temperature (8 oz/226g)",
            "1¼ cups packed light brown sugar (9 oz/250g)",
            "¾ cup granulated sugar (6 oz/175g)",
            "2½ cups all-purpose flour, spooned and leveled *(see note below)* (10.5 oz/300g)",
            "1½ tsp kosher salt or ¾ teaspoon fine sea salt",
            "1 tsp baking soda",
            "2 large eggs",
            "2 tsp vanilla extract",
            "12-ounce bag (2 cups) semisweet or bittersweet chocolate chips",
            "Flaky sea salt"
        ],
        "directions": [
            "Whisk the flour, salt, and baking soda in a medium bowl. Set aside.",
            "Whisk both sugars in a large bowl and make sure to break up any large chunks. If there are any stubborn lumps, break them up with your fingertips. Add the melted butter and whisk vigorously for about 1 minute, until the mixture forms one mass and starts to pull away from the sides of the bowl. Scrape the sides of the bowl with a flexible spatula.",
            "Whisk in one egg to the sugar-butter mixture, stirring until it's fully mixed in. Scrape the sides of the bowl with your spatula. Whisk in the second egg and the vanilla and scrape the sides of the bowl again.",
            "Add the dry ingredients to the wet and stir with the spatula to fully combine. Make sure you've scraped the bottom of the bowl and there are no streaks of dry ingredients left. Stir in the chocolate chips.",
            "To bake right away: Preheat the oven to 375ºF. Refrigerate the dough for at least 10 minutes while the oven preheats, then scoop the dough in 2-ounce portions with a cookie scoop (or you can measure out ¼ cup/4 tablespoon scoops with your hands) and sprinkle with flaky sea salt. Bake the cookies 3 inches apart on a parchment-lined baking sheet (about 6 cookies per baking sheet) for 10 to 14 minutes, until the edges are set and the cookie is beginning to turn golden brown throughout. Let cool on the sheet for 5 minutes, then transfer to a wire rack to cool completely.",
            "To bake after the dough rests (recommended): Scoop the dough into 2-ounce portions with a cookie scoop (or you can measure out ¼ cup/4 tablespoon scoops with your hands) and place on a parchment-lined baking sheet. Wrap the baking sheet tightly with plastic wrap and refrigerate for at least 4 hours and up to 3 days. You can also freeze the chilled balls of dough in an airtight zip-top bag for up to 1 month.",
            "Thirty minutes before baking, preheat the oven to 375ºF. Sprinkle the dough with flaky sea salt and bake 3 inches apart on a parchment-lined baking sheet for 12 to 16 minutes, until the edges are set and the cookie is beginning to turn golden brown throughout. Let cool on the sheet for 5 minutes, then transfer to a wire rack to cool completely."
        ]
    },
    {
        "image": "PeanutButterCookies",
        "name": "Peanut Butter Cookies",
        "category": "Dessert",
        "favourite": false,
        "ingredients": [
            "FILLING:",
            "2/3 cup (170 grams) creamy peanut butter",
            "2/3 cup (80 grams) powdered sugar",
            "Two pinches of flaky sea salt",
            "COOKIE:",
            "1/2 cup (115 grams or 4 ounces) unsalted butter, at room temperature for a mixer, cold is fine for food processor",
            "1/2 cup (100 grams) granulated sugar, plus more to coat cookies",
            "1/2 cup (95 grams) dark brown sugar",
            "1/4 cup (65 grams) creamy peanut butter",
            "1 large egg",
            "1 teaspoon (5 ml) vanilla extract",
            "1 1/3 cups (175 grams) all-purpose flour",
            "2/3 cup (55 grams) dutched cocoa powder (see note)",
            "2 teaspoons baking powder",
            "1/4 teaspoon fine sea or table salt"
        ],
        "directions": [
            "Heat oven: To 375 degrees F.",
            "Make filling: Line a small tray or plate with parchment paper. In a medium bowl, mix peanut butter, powdered sugar, and salt with a fork; it’s a little messy but it will come together. Once evenly mixed, use a teaspoon measure to scoop heaped teaspoons of filling into little balls. Spread them out on prepared tray or plate. Once you’ve used all the filling, put the tray in the freezer while you make the cookie portion.",
            "Make cookie with a hand or stand mixer: Beat softened butter with peanut butter and sugars until creamed together. Add vanilla, egg, and salt, and beat until combined. Sift in baking powder and cocoa, beat to combine, then add flour and mix until flour disappears.",
            "Assemble cookies: Place 1 to 2 tablespoons extra granulated sugar in a small bowl. Line a large baking sheet with parchment paper. Take a scoop of cookie dough that’s just shy of 2 tablespoons (a #40 scoop holds 1.75 tablespoons and is perfect for this) and place it in the palm of your hand. Flatten it with your fingers. Take a peanut butter filling from the freezer and place it in the center, and wrap the chocolate dough around, rolling it in your palms until smooth. Roll it in the granulated sugar to coat, place it on your prepared baking sheet and gently flatten the cookie, just slightly, with your fingers. Repeat with remaining dough.",
            "Bake cookies: For 8 to 10 minutes. This is going to seem like really little time, and the cookies are definitely going to look underbaked, but remember that we are just baking a thin outer shell of a cookie (the center doesn’t need to be baked), and this does not take long. Let cookies rest and set up on baking sheet for 5 minutes before transferring to cooling rack to cool."
        ]
    },
    {
        "image": "Lasagna",
        "name": "Lasagna",
        "category": "Dinner",
        "favourite": false,
        "ingredients": [
            "1/2 bag of frozen cheese ravioli (25 oz bag is what I used)",
            "1/2 lb of ground beef, browned",
            "2 cans of crushed tomatoes (14 or 15 oz each)",
            "1/2 tablespoon of Italian Seasoning",
            "1/2 tablespoon of Garlic Salt",
            "2 cups of mozzarella cheese",
            "1/4 cup parmesan cheese (optional)"
        ],
        "directions": [
            "Preheat oven to 350 degrees. In a large skillet, brown the beef completely and drain off any remaining fat.",
            "Stir in all the cans of tomatoes and seasonings.",
            "In a 9×9 baking dish, spray with nonstick spray.",
            "Place a layer of ravioli across the bottom.",
            "Spoon half the sauce over the ravioli.",
            "Then layer half of the mozzarella cheese.",
            "Add another layer of ravioli, sauce, then cheese.",
            "Add the parmesan cheese on top.",
            "Bake at 350 degrees for 35-45 minutes or until bubbly.",
            "Remove from the oven and let it sit for about 10-15 minutes before you serve. Cut and serve.",
            "Serve with your favorite side salad and crusty garlic bread."
        ]
    },
    {
        "image": "BreadPudding",
        "name": "Bread Pudding",
        "category": "Dessert",
        "favourite": false,
        "ingredients": [
            "6 slices day-old bread",
            "2 tablespoons butter, melted",
            "1/2 cup raisins (optional)",
            "4 eggs, beaten",
            "2 cups milk",
            "3/4 cup white sugar",
            "1 teaspoon ground cinnamon",
            "1 teaspoon vanilla extract"
        ],
        "directions": [
            "Preheat oven to 350 degrees F (175 degrees C).",
            "Break bread into small pieces into an 8 inch square baking pan. Drizzle melted butter or margarine over bread. If desired, sprinkle with raisins.",
            "In a medium mixing bowl, combine eggs, milk, sugar, cinnamon, and vanilla. Beat until well mixed. Pour over bread, and lightly push down with a fork until bread is covered and soaking up the egg mixture.",
            "Bake in the preheated oven for 45 minutes, or until the top springs back when lightly tapped."
        ]
    },
    {
        "image": "NoBakeChocolateOatBars",
        "name": "No-Bake Chocolate Oat Bars",
        "category": "Dessert",
        "favourite": false,
        "ingredients": [
            "225 g butter",
            "110 g packed brown sugar",
            "5 ml vanilla extract",
            "245 g quick cooking oats",
            "170 g semisweet chocolate chips",
            "130 g peanut butter"
        ],
        "directions": [
            "Grease a 9x9 inch square pan.",
            "Melt butter in a large saucepan over medium heat. Stir in brown sugar and vanilla. Mix in the oats. Cook over low heat for 2 to 3 minutes, or until the ingredients are well blended.",
            "Press half of the mixture into the bottom of the prepared pan. Reserve the other half for topping.",
            "Meanwhile, melt chocolate chips and peanut butter in a small heavy saucepan over low heat, stirring frequently until smooth.",
            "Pour the chocolate mixture over the crust in the pan and spread evenly with a knife or the back of a spoon.",
            "Crumble the remaining oat mixture over the chocolate layer, pressing it in gently.",
            "Cover and refrigerate for 2 to 3 hours or overnight.",
            "Bring to room temperature before cutting into bars."
        ]
    },
    {
        "image": "PineappleBarbecueChicken",
        "name": "Pineapple Barbecue Chicken",
        "category": "Dinner",
        "favourite": false,
        "ingredients": [
            "1 pound (4 ounces each) boneless, skinless chicken breasts",
            "salt and fresh ground pepper, to taste",
            "1/2 cup low sugar honey barbecue sauce (or you can use your favorite low sugar barbecue sauce), divided",
            "1 can (20 ounces) pineapple chunks, drained",
            "1/2 tablespoon extra virgin olive oil"
        ],
        "directions": [
            "Season chicken breasts with salt and pepper.",
            "Grease a baking dish with cooking spray.",
            "Arrange chicken in the baking dish and top with 1/3 of the barbecue sauce; rub in the barbecue sauce and top with pineapple chunks.",
            "Add the remaining barbecue sauce on top and cover with plastic wrap.",
            "Place in the fridge for 30 minutes to 2 hours.",
            "When ready to bake, preheat oven to 400F.",
            "Remove the plastic wrap.",
            "Drizzle olive oil over the chicken.",
            "Bake uncovered for 40 minutes, or until the chicken's internal temperature reads 165F.",
            "Remove from the oven and serve."
        ]
    },
    {
        "image": "LoadedPotatoBuffaloChickenCasserole",
        "name": "Loaded Potato and Buffalo Chicken Casserole",
        "category": "Dinner",
        "favourite": false,
        "ingredients": [
            "2 pounds boneless chicken breasts, cubed (1\")",
            "8-10 medium potatoes, cut in 1/2\" cubes",
            "1/3 cup olive oil",
            "1&1/2 tsp salt",
            "1 Tbsp. black pepper",
            "1 Tbsp. paprika",
            "2 Tbsp. garlic powder",
            "6 Tbsp. hot sauce",
            "2 cups fiesta blend cheese",
            "1 cup crumbled bacon",
            "1 cup diced green onion"
        ],
        "directions": [
            "Preheat oven to 500 degrees.",
            "Spray a 9X13\" baking dish with cooking spray.",
            "In a large bowl, mix together the olive oil, salt, pepper, paprika, garlic powder, and hot sauce.",
            "Add the cubed potatoes and stir to coat.",
            "Carefully scoop the potatoes into the prepared baking dish, leaving behind as much of the olive oil/hot sauce mixture as possible.",
            "Bake the potatoes for 45-50 minutes, stirring every 10-15 minutes, until cooked through and crispy and browned on the outside.",
            "While the potatoes are cooking, add the cubed chicken to the bowl with the leftover olive oil/hot sauce mixture and stir to coat.",
            "Once the potatoes are fully cooked, remove from the oven and lower the oven temperature to 400 degrees.",
            "Top the cooked potatoes with the raw marinated chicken.",
            "In a bowl, mix together the cheese, bacon, and green onion, and top the raw chicken with the cheese mixture.",
            "Return the casserole to the oven and bake for 15 minutes or until the chicken is cooked through and the topping is bubbly and delicious.",
            "Serve with extra hot sauce and/or ranch dressing."
        ]
    },
    {
        "image": "BakedMacAndCheese",
        "name": "Baked Mac and Cheese",
        "category": "Dinner",
        "favourite": false,
        "ingredients": [
            "1/2 pound elbow macaroni",
            "3 tablespoons butter",
            "3 tablespoons flour",
            "1 tablespoon powdered mustard",
            "3 cups milk",
            "1/2 cup yellow onion, finely diced",
            "1 bay leaf",
            "1/2 teaspoon paprika",
            "1 large egg",
            "3 cups sharp cheddar, shredded",
            "1 teaspoon kosher salt",
            "Fresh black pepper",
            "1/4 cup bread crumbs"
        ],
        "directions": [
            "Preheat oven to 350 degrees F.",
            "In a large pot of boiling salted water, cook the pasta until al dente. Drain and set aside.",
            "In a separate pot, melt the butter. Whisk in the flour and powdered mustard and cook for about five minutes, whisking constantly to prevent lumps.",
            "Stir in the milk, onion, bay leaf, and paprika. Simmer for ten minutes, then remove the bay leaf.",
            "In a small bowl, beat the egg. Temper the egg by slowly adding a spoonful of the hot milk mixture, whisking constantly. Then, gradually add the tempered egg to the pot, whisking constantly.",
            "Stir in 3/4 of the shredded cheddar cheese until melted and smooth. Season with kosher salt and black pepper to taste.",
            "Fold the cooked macaroni into the cheese sauce until well coated. Pour the mixture into a 2-quart casserole dish.",
            "In a sauté pan, melt the remaining butter. Add the bread crumbs and toss to coat in the melted butter. Sprinkle the bread crumbs evenly over the macaroni and cheese.",
            "Bake the macaroni and cheese in the preheated oven for 30 minutes, or until the top is golden and the sauce is bubbly.",
            "Remove from the oven and let it rest for five minutes before serving.",
            "Serve hot and enjoy!"
        ]
    },
    {
        "image": "MashedPotatoes",
        "name": "Mashed Potatoes",
        "category": "Dinner",
        "favourite": false,
        "ingredients": [
            "1 ½ - 2 lb. russet potatoes (about 2 large potatoes), peeled and cut into 1-inch cubes",
            "8 tablespoons unsalted butter (1 stick)",
            "1/3 cup half & half",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon salt",
            "1/4 teaspoon ground black pepper",
            "1/4 cup grated Parmesan cheese"
        ],
        "directions": [
            "Place the potatoes in a large pot. Cover the potatoes with water.",
            "Bring the water to a boil. Reduce to a simmer. Cook until potatoes are fork tender, approximately 10-15 minutes.",
            "Drain the potatoes in a colander. Return the potatoes to the hot pot. Let the potatoes rest in the hot pot for 1 minute to evaporate any remaining liquid.",
            "Add butter, half & half, garlic powder, salt, and black pepper to the potatoes.",
            "Mash the potatoes and stir until all the ingredients are well mixed together.",
            "Add the grated Parmesan cheese to the potatoes. Stir until well combined.",
            "Taste and adjust seasonings if needed.",
            "Serve hot and enjoy!"
        ]
    },
    {
        "image": "CinnamonRockCandy",
        "name": "Cinnamon Rock Candy",
        "category": "Dessert",
        "favourite": false,
        "ingredients": [
            "1 cup water",
            "3-3/4 cups sugar",
            "1-1/4 cups light corn syrup",
            "1 teaspoon red liquid food coloring",
            "1 teaspoon cinnamon oil",
            "1/3 cup confectioners' sugar"
        ],
        "directions": [
            "Line a 15x10x1-in. pan with foil; butter the foil and set aside.",
            "In a large heavy saucepan, combine water, sugar, corn syrup, and food coloring. Bring to a boil over medium heat, stirring occasionally.",
            "Cover and cook for 3 minutes to dissolve sugar crystals.",
            "Uncover; cook on medium-high heat, without stirring, until a candy thermometer reads 300° (hard-crack stage), about 25 minutes.",
            "Remove from the heat; stir in cinnamon oil (keep face away from the mixture as the oil is very strong).",
            "Immediately pour onto the prepared pan. Cool completely, about 45 minutes.",
            "Break the candy into pieces using the edge of a metal mallet.",
            "Sprinkle both sides of the candy with confectioners' sugar.",
            "Store in an airtight container."
        ]
    },
    {
        "image": "WholeWheatBread",
        "name": "Whole Wheat Bread",
        "category": "Bread",
        "favourite": false,
        "ingredients": [
            "3 1/2 cups warm water",
            "1/4 cup honey",
            "2 tbsp. molasses",
            "1/2 cup vegetable oil",
            "2 eggs, beaten",
            "2 tbsp. lemon juice*",
            "4 tsp. salt",
            "7 cups ROGERS WHOLE GRAIN WHOLE WHEAT FLOUR",
            "3 1/2 – 4 1/2 cups ROGERS NO ADDITIVE or ALL PURPOSE FLOUR",
            "YEAST / HONEY MIXTURE",
            "1/2 cup warm water",
            "1 tsp. honey",
            "2 tbsp. active dry yeast"
        ],
        "directions": [
            "YEAST / HONEY MIXTURE: Dissolve yeast in 1 tsp. honey and 1/2 cup warm water and let stand for 10 minutes.",
            "Measure warm water into a large mixing bowl; add honey, molasses, oil, eggs, and lemon juice; mix well.",
            "Add yeast to the mixture and stir.",
            "Gradually add 5 cups whole wheat flour, beating well after each addition.",
            "Let stand 15-20 minutes until the mixture is very light.",
            "Stir in salt and add the remaining whole wheat flour and sufficient all-purpose flour to make a soft, workable dough.",
            "Turn the dough out on a lightly floured surface; knead 10-15 minutes until the dough is smooth and elastic.",
            "Place the dough in an oiled bowl, turning once to coat the dough with oil; cover with plastic wrap and let rise for 50 minutes, or until doubled in bulk.",
            "Punch down the dough and shape it into 4 balls. Cover and let rest 20 minutes.",
            "Form the dough into loaves and place them in greased 8 1/2″ x 4 1/2″ loaf pans.",
            "Brush the tops with oil, cover, and let rise 50-55 minutes.",
            "Bake in a 375°F (190°C) oven for 30-40 minutes or until the bread tests done.",
            "Remove from pans and cool on a wire rack.",
            "*For consistently good results, lemon juice, the natural dough improver, is added when baking bread with no additive flours."
        ]
    },
    {
        "image": "WhiteBread",
        "name": "White Bread",
        "category": "Bread",
        "favourite": true,
        "ingredients": [
            "3 1/2 cups warm water",
            "1/4 cup honey",
            "1/2 cup vegetable oil",
            "2 tbsp lemon juice*",
            "4 tsp salt",
            "9 1/2-10 1/2 cups ROGERS NO ADDITIVE or ALL PURPOSE FLOUR",
            "1/2 cup lukewarm water",
            "1 tsp honey",
            "2 tbsp yeast"
        ],
        "directions": [
            "Dissolve yeast and honey in warm water and let stand 10 minutes.",
            "Measure warm water into a large mixing bowl; add honey, oil, lemon juice, and salt. Add yeast mixture and stir. Add sufficient flour to make a soft, workable dough. Turn dough out on a lightly floured surface; knead 10-15 minutes until dough is smooth and elastic.",
            "Form dough into a ball and place it in a greased bowl, turning once to grease the top. Cover and let rise for 50 minutes or until doubled. Punch down and shape into 4 round balls. Cover and let rest for 20 minutes.",
            "Form into loaves and place in greased 4 1/2 x 8 1/2 (1.5 L) loaf pans. Brush tops with oil. Cover and let rise for 50-55 minutes. Bake in a 375°F (190°C) oven for 35-40 minutes, or until bread tests done. Remove from pans and cool on a wire rack."
        ],
        "notes": "*For consistently good results, lemon juice, the natural dough conditioner, is added when baking bread with no additive flours.",
        "alternatives": [
            "For variety and added nutrition, substitute any one of the following ingredients for equal portions of ROGERS NO ADDITIVE ALL PURPOSE FLOUR:",
            "1-3 cups/250-750mL ROGERS WHOLE GRAIN WHOLE WHEAT FLOUR",
            "1-2 cups/250-500mL ROGERS 100% DARK RYE FLOUR",
            "1 cup/250mL ROGERS FLAKED CEREALS"
        ]
    },
    {
        "image": "BeefBurger",
        "name": "Grilled Beef Burgers",
        "category": "Dinner",
        "favourite": false,
        "ingredients": [
            "1 large egg",
            "1/2 onion finely chopped",
            "2 cloves garlic, crushed",
            "½ teaspoon salt",
            "½ teaspoon ground black pepper",
            "1 pound ground beef",
            "1 tablespoon wochestershire sauce",
            "2 teaspoons soy sauce",
            "½ cup fine dry bread crumbs"
        ],
        "directions": [
            "Preheat an outdoor grill for high heat and lightly oil grate.",
            "Whisk together egg, salt, sauces, and pepper in a medium bowl.",
            "Add ground beef, onion, garlic, and bread crumbs and mix with your hands or a fork until well blended.",
            "Form into four 3/4-inch-thick patties.",
            "Place patties on the preheated grill. Cover and cook 6 to 8 minutes per side, or to desired doneness. An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C)."
        ]
    }

]
