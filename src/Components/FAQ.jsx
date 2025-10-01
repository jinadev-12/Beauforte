import React, { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function FAQ() {

  // gsap animation

 const faqRef = useRef(null);
  const faqtitleRef = useRef(null);
    const mainRef = useRef(null);
    const questionRefs = useRef([]);




 useEffect(() => {
   const ctx = gsap.context(() => {
     // title

     gsap.fromTo(
       faqtitleRef.current,
       { scale: 1.06, autoAlpha: 0 }, // start
       {
         scale: 1.0,
         autoAlpha: 1, // end
         duration: 1,
         scrollTrigger: {
           trigger: faqRef.current,
           start: "top 80%",
         },
       }
     );

     // Animate each question
     questionRefs.current.forEach((el) => {
       gsap.fromTo(
         el,
         { y: 30, autoAlpha: 0 },
         {
           y: 0,
           autoAlpha: 1,
           duration: 1,
           scrollTrigger: {
             trigger: el,
             start: "top 80%",
           },
         }
       );
     });
   }, faqRef);
   return () => ctx.revert();
 }, []);



  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Beauforte products unique?",
      answer:
        "Each of our luxury bags, heels, and perfumes is crafted with precision and timeless design, using only premium materials sourced globally.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we deliver worldwide. All orders are carefully packaged to ensure your luxury experience arrives safely.",
    },
    {
      question: "Are the perfumes long-lasting?",
      answer:
        "Absolutely. Our perfumes are designed with high-concentration essences that ensure a lasting, sophisticated fragrance throughout the day.",
    },
    {
      question: "Can I return or exchange my purchase?",
      answer:
        "Yes, you may return or exchange unused items within 14 days of delivery, provided they are in original condition and packaging.",
    },
    {
      question: "Do you release limited edition collections?",
      answer:
        "Yes. We frequently launch exclusive limited editions of bags, heels, and perfumes — available only in small quantities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={faqRef}
      id="FAQ"
      className="py-20 px-8 md:px-20 lg:px-32 font-lato bg-white"
    >
      {/* Top full-width line */}
      <div className="w-full border-t border-gray-300 mb-10"></div>
      <div className="max-w-[1800px] mx-auto ">
        {/* Heading */}
        <h2
          ref={faqtitleRef}
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-10 text-gray-900 tracking-wide p-4 font-playfair"
        >
          Frequently Asked <br className="hidden lg:block" />
          Questions
        </h2>

        {/* FAQ items */}
        <div ref={mainRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question row */}
              <div className="flex items-center justify-between py-4">
                <h3
                  ref={(el) => (questionRefs.current[index] = el)}
                  className="text-base md:text-lg font-light text-gray-900"
                >
                  {faq.question}
                </h3>
                <span className="text-gray-500 text-lg">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Animated Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-600 leading-relaxed pb-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
