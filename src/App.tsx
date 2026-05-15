import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Shield,
  Sparkles,
  Droplets,
  Car,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Star,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "15166661876";
const PHONE_NUMBER = "516-666-1876";
const EMAIL = "SRWDetailing@Outlook.com";
const LOCATION = "Tampa & Surrounding Areas";
const HERO_BG_URL = "https://storage.googleapis.com/aistudio-janus-prod-app-blobs/c9da9add-4244-4b30-b77d-1704b3714962/20241231_145657.png";
const INSTAGRAM_URL = "https://www.instagram.com/srw_detailing?igsh=NGRxZWN4MnZwaHF1";
const FACEBOOK_URL = "https://www.facebook.com/share/1HKq5hMPzM/";

const SERVICES = [
  {
    title: "Paint Correction",
    description: "Eliminate swirl marks, scratches, and oxidation to restore your vehicle's factory, mirror-like finish.",
    icon: Sparkles,
  },
  {
    title: "Ceramic Coating",
    description: "Long-lasting, hydrophobic protection that enhances gloss and shields your paint from environmental damage.",
    icon: Shield,
  },
  {
    title: "Exterior Detailing",
    description: "Meticulous hand washing, decontamination, and finishing to elevate your vehicle's curb appeal.",
    icon: Car,
  },
  {
    title: "Interior Detailing",
    description: "Deep cleaning, conditioning, and sanitization of every surface, from premium leather to neglected upholstery.",
    icon: Droplets,
  },
];

const CREDIBILITY_POINTS = [
  "System X Certified",
  "IGL Coatings Certified",
  "Fully Mobile Convenience",
  "Premium Grade Products"
];

const FAQS = [
  {
    q: "Do you come to my location?",
    a: "Yes. We offer fully mobile detailing services throughout Tampa and surrounding areas, bringing our premium studio-level care directly to your driveway or garage."
  },
  {
    q: "What is paint correction?",
    a: "It's the meticulous process of machine-polishing your vehicle's clear coat to remove imperfections like swirl marks, scratches, and oxidation, restoring a mirror-like finish."
  },
  {
    q: "Why choose a Ceramic Coating?",
    a: "As certified installers of System X and IGL Coatings, our ceramic coatings provide an ultra-durable, hydrophobic layer that protects your paint from UV rays, chemicals, and contaminants while keeping it glossy and easy to clean."
  },
  {
    q: "How long does a detailing service take?",
    a: "A standard deep detail takes 3-5 hours, while intensive paint correction and ceramic coating packages can take 1-2 days to ensure absolute perfection."
  }
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [quoteStatus, setQuoteStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [reviewStatus, setReviewStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [rating, setRating] = useState(5);

  const WEB3FORMS_ACCESS_KEY = "76f0a9b4-bcdb-4b67-9c1f-143605f3ed8f";

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuoteStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Detailing Quote Request from Website");
    formData.append("from_name", "SRW Detailing Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setQuoteStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setQuoteStatus('idle'), 5000);
      } else {
        setQuoteStatus('error');
        setTimeout(() => setQuoteStatus('idle'), 3000);
      }
    } catch (error) {
      setQuoteStatus('error');
      setTimeout(() => setQuoteStatus('idle'), 3000);
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReviewStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Client Review Received");
    formData.append("rating", rating.toString() + " Stars");
    formData.append("from_name", "SRW Detailing Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setReviewStatus('success');
        e.currentTarget.reset();
        setRating(5);
        setTimeout(() => setReviewStatus('idle'), 5000);
      } else {
        setReviewStatus('error');
        setTimeout(() => setReviewStatus('idle'), 3000);
      }
    } catch (error) {
      setReviewStatus('error');
      setTimeout(() => setReviewStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-600 selection:text-white">
      {/* TOP BAR */}
      <div className="bg-blue-600/10 border-b border-blue-600/20 text-blue-100 py-2.5 px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center">
          <span className="flex items-center gap-2 text-blue-300">📸 To see pictures of our work, follow us:</span>
          <div className="flex items-center gap-4">
             <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-pink-400 transition-colors">
                <Instagram size={14} /> Instagram
             </a>
             <span className="w-1 h-1 rounded-full bg-blue-500/50"></span>
             <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                <Facebook size={14} /> Facebook
             </a>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1 group">
            <span className="text-2xl sm:text-3xl font-black italic tracking-tighter text-white group-hover:text-blue-400 transition-colors">SRW</span>
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-300">Detailing</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#services" className="hover:text-blue-400 transition-colors">SERVICES</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT</a>
            <a href="#reviews" className="hover:text-blue-400 transition-colors">REVIEWS</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#quote" className="hover:text-blue-400 transition-colors">QUOTE</a>
          </div>
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            <Phone size={14} />
            CALL NOW
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full w-fit mb-6 text-xs font-bold text-blue-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Serving {LOCATION}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tight mb-6 text-balance">
              Automotive <br className="hidden md:block" />
              <span className="text-blue-500 font-serif italic">Perfection.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
              Premium paint correction, ceramic coating, and meticulous detailing services brought directly to you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/60 border border-slate-800 rounded-full shadow-lg backdrop-blur-sm">
                <Shield className="text-blue-500" size={16} />
                <span className="text-xs uppercase tracking-widest font-bold text-slate-300">System X Certified</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/60 border border-slate-800 rounded-full shadow-lg backdrop-blur-sm">
                <Shield className="text-blue-500" size={16} />
                <span className="text-xs uppercase tracking-widest font-bold text-slate-300">IGL Coatings Certified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#quote"
                className="w-full sm:w-auto px-10 py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all blue-glow flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-10 py-4 border border-slate-700 hover:bg-slate-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* CREDIBILITY STRIP */}
      <section className="bg-slate-900/50 py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CREDIBILITY_POINTS.map((point, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle2 className="text-blue-500/80" size={24} />
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
                    {point}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16 md:mb-24">
            <h2 className="text-blue-400 text-xs uppercase tracking-[0.3em] font-bold mb-4">Our Specializations</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-white font-extrabold tracking-tight text-balance max-w-3xl mx-auto">
              Elevating the standard of <span className="italic text-blue-500 font-serif">vehicle care</span>
            </h3>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="group p-8 md:p-10 bg-slate-900 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-[40px] group-hover:bg-blue-600/10 transition-colors"></div>
                <div className="w-14 h-14 rounded-xl border border-slate-700 bg-slate-950 flex items-center justify-center mb-6 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors duration-300 relative z-10">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold font-sans text-white mb-3 relative z-10">
                  {service.title}
                </h4>
                <p className="text-slate-400 text-base leading-relaxed relative z-10">
                  {service.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT ABOUT SECTION */}
      <section id="about" className="py-24 bg-slate-900/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
                Uncompromising <br />
                <span className="text-blue-500 font-serif italic">Dedication</span>.
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  SRW Detailing isn't just about washing cars; it's about restoration and preservation. Based in the heart of Tampa and surrounding areas, we bring luxury detailing to your doorstep.
                </p>
                <p>
                  Whether you require a flawless paint correction, a durable ceramic coating, or a deep interior refresh, we approach every vehicle with the same level of artisan precision. Your investment deserves superior protection.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex-1 h-px bg-slate-800"></div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Locally Owned & Operated</span>
                <div className="flex-1 h-px bg-slate-800"></div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/5] md:aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 to-transparent"></div>
                <Shield size={120} strokeWidth={0.5} className="text-slate-800" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-slate-950 border border-slate-800 text-white p-8 rounded-3xl shadow-2xl max-w-xs card-border">
                <div className="font-serif text-3xl font-extrabold mb-2 text-center">Tampa, FL</div>
                <div className="text-xs uppercase tracking-widest text-slate-400 text-center font-bold">Primary Service Area</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 px-6 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn>
              <h2 className="text-blue-400 text-xs uppercase tracking-[0.3em] font-bold mb-4">Client Feedback</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-white font-extrabold tracking-tight mb-8">
                What They're <span className="italic text-blue-500 font-serif">Saying</span>
              </h3>
              
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl relative card-border mb-8">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-blue-500 text-blue-500" />)}
                </div>
                <p className="text-lg italic text-slate-300 leading-relaxed">
                  "The best detailing service in Tampa. My car looks better than the day I bought it! Highly recommend their ceramic coating service."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 font-bold border border-blue-500/30">JD</div>
                  <div>
                    <p className="text-sm font-bold text-white">— Local Client Review</p>
                    <p className="text-xs text-slate-500">Tampa, FL</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden card-border">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-[40px] pointer-events-none"></div>
                <h4 className="text-2xl font-serif font-extrabold text-white mb-2">Leave a Review</h4>
                <p className="text-sm text-slate-400 mb-6">We value your feedback. Let us know how we did!</p>
                
                {reviewStatus === 'success' ? (
                  <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                    <CheckCircle2 className="mx-auto text-green-500 mb-3" size={32} />
                    <p className="text-green-400 font-bold">Thank you for your feedback!</p>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-4 relative z-10">
                    <div className="flex gap-2 mb-2">
                      {[1,2,3,4,5].map(i => (
                        <button type="button" key={i} onClick={() => setRating(i)} className={`p-1 transition-transform ${rating >= i ? 'text-blue-500 hover:scale-110' : 'text-slate-600 hover:text-slate-400'}`}>
                          <Star size={28} className={rating >= i ? 'fill-blue-500' : ''} />
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="first_name" required placeholder="First Name" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                      <input type="text" name="last_name" required placeholder="Last Name" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                    <textarea name="review_message" required placeholder="Your Review..." rows={4} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                    
                    {reviewStatus === 'error' && (
                      <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                    )}
                    
                    <button type="submit" disabled={reviewStatus === 'submitting'} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl transition-colors border border-slate-700 disabled:opacity-50 flex justify-center items-center">
                      {reviewStatus === 'submitting' ? 'Submitting...' : 'Submit Review'}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-6 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16 md:mb-24">
            <h2 className="text-blue-400 text-xs uppercase tracking-[0.3em] font-bold mb-4">Common Questions</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-white font-extrabold tracking-tight">
              Frequently Asked <span className="italic text-blue-500 font-serif">Questions</span>
            </h3>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {FAQS.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl h-full hover:border-slate-700 transition-all duration-300">
                  <h4 className="text-xl font-bold font-sans text-white mb-3">
                    {faq.q}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / QUOTE CTA */}
      <section id="quote" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            
            <FadeIn className="relative z-10 max-w-xl">
              <h2 className="text-blue-400 text-xs uppercase tracking-[0.3em] font-bold mb-4">Get In Touch</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-white font-extrabold mb-6">
                Ready to restore your vehicle's <span className="italic font-serif text-blue-500">brilliance?</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10">
                Contact us today for a custom quote or to schedule your premier detailing service in Tampa or surrounding areas.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`}
                  className="flex items-center gap-4 p-5 bg-slate-900 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group border border-slate-800 card-border w-full max-w-sm"
                >
                  <div className="w-12 h-12 shrink-0 border border-slate-800 rounded-full flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-slate-800 transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Call Us</div>
                    <div className="text-lg font-semibold text-slate-200">{PHONE_NUMBER}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-slate-900 rounded-2xl hover:border-green-500/50 transition-all duration-300 group border border-slate-800 card-border w-full max-w-sm"
                >
                  <div className="w-12 h-12 shrink-0 border border-slate-800 rounded-full flex items-center justify-center text-slate-300 group-hover:text-green-400 group-hover:bg-slate-800 transition-colors duration-300">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="text-lg font-semibold text-slate-200">{PHONE_NUMBER}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 p-5 bg-slate-900 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group border border-slate-800 card-border w-full max-w-sm"
                >
                  <div className="w-12 h-12 shrink-0 border border-slate-800 rounded-full flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-slate-800 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Email</div>
                    <div className="text-lg font-semibold text-slate-200 text-sm truncate">{EMAIL}</div>
                  </div>
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div id="contact" className="bg-slate-900/80 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative card-border backdrop-blur-sm">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
                <h4 className="text-2xl font-bold text-white mb-2 relative z-10">Request a Quote</h4>
                <p className="text-slate-400 mb-8 relative z-10 text-sm">Send us a message and we'll get back to you promptly.</p>
                
                {quoteStatus === 'success' ? (
                  <div className="p-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center relative z-10">
                    <CheckCircle2 className="mx-auto text-blue-500 mb-4" size={48} />
                    <h5 className="text-xl font-bold text-white mb-2">Message Sent</h5>
                    <p className="text-slate-400">Thanks for reaching out! We'll be in touch shortly to discuss your vehicle.</p>
                    <button onClick={() => setQuoteStatus('idle')} className="mt-6 text-sm text-blue-400 font-bold hover:text-white transition-colors">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 pl-2">Name</label>
                        <input type="text" name="name" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 pl-2">Phone or Email</label>
                        <input type="text" name="contact" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Best way to reach you" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 pl-2">Vehicle Make/Model</label>
                        <input type="text" name="vehicle" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. BMW M2" />
                      </div>
                      <div className="space-y-1">
                         <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 pl-2">Interested In</label>
                         <select name="service_interest" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                            <option value="">Select Service...</option>
                            <option value="ceramic">Ceramic Coating</option>
                            <option value="paint">Paint Correction</option>
                            <option value="detail">Full Detailing</option>
                            <option value="other">Other/Unsure</option>
                         </select>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 pl-2">Message</label>
                      <textarea name="message" required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="How can we help?"></textarea>
                    </div>

                    {quoteStatus === 'error' && (
                      <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                    )}

                    <button type="submit" disabled={quoteStatus === 'submitting'} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 disabled:opacity-50">
                       {quoteStatus === 'submitting' ? 'Sending...' : (
                         <>Send Message <Send size={18} /></>
                       )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

          </div>
          
          <FadeIn>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-20 relative z-10 border-t border-slate-800 pt-12">
               <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 px-8 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white hover:border-pink-500/50 hover:bg-slate-900 transition-all group font-bold uppercase tracking-widest text-xs">
                  <Instagram size={20} className="text-pink-500 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
               </a>
               <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 px-8 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-900 transition-all group font-bold uppercase tracking-widest text-xs">
                  <Facebook size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
               </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-6">
             <div className="flex items-center gap-1">
                <span className="text-3xl font-black italic tracking-tighter text-white">SRW</span>
                <span className="text-3xl font-bold tracking-tight text-slate-300">Detailing</span>
             </div>
             <div className="text-slate-500 text-sm">
               Premium Auto Detailing • {LOCATION}
             </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-6 text-sm text-slate-400 font-semibold">
              <a href={`tel:${PHONE_NUMBER.replace(/-/g, "")}`} className="hover:text-blue-400 transition-colors">CALL NOW</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WHATSAPP</a>
              <a href={`mailto:${EMAIL}`} className="hover:text-blue-400 transition-colors">EMAIL</a>
            </div>
            <div className="flex items-center gap-5 text-slate-500">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <Instagram size={22} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Facebook size={22} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
