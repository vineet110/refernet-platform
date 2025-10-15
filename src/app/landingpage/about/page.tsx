export default function About() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About ReferNet</h1>
      <p className="max-w-3xl text-center text-lg mb-8 leading-relaxed">
        ReferNet is a professional networking platform designed to bridge the
        gap between skilled individuals and career opportunities through trusted
        referrals. Unlike generic job portals, we emphasize real human
        connections, helping talented people get noticed through verified
        referrals.
      </p>

      <section className="max-w-4xl text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          To create a community where professionals grow together — where every
          referral leads to opportunity, and every connection creates value.
        </p>
      </section>
    </main>
  );
}
