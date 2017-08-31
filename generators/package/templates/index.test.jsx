import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import <%= containerName %>Container, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import <%= presentationalComponentName %> from './components/<%= presentationalComponentName %>';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('<%= containerName %>Container', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <<%= containerName %> />
      </Provider>,
    );
    expect(wrapper.find(<%= presentationalComponentName %>).length)
      .toBe(1);
  });

  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  it('should export actions', () => {
    expect(actions)
      .toBeDefined();
  });

  it('should export actionTypes', () => {
    expect(actionTypes)
      .toBeDefined();
  });

  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
