import { Order } from "../../src/types/Order"

const getAllOrdersDatabase: Order[] = [
    {
      id: 1,
      userId: 1,
      productIds:[ {
        id: 1,
        name: "Excalibur",
        price: "10 peças de ouro",
        orderId: 1
      },]
    },
  ]

  const productOrder = {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  }

  const getAllOrdersReturn = [
    {
      id: 1,
      userId: 1,
      productIds:[1]
    },
  ]

  const validHeaderToken = 'Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTY5MjI0MzE1Mn0.8v0IX2wOiVYQGYt9mepzNNLsbqpaG8FBuUmtS3cJGdU'
  const invalidTokenHeader = "invalid_token"

  const validBodyCreate ={
    userId: 1,
    productIds: [1,2]
  }

  const BodyWithoutUserIdCreate = {
    productIds: [1, 2]
  }

  const BodyWithoutProductIdsCreate = {
    userId: 2,
  }

  const bodyWithEmptyArray = {
    userId: 2,
    productIds: []
  }

  const bodyWithInvalidProductIds = {
    userId: 2,
    productIds: 13
  }

  const bodyWithInvalidUserId = {
    userId: '13',
    productIds: [1,5]
  }


export default {
  getAllOrdersDatabase,
  getAllOrdersReturn,
  validBodyCreate,
  validHeaderToken,
  invalidTokenHeader,
  BodyWithoutUserIdCreate,
  BodyWithoutProductIdsCreate,
  bodyWithEmptyArray,
  bodyWithInvalidProductIds,
  bodyWithInvalidUserId,
  productOrder
}