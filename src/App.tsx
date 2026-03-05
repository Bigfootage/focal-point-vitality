import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Mail, Clock, Shield, Users, Award, Star, ChevronLeft, ChevronRight, ArrowUp, Check, Activity, Heart, Brain, Zap, Target, User, Calendar } from 'lucide-react';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import { Timeline } from '@/components/ui/timeline';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';
import { Terms } from '@/components/Terms';
import { NoticeOfPrivacyPractices } from '@/components/NoticeOfPrivacyPractices';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'notice'>('home');

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonials = [
    {
      text: "After months of low energy, I finally have my spark back.",
      author: "T.W."
    },
    {
      text: "Dropped fat, kept my strength, and sleep is way better.",
      author: "P.K."
    },
    {
      text: "Peptide protocol sped up my shoulder recovery.",
      author: "B.L."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const showPage = (page: 'home' | 'privacy' | 'terms' | 'notice') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => showPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <Terms onBack={() => showPage('home')} />;
  }

  if (currentPage === 'notice') {
    return <NoticeOfPrivacyPractices onBack={() => showPage('home')} />;
  }

  const marqueeTestimonials = [
    {
      author: {
        name: "Sarah M.",
        handle: "Patient",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "After months of low energy, I finally have my spark back. The hormone optimization program changed my life completely."
    },
    {
      author: {
        name: "Michael R.",
        handle: "Patient", 
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Dropped fat, kept my strength, and sleep is way better. The personalized approach made all the difference."
    },
    {
      author: {
        name: "Jennifer L.",
        handle: "Patient",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Peptide protocol sped up my shoulder recovery significantly. I'm back to my active lifestyle faster than expected."
    },
    {
      author: {
        name: "David K.",
        handle: "Patient",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "The team's expertise in functional medicine is outstanding. They addressed root causes, not just symptoms."
    },
    {
      author: {
        name: "Lisa T.",
        handle: "Patient",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Professional, knowledgeable, and truly caring. The nutrition program fits perfectly into my busy schedule."
    }
  ];

  const conditionsData = [
    {
      title: "Energy & Vitality",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Restore your natural energy levels and reclaim the vitality you once had. Our comprehensive approach addresses the root causes of fatigue and low energy.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Low energy and fatigue</h4>
              <p className="text-gray-400 text-sm">Comprehensive hormone evaluation to identify and address underlying causes</p>
            </div>
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Brain fog and low motivation</h4>
              <p className="text-gray-400 text-sm">Targeted protocols to enhance cognitive function and mental clarity</p>
            </div>
          </div>
          <img 
            src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Person exercising with renewed energy"
            className="rounded-lg object-cover h-48 md:h-64 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Body Composition",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Achieve sustainable changes in body composition through medical-grade interventions and personalized nutrition strategies.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Weight gain and stubborn fat</h4>
              <p className="text-gray-400 text-sm">Medical weight management with proven protocols</p>
            </div>
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Loss of muscle or strength</h4>
              <p className="text-gray-400 text-sm">Hormone optimization to preserve and build lean muscle mass</p>
            </div>
          </div>
          <img 
            src="https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Body composition measurement and analysis"
            className="rounded-lg object-cover h-48 md:h-64 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Sleep & Recovery",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Optimize your sleep quality and recovery processes for better overall health and performance.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Sleep issues</h4>
              <p className="text-gray-400 text-sm">Comprehensive sleep optimization through hormone balance</p>
            </div>
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Slow recovery from training</h4>
              <p className="text-gray-400 text-sm">Advanced peptide therapy to accelerate recovery</p>
            </div>
          </div>
          <img 
            src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Peaceful sleep and recovery"
            className="rounded-lg object-cover h-48 md:h-64 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Hormonal Health",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Address hormonal imbalances that affect mood, energy, and overall quality of life through evidence-based treatments.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Perimenopause/<br />menopause</h4>
              <p className="text-gray-400 text-sm">Comprehensive hormone replacement therapy options</p>
            </div>
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Andropause/low testosterone</h4>
              <p className="text-gray-400 text-sm">Testosterone optimization for men's health</p>
            </div>
          </div>
          <img 
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Medical consultation and hormone therapy discussion"
            className="rounded-lg object-cover object-top h-48 md:h-64 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Metabolic Wellness",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Optimize your metabolic health for long-term wellness and disease prevention through personalized interventions.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Metabolic health concerns</h4>
              <p className="text-gray-400 text-sm">Comprehensive metabolic panel analysis and optimization</p>
            </div>
            <div className="bg-black border border-gold-600 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-white mb-2">Mood swings and irritability</h4>
              <p className="text-gray-400 text-sm">Hormone balance to stabilize mood and emotional well-being</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://api.leadconnectorhq.com/widget/booking/Hw7spaCC9MJ1nx2CftQh" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold-600 hover:bg-gold-700 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              See If We're a Fit
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="bg-black text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:720-915-5508" className="hover:text-gold-400 transition-colors">720-915-5508</a>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <MapPin size={16} />
              <a href="https://maps.google.com/?q=8770+E+Arapahoe+Road+%23202,+Centennial,+CO+80112" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">8770 E Arapahoe Road #202, Centennial, CO 80112</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:info@vitalflamewellness.com" className="hidden sm:inline hover:text-gold-400 transition-colors">info@vitalflamewellness.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-black shadow-md sticky top-0 z-50 border-b border-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <img 
                src="https://github.com/Bigfootage/Visual-Material/blob/main/vitalflame_logo_no_text.png?raw=true"
                alt="Vital Flame Wellness Logo"
                className="h-14 w-auto"
              />
              <div className="text-left">
                <div className="text-2xl font-bold leading-tight">
                  <span className="text-white">VITAL FLAME </span>
                  <span className="text-gold-500">WELLNESS</span>
                </div>
                <div className="hidden sm:block text-xs text-gray-300 uppercase tracking-wider mt-1">
                  INTEGRATIVE AND FUNCTIONAL MEDICINE
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gold-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="bg-black border-t border-gold-600 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-white hover:text-gold-500 font-medium px-4">Services</a>
                <a href="#method" className="text-white hover:text-gold-500 font-medium px-4">Method</a>
                <a href="#testimonials" className="text-white hover:text-gold-500 font-medium px-4">Testimonials</a>
                <a href="#team" className="text-white hover:text-gold-500 font-medium px-4">Meet the Team</a>
                <a href="#faq" className="text-white hover:text-gold-500 font-medium px-4">FAQ</a>
                <a href="#contact" className="text-white hover:text-gold-500 font-medium px-4">Contact</a>
                <a href="https://secure.gethealthie.com/users/sign_in" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium mx-4 transition-colors text-center">
                  Patient Portal
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Feel Younger,<br />
                Stronger, and<br />
                <span className="text-gold-500">Healthier</span><br />
                at Any Age
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                World-class hormone care, advanced cellular protocols, and personalized nutrition—designed around your labs, your goals, and your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://api.leadconnectorhq.com/widget/booking/Hw7spaCC9MJ1nx2CftQh" target="_blank" rel="noopener noreferrer" className="bg-gold-600 hover:bg-gold-700 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center">
                  Book Your Consultation
                </a>
                <a href="https://app.vitalflamewellness.com/hormone-health-assessment" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center">
                  Take the 60-second Assessment
                </a>
              </div>
              <div className="pt-4 text-sm text-gray-400 space-y-1">
                <p>✓ Medical practice in Centennial, CO</p>
                <p>✓ Evidence-based, personalized care</p>
                <p>✓ Secure patient portal</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Professional providing hormone therapy consultation"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Ribbon */}
      <section className="bg-black py-8 border-b border-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="text-gold-500" size={24} />
                <span className="text-white font-medium text-sm">HIPAA Compliant</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="text-gold-500" size={24} />
                <span className="text-white font-medium text-sm">1000+ Patients</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <span className="text-white font-medium text-sm">4.9/5 Rating</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Award className="text-gold-500" size={24} />
                <span className="text-white font-medium text-sm">Board Certified</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Shield className="text-gold-500" size={24} />
                <span className="text-white font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-gold-500" size={24} />
                <span className="text-white font-medium">1000+ Patients Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <span className="text-white font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-gold-500" size={24} />
                <span className="text-white font-medium">Board Certified</span>
              </div>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Thousands of successful appointments and personalized plans delivered.
            </p>
          </div>
          
          {/* Mobile Description */}
          <div className="md:hidden mt-4">
            <p className="text-gray-400 text-center text-sm">
              Thousands of successful appointments and personalized plans delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Medical Wellness <span className="text-gold-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore targeted programs that address the root cause of symptoms and support sustainable change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 - Hormone Management */}
            <div className="relative min-h-[28rem]">
              <div className="relative h-full rounded-2xl border-[0.75px] border-gold-600 p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gold-600 p-3 rounded-lg mr-4">
                      <Activity className="text-black" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Hormone Management & Optimization</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Comprehensive evaluation of sex hormones, thyroid, and related markers. Personalized protocols to improve energy, mood, sleep, body composition, and performance.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Advanced lab testing and interpretation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Tailored treatment plans with ongoing monitoring</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Education on lifestyle factors that amplify results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 - Peptide Therapy */}
            <div className="relative min-h-[28rem]">
              <div className="relative h-full rounded-2xl border-[0.75px] border-gold-600 p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                      <Zap className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Advanced Cellular Therapy</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Targeted peptides to support muscle repair, fat loss, recovery, cognition, and healthy aging—selected by clinicians based on your goals and history.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Evidence-informed protocols</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Clear directions for use and follow-up</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Safety screening and provider oversight</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 - Medical Weight Management */}
            <div className="relative min-h-[28rem]">
              <div className="relative h-full rounded-2xl border-[0.75px] border-gold-600 p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gold-600 p-3 rounded-lg mr-4">
                      <Target className="text-black" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Medical Weight-Management</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Structured, physician-supervised approach combining medication when appropriate, nutrition planning, and accountability to reduce body fat while preserving lean mass.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Individualized nutrition and activity guidance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Progress tracking with body composition</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Metabolic markers monitored over time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 - Nutrition Programs */}
            <div className="relative min-h-[28rem]">
              <div className="relative h-full rounded-2xl border-[0.75px] border-gold-600 p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                      <Heart className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Nutrition Programs</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    All treatments and therapies are accompanied by a comprehensive nutrition plan tailored to your labs, preferences, and schedule—ensuring optimal results from your wellness journey.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Integrated with all treatment protocols</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Customized meal plans and guidance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="text-gold-500" size={20} />
                      <span className="text-gray-300">Real-world strategies that fit your lifestyle</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Bio-Synergistics™ */}
      <section id="method" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Our Method <span className="text-gold-500">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Our Bio-Synergistics™ approach combines advanced diagnostics with personalized protocols for lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-gold-600 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Medical Consultation</h3>
              <p className="text-gray-300">
                Meet your provider, discuss symptoms and goals, and map your lab plan.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deep-Dive Analysis</h3>
              <p className="text-gray-300">
                Comprehensive labs and body composition to identify root drivers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-gold-600 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personalized Plan</h3>
              <p className="text-gray-300">
                Clear protocol across hormones, peptides, nutrition, and lifestyle.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ongoing Optimization</h3>
              <p className="text-gray-300">
                Regular check-ins, adjustments, and education to maintain results.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://api.leadconnectorhq.com/widget/booking/Hw7spaCC9MJ1nx2CftQh" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold-600 hover:bg-gold-700 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Conditions We Help */}
      <Timeline data={conditionsData} />

      {/* Testimonials */}
      <TestimonialsSection
        title="Real Patients. Real Results."
        description="See how our patients have transformed their health and vitality with our personalized approach to wellness."
        testimonials={marqueeTestimonials}
        className="bg-black"
        highlightWord="Results"
      />

      {/* Meet the Team */}
      <section id="team" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Medical <span className="text-gold-500">Provider</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Board-certified medical provider dedicated to your health optimization journey.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-900 border border-gold-600 rounded-2xl p-8 text-center shadow-lg max-w-md">
              <img 
                src="https://github.com/Bigfootage/Visual-Material/blob/main/headshot.JPG?raw=true"
                alt="Sheena Meyer, FNP-C"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Sheena Meyer, FNP-C</h3>
              <p className="text-gold-500 font-medium mb-4">Family Nurse Practitioner</p>
              <p className="text-gray-300">Specialized in hormone optimization, cellular therapy, and personalized wellness protocols to help you achieve optimal health and vitality.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-gold-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Clear answers to help you understand our approach and what to expect.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-black border border-gold-600 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-white mb-3">How soon can I expect results?</h3>
              <p className="text-gray-300">
                Many patients notice changes within weeks; sustainable improvements build across regular follow-ups. Timeline varies based on individual factors and treatment protocols.
              </p>
            </div>

            <div className="bg-black border border-gold-600 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-white mb-3">Do you require labs?</h3>
              <p className="text-gray-300">
                Yes. Objective data guides safe, effective plans; we review labs with you in plain language to ensure you understand your results and treatment approach.
              </p>
            </div>

            <div className="bg-black border border-gold-600 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-white mb-3">Is Cellular Therapy right for everyone?</h3>
              <p className="text-gray-300">
                Safety and suitability depend on your health history and goals; your provider will advise during consultation based on comprehensive evaluation.
              </p>
            </div>

            <div className="bg-black border border-gold-600 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer virtual appointments?</h3>
              <p className="text-gray-300">
                Yes. We support in-clinic and telehealth options when appropriate, providing flexibility while maintaining quality care standards.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Vital Flame <span className="text-gold-500">Wellness</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your journey to better health? Get in touch with our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-900 border border-gold-600 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gold-600 p-3 rounded-lg">
                      <Phone className="text-black" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <a href="tel:720-915-5508" className="text-gray-300 hover:text-gold-500 transition-colors">720-915-5508</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a href="mailto:info@vitalflamewellness.com" className="text-gray-300 hover:text-red-500 transition-colors">info@vitalflamewellness.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gold-600 p-3 rounded-lg">
                      <MapPin className="text-black" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Address</p>
                      <a href="https://maps.google.com/?q=8770+E+Arapahoe+Road+%23202,+Centennial,+CO+80112" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-500 transition-colors">8770 E Arapahoe Road #202<br />Centennial, CO 80112</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Hours</p>
                      <p className="text-gray-300">
                        Mon–Fri: 8:00 AM – 5:00 PM<br />
                        Sat: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="tel:+17209155508" className="bg-gold-600 hover:bg-gold-700 text-black px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                    Call Now
                  </a>
                  <a href="https://api.leadconnectorhq.com/widget/booking/Hw7spaCC9MJ1nx2CftQh" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                    Book Consultation
                  </a>
                  <a href="https://maps.google.com/?q=8770+E+Arapahoe+Road+%23202,+Centennial,+CO+80112" target="_blank" rel="noopener noreferrer" className="bg-gold-600 hover:bg-gold-700 text-black px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Patient Portal */}
            <div className="space-y-8">
              <div className="bg-slate-900 border border-gold-600 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Patient Portal</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Manage appointments, message your care team, and review lab results securely through our HIPAA-compliant patient portal.
                </p>
                
                <div className="space-y-4 mb-8">
                  <a href="https://secure.gethealthie.com/users/sign_in" target="_blank" rel="noopener noreferrer" className="block w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors text-center">
                    Access Patient Portal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-4">
                  <img 
                    src="https://github.com/Bigfootage/Visual-Material/blob/main/vitalflame_logo_no_text.png?raw=true"
                    alt="Vital Flame Wellness Logo"
                    className="h-10 w-auto mr-3"
                  />
                  <div className="text-2xl font-bold">
                    <span className="text-white">VITAL FLAME</span>
                    <span className="text-gold-500"> WELLNESS</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">Integrative Medical Wellness</p>
                <p className="text-gray-400 text-sm mb-4">
                  <a href="https://maps.google.com/?q=8770+E+Arapahoe+Road+%23202,+Centennial,+CO+80112" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">8770 E Arapahoe Road #202, Centennial, CO 80112</a>
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  <a href="tel:720-915-5508" className="hover:text-gold-400 transition-colors">720-915-5508</a>
                </p>
                <p className="text-red-400 text-sm font-medium">
                  For medical emergencies, call 911.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#services" className="block text-gray-300 hover:text-gold-400 transition-colors">Services</a>
                  <a href="#method" className="block text-gray-300 hover:text-gold-400 transition-colors">Method</a>
                  <a href="#testimonials" className="block text-gray-300 hover:text-gold-400 transition-colors">Testimonials</a>
                  <a href="#faq" className="block text-gray-300 hover:text-gold-400 transition-colors">FAQ</a>
                  <a href="#contact" className="block text-gray-300 hover:text-gold-400 transition-colors">Contact</a>
                </div>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
                <div className="space-y-2">
                  <button onClick={() => showPage('privacy')} className="block text-gray-300 hover:text-gold-400 transition-colors text-left">Privacy Policy</button>
                  <button onClick={() => showPage('terms')} className="block text-gray-300 hover:text-gold-400 transition-colors text-left">Terms</button>
                  <button onClick={() => showPage('notice')} className="block text-gray-300 hover:text-gold-400 transition-colors text-left">Notice of Privacy Practices</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gold-600 pt-8">
            <div className="text-center text-gray-400 text-sm">
              <p>© 2025 Vital Flame Wellness. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a href="https://api.leadconnectorhq.com/widget/booking/Hw7spaCC9MJ1nx2CftQh" target="_blank" rel="noopener noreferrer" className="bg-gold-600 hover:bg-gold-700 text-black px-6 py-4 rounded-full shadow-lg font-semibold transition-all hover:scale-105 inline-block">
          Book Consultation
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-105 z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;