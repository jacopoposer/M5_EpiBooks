import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../App"


test("render of Welcome", () => {

    render(
        <App />
    )

    const welcome = screen.getByText("Welcome to EpiBooks!")

    expect(welcome).toBeInTheDocument()
})