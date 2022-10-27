import Head from 'next/head'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
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
      <div>
        <div>
          <div>
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
          <div>
            <span>Check ind</span>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <span>Check ud</span>
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div>
          <button onClick={click}>Bestil værelse</button>
        </div>
        <div>
          <h3>Registreret bookninger:</h3>
        </div>
      </div>
    </>
  )
}
