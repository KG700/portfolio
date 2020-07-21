import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navigation';
import Logo from '../Logo/Logo';
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Navigation', () => {
    // let wrapper;

    // beforeEach(() => {
    //     wrapper = shallow(<Navigation />);
    // })

    it('contains the Logo component, when not on Home page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/education']}>
                <Navigation />
            </MemoryRouter>
        );
        expect(wrapper.find(Logo)).toHaveLength(1)
    })

    it('does not contains the Logo component, when on Home page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Navigation />
            </MemoryRouter>
        );
        expect(wrapper.find(Logo)).toHaveLength(0)
    })

    
})