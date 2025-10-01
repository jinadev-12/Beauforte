// components/FAQ.jsx
import React, { useEffect, useRef, useState } from "react";

export default function FAQ() {
  const faqRef = useRef(null);
  const titleRef = useRef(null);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
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
  ];

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Title animation
        gsap.fromTo(
          titleRef.current,
          { scale: 1.06, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            scrollTrigger: {
              trigger: faqRef.current,
              start: "top 80%",
            },
          }
        );

        // Collapse all answers initially
        answerRefs.current.forEach((ans) =>
          gsap.set(ans, { height: 0, opacity: 0, overflow: "hidden" })
        );

        // Animate questions on scroll
        questionRefs.current.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 30, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
              },
            }
          );
        });
      }, faqRef);
    })();

    return () => ctx?.revert();
  }, []);

  const toggle = async (idx) => {
    const ans = answerRefs.current[idx];
    if (!ans) return;

    const { gsap } = await import("gsap");
    const isOpen = openIndex === idx;

    if (isOpen) {
      // close
      gsap.to(ans, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
      });
      setOpenIndex(null);
    } else {
      // close previous
      if (openIndex !== null) {
        const prev = answerRefs.current[openIndex];
        if (prev) gsap.to(prev, { height: 0, opacity: 0, duration: 0.25 });
      }
      // open current
      const targetHeight = ans.scrollHeight;
      gsap.to(ans, {
        height: targetHeight,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
      setOpenIndex(idx);
      gsap.delayedCall(0.36, () => gsap.set(ans, { height: "auto" }));
    }
  };

  return (
    <div
      id="FAQ"
      ref={faqRef}
      className="py-20 px-8 md:px-20 lg:px-32 font-lato bg-white"
    >
      <div className="w-full border-t border-gray-300 mb-10" />
      <div className="max-w-[1800px] mx-auto ">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-10 text-gray-900 tracking-wide p-4 font-playfair"
        >
          Frequently Asked <br className="hidden lg:block" />
          Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-gray-100 py-4">
              <div className="flex items-center justify-between py-2">
                <button
                  ref={(el) => (questionRefs.current[index] = el)}
                  onClick={() => toggle(index)}
                  className="text-left w-full flex items-center justify-between focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base md:text-lg font-light text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="ml-4 text-gray-500 text-lg">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
              </div>

              <div
                id={`faq-answer-${index}`}
                ref={(el) => (answerRefs.current[index] = el)}
                className="faq-answer overflow-hidden"
              >
                <div className="py-2 text-gray-700">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
