'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/mykzjdpw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <p className="text-gray-300 text-lg mb-8">
              I&apos;m always open to discussing new opportunities, collaborations, or just chatting about tech.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:rishi.verma50@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>rishi.verma50@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/hrishikesh-verma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
                disabled={status === 'submitting'}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
                disabled={status === 'submitting'}
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                required
                disabled={status === 'submitting'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${status === 'success'
                  ? 'bg-green-600 text-white cursor-default'
                  : status === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
                }`}
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : status === 'success' ? (
                <span>Message Sent successfully!</span>
              ) : status === 'error' ? (
                <span>Error - Try Again</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-gray-500">
        <p>© 2024 Hrishikesh Verma. Built with Next.js & Tailwind CSS.</p>
      </div>
    </section>
  );
}
