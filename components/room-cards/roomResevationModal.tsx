import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function RoomReservationModal({
  isModalOpen,
  setIsModalOpen,
  type,
}) {
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
            <Dialog.Panel className="w-full max-w-sm rounded bg-white m-6">
              <Dialog.Title>Bestil overnatning: {type}</Dialog.Title>
              <Dialog.Description>
                This will permanently deactivate your account
              </Dialog.Description>

              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>

              <button
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => setIsModalOpen(false)}
              >
                Bestil
              </button>
              <button
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
