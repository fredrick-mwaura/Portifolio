// import React from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(){
    const form = useRef(null);

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_9y04og2', 'template_uchnemu', form.current, 'fgfUHOKw2Iuq-LfK-')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log('FAILED...', error.text);
                alert('Failed to send message.');
            });
    };

  return (
    <form method='post' ref={form} onSubmit={sendEmail} >
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6" >
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Let's Start A New Project</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-green-500 text-3xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="font-semibold text-lg">Location</p>
                <p className="text-gray-500">Kiharo, Murang'a, Kenya</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-green-500 text-3xl">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-gray-500">+2547 925 2168</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-green-500 text-3xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="font-semibold text-lg">Email</p>
                <p className="text-gray-500">fredrickmwaura691@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex-1 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <textarea
              placeholder="Start writing message here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32"
            />
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
    </form>
  );
};

export default ContactForm;
