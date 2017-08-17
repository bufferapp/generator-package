import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import <%= presentationalComponentName %> from './index';

storiesOf('<%= presentationalComponentName %>')
  .addDecorator(checkA11y)
  .add('a story', () => (
    <<%= presentationalComponentName %> />
  ));
