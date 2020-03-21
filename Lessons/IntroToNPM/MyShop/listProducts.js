var faker = require('faker');

// var name = faker.commerce.productName();
// var productPrice = faker.commerce.price();




for(var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + " -  $" + faker.commerce.price());
}
