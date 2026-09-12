import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../App";

test("render comment area", ()=>{

    render(
        <App/>
    )

    const detailButton = screen.queryAllByTestId("DetailButtonTest")

    fireEvent.click(detailButton[0])

    const commentArea= screen.queryByTestId("CommentTest")

    expect(commentArea).toBeInTheDocument()
})