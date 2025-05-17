import React from "react";

const testimonials = [
  {
    name: "Anjali Mehta",
    role: "IT Manager",
    company: "TechNova",
    review:
      "SoftSell made the process so easy! I uploaded my licenses and got paid within a day.",
  },
  {
    name: "Ravi Sharma",
    role: "Software Consultant",
    company: "Freelance",
    review:
      "Highly recommend SoftSell! Quick valuation and great customer support.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-center">
      <h3 className="text-3xl font-semibold text-blue-700 dark:text-white mb-10">
        What Our Customers Say
      </h3>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow border border-blue-100 dark:border-gray-700"
          >
            <p className="italic text-gray-700 dark:text-gray-300 mb-4">
              "{t.review}"
            </p>
            <h4 className="font-semibold text-blue-800 dark:text-white">
              {t.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t.role}, {t.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
