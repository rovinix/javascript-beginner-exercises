const fs = require("fs");
const path = require("path");
const jest = require("jest");

jest.dontMock("fs");
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => (_buffer += text + "\n"));

describe("All the javascript should match", function () {
  beforeEach(() => {
    //here I import the HTML into the document
  });
  afterEach(() => {
    jest.resetModules();
  });

  it("console.log() function should be called with Hello World", function () {
    /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */

    //then I import the index.js (which should have the alert() call inside)
    const file = require("./app.js");

    //Expect the console log to have been called with "Hello World" at least one
    expect(console.log).toHaveBeenCalledWith("Hello World");
    //and I expect the console.log to be already called just one time.
    expect(console.log.mock.calls.length).toBe(1);

    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    //expect(_buffer).toBe("Compare with the entire function buffer out");
  });
});
