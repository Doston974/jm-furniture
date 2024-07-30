import React from "react";
import Heading from "../common/Heading";

const Contacts = () => {
  return (
    <div className="bg-white mt-16 text-center">
      <Heading title="Biz bilan aloqa" description="" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="m-16">
          <div className="grid place-items-end">
            <div className="bg-white text-black font-semibold md:p-10 p-2">
              <div className="p-5">
                <h4 className="uppercase text-2xl mb-4">Bizning manzil</h4>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3413598424527!2d69.32675791517454!3d41.0833876356993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae43072864a45d%3A0xe77968e22fe841e0!2z0pvQvtGA0LDRgdGDINC80LXQsdC10Ls!5e0!3m2!1sru!2s!4v1722229707988!5m2!1sru!2s"
          allowfullscreen=""
          loading="lazy"
          className="w-full h-[500px] mt-24"
        />
      </div>
    </div>
  );
};

export default Contacts;
