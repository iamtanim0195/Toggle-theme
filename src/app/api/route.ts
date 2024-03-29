export function GET  (){
  let res = {
    sports: [
        {
          "id": 1,
          "title": "Sacramento River Cats",
          "events": 8,
          "sport": "baseball",
          "image": "https://i.ibb.co/c685HLK/dc33760174d3f67737f6e318d0f118ff.jpg"
        },
          {
            "id": 2,
            "title": "Las Vegas Aviators",
            "events": 9,
            "sport": "baseball",
            "image": "https://i.ibb.co/MMD7NrM/76e2b366b2456bbd169b0c3c9525252c.jpg"
          },
          {
            "id": 3,
            "title": "Sacramento River Cats",
            "events": 10,
            "sport": "baseball",
            "image": "https://i.ibb.co/c685HLK/dc33760174d3f67737f6e318d0f118ff.jpg"
          },
          {
            "id": 4,
            "title": "New jersey devils",
            "events": 11,
            "sport": "ice hockey",
            "image": "https://i.ibb.co/nDZz6Wt/b2fcf21c696811f745109da24a740d73.jpg"
          }
    ],
    spotlight: [
        {
          "id": 1,
          "title": "Sacramento River Cats",
          "date": "OCT 15",
          "day":"SUN",
          "add": "Las Vegas Ballpark, Las Vegas, Nevada",
          "btn": "Take Flight Collection",
          "image": "https://i.ibb.co/D5H58GP/a2c7e5def5b347470305864869a894b6.jpg"
        },
          {
            "id": 2,
            "title": "Las Vegas Aviators",
            "date": "OCT 15",
            "day":"SUN",
            "time":"4:30 PM",
            "add": "Las Vegas Ballpark, Las Vegas, Nevada",
            "btn": "Orange Collection",
            "image": "https://i.ibb.co/PrhPnn1/b6e3aeda879dc6f22f94711c788789b5.jpg"
          },
          {
            "id": 3,
            "title": "Sacramento River Cats",
            "date": "OCT 15",
            "day":"SUN",
            "time":"4:30 PM",
            "add": "Las Vegas Ballpark, Las Vegas, Nevada",
            "btn": "Orange Collection",
            "image": "https://i.ibb.co/D5H58GP/a2c7e5def5b347470305864869a894b6.jpg"
          },
          {
            "id": 4,
            "title": "New jersey devils",
            "date": "OCT 15",
            "day":"SUN",
            "time":"4:30 PM",
            "add": "Las Vegas Ballpark, Las Vegas, Nevada",
            "btn": "Take Flight Collection",
            "image": "https://i.ibb.co/PrhPnn1/b6e3aeda879dc6f22f94711c788789b5.jpg"
          }
    ]
}

    return Response.json(res);
}