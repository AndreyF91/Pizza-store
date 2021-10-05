let initialState = {
  pizza: [
    {
      id: 1,
      pizzaImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/338a8304-9227-44fa-b326-95c1472c95e1.jpg",
      pizzaName: "Мексиканская",
      pizzaDescription:
        "Острый цыпленок, томатный соус, сладкий перец, красный лук, моцарелла, острый перец халапеньо, томаты, соус сальса",
      pizzaPrice: "17,90",
    },
    {
      id: 2,
      pizzaImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a1ca977be6124000a6e8f53a1867ab39_292x292.jpeg",
      pizzaName: "Чизбургер-пицца",
      pizzaDescription:
        "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер",
      pizzaPrice: "14,90",
    },
    {
      id: 3,
      pizzaImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_292x292.jpeg",
      pizzaName: "Четыре сыра",
      pizzaDescription:
        "Сливочный соус, сыры пармезан и чеддер, сыр блю чиз, моцарелла",
      pizzaPrice: "17,90",
    },
    {
      id: 4,
      pizzaImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a6492db07919436a955adf66395eb377_292x292.jpeg",
      pizzaName: "Пепперони фреш",
      pizzaDescription: "Томаты, пепперони, моцарелла, томатный соус",
      pizzaPrice: "5,90",
    },
    {
      id: 5,
      pizzaImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a1ca977be6124000a6e8f53a1867ab39_292x292.jpeg",
      pizzaName: "Чизбургер-пицца",
      pizzaDescription:
        "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер",
      pizzaPrice: "14,90",
    },
    {
      id: 6,
      pizzaImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_292x292.jpeg",
      pizzaName: "Четыре сыра",
      pizzaDescription:
        "Сливочный соус, сыры пармезан и чеддер, сыр блю чиз, моцарелла",
      pizzaPrice: "17,90",
    },
    {
      id: 7,
      pizzaImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/338a8304-9227-44fa-b326-95c1472c95e1.jpg",
      pizzaName: "Мексиканская",
      pizzaDescription:
        "Острый цыпленок, томатный соус, сладкий перец, красный лук, моцарелла, острый перец халапеньо, томаты, соус сальса",
      pizzaPrice: "17,90",
    },
  ],
  beverages: [
    {
      id: 1001,
      beverageImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/ae2694cd57004c1fa6b92052dbc0ed54_292x292.jpeg",
      beverageName: "Pepsi",
      beverageDescription: "0,5 л",
      beveragePrice: "2,70"
    },
    {
      id: 1002,
      beverageImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/26d3bb4d-d99a-4c39-86c9-4d5533bf4e0a.jpg",
      beverageName: "7Up",
      beverageDescription: "0,5 л",
      beveragePrice: "2,70"
    },
    {
      id: 1003,
      beverageImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/c6ef23c6-f93b-490a-baa9-a0bd4879da0d.jpg",
      beverageName: "Mirinda",
      beverageDescription: "0,5 л",
      beveragePrice: "2,70"
    },
    {
      id: 1004,
      beverageImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/0c4433e92db6435aba66d744f24e7f47_292x292.jpeg",
      beverageName: "Кофе Ванильный капучино",
      beverageDescription: "Горячий напиток на основе эспрессо со вспененным молоком и ванильным сиропом. 0,3 л",
      beveragePrice: "4,90"
    },
    {
      id: 1005,
      beverageImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/37183960816548f2a029545ce935b5a9_292x292.jpeg",
      beverageName: "Кофе Карамельный капучино",
      beverageDescription: "Горячий напиток на основе эспрессо с добавлением вспененного молока и карамельного сиропа. 0,3 л",
      beveragePrice: "4,90"
    }
  ]
};

const pizzaReducer = (state = initialState, action) => {
  return state;
};

export default pizzaReducer;
