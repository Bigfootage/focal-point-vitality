import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, Mail, Clock, Shield, Users, Award, Star, ArrowUp, Check, Activity, Heart, Zap, Target, ChevronRight } from 'lucide-react';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import { Timeline } from '@/components/ui/timeline';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';
import { Terms } from '@/components/Terms';
import { NoticeOfPrivacyPractices } from '@/components/NoticeOfPrivacyPractices';

import logoSrc from '@/assets/images/logo.png';
import conditionEnergy from '@/assets/images/condition-energy.webp';
import conditionBody from '@/assets/images/condition-body.webp';
import conditionSleep from '@/assets/images/condition-sleep.webp';
import conditionHormones from '@/assets/images/condition-hormones.webp';
import conditionMetabolic from '@/assets/images/condition-metabolic.webp';
import heroPatient from '@/assets/images/hero-patient.webp';

const BOOKING_URL = 'https://link.vitalityatfocalpoint.com/widget/bookings/discovery-booking-link';
const ASSESSMENT_URL = 'https://link.vitalityatfocalpoint.com/widget/quiz/o7Sd0lcPVXXs9Exju7Vi';
const MAPS_URL = 'https://maps.google.com/?q=15454+N+Frank+Lloyd+Wright+Blvd+A2+Suite+23,+Scottsdale,+AZ+85260';
const EMAIL = 'sales@focalpointvitality.com';

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'notice'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const showPage = (page: 'home' | 'privacy' | 'terms' | 'notice') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'privacy') return <PrivacyPolicy onBack={() => showPage('home')} />;
  if (currentPage === 'terms') return <Terms onBack={() => showPage('home')} />;
  if (currentPage === 'notice') return <NoticeOfPrivacyPractices onBack={() => showPage('home')} />;

  const marqueeTestimonials = [
    {
      author: {
        name: "Amanda T.",
        handle: "Scottsdale Patient",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face"
      },
      text: "After years of feeling exhausted no matter how much I slept, the hormone optimization program gave me my energy back. I feel like myself again — sharper, stronger, and actually motivated."
    },
    {
      author: {
        name: "Marcus H.",
        handle: "Scottsdale Patient",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "The weight management program was unlike anything I'd tried. No gimmicks — just data, a plan, and real accountability. Down 28 pounds and I've kept it off for six months."
    },
    {
      author: {
        name: "Christine V.",
        handle: "Scottsdale Patient",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      text: "I was skeptical about peptide therapy at first, but the results spoke for themselves. My recovery from workouts improved dramatically and the brain fog I had for years just lifted."
    },
    {
      author: {
        name: "Robert S.",
        handle: "Scottsdale Patient",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
      },
      text: "The team here actually listens. They looked at my labs, explained everything in plain language, and built a protocol that fit my life. My testosterone levels are optimal and I feel 10 years younger."
    },
    {
      author: {
        name: "Diane M.",
        handle: "Scottsdale Patient",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      text: "Going through perimenopause was rough until I found this practice. The personalized hormone therapy completely changed how I feel day to day. I wish I had started sooner."
    },
    {
      author: {
        name: "James L.",
        handle: "Scottsdale Patient",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      },
      text: "The nutrition program integrated perfectly with my hormone protocol. Everything worked together. I lost fat, gained muscle, and my metabolic markers improved across the board."
    },
  ];

  const conditionsData = [
    {
      title: "Energy & Vitality",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 text-lg leading-relaxed">
            Restore your natural energy and reclaim the vitality you once had. Our comprehensive approach addresses the root causes of fatigue and low energy through advanced diagnostics.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Low energy and chronic fatigue</h4>
              <p className="text-slate-500 text-sm">Comprehensive hormone evaluation to identify and address underlying causes of persistent tiredness</p>
            </div>
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Brain fog and low motivation</h4>
              <p className="text-slate-500 text-sm">Targeted protocols to enhance cognitive function, mental clarity, and drive</p>
            </div>
          </div>
          <img
            src={conditionEnergy}
            alt="Active lifestyle with renewed energy"
            className="rounded-xl object-cover h-48 md:h-64 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Body Composition",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 text-lg leading-relaxed">
            Achieve sustainable changes in body composition through medical-grade interventions and personalized nutrition strategies tailored to your biology.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Weight gain and stubborn fat</h4>
              <p className="text-slate-500 text-sm">Medical weight management with evidence-based protocols customized to your metabolism</p>
            </div>
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Loss of muscle or strength</h4>
              <p className="text-slate-500 text-sm">Hormone optimization to preserve and rebuild lean muscle mass as you age</p>
            </div>
          </div>
          <img
            src={conditionBody}
            alt="Body composition and fitness results"
            className="rounded-xl object-cover h-48 md:h-64 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Sleep & Recovery",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 text-lg leading-relaxed">
            Optimize your sleep architecture and recovery processes for better overall health, performance, and long-term resilience.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Poor sleep quality</h4>
              <p className="text-slate-500 text-sm">Comprehensive sleep optimization through hormone balance and evidence-based protocols</p>
            </div>
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Slow recovery from training</h4>
              <p className="text-slate-500 text-sm">Advanced cellular therapy to accelerate muscle repair and physical recovery</p>
            </div>
          </div>
          <img
            src={conditionSleep}
            alt="Restorative sleep and recovery"
            className="rounded-xl object-cover h-48 md:h-64 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Hormonal Health",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 text-lg leading-relaxed">
            Address hormonal imbalances that affect mood, energy, and quality of life through evidence-based, personalized treatment approaches.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Perimenopause & menopause</h4>
              <p className="text-slate-500 text-sm">Comprehensive hormone replacement therapy options tailored to your symptoms and goals</p>
            </div>
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Andropause & low testosterone</h4>
              <p className="text-slate-500 text-sm">Testosterone optimization protocols to restore men's energy, drive, and vitality</p>
            </div>
          </div>
          <img
            src={conditionHormones}
            alt="Medical consultation and hormone therapy"
            className="rounded-xl object-cover object-top h-48 md:h-64 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Metabolic Wellness",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 text-lg leading-relaxed">
            Optimize your metabolic health for long-term wellness and disease prevention through personalized, data-driven interventions.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Metabolic health concerns</h4>
              <p className="text-slate-500 text-sm">Comprehensive metabolic panel analysis and targeted optimization strategies</p>
            </div>
            <div className="bg-white border border-silver-300 p-6 rounded-xl shadow-md hover:border-brand-400 transition-colors">
              <h4 className="font-semibold text-navy-900 mb-2">Mood swings and irritability</h4>
              <p className="text-slate-500 text-sm">Hormone balance protocols to stabilize mood and support emotional well-being</p>
            </div>
          </div>
          <img
            src={conditionMetabolic}
            alt="Healthy nutrition and metabolic wellness"
            className="rounded-xl object-cover h-48 md:h-64 w-full shadow-lg"
          />
          <div className="text-center mt-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-brand-900/40"
            >
              See If We're a Fit <ChevronRight size={20} />
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-silver-100">

      <div className="bg-navy-950 text-white py-2.5 px-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+14805639966" className="flex items-center gap-1.5 hover:text-brand-300 transition-colors">
              <Phone size={14} />
              <span>+1 480-563-9966</span>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-300 transition-colors"
            >
              <MapPin size={14} />
              <span>15454 N Frank Lloyd Wright Blvd, Suite 23, Scottsdale, AZ</span>
            </a>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/98 shadow-xl shadow-navy-950/50' : 'bg-navy-950'} border-b border-brand-800/60`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <img
                src={logoSrc}
                alt="Focal Point Vitality"
                className="h-12 w-auto"
              />
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-silver-300 hover:text-brand-300 font-medium transition-colors text-sm uppercase tracking-wide">Services</a>
              <a href="#method" className="text-silver-300 hover:text-brand-300 font-medium transition-colors text-sm uppercase tracking-wide">Method</a>
              <a href="#testimonials" className="text-silver-300 hover:text-brand-300 font-medium transition-colors text-sm uppercase tracking-wide">Testimonials</a>
              <a href="#faq" className="text-silver-300 hover:text-brand-300 font-medium transition-colors text-sm uppercase tracking-wide">FAQ</a>
              <a href="#contact" className="text-silver-300 hover:text-brand-300 font-medium transition-colors text-sm uppercase tracking-wide">Contact</a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-all text-sm hover:scale-105"
              >
                Book Consultation
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-brand-300 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-brand-800/50 py-4">
              <div className="flex flex-col gap-1">
                {['Services', 'Method', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-silver-300 hover:text-brand-300 hover:bg-navy-800 font-medium px-4 py-3 rounded-lg transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-center mt-2"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative bg-navy-950 overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, #1C7AC2 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-800/60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-silver-100 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-2 text-brand-300 text-sm font-medium">
                <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
                Precision Medicine — Scottsdale, AZ
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Reclaim Your<br />
                Peak <span className="text-brand-400">Vitality</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Advanced hormone optimization, cellular therapy, and medical weight management — precision protocols engineered around your biology.
              </p>

              <div className="relative lg:hidden">
                <div className="absolute -inset-4 bg-brand-500/10 rounded-3xl blur-2xl" />
                <img
                  src={heroPatient}
                  alt="Healthy active patient at Focal Point Vitality"
                  className="relative rounded-2xl shadow-2xl w-full h-72 sm:h-96 object-cover border border-brand-500/20"
                />
                <div className="absolute -bottom-4 left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
                  <div className="bg-brand-500 rounded-xl p-2">
                    <Shield className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-xs">HIPAA Compliant</div>
                    <div className="text-slate-500 text-xs">Board Certified Provider</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 text-center shadow-lg shadow-brand-900/50"
                >
                  Book Your Consultation
                </a>
                <a
                  href={ASSESSMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-silver-400/40 hover:border-brand-400 hover:bg-brand-500/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
                >
                  Take the Free Assessment
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-bold text-brand-400">1,000+</div>
                  <div className="text-sm text-slate-400 mt-1">Patients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-400">4.9</div>
                  <div className="text-sm text-slate-400 mt-1">Star Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-400">100%</div>
                  <div className="text-sm text-slate-400 mt-1">Personalized Care</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-brand-500/10 rounded-3xl blur-2xl" />
              <img
                src={heroPatient}
                alt="Healthy active patient at Focal Point Vitality"
                className="relative rounded-2xl shadow-2xl w-full h-[620px] object-cover border border-brand-500/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-brand-500 rounded-xl p-2.5">
                  <Shield className="text-white" size={22} />
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-sm">HIPAA Compliant</div>
                  <div className="text-slate-500 text-xs">Board Certified Provider</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 border-b border-silver-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <Shield className="text-brand-500" size={22} />
              <span className="text-navy-800 font-semibold text-sm">HIPAA Compliant</span>
            </div>
            <div className="w-px h-5 bg-silver-300 hidden md:block" />
            <div className="flex items-center gap-2.5">
              <Users className="text-brand-500" size={22} />
              <span className="text-navy-800 font-semibold text-sm">1,000+ Patients Served</span>
            </div>
            <div className="w-px h-5 bg-silver-300 hidden md:block" />
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                ))}
              </div>
              <span className="text-navy-800 font-semibold text-sm">4.9 / 5 Rating</span>
            </div>
            <div className="w-px h-5 bg-silver-300 hidden md:block" />
            <div className="flex items-center gap-2.5">
              <Award className="text-brand-500" size={22} />
              <span className="text-navy-800 font-semibold text-sm">Board Certified</span>
            </div>
            <div className="w-px h-5 bg-silver-300 hidden md:block" />
            <div className="flex items-center gap-2.5">
              <MapPin className="text-brand-500" size={22} />
              <span className="text-navy-800 font-semibold text-sm">Scottsdale, AZ</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-silver-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 text-brand-600 text-sm font-medium mb-4">
              Our Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-5">
              Precision Medical <span className="text-brand-500">Wellness</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Evidence-based programs designed to address root causes — not just symptoms — for results that last.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="relative min-h-[26rem] h-full">
                <div className="relative h-full rounded-2xl border-[0.75px] border-brand-500/50 p-2">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                  <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl bg-white border border-silver-200 p-8 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-500 p-3 rounded-xl shrink-0">
                        <Activity className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 leading-tight">Hormone Management & Optimization</h3>
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      Comprehensive evaluation of sex hormones, thyroid, and related markers. Personalized protocols to improve energy, mood, sleep, body composition, and performance.
                    </p>
                    <ul className="space-y-3">
                      {['Advanced lab testing and interpretation', 'Tailored treatment plans with ongoing monitoring', 'Education on lifestyle factors that amplify results'].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="bg-brand-50 rounded-full p-0.5 mt-0.5 shrink-0">
                            <Check className="text-brand-500" size={16} />
                          </div>
                          <span className="text-slate-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="relative min-h-[26rem] h-full">
                <div className="relative h-full rounded-2xl border-[0.75px] border-brand-500/50 p-2">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                  <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl bg-white border border-silver-200 p-8 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-navy-800 p-3 rounded-xl shrink-0">
                        <Zap className="text-brand-300" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 leading-tight">Advanced Cellular Therapy</h3>
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      Targeted peptides to support muscle repair, fat loss, recovery, cognition, and healthy aging — selected by clinicians based on your goals and health history.
                    </p>
                    <ul className="space-y-3">
                      {['Evidence-informed peptide protocols', 'Clear directions for use and follow-up', 'Safety screening and provider oversight'].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="bg-brand-50 rounded-full p-0.5 mt-0.5 shrink-0">
                            <Check className="text-brand-500" size={16} />
                          </div>
                          <span className="text-slate-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative min-h-[26rem] h-full">
                <div className="relative h-full rounded-2xl border-[0.75px] border-brand-500/50 p-2">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                  <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl bg-white border border-silver-200 p-8 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-500 p-3 rounded-xl shrink-0">
                        <Target className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 leading-tight">Medical Weight-Management</h3>
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      Structured, physician-supervised approach combining medication when appropriate, nutrition planning, and accountability to reduce body fat while preserving lean mass.
                    </p>
                    <ul className="space-y-3">
                      {['Individualized nutrition and activity guidance', 'Progress tracking with body composition analysis', 'Metabolic markers monitored over time'].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="bg-brand-50 rounded-full p-0.5 mt-0.5 shrink-0">
                            <Check className="text-brand-500" size={16} />
                          </div>
                          <span className="text-slate-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative min-h-[26rem] h-full">
                <div className="relative h-full rounded-2xl border-[0.75px] border-brand-500/50 p-2">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                  <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl bg-white border border-silver-200 p-8 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-navy-800 p-3 rounded-xl shrink-0">
                        <Heart className="text-brand-300" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 leading-tight">Nutrition Programs</h3>
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      All treatments and therapies are accompanied by a comprehensive nutrition plan tailored to your labs, preferences, and schedule — ensuring optimal results from every protocol.
                    </p>
                    <ul className="space-y-3">
                      {['Integrated with all treatment protocols', 'Customized meal plans and practical guidance', 'Real-world strategies that fit your lifestyle'].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="bg-brand-50 rounded-full p-0.5 mt-0.5 shrink-0">
                            <Check className="text-brand-500" size={16} />
                          </div>
                          <span className="text-slate-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="method" className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, #1C7AC2 1px, transparent 1px)`,
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 text-brand-300 text-sm font-medium mb-4">
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              The Focal Point <span className="text-brand-400">Protocol</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A precision-first methodology — combining advanced diagnostics with personalized care to deliver results that are built to last.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { step: 1, title: "Medical Consultation", desc: "Meet your provider, discuss symptoms and goals, and map your comprehensive lab plan." },
              { step: 2, title: "Deep-Dive Analysis", desc: "Advanced labs and body composition data to identify the root drivers of your symptoms." },
              { step: 3, title: "Personalized Protocol", desc: "A clear, individualized plan spanning hormones, peptides, nutrition, and lifestyle." },
              { step: 4, title: "Ongoing Optimization", desc: "Regular check-ins, data-driven adjustments, and education to sustain your results." },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 120}>
                <div className="relative bg-navy-800 border border-brand-500/20 rounded-2xl p-8 text-center hover:border-brand-400/40 transition-all hover:-translate-y-1 group">
                  <div className="relative mx-auto mb-6 w-16 h-16">
                    <div className="absolute inset-0 bg-brand-500/20 rounded-full blur-md group-hover:bg-brand-500/30 transition-colors" />
                    <div className="relative bg-brand-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
                      {step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-brand-900/50"
            >
              Start Your Journey <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Timeline data={conditionsData} />

      <TestimonialsSection
        title="Real Patients. Real Results."
        description="Hear from patients in Scottsdale who have transformed their health with our precision wellness approach."
        testimonials={marqueeTestimonials}
        highlightWord="Results"
      />

      <section id="faq" className="py-24 bg-silver-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 text-brand-600 text-sm font-medium mb-4">
              Questions & Answers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-5">
              Frequently Asked <span className="text-brand-500">Questions</span>
            </h2>
            <p className="text-xl text-slate-500">
              Clear answers to help you understand our approach and what to expect.
            </p>
          </AnimatedSection>

          <div className="space-y-5">
            {[
              {
                q: "How soon can I expect results?",
                a: "Many patients notice meaningful changes within the first few weeks. Sustainable improvements build across regular follow-ups over 3–6 months. Timeline varies based on individual factors, the specific protocols used, and how closely patients follow recommendations."
              },
              {
                q: "Do you require labs before starting?",
                a: "Yes. Objective lab data is the foundation of everything we do — it allows us to build safe, effective, and truly personalized plans. We review results with you in plain language so you understand exactly what your body needs."
              },
              {
                q: "Is Cellular (Peptide) Therapy right for everyone?",
                a: "Not necessarily. Safety and suitability depend on your individual health history and goals. Your provider will conduct a thorough evaluation during consultation and advise on whether peptide therapy is appropriate for your situation."
              },
              {
                q: "Do you offer virtual appointments?",
                a: "Yes. We offer both in-clinic appointments at our Scottsdale location and telehealth options when clinically appropriate. Our team will guide you on the best format for your specific care needs."
              },
            ].map(({ q, a }, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white border border-silver-300 rounded-xl p-7 shadow-sm hover:border-brand-300 transition-colors">
                  <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-start gap-3">
                    <span className="text-brand-500 font-bold shrink-0">Q.</span>
                    {q}
                  </h3>
                  <p className="text-slate-500 leading-relaxed pl-6">{a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, #1C7AC2 1px, transparent 1px)`,
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 text-brand-300 text-sm font-medium mb-4">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Visit Us in <span className="text-brand-400">Scottsdale</span>
            </h2>
            <p className="text-xl text-slate-400">
              Ready to start your precision wellness journey? We're here to help.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="bg-navy-800 border border-brand-500/20 rounded-2xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-500 p-3 rounded-xl shrink-0">
                      <Phone className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-medium mb-0.5">Phone</p>
                      <a href="tel:+14805639966" className="text-white font-semibold hover:text-brand-300 transition-colors">+1 480-563-9966</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-navy-700 p-3 rounded-xl shrink-0">
                      <Mail className="text-brand-300" size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-medium mb-0.5">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-white font-semibold hover:text-brand-300 transition-colors">{EMAIL}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-500 p-3 rounded-xl shrink-0">
                      <MapPin className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-medium mb-0.5">Address</p>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-brand-300 transition-colors"
                      >
                        15454 N Frank Lloyd Wright Blvd<br />A2 Suite 23, Scottsdale, AZ 85260
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-navy-700 p-3 rounded-xl shrink-0">
                      <Clock className="text-brand-300" size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-medium mb-0.5">Hours</p>
                      <p className="text-white font-semibold">
                        Monday – Friday: 9:00 AM – 5:00 PM<br />
                        <span className="text-slate-400 font-normal text-sm">Saturday & Sunday: Closed</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-8 border-t border-brand-800/50">
                  <a
                    href="tel:+14805639966"
                    className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold transition-all text-center text-sm hover:scale-105"
                  >
                    Call Now
                  </a>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-700 hover:bg-navy-600 text-white px-5 py-3 rounded-lg font-semibold transition-all text-center text-sm hover:scale-105"
                  >
                    Book Consultation
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-brand-500/40 text-brand-300 hover:bg-brand-500/10 px-5 py-3 rounded-lg font-semibold transition-all text-center text-sm hover:scale-105"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <footer className="bg-navy-950 border-t border-brand-800/50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <img
                src={logoSrc}
                alt="Focal Point Vitality"
                className="h-10 w-auto mb-4"
              />
              <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                Precision medical wellness — hormone optimization, cellular therapy, and weight management in Scottsdale, AZ.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 text-sm hover:text-brand-400 transition-colors block mb-1"
              >
                15454 N Frank Lloyd Wright Blvd A2 Suite 23<br />Scottsdale, AZ 85260
              </a>
              <a href="tel:+14805639966" className="text-slate-500 text-sm hover:text-brand-400 transition-colors block mb-1">
                +1 480-563-9966
              </a>
              <a href={`mailto:${EMAIL}`} className="text-slate-500 text-sm hover:text-brand-400 transition-colors block mb-4">
                {EMAIL}
              </a>
              <p className="text-red-400/80 text-xs font-medium">For medical emergencies, call 911.</p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
              <div className="space-y-2.5">
                {[
                  { label: 'Services', href: '#services' },
                  { label: 'Our Method', href: '#method' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Contact', href: '#contact' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="block text-slate-400 hover:text-brand-300 transition-colors text-sm">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Legal</h3>
              <div className="space-y-2.5">
                <button onClick={() => showPage('privacy')} className="block text-slate-400 hover:text-brand-300 transition-colors text-sm text-left">Privacy Policy</button>
                <button onClick={() => showPage('terms')} className="block text-slate-400 hover:text-brand-300 transition-colors text-sm text-left">Terms of Service</button>
                <button onClick={() => showPage('notice')} className="block text-slate-400 hover:text-brand-300 transition-colors text-sm text-left">Notice of Privacy Practices</button>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-800/30 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Focal Point Vitality. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3.5 rounded-full shadow-xl shadow-brand-900/40 font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 text-sm"
        >
          Book Consultation
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-navy-800 hover:bg-navy-700 border border-brand-500/40 text-white p-3 rounded-full shadow-lg transition-all hover:scale-105 z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
