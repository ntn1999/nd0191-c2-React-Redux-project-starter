var _DATA = require("../utils/_DATA");

describe("test api", () => {
  it("_saveQuestionAnswer success", async () => {
    const question = {
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
      authedUser: "mtsamis",
    };
    var result = await _DATA._saveQuestionAnswer(question);
    expect(result).toBeTruthy();
  });

  it("_saveQuestionAnswer success 1", async () => {
    const question = {
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
      authedUser: "sarahedo",
    };
    var result = await _DATA._saveQuestionAnswer(question);
    expect(result).toBeTruthy();
  });

  it("_saveQuestion success", async () => {
    const question = {
      author: "sarahedo",
      optionTwoText: "đi Nhật",
      optionOneText: "go English",
    };
    var result = await _DATA._saveQuestion(question);
    expect(result.author).toEqual("sarahedo");
  });

  it("_saveQuestion success 1", async () => {
    const question = {
      author: "mtsamis",
      optionTwoText: "abc",
      optionOneText: "xyz",
    };
    var result = await _DATA._saveQuestion(question);
    expect(result.author).toEqual("mtsamis");
  });

  it("_saveQuestion faild", async () => {
    const question = {
      optionOneText: "learn react",
      optionTwoText: "learn angular",
    };
    await expect(_DATA._saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
