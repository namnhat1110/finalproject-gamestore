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
      games: [
        {
        status: ,
        totalTimePlayed: ,
        purchaseDate: ,

        }
      ],
      reviews: [],
      ratings: [],
      wishList: [],
      friends: []
    }
  ],
  games: [
    {
      id: ,
      price: ,
      description: ,
      owner: ,
      coverPhotoUrl: ,
      largePhotos: [],
    }
  ],
  reviews: [
    {
      game: { ref: "Game", required: true, type: Schema.Types.ObjectId },
      owner: {
        ref: "User",
        required: true,
        type: Schema.Types.ObjectId,
      },
    }
  ],
  ratings: [],

  // 1. The person who send the request to be friends is the friender.
  // 2. Collect all user.friendships
  friendships: [
    {
      frienderId: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
      },
      friendeeId: { type: Schema.Types.ObjectId, ref: "User" },
      status: {
        required: true,

        // 1. What kind of api/controller/page could we make with these values?
        values: ["Sent", "Received", "Accepted", "Declined"],
        message: "{VALUE} is not supported",
      },
    }
  ]
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
