import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Question from "../components/Question";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";

const store = createStore(reducer, middleware);

describe("Question component", () => {
  it("check the snapshot with question", () => {
    const question = {
      id: "vthrdm985a262al8qx3do",
      author: "tylermcginnis",
      timestamp: 1489579767190,
      optionOne: {
        votes: ["tylermcginnis"],
        text: "take a course on ReactJS",
      },
      optionTwo: {
        votes: ["mtsamis"],
        text: "take a course on unit testing with Jest",
      },
    };

    var view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Question question={question} />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
