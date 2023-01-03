import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

type Data = {
  documentResponse: Array<any>
}

const url =
  'https://jesperravn-hotelrooms.azurewebsites.net/api/hotelrooms?code=VAX0SjKqE5t2lkz1zBeOarqijQuRlE8jmum9Pt5lGaamAzFu_cTAkg%3D%3D'

export default function RoomReservationModal({
  isModalOpen,
  setIsModalOpen,
  type,
}) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(url + `&f=room&q=${type}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [type])

  function dateOnChange(event) {
    setDate(event.target.value)
  }

  function nameOnChange(event) {
    setName(event.target.value)
  }

  async function submit() {
    if (name == '' || date == '') {
      return
    }

    const url = process.env.API_HOST
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        document: { name: name, date: date, room: type },
      }),
    })
    const data = await response.json()
    response.status === 200 ? setIsModalOpen(false) : console.log(data)
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/')
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0')
  }

  return (
    <Transition show={isModalOpen} as={Fragment}>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-sm bg-white m-6 rounded-2xl">
              <Dialog.Title className="text-center underline text-xl p-4 bg-green-400 rounded-t-2xl">
                Bestil overnatning: {type}
              </Dialog.Title>
              <Dialog.Description className="text-center text-opacity-60 text-slate-500 mt-2">
                Venlist udfyld nedenstående
              </Dialog.Description>

              <div className="flex flex-col p-4">
                <div className="flex flex-row">
                  <input
                    id="name"
                    type="text"
                    className="border-2 rounded w-full p-2"
                    placeholder="Navn"
                    onChange={nameOnChange}
                    required
                  ></input>
                </div>
                <div className="flex flex-row justify-between mt-4">
                  <input
                    id="date"
                    type="date"
                    className="border-2 rounded w-full p-2"
                    placeholder="Dato"
                    onChange={dateOnChange}
                    required
                  ></input>
                </div>
              </div>

              <div className="flex flex-col m-3">
                <button
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => submit()}
                >
                  Bestil
                </button>
                <button
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => console.log(data)}
                >
                  Cancel
                </button>
              </div>
              <div id="panel.footer" className="flex flex-col mx-4">
                <p className="text-center text-opacity-60 text-slate-500 mt-2">
                  Bestillinger:
                </p>
                <ul className="text-center mb-4 text-opacity-80 text-slate-600">
                  {data &&
                    data.documentResponse.map((item, i) => (
                      <li key={i} className="flex flex-row justify-between">
                        <span>{item.name}</span><span>{formatDate(new Date(item.date))}</span>
                      </li>
                    ))
                  }
                </ul>
                {isLoading && (
                  <div className="animate-pulse flex mb-4">
                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-2 bg-slate-200 rounded"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
