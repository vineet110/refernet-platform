export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Software Engineer at Deloitte",
      feedback:
        "ReferNet helped me find my next opportunity through genuine connections. The referral system truly works!",
    },
    {
      name: "Sneha Iyer",
      role: "Data Analyst at WeMakeScholars",
      feedback:
        "The idea of verified referrals is a game-changer. It saved me time and connected me directly with professionals I trust.",
    },
    {
      name: "Rohan Patel",
      role: "SDE at Amazon",
      feedback:
        "I’ve used many platforms, but ReferNet stands out — it’s personal, efficient, and community-driven.",
    },
  ];

  const companies = ["Deloitte", "WeMakeScholars", "Amazon"];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">What Our Users Say</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 border rounded-2xl bg-[#f9f9f9] shadow-md"
          >
            <h3 className="font-semibold text-xl mb-2">{t.name}</h3>
            <p className="text-gray-600 mb-2">{t.role}</p>
            <p className="italic text-gray-700">“{t.feedback}”</p>
          </div>
        ))}
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Our Professionals Work At
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700">
          {companies.map((c, i) => (
            <span
              key={i}
              className="px-6 py-2 border rounded-full bg-black text-white"
            >
              {c}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
