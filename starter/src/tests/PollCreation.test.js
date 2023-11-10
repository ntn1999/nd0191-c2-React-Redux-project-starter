/* eslint-disable testing-library/prefer-screen-queries */
import * as React from "react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import PollCreation from "../components/PollCreation";
import { Provider } from "react-redux";
import middleware from "../middleware";
import reducer from "../reducers";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const store = createStore(reducer, middleware);

describe("PollCreation component", () => {
  it("render pollcreation success with submit button", () => {
    store.dispatch(setAuthedUser("tylermcginnis"));
    // eslint-disable-next-line testing-library/render-result-naming-convention
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollCreation />
        </BrowserRouter>
      </Provider>
    );
    var input1 = component.getByTestId("option-one");
    fireEvent.change(input1, { target: { value: "aaa" } });
    var input2 = component.getByTestId("option-two");
    fireEvent.change(input2, { target: { value: "" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.getByTestId("option-one")).toBeInTheDocument();
    expect(component.getByTestId("option-two")).toBeInTheDocument();
    expect(component.getByTestId("submit-button")).toBeInTheDocument();
  });
});