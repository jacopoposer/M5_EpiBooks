import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../App";

test("render card border", ()=>{

    render(
        <App/>
    )

    const detailButton = screen.getAllByTestId("ReviewsButtonTest")

    fireEvent.click(detailButton[0])

    const card= screen.getAllByTestId("BookCard")

    expect(card[0]).toHaveClass("border-danger border-2")
})

test("remove border from previous card when another book is selected", () => {

    render(
        <App />
    )

    const detailButton = screen.getAllByTestId("ReviewsButtonTest")

    //seleziono il primo libro e controllo la presenza delle classi aggiunte sul primo e secondo libro
    fireEvent.click(detailButton[0])

    const card= screen.getAllByTestId("BookCard")

    expect(card[0]).toHaveClass("border-danger border-2")
    expect(card[1]).not.toHaveClass("border-danger border-2")
    
    //clicco sul secondo libro e controllo le classi
    fireEvent.click(detailButton[1])



    expect(card[1]).toHaveClass("border-danger border-2")
    expect(card[0]).not.toHaveClass("border-danger border-2")
})
