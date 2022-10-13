import { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

const useSetState = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = (payload) => dispatch({ type: '', payload });

  return [state, setState];
};

const t = {
  username: 'username',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
  isInvestmentChecked: 'isInvestmentChecked',
};

const initialState = {
  [t.username]: '',
  [t.email]: '',
  [t.password]: '',
  [t.confirmPassword]: '',
  [t.isInvestmentChecked]: false,
};

const SignUpFrom = () => {
  const [state, setState] = useSetState(initialState);

  const clear = () => {
    setState(initialState);
  };

  const handleChange = (e) => {
    console.log({ eventtarget: e.target });

    if (e.target.name === 'investments') {
      setState({ [t.isInvestmentChecked]: !state.isInvestmentChecked });

      return;
    }
    setState({ [e.target.name]: e.target.value });
  };

  return (
    <div className="sugnupForm">
      <h2>Amazing Unicorn Startup</h2>
      <p>
        We don't actually have a product or a way to make money yet, but why
        don't you sugn up anyway so that you can squat on your username just in
        case
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('SUBMIT');
          clear();
        }}
      >
        <label htmlFor={t.username}>
          <div>User Name</div>
          <input
            type="text"
            id={t.username}
            name={t.username}
            value={state.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={t.email}>
          <div>Email</div>
          <input
            type="email"
            id={t.email}
            name={t.email}
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={t.password}>
          <div>Password</div>
          <input
            type="password"
            id={t.password}
            name={t.password}
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={t.confirmPassword}>
          <div>Confirm Password</div>
          <input
            type="password"
            id={t.confirmPassword}
            name={t.confirmPassword}
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <label className="investments" htmlFor={t.isInvestmentChecked}>
          <input
            type="checkbox"
            id={t.isInvestmentChecked}
            name={t.isInvestmentChecked}
            checked={state.isInvestmentChecked}
            onChange={handleChange}
          />
          <div>Do you want to maybe help us out with an angel investment?</div>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpFrom;
