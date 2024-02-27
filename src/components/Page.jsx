import React from 'react';

function Page() {
  return (
    <>
      <section className='flex flex-col md:flex-row mt-2 w-auto'>
        <div className='w-full md:w-2/6 rounded mb-4 md:mb-0'>
          <img src='award.png' className='w-full' alt="Award" />
        </div>

        <div className='w-full md:w-4/6 px-2'>
          <h2 className='text-start px-4 font-sans font-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
          <div className='flex flex-col text-start pl-8'>
            <ul className='list-disc ml-4 py-1 font-semibold font-sans leading-4 text-sm'>
              <li>C.R.I's energy-efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy</li>
              <li>C.R.I is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5-star rated efficient smart pumps with IoT-enabled control panel.</li>
            </ul>
          </div>

          <img src='picture.png' className='max-w-full pl-5 mt-2' alt="Picture" />

          <p className='text-start font-sans pt-2 pl-6 font-semibold text-sm'>
            Government of India has awarded the Mr. G.Selvaraj, joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </section>

      <div className='my-10 text-sm font-bold'>INSTALLED OVER 10 LAKHS PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</div>

      <section className='flex flex-col bg-yellow-100 w-full'>
        <img src='products.png' className='w-full' alt="Products" />
        <div className='text-center font-semibold pt-5'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</div>
        <div className='border-t-2 border-red-600 h-0 mt-5'></div>
      </section>
    </>
  );
}

export default Page;
