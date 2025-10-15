export default function Compare() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] text-black flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Market vs ReferNet</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
        <div className="p-6 border rounded-2xl bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Traditional Job Market
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Overcrowded applications with low visibility.</li>
            <li>Recruiters struggle to find trustworthy candidates.</li>
            <li>Networking is random, not structured.</li>
          </ul>
        </div>

        <div className="p-6 border rounded-2xl bg-black text-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">ReferNet Platform</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Referral-driven job discovery boosts credibility.</li>
            <li>Verified professionals recommending verified talent.</li>
            <li>Meaningful connections that build real opportunities.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
