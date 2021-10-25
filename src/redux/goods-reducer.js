const ADD_ORDER = "ADD-ORDER";
const REMOVE_ITEM = "REMOVE-ITEM";
const INCREASE_QNT = "INCREASE-QNT";
const DECREASE_QNT = "DECREASE-QNT";

let initialState = {
  pizza: [
    {
      itemId: 1,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/338a8304-9227-44fa-b326-95c1472c95e1.jpg",
      itemName: "Мексиканская",
      itemDescription:
        "Острый цыпленок, томатный соус, сладкий перец, красный лук, моцарелла, острый перец халапеньо, томаты, соус сальса",
      itemPrice: "17.90",
      itemSize: {
        Small: "400",
        Mid: "700",
        Big: "1000",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 2,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a1ca977be6124000a6e8f53a1867ab39_292x292.jpeg",
      itemName: "Чизбургер-пицца",
      itemDescription:
        "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер",
      itemPrice: "14.90",
      itemSize: {
        Small: "400",
        Mid: "700",
        Big: "1000",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 3,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_292x292.jpeg",
      itemName: "Четыре сыра",
      itemDescription:
        "Сливочный соус, сыры пармезан и чеддер, сыр блю чиз, моцарелла",
      itemPrice: "17.90",
      itemSize: {
        Small: "400",
        Mid: "700",
        Big: "1000",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 4,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a6492db07919436a955adf66395eb377_292x292.jpeg",
      itemName: "Пепперони фреш",
      itemDescription: "Томаты, пепперони, моцарелла, томатный соус",
      itemPrice: "5.90",
      itemSize: {
        Small: "400",
        Mid: "700",
        Big: "1000",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 5,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a1ca977be6124000a6e8f53a1867ab39_292x292.jpeg",
      itemName: "Чизбургер-пицца",
      itemDescription:
        "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер",
      itemPrice: "14.90",
      itemSize: {
        Small: "400",
        Mid: "700",
        Big: "1000",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 6,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_292x292.jpeg",
      itemName: "Четыре сыра",
      itemDescription:
        "Сливочный соус, сыры пармезан и чеддер, сыр блю чиз, моцарелла",
      itemPrice: "17.90",
      itemSize: {
        Small: "400",
        Mid: "700",
        Big: "1000",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 7,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/338a8304-9227-44fa-b326-95c1472c95e1.jpg",
      itemName: "Мексиканская",
      itemDescription:
        "Острый цыпленок, томатный соус, сладкий перец, красный лук, моцарелла, острый перец халапеньо, томаты, соус сальса",
      itemPrice: "17.90",
      itemSize: {
        Small: "400",
        Mid: "700",
        Big: "1000",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 8,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/628a3f67-1d51-4c0b-9761-7ee6b7985506.jpg",
      itemName: "Пицца-пирог",
      itemDescription: "Ананасы, молоко сгущеное, брусника",
      itemPrice: "5.90",
      itemSize: {
        Small: "400",
        Mid: "700",
        Big: "1000",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
  ],
  beverages: [
    {
      itemId: 1001,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/ae2694cd57004c1fa6b92052dbc0ed54_292x292.jpeg",
      itemName: "Pepsi",
      itemDescription: "0,5 л",
      itemPrice: "2.0",
    },
    {
      itemId: 1002,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/26d3bb4d-d99a-4c39-86c9-4d5533bf4e0a.jpg",
      itemName: "7Up",
      itemDescription: "0,5 л",
      itemPrice: "2.70",
    },
    {
      itemId: 1003,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/c6ef23c6-f93b-490a-baa9-a0bd4879da0d.jpg",
      itemName: "Mirinda",
      itemDescription: "0,5 л",
      itemPrice: "2.70",
    },
    {
      itemId: 1004,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/0c4433e92db6435aba66d744f24e7f47_292x292.jpeg",
      itemName: "Кофе Ванильный капучино",
      itemDescription:
        "Горячий напиток на основе эспрессо со вспененным молоком и ванильным сиропом. 0,3 л",
      itemPrice: "4.90",
    },
    {
      itemId: 1005,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/37183960816548f2a029545ce935b5a9_292x292.jpeg",
      itemName: "Кофе Карамельный капучино",
      itemDescription:
        "Горячий напиток на основе эспрессо с добавлением вспененного молока и карамельного сиропа. 0,3 л",
      itemPrice: "4.90",
    },
    {
      itemId: 1006,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/e67a5541111346529408be9ae79ff3f1_292x292.jpeg",
      itemName: "Пунш Спайси Оранж",
      itemDescription:
        "Согревающий пряный напиток с мякотью апельсина, соком лайма, имбирем, корицей, бадьяном, кориандром и гвоздикой. 0,3 л",
      itemPrice: "3.80",
    },
    {
      itemId: 1007,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/ae2694cd57004c1fa6b92052dbc0ed54_292x292.jpeg",
      itemName: "Pepsi",
      itemDescription: "0,5 л",
      itemPrice: "2.0",
    },
    {
      itemId: 1008,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/26d3bb4d-d99a-4c39-86c9-4d5533bf4e0a.jpg",
      itemName: "7Up",
      itemDescription: "0,5 л",
      itemPrice: "2.70",
    },
    {
      itemId: 1009,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/c6ef23c6-f93b-490a-baa9-a0bd4879da0d.jpg",
      itemName: "Mirinda",
      itemDescription: "0,5 л",
      itemPrice: "2.70",
    },
    {
      itemId: 1010,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/0c4433e92db6435aba66d744f24e7f47_292x292.jpeg",
      itemName: "Кофе Ванильный капучино",
      itemDescription:
        "Горячий напиток на основе эспрессо со вспененным молоком и ванильным сиропом. 0,3 л",
      itemPrice: "4.90",
    },
    {
      itemId: 1011,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/37183960816548f2a029545ce935b5a9_292x292.jpeg",
      itemName: "Кофе Карамельный капучино",
      itemDescription:
        "Горячий напиток на основе эспрессо с добавлением вспененного молока и карамельного сиропа. 0,3 л",
      itemPrice: "4.90",
    },
    {
      itemId: 1012,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/e67a5541111346529408be9ae79ff3f1_292x292.jpeg",
      itemName: "Пунш Спайси Оранж",
      itemDescription:
        "Согревающий пряный напиток с мякотью апельсина, соком лайма, имбирем, корицей, бадьяном, кориандром и гвоздикой. 0,3 л",
      itemPrice: "3.80",
    },
  ],
  snacks: [
    {
      itemId: 2001,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/1378c8b9afaf4daeaabecb96cd8232d2_292x292.jpeg",
      itemName: "Острый Додстер",
      itemDescription:
        "Горячая закуска с цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке",
      itemPrice: "4.90",

      itemSize: {
        Small: "500",
        Mid: "700",
        Big: "850",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 2002,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/273e48a66bf74a1faa76454662c53429_292x292.jpeg",
      itemName: "Додстер",
      itemDescription:
        "Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
      itemPrice: "4.90",
      itemSize: {
        Small: "500",
        Mid: "700",
        Big: "850",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 2003,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/3436a4c72c1340d2ba8b61b5ef8d84ab_292x292.jpeg",
      itemName: "Грибной Стартер",
      itemDescription:
        "Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке",
      itemPrice: "5.60",
      itemSize: {
        Small: "500",
        Mid: "700",
        Big: "850",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 2004,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/925e70c844ee41789097735d880dbd23_292x292.jpeg",
      itemName: "Блинчики с ветчиной и сыром",
      itemDescription:
        "2шт.Воздушные блинчики с сыром и ветчиной из свинины, приготовленные в печи",
      itemPrice: "5.90",
      itemSize: {
        Small: "500",
        Mid: "700",
        Big: "850",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 2005,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/073641ddaa9c4fbe802d27f2046011da_292x292.jpeg",
      itemName: "Картофельные оладьи",
      itemDescription: "Запеченные оладьи из картофеля в панировке, 8 шт",
      itemPrice: "6.90",
      itemSize: {
        Small: "500",
        Mid: "700",
        Big: "850",
      },
      itemAddPrice: {
        small: "0",
        mid: "2",
        big: "3",
      },
    },
    {
      itemId: 2006,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/4d731b6590cd455c80bcd7a3c21e402f_292x292.jpeg",
      itemName: "Греческий салат с соусом бальзамик",
      itemDescription:
        "Салат айсберг, томаты черри, маслины, свежий огурец, кубики брынзы, соус бальзамик, 1 шт",
      itemPrice: "6.90",
    },
  ],
  order: [],
  totalCount: 0,
  totalPrice: 0,
};

// const getTotalPrice = (arr) =>
//   arr.reduce((sum, obj) => obj.calcPrice + sum, 0).toFixed(2);

const getItem = (arr, action) => arr.find((i) => i.orderId === action);

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER: {
      const newItems = [...state.order, action.payload];
      return {
        ...state,
        order: [...state.order, action.payload],
        totalCount: newItems.length,
        totalPrice: (Number(state.totalPrice) + Number(action.payload.itemPrice)).toFixed(2),
      };
    }
    case INCREASE_QNT: {
      const { itemPrice } = getItem(state.order, action.itemId);
      return {
        ...state,
        order: state.order.map((i) => {
          if (i.orderId === action.itemId) {
            i.itemQnt = i.itemQnt + 1;
            i.calcPrice = (i.itemPrice * i.itemQnt).toFixed(2);
          }
          return i;
        }),
        totalCount: state.totalCount + 1,
        totalPrice: (Number(state.totalPrice) + Number(itemPrice)).toFixed(2),
      };
    }
    case DECREASE_QNT: {
      const { itemPrice } = getItem(state.order, action.itemId);
      return {
        ...state,
        order: state.order.map((i) => {
          if (i.orderId === action.itemId) {
            i.itemQnt = i.itemQnt - 1;
            i.calcPrice = (i.itemPrice * i.itemQnt).toFixed(2);
          }
          return i;
        }),
        totalCount: state.totalCount - 1,
        totalPrice: (Number(state.totalPrice) - Number(itemPrice)).toFixed(2),
      };
    }
    case REMOVE_ITEM: {
      const { calcPrice, itemQnt } = getItem(state.order, action.itemId);
      console.log(calcPrice);

      return {
        ...state,
        order: state.order.filter(
          (cartItem) => cartItem.orderId !== action.itemId
        ),
        totalPrice: (state.totalPrice - calcPrice).toFixed(2),
        totalCount: state.totalCount - itemQnt,
      };
    }
    default:
      return state;
  }
};

export const addOrderActionCreator = (
  itemInfo,
  itemKey,
  itemPrice,
  itemQnt,
  calcPrice,
  orderId
) => ({
  type: ADD_ORDER,
  payload: { itemInfo, itemKey, itemPrice, itemQnt, calcPrice, orderId },
});
export const increaseQntActionCreator = (itemId) => ({
  type: INCREASE_QNT,
  itemId,
});
export const decreaseQntActionCreator = (itemId) => ({
  type: DECREASE_QNT,
  itemId,
});

export const removeItemActionCreator = (itemId) => ({
  type: REMOVE_ITEM,
  itemId,
});

export default goodsReducer;
