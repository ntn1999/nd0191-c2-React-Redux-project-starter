/* eslint-disable testing-library/prefer-screen-queries */
import * as React from "react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import middleware from "../middleware";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import reducer from "../reducers";
import { createStore } from "redux";
import Leaderboard from "../components/Leaderboard";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, middleware);

describe("Leaderboard component", () => {
  it("display list user", async () => {
    await store.dispatch(handleInitialData());
    // eslint-disable-next-line testing-library/render-result-naming-convention
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );
    expect(component.queryAllByTestId("user").length).toEqual(4);
  });

  it("render success leaderboardcomponent", async () => {
    await store.dispatch(handleInitialData());
    // eslint-disable-next-line testing-library/render-result-naming-convention
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );
    expect(component.getByTestId("leaderboard")).toBeInTheDocument();
  });
});