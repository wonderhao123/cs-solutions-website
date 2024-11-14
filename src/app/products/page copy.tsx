const allProducts = [
  {
    title: "Accounting Tool",
    description:
      "Our Accounting Tool is designed to streamline financial management for businesses of all sizes. It simplifies bookkeeping, tracks expenses, generates financial reports, and ensures compliance with accounting standards. This tool helps businesses maintain accurate financial records and make informed decisions.",
    image: "/images/accounting.jpg",
  },
  {
    title: "E-invoice Tool",
    description:
      "The E-invoice Tool automates the invoicing process, allowing businesses to create, send, and track invoices electronically. It ensures accuracy and speeds up payment collection while complying with legal regulations. The tool supports customizable templates and integrates with various accounting systems for seamless financial management.",
    image: "/images/e-invoice.jpg",
  },
  {
    title: "Company Website Template",
    description:
      "Our Company Website Template provides a professional and customizable solution for businesses to establish their online presence. The template is responsive, SEO-friendly, and easily adaptable to meet different branding needs. It offers a range of features to showcase products, services, and company information, helping businesses attract and engage customers online.",
    image: "/images/website.jpg",
  }
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$29/mo",
    description: "Perfect for small businesses getting started.",
    features: [
      { name: "Accounting", included: true, info: "Manage your finances efficiently." },
      { name: "POS", included: true, info: "Point of Sale system for retail." },
      { name: "Payroll", included: false, info: "Automate your payroll process." },
      { name: "E-invoice", included: false, info: "Send invoices electronically." },
      { name: "CRM", included: false, info: "Customer relationship management." },
      { name: "ERP", included: false, info: "Enterprise resource planning." },
      { name: "WMS", included: false, info: "Warehouse management system." },
      { name: "HRM", included: false, info: "Human resource management." },
    ],
  },
  {
    name: "Standard",
    price: "$59/mo",
    description: "Best for thriving and growing businesses.",
    features: [
      { name: "Accounting", included: true, info: "Manage your finances efficiently." },
      { name: "POS", included: true, info: "Point of Sale system for retail." },
      { name: "Payroll", included: true, info: "Automate your payroll process." },
      { name: "E-invoice", included: true, info: "Send invoices electronically." },
      { name: "CRM", included: true, info: "Customer relationship management." },
      { name: "ERP", included: false, info: "Enterprise resource planning." },
      { name: "WMS", included: false, info: "Warehouse management system." },
      { name: "HRM", included: false, info: "Human resource management." },
    ],
  },
  {
    name: "Premium",
    price: "$99/mo",
    description: "All-inclusive for larger businesses.",
    features: [
      { name: "Accounting", included: true, info: "Manage your finances efficiently." },
      { name: "POS", included: true, info: "Point of Sale system for retail." },
      { name: "Payroll", included: true, info: "Automate your payroll process." },
      { name: "E-invoice", included: true, info: "Send invoices electronically." },
      { name: "CRM", included: true, info: "Customer relationship management." },
      { name: "ERP", included: true, info: "Enterprise resource planning." },
      { name: "WMS", included: true, info: "Warehouse management system." },
      { name: "HRM", included: true, info: "Human resource management." },
    ],
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Tailored solutions for large organizations.",
    features: [
      { name: "Accounting", included: true, info: "Manage your finances efficiently." },
      { name: "POS", included: true, info: "Point of Sale system for retail." },
      { name: "Payroll", included: true, info: "Automate your payroll process." },
      { name: "E-invoice", included: true, info: "Send invoices electronically." },
      { name: "CRM", included: true, info: "Customer relationship management." },
      { name: "ERP", included: true, info: "Enterprise resource planning." },
      { name: "WMS", included: true, info: "Warehouse management system." },
      { name: "HRM", included: true, info: "Human resource management." },
    ],
  },
];

const Products = () => {
  return (
    <div className="container mx-auto">
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the plan that's right for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white shadow-lg rounded-lg p-8 text-center ${plan.name === "Standard" ? 'border-2 border-blue-600' : ''}`}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <p className="mt-6 text-4xl font-bold text-gray-900">{plan.price}</p>
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
                      <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-32 bg-gray-700 text-white text-sm rounded-lg p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                        {feature.info}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition">
                {plan.name === "Enterprise" ? "Get in Touch" : `Choose ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// const Products = () => {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Our Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//         {allProducts.map((product, index) => (
//           <div
//             key={index}
//             className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold text-blue-600 mb-4">{product.title}</h2>
//               <p className="text-gray-600">{product.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="py-12 bg-gray-100">
//         <div className="max-w-7xl mx-auto text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900">Our Pricing Plans</h2>
//           <p className="mt-4 text-lg text-gray-600">Choose the plan that's right for your business.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {pricingPlans.map((plan) => (
//             <div
//               key={plan.name}
//               className={`bg-white shadow-lg rounded-lg p-8 text-center ${plan.name === "Standard" ? 'border-2 border-blue-600' : ''}`}
//             >
//               <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
//               <p className="mt-4 text-gray-600">{plan.description}</p>
//               <p className="mt-6 text-4xl font-bold text-gray-900">{plan.price}</p>
//               <ul className="mt-6 space-y-4 text-left">
//                 {plan.features.map((feature) => (
//                   <li key={feature.name} className="flex items-center justify-between">
//                     <div>
//                       <span className={`mr-2 ${feature.included ? 'text-blue-600' : 'text-gray-400'}`}>
//                         {feature.included ? '✓' : '✗'}
//                       </span>

//                       {feature.name}&nbsp;
//                     </div>

//                     <span className="relative group inline-block cursor-pointer">
//                       <span className="inline">🛈</span>
//                       <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-32 bg-gray-700 text-white text-sm rounded-lg p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
//                         {feature.info}
//                       </span>
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//               <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition">
//                 {plan.name === "Enterprise" ? "Get in Touch" : `Choose ${plan.name}`}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Products;