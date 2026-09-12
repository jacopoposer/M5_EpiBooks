import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../App";
import books from "../../books/history.json"

test("book filtering method for a regular book", () => {

    render(
        <App />
    )

    const searchInput = screen.getByTestId("SearchInput")

    fireEvent.change(searchInput, {
        target: { value: "wild" }
    })

    const filteredBooks = screen.getAllByTestId("BookCard")

    expect(filteredBooks.length).toBe(1)
})

test("show all books when search is empty", () => {

    render(
        <App />
    )

    const searchInput = screen.getByTestId("SearchInput")

    fireEvent.change(searchInput, {
        target: { value: "" }
    })

    const filteredBooks = screen.getAllByTestId("BookCard")

    expect(filteredBooks.length).toBe(books.length)

})

test("show no books for unmatching search", () => {

    render(
        <App />
    )

    const searchInput = screen.getByTestId("SearchInput")

    fireEvent.change(searchInput, {
        target: { value: "zzzzzzz" }
    })

    const filteredBooks = screen.queryAllByTestId("BookCard")
    const noBooksAlert = screen.getByText("There are no books on this search")

    expect(filteredBooks.length).toBe(0)
    expect(noBooksAlert).toBeInTheDocument()

})