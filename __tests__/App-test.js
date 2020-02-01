/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AssetInputScreen from '../Screens/AssetInputScreen';
import PortfolioTable from '../Components/PortfolioTable';
import shallow from 'enzyme/src/shallow';

describe('Testing CameraSettings', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
        <App />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
