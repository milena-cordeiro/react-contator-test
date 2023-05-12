import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import counterReducer from './redux/reducers/couterReducer';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;
