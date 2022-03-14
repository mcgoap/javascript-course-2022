// const country = "Portugal";
// const continent = "Europe";
// let population = 10344802;

// console.log (country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// let language

// console.log(isIsland, population, country, language);

// language = "portuguese";

// // should be const -> country, continente, language, isIsland
// // should be variable -> population

// const halfPopulation = population / 2;
// console.log(halfPopulation);

// const plusOnePopulation = population + 1;
// console.log(plusOnePopulation);

// let finlandPopulation = 6000000;

// console.log(population > finlandPopulation);

// const averagePopulationCountry = 33000000;
// console.log(population < averagePopulationCountry);

// let description = country + " is in " + continent + " and its " + population + " speople speak portuguese";

// console.log(description);


//Coding Challenge 1
//Mark data
// const massMarkT1 = 78;
// const heightMarkT1 = 1.69;
// const massMarkT2 = 95;
// const heightMarkT2 = 1.88;

// console.log(massMarkT1, heightMarkT1, massMarkT2, heightMarkT2);

//John data
// const massJohnT1 = 92;
// const heightJohnT1 = 1.95;
// const massJohnT2 = 85;
// const heightJohnT2 = 1.76;

// console.log(massJohnT1, heightJohnT1, massJohnT2, heightJohnT2);

// comparation teste 1
// const markBMIT1 = massMarkT1 / heightMarkT1 ** 2;
// const johnBMIT1 = massJohnT1 / heightJohnT1 ** 2;
// const markHigherBMI1 = markBMIT1 > johnBMIT1;

// console.log(markBMIT1, johnBMIT1, markHigherBMI1);

// comparation teste 2
// const markBMIT2 = massMarkT2 / heightMarkT2 ** 2;
// const johnBMIT2 = massJohnT2 / heightJohnT2 ** 2;
// const markHigherBMI2 = markBMIT2 > johnBMIT2;

// console.log(markBMIT2, johnBMIT2, markHigherBMI2);

// Coding Challenge #2
// console.log('Mark BMI T1 is ' + markBMIT1);
// console.log('John BMI T1 is ' + johnBMIT1);

// if (markBMIT1 > johnBMIT1) {
//   console.log('Mark BMI (${markBMIT1}) is higher than John')
// } else {
//   console.log('Johns BMI is higher than Mark')
// };


// if (markBMIT2 > johnBMIT2) {
//   console.log('Mark BMI (${markBMIT2}) is higher than John')
// } else {
//   console.log("John's BMI is higher than Mark's");
// };

//coding Challenge 3
// bonus 1
// const numberOfGames = 3;
// const scoreDolphins = (97 + 112 + 101)/numberOfGames;
// const scoreKoalas = (109 + 95 + 123)/numberOfGames;
// console.log( scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins won the competition');
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log('Koalas won the competition!');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100 ) {;
// console.log('Both won');
// } else {
//   console.log('No winners!');
//  }

// //bonus 2
// const numberOfGames = 3;
// const scoreDolphins = (97 + 112 + 101)/numberOfGames;
// const scoreKoalas = (109 + 95 + 106)/numberOfGames;
// console.log( scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins won the competition');
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log('Koalas won the competition!');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100 ) {;
// console.log('Both won');
// } else {
//   console.log('No winners!');
// }

//  //Exercise if_else
 const joseAge = 42;
 const joseLicence = 'yes'; 
 const joseLanguage = 'portuguese';

// const mikeAge = 28;
// const mikeLicence = 'yes'; 
// const mikeLanguage = 'english';

// const mariaAge = 21;
// const mariaLicence = 'no'; 
// const mariaLanguage = 'portuguese';

// const manoloAge = 17;
// const manoloLicence = 'yes'; 
// const manoloLanguage = 'spanish';

// const hugoAge = 13;
// const hugoLicence = 'no'; 
// const hugoLanguage = 'portuguese';

    if (joseAge >= 18 && joseLicence === 'yes') {
        console.log('Jose can drive 🚗');
        if (joseLanguage==='portuguese') {
            console.log('also pt')
        }
       
    }
    else {
        console.log("Jose can't drive");
    }
        




// // 1 alinea
// if (joseAge >= 18 && joseLicence === 'yes') {
//     console.log('Jose can drive 🚗');
// } else {
//     console.log("Jose can't drive");
// }

// if ( mikeAge >= 18 && mikeLicence === 'yes') {
//     console.log('Mike can drive 🚗');
// } else {
//     console.log("Mike can't drive");
// }

// if ( mariaAge >= 18 && mariaLicence === 'yes') {
//     console.log('Maria can drive 🚗');
// } else {
//     console.log("Maria can't drive");
// }

// if ( manoloAge >= 18 && manoloLicence === 'yes') {
//     console.log('Manolo can drive 🚗');
// } else {
//     console.log("Manolo can't drive");
// }
// if ( hugoAge >= 18 && hugoLicence === 'yes') {
//     console.log('Hugo can drive 🚗');
// } else {
//     console.log("Hugo can't drive");
// }

// // 2 alinea
// if (joseAge >= 18 && joseLicence === 'yes' && joseLanguage === 'portuguese') {
//     console.log('Jose can drive 🚗 and has a portuguese license');
// } else if (joseAge >= 18 && joseLicence === 'yes' && joseLanguage !== 'portuguese') {
//     console.log("Jose can drive but not pt");
// } else {
//     console.log("Jose can't drive");
// }

// if (mikeAge >= 18 && mikeLicence === 'yes' && mikeLanguage === 'portuguese') {
//     console.log('Mike can drive 🚗 and has a portuguese license');
// } else if (mikeAge >= 18 && mikeLicence === 'yes' && mikeLanguage !== 'portuguese') {
//     console.log("Mike can drive but not pt");
// } else {
//     console.log("Mike can't drive");
// }

// if (mariaAge >= 18 && mariaLicence === 'yes' && mariaLanguage === 'portuguese') {
//     console.log('Maria can drive 🚗 and has a portuguese license');
// } else if (mariaAge >= 18 && mariaLicence === 'yes' && mariaLanguage !== 'portuguese') {
//     console.log("Maria can drive but not pt");
// } else {
//     console.log("Maria can't drive");
// }

// if (manoloAge >= 18 && manoloLicence === 'yes' && manoloLanguage === 'portuguese') {
//     console.log('Manolo can drive 🚗 and has a portuguese license');
// } else if (manoloAge >= 18 && manoloLicence === 'yes' && manoloLanguage !== 'portuguese') {
//     console.log("Manolo can drive but not pt");
// } else {
//     console.log("Manolo can't drive");
// }

// if (hugoAge >= 18 && hugoLicence === 'yes' && hugoLanguage === 'portuguese') {
//     console.log('Hugo can drive 🚗 and has a portuguese license');
// } else if (hugoAge >= 18 && hugoLicence === 'yes' && hugoLanguage !== 'portuguese') {
//     console.log("Hugo can drive but not pt");
// } else {
//     console.log("Hugo can't drive");
// }

// alinea 3
// const joseAge = 42;
// const mikeAge = 28;
// const mariaAge = 21;
// const manoloAge = 17;
// const hugoAge = 13;

// if (joseAge >= 20) {
//     let difference20 = joseAge - 20;
//     console.log(difference20);
// } else {
//     let difference20 = 20 - joseAge;
//     console.log(difference20);
// }

// if (mikeAge >= 20) {
//     let difference20 = mikeAge - 20;
//     console.log(difference20);
// } else {
//     let difference20 = 20 - mikeAge;
//     console.log(difference20);
// }

// if (mariaAge >= 20) {
//     let difference20 = mariaAge - 20;
//     console.log(difference20)
// } else {
//     let difference20 = 20 - mariaAge;
//     console.log(difference20);
// }

// if (manoloAge >= 20) {
//     let difference20 = manoloAge - 20;
//     console.log(difference20)
// } else {
//     let difference20 = 20 - manoloAge;
//     console.log(difference20);
// }

// if (hugoAge >= 20) {
//     let difference20 = hugoAge - 20;
//     console.log(difference20)
// } else {
//     let difference20 = 20 - hugoAge;
//     console.log(difference20);
// }
// // 4 alinea
// if (joseAge <10) {
//     console.log('Jose is less than 10 old');
// } else if (joseAge >= 10 && joseAge <= 20 ){
//     console.log('Jose is between 10 and 20 years old');
// } else if (joseAge >= 35){
//     console.log('Jose is more than 35 years old');
// } else {
//     console.log('Jose between 20 and 35 years old');
// }
// if (mikeAge <10) {
//     console.log('Mike is less than 10 old');
// } else if (mikeAge >= 10 && mikeAge <= 20 ){
//     console.log('Mike is between 10 and 20 years old');
// } else if (mikeAge >= 35){
//     console.log('Mike is more than 35 years old');
// } else {
//     console.log('Mike between 20 and 35 years old');
// }

// if (mariaAge <10) {
//     console.log('Maria is less than 10 old');
// } else if (mariaAge >= 10 && mikeAge <= 20 ){
//     console.log('Maria is between 10 and 20 years old');
// } else if (mariaAge >= 35){
//     console.log('Maria is more than 35 years old');
// } else {
//     console.log('Maria between 20 and 35 years old');
// }

// if (manoloAge <10) {
//     console.log('Manolo is less than 10 old');
// } else if (manoloAge >= 10 && manoloAge <= 20 ){
//     console.log('Manolo is between 10 and 20 years old');
// } else if (manoloAge >= 35){
//     console.log('Manolo is more than 35 years old');
// } else {
//     console.log('Manolo between 20 and 35 years old');
// }

// if (hugoAge <10) {
//     console.log('Hugo is less than 10 old');
// } else if (hugoAge >= 10 && hugoAge <= 20 ){
//     console.log('Hugo is between 10 and 20 years old');
// } else if (hugoAge >= 35){
//     console.log('Hugo is more than 35 years old');
// } else {
//     console.log('Hugo between 20 and 35 years old');
// }


// Coding Challenge #4
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);