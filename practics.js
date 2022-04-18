
//---------------------------------------------------------------------- Розрахувати рандомну зарплату на одного працівника  в межах 500-5000 гривень і записати загальну суму зарплат в перемінну totalSalary.

// let em = 5;
// let totalSalary = 0;
// let min = 500;
// let max = 5000;

// for (let i = 1; i <= em; i += 1){
//     let result = Math.round(Math.random()*(max-min)+min);
    
//     console.log(`працівник №${i} - твої копіки що звуться зарпатю: ${result}`);

//     totalSalary += result;
// }
// console.log(`Загальна сума: ${totalSalary}`) 


//---------------------------------------------------------------------- Вичислити всі парні числа і підрахувати загальну суму.

// const max = 30;
// const min = 5;
// let sum = 0;

// for(let i = 0; i < max; i += 1){
//     if(i % 2 === 0 ){
//         console.log(i)
// }
// sum += i;
// }
// console.log(`Загальна сума: ${sum}`)

//---------------------------------------------------------------------- Надіслати повідомлення "" до перевірки і якщо коштів додастатьог то мінусуємо ціну товару і відправляємо повідомлення про успішну купівлю,а якщо ні то надсилаємо повідолення про недостачу коштів.

// let balance = 1000 ;
// let payment = 5000 ;

// console.log(`Загальна сума замовлення ${payment}  гривень. Провіряємо кількість доступних ресурсів... `);

// if(balance > payment){
//     balance -= payment;
//     console.log( `Покупка успішна, сума вашого балансу ${balance}`);
// }
// else{
//     console.log(`Недостатньо коштів!`);
// }
// console.log(`Операція завершена.`);

//-------------------------------------------------------------------------Підрахувати загальну суму в масиві.

// const cart = [54, 28, 105, 70, 92, 17, 120];

// let sraka = 0;
// for (let i = 0; i < cart.length; i += 1){
// sraka += cart[i];
// }
// console.log(sraka);


// const cart = [54, 28, 105, 70, 92, 17, 120];
// let result = 0;
// for(const catrOne of cart ){
// result += catrOne;
// }
// console.log(result)


// -------------------------------------------------------------------------Підрахувати всі парні числа з масива.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// for (let i = 0; i < numbers.length; i = 1){
//     let sraka = 0;
//     if (i % 2 === 0 ){
//         sraka += numbers[i];
//     }
//     console.log(sraka)
// }
// Напиши скрипт пошуку логіна.


// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFing = 'poly1scute';

// let massege = `Пароля ${loginToFing} неіснує`;
// for (let i = 0; i < logins.length; i += 1){
//     const result = logins[i];

//     if(result === loginToFing){
//     massege =  `Парол ${loginToFing}`
//     break
//     }
// } 
// console.log(massege)

// let massege =  `Пароль ${loginToFing}`;
// for(let login of logins){
//     if(login !== loginToFing){
//     continue;
//     }  
//     massege = `Пароля ${loginToFing} неіснує`;
// }
// console.log(massege)

// const login = logins.includes('poly1scute') ?  `Парол ${loginToFing}` : `Пароля ${loginToFing} неіснує`;
// console.log(login)

// -------------------------------------------------------------------
// Поверни найменше число 

// const numbers = [20, 42, 50, 75, 10];
// let minCoin = numbers[0] ;
// for(let number of numbers){
//     if(number < minCoin ){
//         minCoin = number;
//         console.log(minCoin)
//     }
    
// }
// -----------------------------------------------
// Замінити регістри у слові JavaScript зробити навпаки 
// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = " ";
// for(const letter of letters){
//     invertedString +=
//     letter === letter.toLowerCase() ?
//     letter.toUpperCase() :
//     letter.toLowerCase();
// }
// console.log(invertedString)

// const changeCase = function (string) {
//     let letters = string.split("");
//     let invertedString = " ";

//     for(const letter of letters){
//         const inIsLowerCase = letter === letter.toLowerCase();

//         invertedString += inIsLowerCase ?
//         letter.toUpperCase() :
//         letter.toLowerCase();
//     }

//     return invertedString;
// }
// console.log(changeCase("JavaScript"))
// ----------------------------------------------
// Нормалізувати заголовок для посилання 
// const title = 'Top 10 benefits of React framework'
// const normalize = title.toLocaleLowerCase().split(' ').join("_");

// console.log(normalize)


//-------------------------------------------------
// Додати два масива і вивести загальну суму елементів

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let full = array1.concat(array2);
// let result = 0;
// for(const array of full){
// result += array;
// }
// console.log(result)

// const allLogin = ['jhjfkeo', 'gdjkebcj', 'bfjlbjlfk'];
// function findLogin(allLogin, findLogin){
// return allLogin.includes(findLogin) ? "Пароль ${findLogin} знайдено!" : 
// "Пароль ${findLogin} відсутній"
// }
// console.log(findLogin(allLogin,'jhjfkeo' ))

// ------------------------------------------------
// Повернути дві одинакові числа з масиву
// const FilterNumber = function (array, ...args){
//     let result = [];
//     for(const element of array){
//         if(args.includes(element)){
//         result.push(element);
//         }
//     }
//     return result;
// }
// console.log(FilterNumber([1, 2, 3, 4, 5], 10, 1, 2, 15, 8))

//----------------------------------------------------
//  Знайди Полі 
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true},
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];
// console.log(friends);

// const  findFriendName = function (allFriend, lost) {

//     for(let friend of allFriend){
//        if(friend.name === lost){
//        return `знайшли ${lost}!`
//        } 
//     }
//     return `нема(`
// }
// console.log(findFriendName(friends, "Poly"))
// ----------------------------------------------------
// Вибрати усіх друзів
// const friends = [
//     { name: 'mango', online: false },
//     { name: 'kiwi', online: true },
//     { name: 'poly', online: true },
//     { name: 'ajax', online: false },   
// ]

// const findFriendByName = function (allFriends) {
//     let allGays = [];
//     for(let friend of allFriends){
//         allGays.push(friend.name);  
//     }
//     return allGays;
// }
// console.log(findFriendByName(friends))

// --------------------------------------------------------
// Повернути друзів онлайн

// const friends = [
//     { name: 'mango', online: false },
//     { name: 'kiwi', online: true },
//     { name: 'poly', online: true },
//     { name: 'ajax', online: false },   
// ]

// const findFriendByName = function (allFriends) {
//     let online = [];
//     for(let friend of allFriends){
//        if(friend.online){
//            online.push(friend)
//        }
//     }
//     return online
// }
// console.log(findFriendByName(friends))


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
    
//   };
//   const keys = [];
//   const values = [];
 
//   for(const key in apartment){
//     keys.push(key)
//     values.push(apartment[key]);
//   }
 



// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
//   const hexColors = [];
//   const rgbColors = [];
  
//   for(let color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
    
    
//   } 
//   console.log(hexColors);



// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//     for(let product of products){
//       if(product === productName){
         
//       }
//     }
//     // return productName
//    getProductPrice(name)
//     // Change code above this line
//   }



// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     let result = 0;
//     for(let product of products){
      
//       if(product === productName)
//       result += productName
//       return product.price
//     }



// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
// function getAllPropValues(propName) {
    
//     let propNames = [];
    
//     for(let product of products){
//         if(product[propName]){
//             propNames.push(product[propName]);
//         }
//     }
//     return propNames
// }



// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName){
//     let result = 0;
//     for(let product of products){
//         if(product.name === productName){
//             result = product.price * product.quantity;
//         }
//     }
//     return result
    
//   }
  
//   console.log(calculateTotalPrice("Grip"))
  


// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
//   const {today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
//   tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   } = forecast
  
//   // Chang


// ------------------------------------------------------------
// Знайти найменше і найбільше число у масиві і записати його у змінні

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore =  Math.min(...scores);

// ---------------------------------------------------------
// Спред в масивы
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);



// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]
// Напиши скрипт пошуку логіна.


// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFing = 'poly1scute';

// let massege = `Пароля ${loginToFing} неіснує`;
// for (let i = 0; i < logins.length; i += 1){
//     const result = logins[i];

//     if(result === loginToFing){
//     massege =  `Парол ${loginToFing}`
//     break
//     }
// } 
// console.log(massege)

// let massege =  `Пароль ${loginToFing}`;
// for(let login of logins){
//     if(login !== loginToFing){
//     continue;
//     }  
//     massege = `Пароля ${loginToFing} неіснує`;
// }
// console.log(massege)

// const login = logins.includes('poly1scute') ?  `Парол ${loginToFing}` : `Пароля ${loginToFing} неіснує`;
// console.log(login)

// -------------------------------------------------------------------
// Поверни найменше число 

// const numbers = [20, 42, 50, 75, 10];
// let minCoin = numbers[0] ;
// for(let number of numbers){
//     if(number < minCoin ){
//         minCoin = number;
//         console.log(minCoin)
//     }
    
// }

// Напиши скрипт, який обєднує всі елементи в одне значення. 
// Елементів може бути довільна кількість та розділення комою.
// Спочатку через ФОР потім через Джоін.

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// for(let i = 0; i < friends.length; i = 1){
  
// }


// const friends = [
//     { name: 'mango', online: false },
//     { name: 'kiwi', online: true },
//     { name: 'poly', online: true },
//     { name: 'ajax', online: false },   
// ]

// const findFriendByName = function (allFriends, name) {
//     for(let friend of allFriends){
//         return friend === name ? 'знайшли ${name}' :
//         'немає'
//     }
// }
// console.log(findFriendByName(friends, 'poly'))




