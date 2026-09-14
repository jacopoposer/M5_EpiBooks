import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../App";

test("render no comment on first charge", () => {

    render(
        <App />
    )

    const commentCard = screen.queryAllByTestId("CommentCard")

    expect(commentCard).toHaveLength(0)
})


test("render comments", async ()=>{

    render(
        <App/>
    )

    const commentBtns = screen.getAllByTestId("ReviewsButtonTest")

    fireEvent.click(commentBtns[0])

    const commentCards = await screen.findAllByTestId("CommentCard")
    
    expect(commentCards[0]).toBeInTheDocument()
})

test("show no reviews message for a book without reviews", async () => {

    render(<App />)

    const commentBtns = screen.getAllByTestId("ReviewsButtonTest")

    fireEvent.click(commentBtns[INDICE_LIBRO_SENZA_COMMENTI])

    const noReviewsMessage = await screen.findByText("No reviews yet")

    expect(noReviewsMessage).toBeInTheDocument()
})