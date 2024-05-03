import React from 'react';

const Faq = () => {
    return (
        <div className='my-14'>
            <div>
                <h3 className="text-4xl font-bold text-center my-8">Frequently Asked Questions (FAQ)</h3>
            </div>
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
    How do I book a tour/package?
    </div>
    <div className="collapse-content"> 
      <p>You can easily book a tour or package through our website by navigating to the View Details section and following the simple steps to select your destination, dates, and preferences.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What payment methods do you accept?    </div>
    <div className="collapse-content"> 
      <p>We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can choose the option that suits you best during the checkout process.
</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Can I customize my travel itinerary?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we offer customizable travel itineraries to suit your preferences. Simply contact our customer support team, and we will work with you to create a personalized itinerary tailored to your needs.
</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Are flights and accommodations included in the tour/package price?
    </div>
    <div className="collapse-content"> 
      <p>The inclusion of flights and accommodations varies depending on the tour/package you select. Please refer to the tour/package details for information on what is included in the price.

</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What safety measures are in place regarding COVID-19?
    </div>
    <div className="collapse-content"> 
      <p>We prioritize the safety and well-being of our customers and adhere to all local health guidelines and regulations. Our tours and services are conducted with enhanced safety protocols to ensure a safe and enjoyable experience for all travelers.

</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Do you offer travel insurance?
    </div>
    <div className="collapse-content"> 
      <p>While we do not provide travel insurance directly, we highly recommend purchasing travel insurance to protect yourself against unforeseen circumstances such as trip cancellations, medical emergencies, or lost luggage.

</p>
    </div>
  </div>
</div>
<p className='text-lg ml-3 font-bold'>You can Ask any thing</p>
        </div>
    );
};

export default Faq;