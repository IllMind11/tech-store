import React from "react";

export function Footer() {
  return (
    <footer className="text-center bg-gray-800 text-white">
      <div className="flex px-6 pt-6">
        <div className="flex-1">
          <form action="">
            <div className="flex justify-center items-center gap-x-2.5">
              <div className="md:mb-6">
                <input
                  type="text"
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="md:mr-auto mb-6">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mb-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </form>
        </div>

        <div className="mb-6 flex-1">
          <h5 className="uppercase font-bold mb-2.5">Links</h5>

          <ul className="list-none mb-0">
            <li>
              <a href="#!" className="text-white">
                Link 1
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Link 2
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Link 3
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Link 4
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center p-4 bg-gray-900">
        © 2021 Copyright:
        <a className="text-white" href="https://tailwind-elements.com/">
          Tailwind Elements
        </a>
      </div>
    </footer>
  );
}
