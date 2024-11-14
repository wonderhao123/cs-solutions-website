"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // 确保从 next/navigation 导入 useRouter

const featureInfo = {
  Accounting: "Manage your finances efficiently.",
  POS: "Point of Sale system for retail.",
  Payroll: "Automate your payroll process.",
  "E-invoice": "Send invoices electronically.",
  CRM: "Customer relationship management.",
  ERP: "Enterprise resource planning.",
  WMS: "Warehouse management system.",
  HRM: "Human resource management.",
  "Basic features": "All features in Basic plan: Accounting, POS",
  "Standard features": "All features in Standard plan: Accounting, POS, Payroll, E-invoice, CRM",
  "Premium features": "All features in Premium plan: Accounting, POS, Payroll, E-invoice, CRM, ERP, WMS, HRM",
  "Custom Integrations": "Seamlessly connect with existing systems tailored to your needs.",
  "Dedicated Support": "Receive personalized assistance from our expert team at any time.",
  "Scalable Solutions": "Easily adjust resources to accommodate your business growth.",
  "Basic SAP Integration": "Connect basic functionalities with SAP systems for efficient data exchange.",
  "Advanced SAP Integration": "Enhance your operations with deeper integration into SAP modules and advanced features.",
  "Full SAP Integration": "Comprehensive integration with SAP, providing full access to all functionalities tailored to your business needs.",
};

const pricingPlans = [
  {
    name: "Basic",
    monthlyPrice: "$39/mo",
    yearlyPrice: "$399/yr",
    description: "Perfect for small businesses getting started.",
    features: [
      { name: "Accounting", included: true },
      { name: "POS", included: true },
      // { name: "Payroll", included: false },
      // { name: "E-invoice", included: false },
      // { name: "CRM", included: false },
      // { name: "ERP", included: false },
      // { name: "WMS", included: false },
      // { name: "HRM", included: false },
    ],
  },
  {
    name: "Standard",
    monthlyPrice: "$79/mo",
    yearlyPrice: "$799/yr",
    description: "Best for thriving and growing businesses.",
    features: [
      { name: "Basic features", included: true },
      // { name: "Accounting", included: true },
      // { name: "POS", included: true },
      { name: "Payroll", included: true },
      { name: "E-invoice", included: true },
      { name: "CRM", included: true },
      // { name: "ERP", included: false },
      // { name: "WMS", included: false },
      // { name: "HRM", included: false },
      { name: "Basic SAP Integration", included: true },
    ],
  },
  {
    name: "Premium",
    monthlyPrice: "$129/mo",
    yearlyPrice: "$1299/yr",
    description: "All-inclusive for larger businesses.",
    features: [
      { name: "Standard features", included: true },
      // { name: "Accounting", included: true },
      // { name: "POS", included: true },
      // { name: "Payroll", included: true },
      // { name: "E-invoice", included: true },
      // { name: "CRM", included: true },
      { name: "ERP", included: true },
      { name: "WMS", included: true },
      { name: "HRM", included: true },
      { name: "Advanced SAP Integration", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Tailored solutions for large organizations.",
    features: [
      { name: "Premium features", included: true },
      // { name: "Accounting", included: true },
      // { name: "POS", included: true },
      // { name: "Payroll", included: true },
      // { name: "E-invoice", included: true },
      // { name: "CRM", included: true },
      // { name: "ERP", included: true },
      // { name: "WMS", included: true },
      // { name: "HRM", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Dedicated Support", included: true },
      { name: "Scalable Solutions", included: true },
      { name: "Full SAP Integration", included: true },
    ],
  },
];

const Products = () => {
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter(); // 使用 useRouter

  const handleButtonClick = (plan) => {
    if (plan.name === "Enterprise") {
      router.push('/contact'); // 跳转到联系页面
    } else {
      // 处理其他套餐的选择逻辑
      console.log(`选择了 ${plan.name} 套餐`);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">Our Pricing Plans</h2>
        <p className="mt-4 text-lg text-gray-600">Choose the plan that's right for your business.</p>
      </div>

      <div className="flex justify-center mb-8">
        <label className="flex items-center cursor-pointer">
          <span className="mr-2 text-gray-600">Monthly</span>
          <div className="relative">
            <input
              type="checkbox"
              className="hidden"
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className={`block w-14 h-8 rounded-full ${isYearly ? 'bg-blue-600' : 'bg-gray-600'} transition duration-200`}></div>
            <div className={`dot absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ${isYearly ? 'transform translate-x-full' : ''}`}></div>
          </div>
          <span className="ml-2 text-gray-600">Yearly</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white shadow-lg rounded-lg px-8 py-4 flex flex-col justify-between text-center ${plan.name === "Standard" ? 'border-2 border-blue-600' : ''}`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <p className="mt-6 text-4xl font-bold text-gray-900">
                {plan.name === "Enterprise" ? plan.price : (isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
              </p>
              <ul className="mt-6 space-y-4 text-left">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center justify-between">
                    <div>
                      <span className={`mr-2 ${feature.included ? 'text-blue-600' : 'text-gray-400'}`}>
                        {feature.included ? '✓' : '✗'}
                      </span>

                      {feature.name}&nbsp;
                    </div>

                    <span className="relative group inline-block cursor-pointer">
                      <span className="inline">🛈</span>
                      <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-60 bg-gray-700 text-white text-sm rounded-lg p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                        {/* {featureInfo[feature.name as keyof typeof featureInfo]} */}
                        {featureInfo[feature.name]}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition"
              onClick={() => handleButtonClick(plan)} // 绑定点击事件
            >
              {plan.name === "Enterprise" ? "Get in Touch" : `Choose ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
