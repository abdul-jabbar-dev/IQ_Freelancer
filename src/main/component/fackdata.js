import imgone from '../../assets/service/one.jpg'
import imgtwo from '../../assets/service/two.jpg'
import imgthree from '../../assets/service/three.jpg'

const service = [
      {
        id: 1,
        name: "how to create a youtube chanel",
        images: [ imgone, imgtwo ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        reviews: [{
            userid : 1,
            ratting: 5
        }],
        comments : [{
            userid : 1,
            massage: "wow this is work are very well"
        }]
      },
      {
        id: 2,
        name: "Google Engineering",
        images: [ imgone, imgtwo, imgthree ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        reviews: [{
            userid : 1,
            ratting: 5
        }],
        comments : [{
            userid : 1,
            massage: "wow this is work are very well"
        }]
      },
      {
        id: 3,
        name: "Twitter Account",
        images: [ imgone, imgthree, imgtwo ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        reviews: [{
            userid : 1,
            ratting: 5
        }],
        comments : [{
            userid : 1,
            massage: "wow this is work are very well"
        }]
      }
    ];

export default service;

// service : name, price, images[], description, reviews[{ 1 -> user id , 2 -> ratting }] ,comments[{ 1 -> userid 2-> massage }] 