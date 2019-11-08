var student = {
    name: "pera",
    yearOfBirth: 1995,
    gender: "m",
    age: function (currentYear) {
        return currentYear - this.yearOfBirth;
    },
    about: function () {
        return this.name + " is a student, born in " + this.yearOfBirth;
    }
}
/* console.log(student.age(2019));
console.log(student.about()); */



student.test = "test";
student.testFunction = function () {
    console.log("test");
}
student.testFunction();

var favCoffee = {
    name: "domaja",
    strenght: "jaka",
    flavour: "gorca",
    sugar: "bez",
    location: "komsinica"
}
console.log(favCoffee);



/* 3. Computer program */

"use strict"
function createProgram(programmingLanguage, gitRepository, booleanStatus) {

    var computerProgram = {
        programmingLanguage: programmingLanguage,
        gitRepository: gitRepository,
        booleanStatus: booleanStatus,
        repo: function () {
            return "this programs repo is " + this.gitRepository;
        },
        isJS: function () {
            if (this.programmingLanguage === "JavaScript") {
                return true;
            } else {
                return false;
            }
        },
        isFinished: function () {
            if (this.booleanStatus) {
                return "finished";
            } else {
                return "not finished";
            }
        }
    };
    return computerProgram;
}

var newProgram = createProgram("NODE.js", "github.com/....", false);
console.log(newProgram);

"use strict"
function Program(programmingLanguage, gitRepository, booleanStatus) {

    this.programmingLanguage = programmingLanguage;
    this.gitRepository = gitRepository;
    this.booleanStatus = booleanStatus;

    this.repo = function () {
        return "this programs repo is " + this.gitRepository;
    };
    this.isJS = function () {
        if (this.programmingLanguage === "JavaScript") {
            return true;
        } else {
            return false;
        }
    };
    this.isFinished = function () {
        if (this.booleanStatus) {
            return "finished";
        } else {
            return "not finished";
        }
    }
}

var newProgram = new Program("NODE.js", "github.com/....", false);
console.log(newProgram);
/* 4. Culinary Recipe */

function recipe(name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstruction) {

    var culinaryRecipe = {
        name: name,
        typeOfCuisine: typeOfCuisine,
        complexity: complexity,
        listOfIngredients: listOfIngredients,
        preparingTime: preparingTime,
        preparingInstruction: preparingInstruction,

        allIngredients: function () {
            var ing = "";
            for (i = 0; i < this.listOfIngredients.length; i++) {
                ing = ing + this.listOfIngredients[i] + " , ";
            }
            return ing;
        },
        is15Minutes: function () {
            if (this.preparingTime <= 15) {
                return true;
            } else {
                return false;
            }
        },
        changeCuisineType: function (newType) {
            this.typeOfCuisine = newType;
        },
        deleteIngredient: function (ingredient) {
            var newList = [];
            for (i = 0; i < this.listOfIngredients.length; i++) {

                if (this.listOfIngredients[i] !== ingredient) {
                    newList[newList.length] = this.listOfIngredients[i];
                }
            }
            this.listOfIngredients = newList;
        }

    }
    return culinaryRecipe;
}
var punjenePaprike = recipe("Punjene paprike", "srpska", 3, ["meso", "paprike", "kecap", "paradajz"], 120, "Zna mama");







function Recipe(name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstruction) {


    this.typeOfCuisine = typeOfCuisine,
        this.name = name;
    this.complexity = complexity,
        this.listOfIngredients = listOfIngredients,
        this.preparingTime = preparingTime,
        this.preparingInstruction = preparingInstruction,

        this.allIngredients = function () {
            var ing = "";
            for (i = 0; i < this.listOfIngredients.length; i++) {
                ing = ing + this.listOfIngredients[i] + " , ";
            }
            return ing;
        },
        this.is15Minutes = function () {
            if (this.preparingTime <= 15) {
                return true;
            } else {
                return false;
            }
        },
        this.changeCuisineType = function (newType) {
            this.typeOfCuisine = newType;
        },
        this.deleteIngredient = function (ingredient) {
            var newList = [];
            for (i = 0; i < this.listOfIngredients.length; i++) {

                if (this.listOfIngredients[i] !== ingredient) {
                    newList[newList.length] = this.listOfIngredients[i];
                }
            }
            this.listOfIngredients = newList;
        }


}
var punjenePaprike = new Recipe("Punjene paprike", "srpska", 3, ["meso", "paprike", "kecap", "paradajz"], 120, "Zna mama");



console.log(punjenePaprike.allIngredients());

punjenePaprike.changeCuisineType("turska");
/* console.log(punjenePaprike); */

punjenePaprike.deleteIngredient("kecap");
/* console.log(punjenePaprike); */

var ispod15 = punjenePaprike.is15Minutes();
console.log(ispod15);

console.log(punjenePaprike);














console.log(punjenePaprike.allIngredients());

punjenePaprike.changeCuisineType("turska");
/* console.log(punjenePaprike); */

punjenePaprike.deleteIngredient("kecap");
/* console.log(punjenePaprike); */

var ispod15 = punjenePaprike.is15Minutes();
console.log(ispod15);

console.log(punjenePaprike);