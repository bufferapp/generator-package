import { connect } from 'react-redux';
import <%= presentationalComponentName %> from './components/<%= presentationalComponentName %>';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(<%= presentationalComponentName %>);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
