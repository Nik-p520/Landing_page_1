import { useState } from 'react';
import EnquiryForm from './components/EnquiryForm';
import {
  GraduationCap,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronDown,
  Star,
  FlaskConical,
  Building2,
  Stethoscope,
  Heart,
  ClipboardList,
  FileCheck,
  BadgeCheck,
  Rocket,
  Menu,
  X,
} from 'lucide-react';

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "About Us", href: "#about" },
  { name: "Campus", href: "#campus" },
  { name: "Admissions", href: "#admission" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

const STATS = [
  { value: '500+', label: 'Students Enrolled', icon: GraduationCap },
  { value: '25+', label: 'Experienced Faculty', icon: Users },
  { value: '95%', label: 'Placement Support', icon: TrendingUp },
  { value: '15+', label: 'Years of Excellence', icon: Award },
];

const ANM_FEATURES = [
  'Duration: 2 Years',
  'Eligibility: 10+2 (Any Stream)',
  'Practical Training',
  'Community Healthcare',
  'Bright Career Opportunities',
];

const BSC_FEATURES = [
  'Duration: 4 Years',
  'Eligibility: 10+2 (PCB)',
  'Hospital Based Training',
  'Research Oriented Learning',
  'Excellent Career Opportunities',
];

const WHY_CHOOSE = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    desc: 'Learn from highly qualified and dedicated faculty.',
  },
  {
    icon: FlaskConical,
    title: 'Practical Learning',
    desc: 'Hands-on training in labs and hospitals for real-world experience.',
  },
  {
    icon: Building2,
    title: 'Modern Infrastructure',
    desc: 'Well-equipped labs, smart classrooms and comfortable campus.',
  },
  {
    icon: Stethoscope,
    title: 'Clinical Training',
    desc: 'Exposure to hospitals and healthcare facilities.',
  },
  {
    icon: TrendingUp,
    title: 'Career Guidance',
    desc: 'Placement support and guidance for a bright future.',
  },
  {
    icon: Heart,
    title: 'Holistic Development',
    desc: 'Focus on overall growth, values and personality development.',
  },
];

// const FACILITIES = [
//   {
//     label: 'Advanced Labs',
//     img: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400',
//   },
//   {
//     label: 'Clinical Practice',
//     img: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
//   },
//   {
//     label: 'Library & Study',
//     img: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=400',
//   },
//   {
//     label: 'Smart Classrooms',
//     img: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=400',
//   },
// ];

const FAQS = [
  {
    question: "What courses are offered at Astha Para Medical College?",
    answer:
      "We offer ANM (Auxiliary Nurse Midwife) and B.Sc Nursing programs with quality education and practical clinical training.",
  },
  {
    question: "What is the eligibility for ANM admission?",
    answer:
      "Candidates must have successfully completed 10+2 from a recognized board.",
  },
  {
    question: "What is the eligibility for B.Sc Nursing?",
    answer:
      "Candidates must have passed 10+2 with Physics, Chemistry and Biology (PCB) from a recognized board.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "10th & 12th Marksheet, Transfer Certificate, Aadhaar Card, Passport-size photographs and other documents as required.",
  },
  {
    question: "Does the college provide practical training?",
    answer:
      "Yes. Students receive laboratory sessions, hospital exposure and clinical training throughout the course.",
  },
  {
    question: "Is placement support available?",
    answer:
      "Yes. We provide career guidance and placement assistance to help students build successful healthcare careers.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Click the 'Apply for Admission' button anywhere on this page or contact our admission office directly.",
  },
  {
    question: "Is hostel facility available?",
    answer:
      "Please contact our admission office to know the latest hostel availability and accommodation details.",
  },
];

const STEPS = [
  { step: 'Step 1', title: 'Apply Online', desc: 'Submit your application form', icon: ClipboardList },
  { step: 'Step 2', title: 'Document Verification', desc: 'We verify your documents', icon: FileCheck },
  { step: 'Step 3', title: 'Admission Confirmation', desc: 'Get your admission confirmation', icon: BadgeCheck },
  { step: 'Step 4', title: 'Begin Your Journey', desc: 'Start your journey towards success', icon: Rocket },
];

const TESTIMONIALS = [
  {
    quote:
      'Astha Para Medical College has provided me with amazing knowledge and practical exposure. I am proud to be a part of this institution.',
    name: 'Neha Sharma',
    course: 'B.Sc Nursing Student',
    img: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'The faculty is supportive and the environment is perfect for learning and personal growth. Highly recommended!',
    name: 'Pooja Verma',
    course: 'ANM Student',
    img: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'Practical training and clinical exposure here build our confidence and prepare us for real-world challenges.',
    name: 'Riya Singh',
    course: 'B.Sc Nursing Student',
    img: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryCourse, setEnquiryCourse] = useState<'ANM' | 'B.Sc Nursing' | ''>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openEnquiry = (course: 'ANM' | 'B.Sc Nursing' | '' = '') => {
    setEnquiryCourse(course);
    setShowEnquiry(true);
  };

  const prevTestimonial = () =>
    setTestimonialIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <div id='home' className="font-sans text-gray-800 relative min-h-screen w-full flex flex-col bg-white">
      {/* ── NAVBAR ── */}
<header className="sticky top-0 z-50 bg-white shadow-sm w-full">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-[#0D2B5E] flex items-center justify-center">
        <GraduationCap className="w-6 h-6 text-white" />
      </div>
      <div className="leading-tight">
        <p className="font-extrabold text-[#0D2B5E] text-sm tracking-wide uppercase">ASTHA</p>
        <p className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">Para Medical College</p>
      </div>
    </div>

    {/* Desktop nav */}
    <nav className="hidden md:flex items-center gap-6">
      {NAV_LINKS.map((link, i) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-sm font-medium transition-colors ${
            i === 0
              ? 'text-[#0D8A6A] border-b-2 border-[#0D8A6A] pb-0.5'
              : 'text-gray-600 hover:text-[#0D2B5E]'
          }`}
        >
          {link.name}
        </a>
      ))}
    </nav>

    <button
      onClick={() => openEnquiry()}
      className="hidden md:flex items-center gap-1.5 bg-[#0D2B5E] text-white text-sm font-semibold px-5 py-2 rounded transition hover:bg-[#163a7a]"
    >
      Apply for Admission <ChevronRight className="w-4 h-4" />
    </button>

    {/* Mobile hamburger */}
    <button className="md:hidden text-gray-700 p-2 focus:outline-none" onClick={() => setMobileOpen(!mobileOpen)}>
      {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>

  {/* Mobile menu - The Ultimate Animation Frame Fix */}
{mobileOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg z-50 px-6 py-4 space-y-4 transition-all duration-300">
    <nav className="flex flex-col space-y-3">
      {NAV_LINKS.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          onClick={(e) => {
            e.preventDefault(); // Default jump ko roko
            
            setMobileOpen(false); // Menu band karne ka order do
            
            const targetId = link.href.replace('#', '');
            
            // Menu close + layout reflow settle hone ka time do,
            // phir manually offset ke saath scroll karo (sticky navbar ke liye)
            setTimeout(() => {
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                const NAVBAR_OFFSET = 70; // apni navbar height ke hisaab se adjust karo
                const y =
                  targetElement.getBoundingClientRect().top +
                  window.scrollY -
                  NAVBAR_OFFSET;

                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }, 150);
          }}
          className="block text-base font-medium text-gray-700 hover:text-[#0D2B5E] py-2 border-b border-gray-50 last:border-none active:bg-gray-50"
        >
          {link.name}
        </a>
      ))}
    </nav>
    
    <div className="pt-2 border-t border-gray-100">
      <button
        onClick={() => {
          setMobileOpen(false);
          openEnquiry();
        }} 
        className="w-full flex items-center justify-center gap-1 bg-[#0D2B5E] text-white text-sm font-semibold px-5 py-3 rounded shadow-md cursor-pointer relative z-50 active:bg-[#163a7a]"
      >
        Apply for Admission <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
)}

</header>

      {/* ── MAIN CONTENT WRAPPER ── */}
      <main className="w-full flex-1">
        {/* ── HERO ── */}
        <section  className="relative bg-gradient-to-br from-[#0D2B5E] via-[#143870] to-[#0D2B5E] text-white min-h-[560px] pb-10">
          {/* Background image overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/images/hero-students.jpeg')",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <span className="inline-block bg-[#0D8A6A] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
                ADMISSIONS OPEN 2026–27
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Your Journey to<br />Becoming a Healthcare<br />
                <span className="text-[#4DD9AC]">Professional Starts Here</span>
              </h1>
              <p className="text-blue-100 text-base mb-6 max-w-md">
                Astha Para Medical College is dedicated to providing quality education, practical training and excellent
                opportunities for a successful career in healthcare.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-4 mb-8">
                {['Quality Education', 'Practical Training', 'Experienced Faculty'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle className="w-4 h-4 text-[#4DD9AC]" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openEnquiry()}
                  className="flex items-center gap-2 bg-[#0D2B5E] border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#0D2B5E] transition"
                >
                  Apply for Admission <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="#courses"
                  className="flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#0D2B5E] transition"
                >
                  Explore Courses <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="/images/hero-students.jpeg"
                  alt="Nursing students"
                  className="rounded-2xl w-full max-w-sm object-cover shadow-2xl"
                  style={{ maxHeight: 400 }}
                />
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-6 bg-white text-[#0D2B5E] rounded-xl shadow-xl px-5 py-3">
                  <p className="font-bold text-sm leading-tight">Building Careers</p>
                  <p className="font-bold text-sm leading-tight">Creating Caregivers</p>
                  <p className="font-bold text-sm leading-tight text-[#0D8A6A]">Changing Lives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EAF4FF] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#0D2B5E]" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#0D2B5E]">{value}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COURSES ── */}
        <section id='courses' className="bg-[#F7FAFF] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#0D8A6A] text-xs font-bold tracking-widest uppercase mb-2">
              COURSES OFFERED
            </p>
            <h2 className="text-center text-3xl font-extrabold text-[#0D2B5E] mb-10">
              Choose Your Path in Healthcare
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* ANM */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="/images/anm.jpeg"
                  alt="ANM Course"
                  className="w-full md:w-40 object-cover"
                />
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#0D8A6A]">ANM</h3>
                      <p className="text-sm text-gray-500">Auxiliary Nurse Midwife</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EAF6F1] flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-[#0D8A6A]" />
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {ANM_FEATURES.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#0D8A6A] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openEnquiry('ANM')}
                    className="inline-flex items-center gap-1.5 border-2 border-[#0D8A6A] text-[#0D8A6A] font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#0D8A6A] hover:text-white transition"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* B.Sc Nursing */}
              <div className="bg-[#0D2B5E] rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="/images/nursing.jpeg"
                  alt="B.Sc Nursing"
                  className="w-full md:w-40 object-cover"
                />
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-extrabold text-white">B.Sc Nursing</h3>
                      <p className="text-sm text-blue-300">Bachelor of Science in Nursing</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {BSC_FEATURES.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-blue-100">
                        <CheckCircle className="w-4 h-4 text-[#4DD9AC] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openEnquiry('B.Sc Nursing')}
                    className="inline-flex items-center gap-1.5 bg-[#0D8A6A] text-white font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#0a7059] transition"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE ── */}
        <section id='about' className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#0D8A6A] text-xs font-bold tracking-widest uppercase mb-2">
              WHY CHOOSE ASTHA PARA MEDICAL COLLEGE?
            </p>
            <h2 className="text-center text-3xl font-extrabold text-[#0D2B5E] mb-12">Excellence in Every Step</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-[#EAF4FF] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0D2B5E] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#0D2B5E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0D2B5E] mb-2">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEARNING EXPERIENCE ── */}
        <section id='campus' className="bg-[#0D2B5E] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            {/* Left image */}
            <div>
              <img
                src="/images/girls.jpeg"
                alt="Students in lab"
                className="rounded-2xl object-cover w-full max-h-80"
              />
            </div>

            {/* Right content */}
            <div className="text-white">
              <p className="text-[#4DD9AC] text-xs font-bold tracking-widest uppercase mb-2">LEARNING EXPERIENCE</p>
              <h2 className="text-4xl font-extrabold mb-4">Learn. Practice. Serve.</h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-8">
                We believe healthcare education is best delivered through a balance of classroom learning, laboratory
                sessions, practical demonstrations and real-world clinical exposure.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center">
                  <img
                    src="/images/lab.jpeg"
                    alt="Advanced Labs"
                    className="rounded-xl w-full h-20 object-cover mb-2"
                  />
                  <p className="text-xs text-blue-200 font-semibold">Advanced Labs</p>
                </div>

                <div className="text-center">
                  <img
                    src="/images/clinic.jpg"
                    alt="Clinical Practice"
                    className="rounded-xl w-full h-20 object-cover mb-2"
                  />
                  <p className="text-xs text-blue-200 font-semibold">Clinical Practice</p>
                </div>

                <div className="text-center">
                  <img
                    src="/images/library.jpeg"
                    alt="Library & Study"
                    className="rounded-xl w-full h-20 object-cover mb-2"
                  />
                  <p className="text-xs text-blue-200 font-semibold">Library & Study</p>
                </div>

                <div className="text-center">
                  <img
                    src="/images/classroom.jpeg"
                    alt="Smart Classrooms"
                    className="rounded-xl w-full h-20 object-cover mb-2"
                  />
                  <p className="text-xs text-blue-200 font-semibold">Smart Classrooms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* ── ADMISSION PROCESS SECTION ── */}
<section id="admission" className="bg-[#F7FAFF] py-16 relative">
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-center text-[#0D8A6A] text-xs font-bold tracking-widest uppercase mb-2">
      ADMISSION PROCESS
    </p>
    <h2 className="text-center text-3xl font-extrabold text-[#0D2B5E] mb-12">
      Simple Steps to Join Astha Para Medical College
    </h2>

    {/* Flex container jahan steps map ho rahe hain */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-4 justify-center">
      {STEPS.map(({ step, title, desc, icon: Icon }, i) => (
        <div key={step} className="flex flex-col md:flex-row items-center w-full md:w-auto">
          
          <div className="flex flex-col items-center text-center w-64 max-w-full mx-auto">
            <p className="text-[#0D8A6A] text-xs font-bold mb-2">{step}</p>
            <div className="w-14 h-14 rounded-full bg-[#0D8A6A] flex items-center justify-center mb-3 shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-[#0D2B5E] text-sm mb-1">{title}</h3>
            <p className="text-xs text-gray-500 max-w-[200px]">{desc}</p>
          </div>
          
          {i < STEPS.length - 1 && (
            <ChevronRight className="w-6 h-6 text-gray-300 hidden md:block md:mt-10 mx-2 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  </div>
</section>

        {/* ── TESTIMONIALS ── */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#0D8A6A] text-xs font-bold tracking-widest uppercase mb-2">
              WHAT OUR STUDENTS SAY
            </p>

            <div className="relative">
              {/* Prev button */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#0D2B5E] hover:text-white transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-3 gap-6 px-6">
                {/* Testimonial 1 */}
                <div className="bg-[#F7FAFF] rounded-2xl p-6 shadow-sm">
                  <p className="text-[#0D2B5E] text-2xl font-serif mb-3">&ldquo;</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    Astha Para Medical College has provided me with amazing knowledge and practical exposure.
                    I am proud to be a part of this institution.
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/avatar4.jpg"
                      alt="Neha Sharma"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-sm text-[#0D2B5E]">– Neha Sharma</p>
                      <p className="text-xs text-gray-500">B.Sc Nursing Student</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-[#F7FAFF] rounded-2xl p-6 shadow-sm">
                  <p className="text-[#0D2B5E] text-2xl font-serif mb-3">&ldquo;</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    The faculty is supportive and the environment is perfect for learning and
                    personal growth. Highly recommended!
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/avatar-1.jpg"
                      alt="Pooja Verma"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-sm text-[#0D2B5E]">– Pooja Verma</p>
                      <p className="text-xs text-gray-500">ANM Student</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-[#F7FAFF] rounded-2xl p-6 shadow-sm">
                  <p className="text-[#0D2B5E] text-2xl font-serif mb-3">&ldquo;</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    Practical training and clinical exposure here build our confidence and
                    prepare us for real-world challenges.
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/avatar-3.webp"
                      alt="Riya Singh"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-sm text-[#0D2B5E]">– Riya Singh</p>
                      <p className="text-xs text-gray-500">B.Sc Nursing Student</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#0D2B5E] hover:text-white transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="bg-[#0D2B5E] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold">Begin Your Journey in Healthcare Today!</h3>
                <p className="text-blue-200 text-sm">
                  Take the first step towards a rewarding career in nursing with Astha Para Medical College.
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => openEnquiry()}
                className="flex items-center gap-2 bg-[#0D8A6A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#0a7059] transition"
              >
                Apply Now <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="#"
                className="flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#0D2B5E] transition"
              >
                Contact Admissions <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <section id="faq" className="bg-[#F7FAFF] py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    <p className="text-center text-[#0D8A6A] text-xs font-bold tracking-widest uppercase mb-2">
      Frequently Asked Questions
    </p>

    <h2 className="text-center text-3xl font-extrabold text-[#0D2B5E] mb-12">
      Have Questions? We Have Answers
    </h2>

    <div className="space-y-4">

      {FAQS.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="w-full flex items-center justify-between p-5 text-left"
          >

            <span className="font-semibold text-[#0D2B5E]">
              {faq.question}
            </span>

            <ChevronDown
              className={`w-5 h-5 text-[#0D8A6A] transition-transform duration-300 ${
                openFaq === index ? "rotate-180" : ""
              }`}
            />

          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              openFaq === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <p className="px-5 pb-5 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

      {/* ── FOOTER ── */}
      <footer id='contact' className="bg-[#081B3E] text-blue-100 pt-14 pb-6 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="leading-tight">
                  <p className="font-extrabold text-white text-sm uppercase">ASTHA</p>
                  <p className="text-[10px] text-blue-300 font-semibold tracking-widest uppercase">Para Medical College</p>
                </div>
              </div>
              <p className="text-sm text-blue-300 leading-relaxed mb-5">
                Empowering future healthcare professionals through quality education, practical training and compassionate care.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0D8A6A] transition"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-blue-300 hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Courses</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white text-sm font-semibold">ANM</p>
                  <p className="text-blue-300 text-xs">Auxiliary Nurse Midwife</p>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">B.Sc Nursing</p>
                  <p className="text-blue-300 text-xs">Bachelor of Science in Nursing</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-blue-300">
                  <Phone className="w-4 h-4 text-[#4DD9AC] mt-0.5 flex-shrink-0" />
                  +91 1234567890
                </li>
                <li className="flex items-start gap-2 text-sm text-blue-300">
                  <Mail className="w-4 h-4 text-[#4DD9AC] mt-0.5 flex-shrink-0" />
                  info@asthapmcollege.edu.in
                </li>
                <li className="flex items-start gap-2 text-sm text-blue-300">
                  <MapPin className="w-4 h-4 text-[#4DD9AC] mt-0.5 flex-shrink-0" />
                  Astha Para Medical College, Your City, State – 000000
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-blue-400">
              © 2026 Astha Para Medical College. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-xs text-blue-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
      {showEnquiry && (
        <EnquiryForm
          onClose={() => setShowEnquiry(false)}
          defaultCourse={enquiryCourse}
        />
      )}
    </div>
  );
}