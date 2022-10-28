/* Massivi tərsinə düzün. Massivi parametr kimi qəbul edən və tərs
ardıcıllıqla yazılmış eyni elementlərdən ibarət massivi qaytaran 
reverseArray () funksiyasını yazın.
*/

const sentence = ["sense.", "make", "all", "will", "This"];

const reverseArray = (arr) => arr.reverse();

console.log(reverseArray(sentence));

// Nəticə:
// [‘This’, ‘will’, ‘all’, ‘make’, ‘sense.’]

/* Yadplanetliləri salamlayın. Sözlərdən ibarət massivi 
qəbul edən və konsolda hər bir yadplanetliyə salamlama çıxarmaq üçün dövrdən 
istifadə edən greetAliens () funksiyasını yazın. Salam belə bir formatda 
olmalıdır: "Oh powerful [name], we humans offer our unconditional surrender!"
*/

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = (arr) =>
  arr.forEach((name) =>
    console.log(
      `Oh powerful ${name}, we humans offer our unconditional surrender!`
    )
  );

greetAliens(aliens);

/* 2 massivi parametr kimi qəbul edən və onların eyni dəyərli elementlərin konsola çıxaran 
justCoolStuff () funksiyasını yazın.
*/

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "my room",
  "temporary tattoos",
];
const myStuff = ["sweaters", "skateboards", "family-night", "my room"];

const justCoolStuff = (firstArr, secondArr) => {
  return firstArr.filter((element) => secondArr.includes(element));
};

console.log(justCoolStuff(myStuff, coolStuff));

/*Parametr kimi {ad: "Yeməyin adı", içərik: "bitki, ət və ya süd"} 
formatında yeməklər massivini qəbul edən və onların hamısının 
vegetarian olub-olmadığını müəyyən edən isTheDinnerVegan () funksiyasını yazın.
*/
const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" },
];
const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
];

const isTheDinnerVegan = (arr) => {
  return arr.every((element) => element.source === "plant");
};

console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));

// Nəticə:
// true
// false
