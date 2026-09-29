import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import sutureLogo from "../assets/suturelogo.webp";

const WA_TARGET_NUMBER = "919242400119";
const CALL_NUMBER = "+919242400119";

// Official WhatsApp Vector Icon
function RealWhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.507 14.307c-.254-.127-1.503-.742-1.736-.827-.233-.085-.403-.127-.573.127-.17.254-.658.827-.807.997-.148.17-.297.191-.551.064-.254-.127-1.074-.396-2.046-1.263-.757-.675-1.268-1.509-1.417-1.764-.148-.255-.016-.393.111-.519.115-.114.254-.297.382-.446.127-.149.17-.255.255-.425.085-.17.042-.319-.021-.446-.064-.127-.573-1.38-.785-1.89-.207-.497-.417-.43-.573-.438l-.488-.008c-.17 0-.446.064-.679.319-.233.255-.892.871-.892 2.124s.913 2.463 1.04 2.633c.127.17 1.797 2.744 4.354 3.847.608.263 1.083.42 1.454.538.611.194 1.167.167 1.606.101.49-.074 1.503-.615 1.715-1.21.213-.594.213-1.104.149-1.21-.064-.107-.234-.17-.488-.297zm-5.467 6.402c-1.848 0-3.663-.497-5.263-1.442l-.377-.224-3.916 1.027 1.045-3.818-.246-.391c-1.036-1.648-1.583-3.559-1.583-5.521 0-5.656 4.601-10.258 10.262-10.258 2.74 0 5.316 1.067 7.251 3.003 1.936 1.936 3.002 4.512 3.002 7.253 0 5.657-4.602 10.258-10.262 10.258zm8.705-18.966c-2.325-2.264-5.419-3.511-8.71-3.511-6.786 0-12.308 5.522-12.308 12.309 0 2.169.567 4.288 1.646 6.155l-1.748 6.386 6.536-1.714c1.802.983 3.834 1.501 5.874 1.501h.005c6.784 0 12.308-5.522 12.308-12.309 0-3.287-1.28-6.377-3.603-8.705z" />
    </svg>
  );
}

// Call Vector Icon
function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export function FloatingButtons() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    product: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    product: "",
  });

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { name: "", phone: "", product: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
      valid = false;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 7 || cleanPhone.length > 13) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }

    if (!formData.product) {
      newErrors.product = "Please select a product";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    const message =
      `*New Product Inquiry - Sutures Manufacturing Company*\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Phone:* ${formData.countryCode} ${formData.phone.trim()}\n` +
      `*Product Required:* ${formData.product}`;

    const waUrl = `https://api.whatsapp.com/send?phone=${WA_TARGET_NUMBER}&text=${encodeURIComponent(
      message
    )}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="suture-wa-widget"
      className={`fixed bottom-6 right-6 z-[999999] font-sans transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-28 pointer-events-none"
      }`}
    >
      {/* 1. POPUP / COMPACT CARD STATE */}
      {!isMinimized && (
        <div className="flex flex-col items-end gap-2.5 w-[310px] max-w-[90vw]">
          <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 cursor-pointer">
            {/* Top Header */}
            <div
              className="bg-[#25D366] px-3.5 py-2.5 flex items-center gap-2.5"
              onClick={() => setIsFormOpen(true)}
            >
              <div className="w-8 h-8 min-w-[32px] bg-white rounded-full flex items-center justify-center p-0.5 overflow-hidden shadow-sm">
                <img
                  src={sutureLogo}
                  alt="Sutures Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-sm">Chat with us!</span>
            </div>

            {/* DEFAULT COMPACT CARD */}
            {!isFormOpen && (
              <div
                className="p-3.5 flex items-center gap-2.5 bg-white"
                onClick={() => setIsFormOpen(true)}
              >
                <div className="w-9 h-9 min-w-[36px] rounded-full bg-slate-50 flex items-center justify-center p-1 overflow-hidden border border-slate-100">
                  <img
                    src={sutureLogo}
                    alt="Sutures Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13.5px] font-extrabold text-slate-900 truncate leading-tight">
                    Sutures Manufacturing
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                    Online
                  </div>
                </div>
                <div className="border border-slate-300 text-[10px] px-1.5 py-0.5 rounded font-bold text-slate-700">
                  WhatsApp
                </div>
              </div>
            )}

            {/* FORM BODY */}
            {isFormOpen && (
              <div className="p-3.5 bg-white cursor-default">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 min-w-[36px] rounded-full bg-slate-50 flex items-center justify-center p-1 overflow-hidden border border-slate-100">
                    <img
                      src={sutureLogo}
                      alt="Sutures Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-extrabold text-slate-900 truncate leading-tight">
                      Sutures Manufacturing
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                      Online
                    </div>
                  </div>
                  <div className="border border-slate-300 text-[10px] px-1.5 py-0.5 rounded font-bold text-slate-700">
                    WhatsApp
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 leading-snug mb-2.5 font-medium">
                  Form details won't reach us until you send a WhatsApp message!
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div className="mb-1.5">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name*"
                      className={`w-full h-[35px] px-2.5 rounded-lg border text-xs font-semibold text-slate-900 outline-none transition-colors ${
                        errors.name
                          ? "border-red-500"
                          : "border-slate-300 focus:border-[#25D366]"
                      }`}
                    />
                    {errors.name && (
                      <div className="text-red-500 text-[10px] font-semibold mt-0.5">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-1.5">
                    <div className="flex gap-1.5">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-20 h-[35px] px-1 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-800 outline-none cursor-pointer"
                      >
                        <option value="+91">IN +91</option>
                        <option value="+1">US +1</option>
                        <option value="+44">UK +44</option>
                        <option value="+971">UAE +971</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number*"
                        className={`flex-1 h-[35px] px-2.5 rounded-lg border text-xs font-semibold text-slate-900 outline-none transition-colors ${
                          errors.phone
                            ? "border-red-500"
                            : "border-slate-300 focus:border-[#25D366]"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <div className="text-red-500 text-[10px] font-semibold mt-0.5">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  {/* Products Dropdown */}
                  <div className="mb-1.5">
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full h-[35px] px-2.5 rounded-lg border text-xs font-semibold text-slate-900 outline-none bg-white cursor-pointer transition-colors ${
                        errors.product
                          ? "border-red-500"
                          : "border-slate-300 focus:border-[#25D366]"
                      }`}
                    >
                      <option value="">Select Product*</option>
                      <option value="Absorbable Surgical Sutures">
                        Absorbable Surgical Sutures
                      </option>
                      <option value="Surgical Sutures">Surgical Sutures</option>
                      <option value="Surgical Needles">Surgical Needles</option>
                    </select>
                    {errors.product && (
                      <div className="text-red-500 text-[10px] font-semibold mt-0.5">
                        {errors.product}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full h-9 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-lg text-[13px] font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors mt-2"
                  >
                    <span>Inquire on WhatsApp</span>
                    <RealWhatsAppIcon className="w-4 h-4 fill-white" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* ACTION BUTTONS: Call Button + Close Button */}
          <div className="flex items-center justify-end gap-2.5 w-full">
            {/* Call Button */}
            <a
              href={`tel:${CALL_NUMBER}`}
              className="w-11 h-11 min-w-[44px] min-h-[44px] aspect-square rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
              title="Call Us Directly"
            >
              <PhoneIcon className="w-5 h-5 fill-white" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] aspect-square rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              title="Close"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* 2. MINIMIZED PILL STATE: Call Button + WhatsApp Chat Pill */}
      {isMinimized && (
        <div className="flex items-center gap-2.5">
          {/* Call Button */}
          <a
            href={`tel:${CALL_NUMBER}`}
            className="w-11 h-11 min-w-[44px] min-h-[44px] aspect-square rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            title="Call Us Directly"
          >
            <PhoneIcon className="w-5 h-5 fill-white" />
          </a>

          {/* WhatsApp Pill */}
          <div
            onClick={() => {
              setIsMinimized(false);
              setIsFormOpen(true);
            }}
            className="bg-[#25D366] hover:bg-[#20ba56] text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 cursor-pointer shadow-xl transition-transform hover:scale-105"
          >
            <span className="text-[13px] font-bold">Chat with us!</span>
            <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center shadow-sm">
              <RealWhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButtons;