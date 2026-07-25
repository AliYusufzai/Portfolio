// ContactSection.tsx
"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface Forlgata {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [forlgata, setForlgata] = useState<Forlgata>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!forlgata.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!forlgata.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forlgata.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!forlgata.message.trim()) {
      newErrors.message = "Message is required";
    } else if (forlgata.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForlgata((prev) => ({ ...prev, [name]: value }));
    // clear error for this field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    // TODO: wire up actual submission (API route / email service / form provider)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // placeholder
      setStatus("success");
      setForlgata({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="flex flex-col gap-4 lg:gap-6">
      <h2 className="text-[50px] lg:text-[64px] font-bold text-white leading-none text-center lg:text-left">
        GET IN
        <span className="block text-[50px] lg:text-[64px] font-bold text-[#353334] leading-none text-center lg:text-left">
          TOUCH
        </span>
      </h2>
      <div className="w-full max-w-lg mx-auto lg:mx-0">
        <p className="text-[#c0b7b7] mb-8 text-center lg:text-left">
          Have a project in mind or just want to say hi? Fill out the form
          below.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-[#c0b7b7] mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={forlgata.name}
              onChange={handleChange}
              className={`w-full rounded-lg bg-[#1C1A19] border px-4 py-2.5 text-white placeholder:text-[#6b6362] focus:outline-none focus:ring-2 transition-colors ${
                errors.name
                  ? "border-red-500 focus:ring-red-500/40"
                  : "border-[#2a2828] focus:ring-white/20"
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-[#c0b7b7] mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={forlgata.email}
              onChange={handleChange}
              className={`w-full rounded-lg bg-[#1C1A19] border px-4 py-2.5 text-white placeholder:text-[#6b6362] focus:outline-none focus:ring-2 transition-colors ${
                errors.email
                  ? "border-red-500 focus:ring-red-500/40"
                  : "border-[#2a2828] focus:ring-white/20"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-[#c0b7b7] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={forlgata.message}
              onChange={handleChange}
              className={`w-full rounded-lg bg-[#1C1A19] border px-4 py-2.5 text-white placeholder:text-[#6b6362] focus:outline-none focus:ring-2 transition-colors resize-none ${
                errors.message
                  ? "border-red-500 focus:ring-red-500/40"
                  : "border-[#2a2828] focus:ring-white/20"
              }`}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex items-center justify-center gap-2 rounded-lg bg-white text-[#151312] font-medium px-6 py-2.5 hover:bg-[#e5e5e5] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <FaPaperPlane size={14} />
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
