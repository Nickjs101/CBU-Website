import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="">
      <div className="w-full h-auto md:h-auto lg:h-screen flex flex-col-reverse md:flex-row">
        <iframe title='CBUmap' className='w-full md:w-1/2 h-auto' src="https://maps.app.goo.gl/4m3V1Cm7pQvTbi5EA"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <div className='w-full md:w-1/2 p-4 md:p-12 lg:pr-36 '>
          <h2 className="text-3xl font-bold font-serif mb-0">Get in Touch</h2> 
          <p className='text-lg text-gray-400 mb-8'>Contact us for a quote</p>
          <div className='flex flex-wrap gap-x-4 gap-y-0 mb-8 text-sm font-sans'>
            <div className="mb-4 inline-block">
              <h3 className="text-gray-400 text-xs">Office Address</h3>
              <p>7052 Legaspi ext. Duquit-Maisac Mabalacat City Pampanga</p>
            </div>
            <div className="mb-4 inline-block">
              <h3 className="text-gray-400 text-xs">Factory Address</h3>
              <p>Purok 7 Duquit Mabalacat City Pampanga</p>
            </div>
            <div className="mb-4 inline-block">
              <h3 className="text-gray-400 text-xs">Phone</h3>
              <p>0917-623-7040</p>
            </div>
            <div className="mb-4 inline-block">
              <h3 className="text-gray-400 text-xs">Email</h3>
              <p>cbuwtm@gmail.com</p>
            </div>
          </div>
          

          <form action='https://submit-form.com/OWbcYrEsl'>
            <h2 className="text-xl font-bold font-serif mb-2">Get a quote</h2> 
            <div className="mb-4">
              <label className="block mb-2 text-gray-400 text-sm">Name</label>
              <div className='inputdiv'>
                <input className='contactinput' type="text" name='name' placeholder="Input Underline"/>
                <span className='contactinputspan'></span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-400 text-sm">Email</label>
              <div className='inputdiv'>
                <input className='contactinput' type="text" name='email' placeholder="Input Underline"/>
                <span className='contactinputspan'></span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-400 text-sm">Message</label>
              <div className='textareadiv'>
                <textarea className='tarea' type="text" name='message' placeholder="Input Trace"></textarea>
                <span class="tareabottom tareaspan"></span>
                <span class="tarearight tareaspan"></span>
                <span class="tareatop tareaspan"></span>
                <span class="tarealeft tareaspan"></span>
              </div>
            </div>
            <div className='flex justify-end'>
              <button type="submit" className=" hover:shadow-xl text-white bg-red-500 hover:bg-red-500 px-4 py-2 rounded">Send Message</button>
            </div>
          </form>

        </div>
      </div>
    </section>



  );
};

export default Contact;
