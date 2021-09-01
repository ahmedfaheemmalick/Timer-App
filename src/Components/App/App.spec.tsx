import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Timer from '../Timer/Timer'

describe('App Component Tests', () => {
    let container: () => void;

    beforeEach(() => container = shallow(<App />))

    it('Should render a div', () => {
        expect(container.find('div').length).toEqual(1)
    })

    it('Should render the Timer Component', () => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true)
    })
})