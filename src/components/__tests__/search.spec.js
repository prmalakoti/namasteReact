import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestoList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

// describe("Resto card test coverage", () => {
//     beforeAll(() => {
//         console.log("Before All");
//     })
//     beforeEach(() => {
//         console.log("Before Each");
//     })
//     afterAll(() => {
//         console.log("After All");
//     })
//     afterEach(() => {
//         console.log("After Each");
//     })
// })

it("Should Search Res List for burger text input ", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(1);

    const searchInput = screen.getByTestId("searchInput");
    let data = fireEvent.change(searchInput, { target: { value: "lad" } });
    // fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const topRatedBtn = screen.getByRole("button", {
        name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(1);
});

it("Should clear filter", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const clearFilterBtn = screen.getByRole("button", {
        name: "Clear Filter",
    });
    fireEvent.click(clearFilterBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(1);
});