import React from "react"
import { shallow } from "enzyme"
import TimerButton from "./TimerButton"

describe("TimerButton", () => {
    let container: () => void

    beforeEach(() => {
        container = shallow(
            <TimerButton
                id={""}
                buttonAction={jest.fn()}
                buttonValue={""}
            />
        )
    })

    it("should render a <div />", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
})