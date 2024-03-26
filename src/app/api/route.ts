export function GET (){
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
    ]
}

    return Response.json(res);
}