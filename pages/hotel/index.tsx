import Head from 'next/head'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Jumbotron from '../../components/Jumbotron'
import styles from '../../styles/hotel.module.css'
import 'react-datepicker/dist/react-datepicker.css'

export default function Hotel() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function click() {
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(startDate);
    console.log(endDate);
  }

  // Use getStaticProps to fetch data server side and pass it to the page as props

  return (
    <>
      <Head>
        <title>Book et værelse</title>
      </Head>
      <div className={styles.flex_container}>
        <Jumbotron
          headline="Book et værelse på hotel Sandbjergvej 2"
          src="/images/hotel.jpg"
          alt="hotel banner"
          width={3200}
          height={1200}
        />
        <div className={styles.flex_section}>
          <div className={styles.checkBox}>
            <div>
              <label htmlFor="name">Navn</label>
              <input type="text" id="name" name="name" onChange={(e) => setName(e.currentTarget.value)} />
            </div>
            <div>
              <label htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" onChange={(e) => setPhone(e.currentTarget.value)} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={(e) => setEmail(e.currentTarget.value)} />
            </div>
          </div>
          <div className={styles.checkBox}>
            <span>Check ind</span>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className={styles.checkBox}>
            <span>Check ud</span>
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div className={styles.flex_section}>
          <button onClick={click}>Bestil værelse</button>
        </div>
        <div className={styles.flex_section}>
          <h3>Registreret bookninger:</h3>
        </div>
      </div>
    </>
  )
}
