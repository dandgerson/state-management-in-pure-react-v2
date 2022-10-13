import { useState } from 'react';

const SignUpFrom = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isInvestmentsChecked, setIsInvestmentsChecked] = useState(false);

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
        }}
      >
        <label htmlFor="name">
          <div>User Name</div>
          <input
            type="text"
            id="name"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <div>Email</div>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <div>Password</div>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="confirm-password">
          <div>Confirm Password</div>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label className="investments" htmlFor="investments">
          <input
            type="checkbox"
            id="investments"
            name="investments"
            checked={isInvestmentsChecked}
            onChange={() => setIsInvestmentsChecked(!isInvestmentsChecked)}
          />
          <div>Do you want to maybe help us out with an angel investment?</div>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpFrom;
