import { shallow } from 'enzyme'
import Timer from './Timer'

describe('mounted Timer', () => {
    let container: () => void

    beforeEach(() => container = shallow(<Timer />));

    it("should change isOn state true when the start button is clicked", () => {
        expect(container.find("#start").first().simulate("click"));
    });

    it("should change isOn state false when the stop button is clicked", () => {
        expect(container.find("#stop").first().simulate("click"));
    });

    it("should change isOn state false when the reset button is clicked", () => {
        expect(container.find("#reset").first().simulate("click"));
    });
});