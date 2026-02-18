import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const WHATSAPP_NUMBER = "254799011954";
const EMAIL           = "kelvinmacharia442@gmail.com";
const PHONE           = "+254 799 011 954";
const LINKEDIN        = "https://www.linkedin.com/in/kelvin-kuria-6867302a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const GITHUB          = "https://github.com/kuria-k";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: EMAIL,
    description: "Click to compose directly in Gmail",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.57 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    bg: "bg-gradient-to-br from-[#14B8A6]/10 to-[#14B8A6]/5 hover:from-[#14B8A6]/20 hover:to-[#14B8A6]/10",
    border: "border-[#14B8A6]/20 hover:border-[#14B8A6]/40",
    text: "text-[#14B8A6]",
    buttonBg: "bg-[#14B8A6] hover:bg-[#0d9488]",
    action: "Compose in Gmail →"
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    description: "Fastest response time",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Kelvin%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    bg: "bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 hover:from-[#25D366]/20 hover:to-[#25D366]/10",
    border: "border-[#25D366]/20 hover:border-[#25D366]/40",
    text: "text-[#25D366]",
    buttonBg: "bg-[#25D366] hover:bg-[#20b859]",
    action: "Open WhatsApp →"
  },
  {
    label: "Phone",
    value: PHONE,
    description: "Call or SMS",
    href: `tel:+254799011954`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    bg: "bg-gradient-to-br from-[#14B8A6]/10 to-[#14B8A6]/5 hover:from-[#14B8A6]/20 hover:to-[#14B8A6]/10",
    border: "border-[#14B8A6]/20 hover:border-[#14B8A6]/40",
    text: "text-[#14B8A6]",
    buttonBg: "bg-[#14B8A6] hover:bg-[#0d9488]",
    action: "Call Now →"
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    description: "Professional network",
    href: LINKEDIN,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    bg: "bg-gradient-to-br from-[#0A66C2]/10 to-[#0A66C2]/5 hover:from-[#0A66C2]/20 hover:to-[#0A66C2]/10",
    border: "border-[#0A66C2]/20 hover:border-[#0A66C2]/40",
    text: "text-[#0A66C2]",
    buttonBg: "bg-[#0A66C2] hover:bg-[#084e94]",
    action: "Connect →"
  },
  {
    label: "GitHub",
    value: "View my GitHub",
    description: "Check out my code",
    href: GITHUB,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    bg: "bg-gradient-to-br from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100",
    border: "border-slate-200 hover:border-slate-400",
    text: "text-[#1E3A8A]",
    buttonBg: "bg-[#1E3A8A] hover:bg-[#152c5e]",
    action: "View Profile →"
  },
];

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    
    // Format the email body with the form data
    const subject = encodeURIComponent("Let's Connect - Portfolio Inquiry");
    const body = encodeURIComponent(
`Hi Kelvin,

I recently had the pleasure of reviewing your portfolio and was very impressed by your work. I would love to discuss potential collaboration opportunities and learn more about your experience.

Here's a bit about me:
${formData.name ? `Name: ${formData.name}` : ''}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.email ? `Email: ${formData.email}` : ''}
${formData.phone ? `Phone: ${formData.phone}` : ''}

If you’re available, I’d be glad to schedule a brief call or continue the conversation via email at your convenience.

Looking forward to connecting.

Best regards,
${formData.name || '[Your Name]'}`
    );

    // Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, "_blank");
    
    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({ name: "", company: "", email: "", phone: "" });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", company: "", email: "", phone: "" });
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Glassmorphic Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 animate-fadeIn">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl pointer-events-none" />
            
            {/* Content */}
            <div className="relative">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">Compose Email</h3>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-white/70 text-sm mb-6">
                Fill in your details below. They'll be automatically added to the email template.
              </p>

              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 text-xs font-medium uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-xs font-medium uppercase tracking-wider mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-xs font-medium uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-xs font-medium uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 890"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/30 transition-all"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 bg-[#14B8A6] hover:bg-[#0d9488] text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#14B8A6]/30"
                  >
                    Compose in Gmail →
                  </button>
                </div>
              </form>

              {/* Preview note */}
              <p className="text-xs text-white/40 text-center mt-4">
                Your details will be automatically added to the email template
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero banner with email highlight */}
      <div className="bg-[#1E3A8A] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#14B8A6]/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#14B8A6]/10 blur-3xl pointer-events-none"
        />

        <Navbar />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-14 pb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#14B8A6]" />
            <span className="text-[#14B8A6] text-xs font-medium tracking-[0.22em] uppercase">
              Get In Touch
            </span>
            <span className="h-px w-8 bg-[#14B8A6]" />
          </div>
          
          <h1
            className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's <em className="italic font-normal text-[#14B8A6]">Connect</em>
          </h1>
          
          <p className="text-white/70 max-w-2xl mx-auto text-[0.97rem] leading-relaxed mb-6">
            Available for full-time roles, freelance projects, and collaborations.
          </p>

          {/* Email highlight card - direct compose to Gmail */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-[#14B8A6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-white/80 text-sm">Direct email:</span>
            <button
              onClick={handleEmailClick}
              className="text-white font-medium hover:text-[#14B8A6] transition-colors flex items-center gap-1 group"
            >
              {EMAIL}
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main content - Contact methods grid */}
      <section className="flex-1 bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-[#14B8A6] text-xs font-medium tracking-[0.2em] uppercase mb-3">
              Choose Your Preferred Way
            </p>
            <h2 
              className="text-3xl font-bold text-[#1E3A8A] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How would you like to reach me?
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              No forms, no waiting — just direct access to me. Click any option below to connect instantly.
            </p>
          </div>

          {/* Contact methods grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONTACT_METHODS.map((method) => (
              <a
                key={method.label}
                href={method.label === "Email" ? "#" : method.href}
                onClick={method.label === "Email" ? handleEmailClick : undefined}
                target={method.label !== "Email" && (method.href.startsWith("mailto") || method.href.startsWith("tel") ? "_self" : "_blank")}
                rel="noopener noreferrer"
                className={`group relative flex flex-col p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${method.bg} ${method.border} ${method.label === "Email" ? "cursor-pointer" : ""}`}
              >
                {/* Icon and label */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`p-2.5 rounded-lg bg-white/80 backdrop-blur-sm ${method.text}`}>
                    {method.icon}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/80 ${method.text}`}>
                    {method.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${method.text}`}>
                    {method.value}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4">
                    {method.description}
                  </p>
                </div>

                {/* Action button */}
                <div className={`${method.buttonBg} text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center transition-all duration-200 group-hover:shadow-lg opacity-90 group-hover:opacity-100`}>
                  {method.action}
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-3xl transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Email quick compose section */}
          <div className="mt-16 bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E3A8A]">Quick Email Compose</h3>
                  <p className="text-sm text-[#6B7280]">Click below to open Gmail with your details pre-filled</p>
                </div>
              </div>
              
              <button
                onClick={handleEmailClick}
                className="px-6 py-3 bg-[#14B8A6] hover:bg-[#0d9488] text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#14B8A6]/30 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9h3a3 3 0 013 3v7a3 3 0 01-3 3H6a3 3 0 01-3-3v-7a3 3 0 013-3h3m6-4v4m-4-4h4" />
                </svg>
                Compose Email to kelvinmacharia442@gmail.com
              </button>
            </div>

            {/* Template preview */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-[#6B7280] mb-2">Email template preview:</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-[#1E3A8A]">To:</span> kelvinmacharia442@gmail.com</p>
                <p><span className="font-medium text-[#1E3A8A]">Subject:</span> Let's Connect - Portfolio Inquiry</p>
                <p><span className="font-medium text-[#1E3A8A]">Body will include:</span></p>
                <ul className="list-disc list-inside text-[#6B7280] text-xs space-y-1">
                  <li>Your name and company (if provided)</li>
                  <li>Your email and phone (if provided)</li>
                  <li>Professional introduction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Availability note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[#6B7280]">
               Typically respond within 24 hours • Based in Nairobi, Kenya (GMT+3)
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Contact;