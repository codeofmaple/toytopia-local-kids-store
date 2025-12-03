import React from "react";
import { Mail, User, MessageSquare, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen  pb-24">

            {/* HERO */}
            <header className="py-24 bg-linear-to-br from-pink-500 to-pink-600 rounded-b-[55px] shadow-lg text-center">
                <h1 className="text-5xl font-extrabold text-white tracking-tight">
                    Contact Us 💌
                </h1>
                <p className="text-pink-100 text-lg max-w-xl mx-auto mt-4 leading-relaxed">
                    Have a question, suggestion, or need assistance?
                    We’re always here to help you make your ToyTopia experience amazing.
                </p>
            </header>

            {/* MAIN CONTENT */}
            <section className="lg:max-w-6xl container mx-auto lg:px-6 mt-20 grid lg:grid-cols-2 gap-12">

                {/* LEFT SIDE — CONTACT FORM */}
                <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-pink-100">
                    <h2 className="text-3xl font-bold text-pink-600 mb-6">
                        Send Us a Message
                    </h2>

                    <form className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                <User className="w-4 h-4 text-pink-600" />
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="
                  w-full p-4 rounded-xl 
                  bg-white/60 border border-pink-200 
                  focus:outline-none focus:ring-2 focus:ring-pink-500
                  transition
                "
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                <Mail className="w-4 h-4 text-pink-600" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="
                  w-full p-4 rounded-xl 
                  bg-white/60 border border-pink-200 
                  focus:outline-none focus:ring-2 focus:ring-pink-500
                  transition
                "
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                                <MessageSquare className="w-4 h-4 text-pink-600" />
                                Your Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="How can we help you?"
                                className="
                  w-full p-4 rounded-xl 
                  bg-white/60 border border-pink-200 
                  focus:outline-none focus:ring-2 focus:ring-pink-500
                  transition
                "
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="
                w-full py-4 bg-pink-600 text-white font-semibold 
                rounded-full shadow-md
                hover:bg-pink-700 hover:shadow-lg 
                transition-all
              "
                        >
                            Send Message ✨
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE — CONTACT INFO */}
                <div className="flex flex-col justify-center bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-pink-100">
                    <h2 className="text-3xl font-bold text-pink-600 mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-10">
                        We'd love to hear from you! For any inquiries, partnership opportunities,
                        or platform issues — feel free to reach out using the form,
                        or contact us through the details below.
                    </p>

                    <div className="space-y-6">

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-pink-100 text-pink-600 shadow-inner">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">Phone</p>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-pink-100 text-pink-600 shadow-inner">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">Email</p>
                                <p className="text-gray-600">support@toytopia.com</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-pink-100 text-pink-600 shadow-inner">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">Location</p>
                                <p className="text-gray-600">123 Toy Street, PlayCity, Wonderland</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
