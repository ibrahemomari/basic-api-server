"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);


describe("API food Server", () => {

  describe('test for food api ',()=>{
    let obj = {
      name: "mansaff",
      ingredients: ["jameed", "met"],
      type: "jordanin",
    };
    let id=-1;
      
  // food get
  it("food get test", async () => {
    const response = await request.get(`/food`);
    expect(response.status).toEqual(200);
  });

  // // food post
  // it("food post test", async () => {
  //   const response = await request.post(`/food`).send(obj);
  //   id=response.body.id;
  //   console.log(response.body);
  //   expect(response.status).toEqual(200);
  // });

  // // food update 
  // it("food update test", async () => {
  //   const response = await request.put(`/food/${id}`).send(obj);
  //   expect(response.status).toEqual(200);
  // });

  //  // food delete 
  //  it("food delete test", async () => {
  //   const response = await request.delete(`/food/${id}`);
  //   expect(response.status).toEqual(204);
  // });
  });

});

describe("API Server", () => {
  // bad route
  it("handles not found request", async () => {
    const response = await request.get("/notttfouuundreqquuest");
    expect(response.status).toEqual(404);
  });

  // bad method
  it("handles my internal server errors", async () => {
    const response = await request.post("/bad");
    expect(response.status).toEqual(404);
  });

    // bad method
    it("handles my internal server errors", async () => {
      const response = await request.get("/badmethod");
      expect(response.status).toEqual(500);
    });

  it("/ route works", async () => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("hello");
  })});



describe("API clothes", () => {
// test for clothes
describe('test for clothes api ',()=>{
  let obj = {
    companyName: "puma",
    color: "red",
    type: "bag",
  };
  let id=-1;
    
// clothes get
it("food get test", async () => {
  const response = await request.get(`/clothes`);
  expect(response.status).toEqual(200);
});

// // clothes post
// it("food post test", async () => {
//   const response = await request.post(`/clothes`).send(obj);
//   id=response.body.id;
//   console.log(response.body);
//   expect(response.status).toEqual(200);
// });

// // clothes update 
// it("food update test", async () => {
//   const response = await request.put(`/clothes/${id}`).send(obj);
//   expect(response.status).toEqual(200);
// });

//  // clothes delete 
//  it("food delete test", async () => {
//   const response = await request.delete(`/clothes/${id}`);
//   expect(response.status).toEqual(204);
// });
})});
