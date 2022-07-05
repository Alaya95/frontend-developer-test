import { createStore } from 'vuex';

const store = createStore({
  state: () => {
    return {
      products: [
        {
          id: 1,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
        },
        {
          id: 2,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 12000,
        },
        {
          id: 3,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 13000,
        },
        {
          id: 4,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 14000,
        },
        {
          id: 5,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
        },
        {
          id: 6,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 142000,
        },
        {
          id: 7,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10030,
        },
        {
          id: 8,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 14000,
        },
        {
          id: 9,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10004,
        },
        {
          id: 10,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 14400,
        },
        {
          id: 11,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10400,
        },
        {
          id: 12,
          src: 'https://github.com/Alaya95/frontend-developer-test/blob/main/src/assets/product_img.png?raw=true',
          title: 'Наименование товара',
          description:
            ' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10055,
        },
      ],
    };
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
  },
  mutations: {
    addProductsCart(state, data) {
      state.products.push(data);
    },
    deleteProductCard(state, id) {
      state.products.splice(
        state.products.findIndex((product) => product.id == id),
        1,
      );
    },
  },
});

export default store;
