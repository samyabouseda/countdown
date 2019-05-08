import React from 'react';
import { shallow } from "enzyme";
import CountDown from "./CountDown";


describe('CountDown component', () => {
    beforeEach(() => jest.useFakeTimers());

    afterEach(() => jest.clearAllTimers());

    it('starts with a count at 3', () => {
        const wrapper = shallow(<CountDown startCount={3}/>);
        const text = wrapper.find('p.countdown').text();
        expect(text).toEqual('3');
    });

    it('finish with a count at 0', () => {
        const wrapper = shallow(<CountDown startCount={3}/>);
        const startBtn = wrapper.find('button.start');
        startBtn.simulate('click');

        jest.advanceTimersByTime(3000);
        const text = wrapper.find('p.countdown').text();
        expect(text).toEqual('0');
    });

    it('resets count to 3 when the reset button is clicked', () => {
       const wrapper = shallow(<CountDown startCount={3}/>);
       const resetBtn = wrapper.find('button.reset');
       resetBtn.simulate('click');
       const text = wrapper.find('p.countdown').text();
       expect(text).toEqual('3');
    });
});