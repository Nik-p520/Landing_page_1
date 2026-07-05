import { useState, useEffect, useRef } from 'react';
import {  CheckCircle, AlertCircle, Loader2, GraduationCap } from 'lucide-react';


interface Props {
  onClose: () => void;
  defaultCourse?: 'ANM' | 'B.Sc Nursing' | '';
}

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  course: 'ANM' | 'B.Sc Nursing' | '';
  city: string;
  message: string;
}

const EMPTY: FormData = {
  full_name: '',
  email: '',
  phone: '',
  course: '',
  city: '',
  message: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function EnquiryForm({ onClose, defaultCourse = '' }: Props) {
  const [form, setForm] = useState<FormData>({ ...EMPTY, course: defaultCourse });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');
  const backdropRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.full_name.trim()) next.full_name = 'Full name is required.';
    if (!form.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.phone.trim()) {
      next.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      next.phone = 'Enter a valid phone number.';
    }
    if (!form.course) next.course = 'Please select a course.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setStatus("loading");
  setServerError("");

  // Fake API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Form data console me dekhne ke liye
  console.log("Enquiry Submitted:", form);

  setStatus("success");
};

  

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

   return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        {/* Header */}
        <div className="bg-[#0D2B5E] rounded-t-2xl px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-extrabold text-lg leading-tight">Admission Enquiry Form</h2>
              <p className="text-blue-200 text-xs mt-0.5">Astha Para Medical College – 2026–27</p>
            </div>
          </div>
          <button
  onClick={() => {
    setStatus("idle");
    setForm({ ...EMPTY, course: defaultCourse });
    setErrors({});
    onClose();
  }}
  className="bg-[#0D8A6A] text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-[#0a7059] transition"
>
  Close
</button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#EAF6F1] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#0D8A6A]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0D2B5E] mb-2">Enquiry Submitted!</h3>
              <p className="text-gray-500 text-sm mb-6">
                Thank you, <span className="font-semibold text-[#0D2B5E]">{form.full_name}</span>! Our admissions team
                will contact you shortly on <span className="font-semibold text-[#0D2B5E]">{form.phone}</span>.
              </p>
              <button
                onClick={onClose}
                className="bg-[#0D8A6A] text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-[#0a7059] transition"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {serverError && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {serverError}
                </div>
              )}

              {/* Full Name */}
              <Field label="Full Name" error={errors.full_name} required>
                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={input(!!errors.full_name)}
                />
              </Field>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email Address" error={errors.email} required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={input(!!errors.email)}
                  />
                </Field>
                <Field label="Phone Number" error={errors.phone} required>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={input(!!errors.phone)}
                  />
                </Field>
              </div>

              {/* Course */}
              <Field label="Course Interested In" error={errors.course} required>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className={input(!!errors.course)}
                >
                  <option value="">Select a course</option>
                  <option value="ANM">ANM – Auxiliary Nurse Midwife (2 Years)</option>
                  <option value="B.Sc Nursing">B.Sc Nursing – Bachelor of Science in Nursing (4 Years)</option>
                </select>
              </Field>

              {/* City */}
              <Field label="City / State" error={errors.city}>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Your city or state"
                  className={input(false)}
                />
              </Field>

              {/* Message */}
              <Field label="Message / Questions" error={errors.message}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any specific questions or details you'd like to share..."
                  rows={3}
                  className={`${input(false)} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-[#0D8A6A] hover:bg-[#0a7059] text-white font-bold py-3 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  'Submit Enquiry'
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Our admissions team will reach out to you within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function input(hasError: boolean) {
  return `w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none transition focus:ring-2 ${
    hasError
      ? 'border-red-400 focus:ring-red-200 bg-red-50'
      : 'border-gray-200 focus:border-[#0D8A6A] focus:ring-[#0D8A6A]/20 bg-white'
  }`;
}
