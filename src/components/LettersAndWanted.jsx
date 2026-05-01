import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ayushmanitiwari931@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New portfolio inquiry from ${form.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="letters" className="flex-1">
      <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight mb-1">
        Letters to the Editor
      </h2>
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
        Direct Correspondence
      </p>

      {status === 'success' ? (
        <div className="border border-green-600 bg-green-50 p-4 text-green-800">
          <p className="font-bold">Telegram Sent!</p>
          <p className="text-sm">Your message has been dispatched successfully. Note: If this is your first time using this form, please check your inbox for an activation email from FormSubmit.</p>
          <button onClick={() => setStatus('')} className="mt-2 text-xs font-bold underline">Send another</button>
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1">
              Name:
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full border border-black px-3 py-2 text-sm font-serif focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1">
              Email:
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full border border-black px-3 py-2 text-sm font-serif focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-1">
              Message:
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="I wish to inquire about..."
              required
              className="w-full border border-black px-3 py-2 text-sm font-serif focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-600 text-sm font-bold">Failed to send. Please try again later.</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-red-600 text-white font-black uppercase tracking-widest text-sm py-3 px-6 hover:bg-black transition-colors w-full sm:w-auto disabled:opacity-50"
          >
            {status === 'loading' ? 'Dispatching...' : 'Send Telegram'}
          </button>
        </form>
      )}
    </section>
  );
}

function WantedPoster() {
  return (
    <aside className="border-2 border-black p-4 text-center w-full max-w-md shrink-0 self-start mx-auto md:mx-0">
      <p className="text-xs font-black uppercase tracking-widest border-b border-black pb-1 mb-2">
        Wanted
      </p>
      <p className="text-lg sm:text-2xl font-black uppercase leading-tight mb-3">
        Ayush Mani Tiwari
      </p>

      <div className="border border-black mb-3 overflow-hidden">
        <img
          src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/08/Miles-Morales-2021-Annual-Preview-Header-2.jpg?w=1200&h=675&fit=crop"
          alt="Wanted Poster"
          className="w-full object-cover grayscale"
        />
      </div>

      <p className="text-xs italic border-t border-b border-black py-2 mb-3">
        "These are the repos you're looking for."
      </p>

      <div className="flex justify-center gap-4 text-xs font-black uppercase tracking-widest">
        <a href="https://github.com/justayushmani" target="_blank" rel="noreferrer" className="hover:text-red-600 hover:underline">
          GitHub Repository
        </a>
        <span>·</span>
        <a href="https://www.linkedin.com/in/ayush-mani-tiwari-b6369b344/" target="_blank" rel="noreferrer" className="hover:text-red-600 hover:underline">
          LinkedIn Dossier
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-3 leading-tight">
        Reward: Exceptional code quality & team synergy
      </p>
    </aside>
  );
}

export default function LettersAndWanted() {
  return (
    <section className="flex flex-col md:flex-row gap-8 border-b-2 border-black pb-6 mb-6">
      <ContactForm />
      <WantedPoster />
    </section>
  );
}