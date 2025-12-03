import React from "react";
import {
    Mail,
    Lock,
    Compass,
    Search,
    User,
    MapPin,
    Key,
    CreditCard,
} from "lucide-react";

const Support = () => {
    // FAQ Data
    const faqs = [
        {
            id: "faq-1",
            icon: User,
            question: "How do I create and manage my ToyTopia account?",
            answer:
                "Click 'Login' to register using Email/Password or Google Authentication. You can update your display name and photo anytime inside the 'My Profile' section.",
        },
        {
            id: "faq-2",
            icon: Lock,
            question: "How does ToyTopia protect my security and privacy?",
            answer:
                "We use Firebase Authentication, encrypted sessions, and strict privacy standards. ToyTopia does not store any sensitive payment information.",
        },
        {
            id: "faq-3",
            icon: Key,
            question: "I forgot my password. How do I recover it?",
            answer:
                "Use the 'Forgot Password' option and enter your email. A secure reset link will be sent to your inbox.",
        },
        {
            id: "faq-4",
            icon: MapPin,
            question: "Is ToyTopia exclusive to local toy shops?",
            answer:
                "Yes — ToyTopia is designed to support local and independent toy sellers, helping families shop within their community.",
        },
        {
            id: "faq-5",
            icon: CreditCard,
            question: "How does the checkout process work?",
            answer:
                "ToyTopia showcases toys from various local sellers. Payments are made directly through each store's own secure checkout system.",
        },
    ];

    // Clean Modern Card
    const SupportLinkCard = ({ icon: Icon, title, description, link }) => (
        <a
            href={link}
            className="group bg-white/90 backdrop-blur-lg p-8 rounded-3xl border border-pink-100 shadow-sm hover:shadow-pink-200
             hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
            <div className="p-3 rounded-2xl bg-linear-to-br from-pink-500 to-pink-600 shadow-sm inline-flex mb-4
             group-hover:scale-105 transition">
                <Icon className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
        </a>
    );

    return (
        <div className="min-h-screen    ">

            {/* HERO */}
            <header className="py-24 bg-linear-to-br from-pink-500 to-pink-600 rounded-b-[55px] shadow-lg">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-extrabold text-white tracking-tight">
                        How Can We Assist You?
                    </h1>
                    <p className="text-pink-100 text-lg max-w-xl mx-auto mt-4 leading-relaxed">
                        Find quick answers, helpful guides, and everything you need to enjoy a smooth ToyTopia experience.
                    </p>

                    {/* Search Box */}
                    <div className="mt-10 flex justify-center">
                        <div className="relative w-full max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-pink-200" />
                            <input
                                type="text"
                                placeholder="Search help topics..."
                                className="w-full p-4 pl-12 rounded-full border border-pink-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* QUICK SUPPORT LINKS */}
            <section className="-mt-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                <SupportLinkCard
                    icon={Mail}
                    title="Contact Support"
                    description="Need direct help? Reach out to our support team."
                    link="/contact"
                />
                <SupportLinkCard
                    icon={Lock}
                    title="Security & Privacy"
                    description="Learn more about account safety and platform security."
                    link="#"
                />
                <SupportLinkCard
                    icon={Compass}
                    title="Getting Started"
                    description="A simple guide for new ToyTopia users."
                    link="#"
                />
            </section>

            {/* FAQ SECTION */}
            <section className="md:max-w-4xl container mx-auto md:px-6 mt-28 mb-24">
                <h2 className="text-4xl font-extrabold text-pink-600 text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="
        bg-white/90 
        backdrop-blur-xl 
        rounded-2xl 
        shadow-sm 
        transition-all 
        overflow-hidden 
        hover:shadow-lg
        hover:shadow-pink-200
      "
                        >
                            {/* Hidden input for collapse */}
                            <input
                                type="checkbox"
                                id={faq.id}
                                defaultChecked={index === 0}
                                className="peer hidden"
                            />

                            {/* TITLE */}
                            <label
                                htmlFor={faq.id}
                                className="
            flex items-start gap-4 cursor-pointer px-6 py-5 
            group 
            border-b border-pink-100
            bg-linear-to-r from-pink-50/60 to-white 
            transition
            peer-hover:bg-pink-50
          "
                            >
                                <div
                                    className="
              p-2 rounded-xl 
              bg-pink-100 
              text-pink-600 
              shadow-inner
              group-hover:bg-pink-200 
              transition
            "
                                >
                                    <faq.icon className="w-5 h-5" />
                                </div>

                                <span className="flex-1 font-semibold text-gray-800 leading-tight text-[17px]">
                                    {faq.question}
                                </span>

                                {/* Chevron Icon */}
                                <svg
                                    className="
                                     w-5 h-5 text-pink-500 
                                     transition-transform duration-300
                                     peer-checked:rotate-180
                                     mt-1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                </svg>
                            </label>

                            {/* ANSWER */}
                            <div
                                className="
                                max-h-0 
                                overflow-hidden 
                                peer-checked:max-h-40 
                                transition-all duration-300 
                                px-6 py-0 
                                peer-checked:py-4
                                bg-white"
                            >
                                <p className="text-gray-600 leading-relaxed text-[15px] pl-1">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* FINAL CTA */}
            <section className="md:max-w-4xl mx-auto md:px-6 text-center pb-24">
                <div className="bg-linear-to-br from-pink-100 to-pink-200 p-10 rounded-3xl border border-pink-200 shadow-inner">
                    <h3 className="text-3xl font-bold text-pink-700 mb-3">
                        Still Need Help?
                    </h3>
                    <p className="text-gray-700 mb-6">
                        If you haven't found what you're looking for, our support team is ready to assist you anytime.
                    </p>
                    <a
                        href="/contact"
                        className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium shadow-md transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Support;
