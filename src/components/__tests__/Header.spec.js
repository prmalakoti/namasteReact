import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore"
import Header from "../Header"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it("Should load header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("heading");
    expect(loginButton).toBeInTheDocument();
})

it("Should header component have cart is 0 ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByText("Cart - (0)");
    expect(loginButton).toBeInTheDocument();
})

it("Should cahnge login button to logout on click()", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
})


it("Should cahnge login button to logout and too login on click()", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);
    const loginButton1 = screen.getByText("Login");
    expect(loginButton1).toBeInTheDocument();
})