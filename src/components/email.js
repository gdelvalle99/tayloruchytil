import React, { useState } from 'react';
import * as styles from './email.module.css';

export default function EmailListForm: React.FunctionComponent<{}> = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.EmailListForm}>
      <h2>Subscribe to my email list!</h2>
      <div className={styles.Wrapper}>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default EmailListForm;