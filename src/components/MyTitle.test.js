import React, { Children } from 'react';
import renderer from 'react-test-renderer';
import MyTitle from './MyTitle';

test('its add the title', () => {
  const component = renderer.create(
    <MyTitle>{Children}</MyTitle>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
//   tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
//   tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});