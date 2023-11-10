/* eslint-disable testing-library/prefer-screen-queries */
import * as React from "react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LoginPage from "../components/LoginPage";
import { Provider } from "react-redux";
import middleware from "../middleware";
import reducer from "../reducers";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, middleware);

describe("LoginPage component", () => {
  it("render success login page", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );
    expect(component.getByTestId("password")).toBeInTheDocument();
    expect(component.getByTestId("user")).toBeInTheDocument(); 
    expect(component.getByTestId("login-button")).toBeInTheDocument();
  });
});