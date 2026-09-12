import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../App";

test("render comment area", () => {

    render(
        <App />
    )

    const detailButton = screen.getAllByTestId("ReviewsButtonTest")

        //first click show the commentArea
    fireEvent.click(detailButton[0])

    const commentArea = screen.getByTestId("CommentTest")

    expect(commentArea).toBeInTheDocument()

    //second click hide the commentArea
    fireEvent.click(detailButton[0])

    const hiddenCommentArea = screen.queryByTestId("CommentTest")

    expect(hiddenCommentArea).not.toBeInTheDocument()
})