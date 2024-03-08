import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container} style={{ marginTop: '70px' }}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
            <p>Vänligen kontakta oss genom att fylla i formuläret.</p>
          <label className={styles.formLabel} htmlFor="name">Namn:</label>
          <input className={styles.inputField} type="text" id="name" name="name" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">Email:</label>
          <input className={styles.inputField} type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="subject">Ämne:</label>
          <input className={styles.inputField} type="text" id="subject" name="subject" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="message">meddelande:</label>
          <textarea className={styles.textareaField} id="message" name="message" rows="5" />
        </div>
        <button className={styles.submitButton} type="button">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
