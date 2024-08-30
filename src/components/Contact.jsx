import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="">
      <div className="w-full h-auto md:h-auto lg:h-screen flex flex-col-reverse md:flex-row">
        <iframe title='CBUmap' className='w-full md:w-1/2 h-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5414.835889867087!2d120.61136980865196!3d15.18074911670172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ed12643ccb23%3A0x58d30a11f0502da4!2sCBU%20Water%20Tank%20Manufacturing!5e0!3m2!1sen!2sph!4v1722836303076!5m2!1sen!2sph"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='w-full md:w-1/2 p-4 md:p-12 lg:pr-36 '>
          <h2 className="article-h font-bold font-serif mb-0">Get in Touch</h2> 
          <p className='text-md text-gray-400 mb-8'>Contact us for a quote</p>
          <div className='flex flex-wrap gap-x-4 gap-y-0 mb-8 text-sm font-sans'>
            <div className="mb-4 inline-block">
              <h3 className="text-gray-400 text-xs">Address</h3>
              <p>7052 Legaspi ext. Duquit-Maisac Mabalacat City Pampanga</p>
            </div>
            <div className="mb-4 inline-block">
              <h3 className="text-gray-400 text-xs">Phone</h3>
              <p>0917-623-7040</p>
            </div>
            <div className="mb-4 inline-block">
              <h3 className="text-gray-400 text-xs">Email</h3>
              <p>cbutanks@gmail.com</p>
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
              <label className="block mb-2 text-gray-400 text-sm">Phone Number</label>
              <div className='inputdiv'>
                <input className='contactinput' type="tel" pattern="[0-9]{11,}" name='phone' placeholder="Input Underline"/>
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
