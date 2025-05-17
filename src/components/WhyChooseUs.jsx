import React from "react";

const points = [
  { title: "Instant Payouts", desc: "No delays. Get paid the same day." },
  { title: "Secure Transactions", desc: "All data is encrypted and safe." },
  {
    title: "Top Valuation",
    desc: "We offer the best rates for your licenses.",
  },
  { title: "Trusted by Many", desc: "Rated 5 stars by 1000+ happy clients." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 bg-blue-50 dark:bg-gray-800 text-center">
      <h3 className="text-3xl font-semibold text-blue-700 dark:text-white mb-8">
        Why Choose Us
      </h3>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {points.map((point, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded shadow">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {point.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
