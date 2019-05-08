import React from 'react';
import { shallow } from "enzyme";
import CountDown from "./CountDown";

describe('CountDown component', () => {
    it('starts with a count at 3', () => {
        const wrapper = shallow(<CountDown />);
        const text = wrapper.find('p.countdown').text();
        expect(text).toEqual('3');
    });

    it('finish with a count at 0', () => {
        const wrapper = shallow(<CountDown />);
        const startBtn = wrapper.find('button.start');
        startBtn.simulate('click');
        const text = wrapper.find('p.countdown').text();
        expect(text).toEqual('0');
    });
});