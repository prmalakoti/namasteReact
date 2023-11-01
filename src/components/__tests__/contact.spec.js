import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Constact us component test cases", () => {
    it("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    })

    it("Should load button inside contact us component", () => {
        render(<Contact />);
        const submit = screen.getByText("Send Enquery");
        // Assertion
        expect(submit).toBeInTheDocument();
    })

    it("Should load 3 input box inside contact us component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        // Assertion
        expect(inputBoxes.length).toBe(3)
    })
});