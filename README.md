# App State


```js
// Back End

const appState = {
  users: [
    {
      id: ,
      wallet: {
        balance: Integer,
        orderHistory: Array,
        balanceHistory: Array,
      },
      reviews: ,
      ratings: ,
      games: ,
    }
  ],
  games: [
    {
      id: ,
      price: ,
      description: ,
      owner: 
    }
  ],
  reviews: [], 
  ratings: [], 
}


// Front End

const appState = {
  homePage: {
    games: {
    }
    topGames: [
      
    ],
    featuredGames: [
    ]
  }
  gameDetailPage: {
    game: {

      reviews: [],
      ratings: [],
    }
  },
  userPage: {
    user: {
    },
    reviews: [],
    ratings: [],
  }
}
```