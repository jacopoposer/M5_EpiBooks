import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../App";
import books from "../../books/history.json"

test("render books card", ()=>{

    render(
        <App/>
    )

    const booksCard = screen.queryAllByTestId("BookCard")
       
    expect(booksCard).toHaveLength(books.length)

})