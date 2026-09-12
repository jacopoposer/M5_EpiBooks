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