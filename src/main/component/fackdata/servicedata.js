import imgone from '../../../assets/service/one.jpg'
import imgtwo from '../../../assets/service/two.jpg'
import imgthree from '../../../assets/service/three.jpg'

const service = [
      {
        id: 1,
        name: "how to create a youtube chanel",
        images: [ imgone, imgtwo ],
        description: "how to create a youtube chanel we will teach you i our",
        reviews: [{
            userid : 1,
            ratting: 2
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
        description: "wow this is work are very well",
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
        description: "How to crete a Google Account here we will teach you",
        reviews: [{
            userid : 1,
            ratting: 4.5
        }],
        comments : [{
            userid : 1,
            massage: "wow this is work are very well"
        }]
      }
    ];

export default service;

// service : name, price, images[], description, reviews[{ 1 -> user id , 2 -> ratting }] ,comments[{ 1 -> userid 2-> massage }] 