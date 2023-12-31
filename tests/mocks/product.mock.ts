const invalidProductName = 'ma';
const nameNumber = 13;
const invalidProductPrice = 12;
const invalidProductPriceLength = '13'

const validProductName = "konoha headband"
const validProductPrice = "10 ryō"

const validProductBody = {
    name: validProductName,
    price: validProductPrice,
    orderId: 9,
};

const invalidNameProductBody = {
    name: invalidProductName,
    price: validProductPrice,
    orderId: 5,
};

const nameNumberBody = {
    name: nameNumber,
    price: validProductPrice,
    orderId: 5,
};

const invalidLengthProductPrice = {
  name: validProductName,
  price: invalidProductPriceLength,
  orderId: 5,
};

const bodyWithoutName = {
  price: validProductPrice,
  orderId: 5,
};

const bodyWithoutPrice = {
  name: validProductName,
  orderId: 5,
};


const invalidPriceProductBody = {
    name: validProductName,
    price: invalidProductPrice,
    orderId: 6,
};

const simulatedProductCreated = {
    id: 6,
    name: 'konoha headband',
    price: '10 ryō'

};

const getAllProductsReturn = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  },
  {
    id: 2,
    name: "Espada Justiceira",
    price: "20 peças de ouro",
    orderId: 1
  },
  {
    id: 3,
    name: "Lira de Orfeu",
    price: "1 peça de ouro",
    orderId: 2
  },
  {
    id: 4,
    name: "Armadura de Aquiles",
    price: "1 peça de ouro",
    orderId: 2
  },
  {
    id: 5,
    name: "Harpa de Dagda",
    price: "15 peças de ouro",
    orderId: 3
  }
]

export default {
    validProductBody,
    invalidNameProductBody,
    invalidPriceProductBody,
    simulatedProductCreated,
    getAllProductsReturn,
    nameNumberBody,
    bodyWithoutName,
    bodyWithoutPrice,
    invalidLengthProductPrice
}