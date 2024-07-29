import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="m-16">
        <div className="grid place-items-end">
          <div className="bg-white text-black font-semibold md:p-10 p-2">
            <div className="p-5">
              <h4 className="uppercase text-2xl mb-4">HURMATLI XARIDORLAR</h4>
              <h2 className="uppercase text-5xl">bir bor kelib ko'ring</h2>
            </div>
            <div className="p-4 text-xl font-normal">
              <p className="mb-4">Qorasuv Toshkent yo'li 94-uy</p>
              <p className="mb-4">Jannatmakon@gmail.com</p>
              <p>+998 70 204 00 01</p>
            </div>
            <div className="p-4">
              <button
                type="button"
                className="bg-red-500 hover:bg-black pt-4 pb-4 pl-8 pr-8 uppercase text-xl text-white font-semibold"
              >
                Aloqa uchun
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-background">
        <img src="./img/bedroom/oldi.jpg" alt="img" />
      </div>
    </div>
  );
};

export default ContactUs;
