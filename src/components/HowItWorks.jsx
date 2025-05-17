import React from "react";

const steps = [
  { title: "Upload License", icon: "📝" },
  { title: "Get Valuation", icon: "💰" },
  { title: "Get Paid", icon: "🏦" },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-center">
      <h3 className="text-3xl font-semibold text-blue-700 dark:text-white mb-8">
        How It Works
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="max-w-xs bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow"
          >
            <div className="text-4xl mb-3">{step.icon}</div>
            <h4 className="text-xl font-medium text-gray-800 dark:text-white">
              {step.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
