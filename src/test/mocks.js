export const GOOGLE_BOOKS_SINGLE_TEST_BOOK = JSON.stringify({
    "items":[
       {
          "id":1,
          "volumeInfo":{
             "title":"Test Book",
             "imageLinks":{
                "smallThumbnail":"test.jpg"
             }
          }
       }
    ]
 });

 export const GOOGLE_BOOKS_TWO_TEST_BOOKS = JSON.stringify({
    "items":[
       {
          "id":1,
          "volumeInfo":{
             "title":"Test Book",
             "imageLinks":{
                "smallThumbnail":"test.jpg"
             }
          }
       },
       {
        "id":2,
        "volumeInfo":{
           "title":"Test Book 2",
           "imageLinks":{
              "smallThumbnail":"test2.jpg"
           }
        }
     }
    ]
 });