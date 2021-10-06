let initialState = {
  pizza: [
    {
      id: 1,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/338a8304-9227-44fa-b326-95c1472c95e1.jpg",
      itemName: "Мексиканская",
      itemDescription:
        "Острый цыпленок, томатный соус, сладкий перец, красный лук, моцарелла, острый перец халапеньо, томаты, соус сальса",
      itemPrice: "17,90",
    },
    {
      id: 2,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a1ca977be6124000a6e8f53a1867ab39_292x292.jpeg",
      itemName: "Чизбургер-пицца",
      itemDescription:
        "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер",
      itemPrice: "14,90",
    },
    {
      id: 3,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_292x292.jpeg",
      itemName: "Четыре сыра",
      itemDescription:
        "Сливочный соус, сыры пармезан и чеддер, сыр блю чиз, моцарелла",
      itemPrice: "17,90",
    },
    {
      id: 4,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a6492db07919436a955adf66395eb377_292x292.jpeg",
      itemName: "Пепперони фреш",
      itemDescription: "Томаты, пепперони, моцарелла, томатный соус",
      itemPrice: "5,90",
    },
    {
      id: 5,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a1ca977be6124000a6e8f53a1867ab39_292x292.jpeg",
      itemName: "Чизбургер-пицца",
      itemDescription:
        "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер",
      itemPrice: "14,90",
    },
    {
      id: 6,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_292x292.jpeg",
      itemName: "Четыре сыра",
      itemDescription:
        "Сливочный соус, сыры пармезан и чеддер, сыр блю чиз, моцарелла",
      itemPrice: "17,90",
    },
    {
      id: 7,
      itemImg:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/338a8304-9227-44fa-b326-95c1472c95e1.jpg",
      itemName: "Мексиканская",
      itemDescription:
        "Острый цыпленок, томатный соус, сладкий перец, красный лук, моцарелла, острый перец халапеньо, томаты, соус сальса",
      itemPrice: "17,90",
    },
  ],
  beverages: [
    {
      id: 1001,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/ae2694cd57004c1fa6b92052dbc0ed54_292x292.jpeg",
      itemName: "Pepsi",
      itemDescription: "0,5 л",
      itemPrice: "2,70"
    },
    {
      itemid: 1002,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/26d3bb4d-d99a-4c39-86c9-4d5533bf4e0a.jpg",
      itemName: "7Up",
      itemDescription: "0,5 л",
      itemPrice: "2,70"
    },
    {
      itemid: 1003,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/c6ef23c6-f93b-490a-baa9-a0bd4879da0d.jpg",
      itemName: "Mirinda",
      itemDescription: "0,5 л",
      itemPrice: "2,70"
    },
    {
      itemid: 1004,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/0c4433e92db6435aba66d744f24e7f47_292x292.jpeg",
      itemName: "Кофе Ванильный капучино",
      itemDescription: "Горячий напиток на основе эспрессо со вспененным молоком и ванильным сиропом. 0,3 л",
      itemPrice: "4,90"
    },
    {
      itemid: 1005,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/37183960816548f2a029545ce935b5a9_292x292.jpeg",
      itemName: "Кофе Карамельный капучино",
      itemDescription: "Горячий напиток на основе эспрессо с добавлением вспененного молока и карамельного сиропа. 0,3 л",
      itemPrice: "4,90"
    }
  ],
  snacks: [
    {
      id: 2001,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/1378c8b9afaf4daeaabecb96cd8232d2_292x292.jpeg",
      itemName: "Острый Додстер",
      itemDescription: "Горячая закуска с цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке",
      itemPrice: "4,90"
    },
    {
      id: 2002,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/273e48a66bf74a1faa76454662c53429_292x292.jpeg",
      itemName: "Додстер",
      itemDescription: "Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
      itemPrice: "4,90"
    },
    {
      id: 2003,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/3436a4c72c1340d2ba8b61b5ef8d84ab_292x292.jpeg",
      itemName: "Грибной Стартер",
      itemDescription: "Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке",
      itemPrice: "5,60"
    },
    {
      id: 2004,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/925e70c844ee41789097735d880dbd23_292x292.jpeg",
      itemName: "Блинчики с ветчиной и сыром",
      itemDescription: "2шт.Воздушные блинчики с сыром и ветчиной из свинины, приготовленные в печи",
      itemPrice: "5,90"
    },
    {
      id: 2005,
      itemImg: "https://dodopizza-a.akamaihd.net/static/Img/Products/073641ddaa9c4fbe802d27f2046011da_292x292.jpeg",
      itemName: "Картофельные оладьи",
      itemDescription: "Запеченные оладьи из картофеля в панировке, 8 шт",
      itemPrice: "6,90"
    },
  ]
};

const pizzaReducer = (state = initialState, action) => {
  return state;
};

export default pizzaReducer;
