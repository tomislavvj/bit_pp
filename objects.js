var coffee = {
    name: "domestic",
    strength: "strong",
    flavour: "pour",
    milk: "no",
    sugar: "no",
}
console.log(coffee);

var movie = {
    title: "Green mile",
    actors: "Tom Hanks",
    director: "Abdulj Asanj",
    genre: "Drama",
    popularity: "very popular",
}
console.log(coffee);


"use strict"

function computerProgram(description, programmingLanguage, gitRepository, booleanStatus) {

    var programInfo = {
        description: description,
        programmingLanguage: programmingLanguage,
        gitRepository: gitRepository,
        booleanStatus: booleanStatus,
        repositoryMethod: function () {
            return "This program repository is " + this.gitRepository;
        },
        isJavaScript: function () {
            if (this.programmingLanguage === "JavaScript") {
                return "Program is written in JavaScript"
            } else {
                return "Program is not written in JavaScript, it is written in " + this.programmingLanguage;
            }
        },
        isFinished: function () {
            if (this.booleanStatus) {
                return "Program is finished";
            } else {
                return "Program is not finished";
            }
        }
    }
    return programInfo;
}


var programSpecifications = computerProgram("Program for making web pages", "NODE.js", "github.com/...", true);


console.log(programSpecifications.repositoryMethod());
console.log(programSpecifications.isJavaScript());
console.log(programSpecifications.isFinished());






"use strict"

function culinaryRecipe(name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstructions) {
    var recipeSpecifications = {
        name: name,
        typeOfCuisine: typeOfCuisine,
        complexity: complexity,
        listOfIngredients: listOfIngredients,
        preparingTime: preparingTime,
        preparingInstructions: preparingInstructions,
        necessaryIngredients: function () {
            return listOfIngredients;
        },
        checkTime: function () {
            if (preparingTime <= 15) {
                return "Meal can be prepared in 15 minutes";
            } else {
                return "Meal can not be prepared in 15 minutes";
            }
        },
        changeType: function (newType) {
            this.typeOfCuisine = newType;
            return this.typeOfCuisine;
        },
        deleteIngredient: function (ingredient) {
            var newList = [];
            for (var i = 0; i < listOfIngredients.length; i++) {
                if (this.listOfIngredients[i] !== ingredient) {
                    newList[newList.length] = this.listOfIngredients[i];
                }
            }
            this.listOfIngredients = newList;
            return this.listOfIngredients;
        }
    }
    return recipeSpecifications;
}

var recipeItems = culinaryRecipe("Pauslj", "srpska", 3, ["pasulj", "voda", "povrce", "luk", "suvo meso"], 240, "porodicna tajna");

console.log(recipeItems.necessaryIngredients());
console.log(recipeItems.checkTime());
console.log(recipeItems.changeType("turska"));
console.log(recipeItems.deleteIngredient("luk"));






