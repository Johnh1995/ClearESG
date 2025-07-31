import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">ClearESG</h1>
        <p className="text-lg mb-6">
          Easily generate professional ESG reports for your business.
        </p>
        <button className="text-lg px-6 py-3 bg-black text-white rounded-full">
          Get Started
        </button>
      </section>

      <section className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">1. Input Data</h2>
          <p className="text-sm">
            Fill in your environmental, social, and governance metrics.
          </p>
        </div>
        <div className="border p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">2. Automated Analysis</h2>
          <p className="text-sm">Our system analyzes your inputs instantly.</p>
        </div>
        <div className="border p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">3. Download Report</h2>
          <p className="text-sm">
            Download a professional ESG report in PDF format.
          </p>
        </div>
      </section>

      <section className="mt-20 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Try it Now</h2>
        <form className="grid gap-4">
          <input
            className="border rounded p-2"
            placeholder="Company Name"
            type="text"
          />
          <textarea
            className="border rounded p-2"
            placeholder="Brief description of company activities"
          />
          <input
            className="border rounded p-2"
            placeholder="Annual CO2 Emissions (tons)"
            type="number"
          />
          <input
            className="border rounded p-2"
            placeholder="Employee Count"
            type="number"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Generate Sample Report
          </button>
        </form>
      </section>
    </main>
  );
}