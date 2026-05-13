"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Loader from "@/components/Loader.jsx";
import MouseGlow from "@/components/MouseGlow";

import {
  ArrowRight,
  Factory,
  ShieldCheck,
  Globe,
  Milk,
} from "lucide-react";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP Hero Animation
    gsap.fromTo(
      ".hero-title",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".hero-text",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.4,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".hero-image",
      {
        scale: 0.8,
        opacity: 0,
        rotate: -4,
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1.6,
        ease: "power4.out",
      }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <Loader />
      <MouseGlow />
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-[0.2em]">
            AMRIT FOOD
          </h1>

          <div className="hidden md:flex items-center gap-10 text-sm text-white/60">
            <a href="#story" className="hover:text-white transition">
              Story
            </a>

            <a href="#products" className="hover:text-white transition">
              Products
            </a>

            <a href="#impact" className="hover:text-white transition">
              Impact
            </a>

            <a href="#future" className="hover:text-white transition">
              Future
            </a>
          </div>

          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition">
            Explore
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=2070&auto=format&fit=crop"
            alt="Fresh milk being poured for Amrit Food"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover opacity-30 scale-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black"></div>
        <div className="absolute top-[-300px] left-[-200px] w-[700px] h-[700px] bg-white/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-white/5 blur-[180px] rounded-full"></div>

        {/* Glow */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-white/10 blur-[160px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 md:pt-40 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="hero-text uppercase tracking-[0.4em] text-white/40 mb-5">
              India’s Premium Dairy Ecosystem
            </p>

            <h1 className="hero-title text-6xl md:text-8xl font-bold leading-none">
              Crafted
              <span className="block text-white/50">
                With Purity
              </span>
            </h1>

            <p className="hero-text mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
              Amrit Food represents trust, nourishment, large-scale food
              excellence, and next-generation dairy innovation shaping millions
              of experiences across India.
            </p>

            <div className="hero-text flex gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition">
                Explore Brand
                <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-image relative">
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>

            <Image
              src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1974&auto=format&fit=crop"
              alt="Premium dairy product presentation"
              width={900}
              height={1100}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative rounded-[40px] border border-white/10 shadow-[0_20px_80px_rgba(255,255,255,0.15)]"
            />

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-10 -left-10 backdrop-blur-2xl bg-white/10 border border-white/10 rounded-[30px] p-6 w-[240px]"
            >
              <p className="text-5xl font-bold">32+</p>
              <p className="text-white/60 mt-2">
                Years Of Food Excellence
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-40 border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.4em] text-white/40 mb-10">
            India’s Food Ecosystem
          </p>

          <h2 className="text-6xl md:text-8xl font-bold leading-none max-w-6xl">
            From Cafés
            <span className="block text-white/40">
              To Families.
            </span>

            <span className="block mt-8">
              Amrit Food Powers
            </span>

            <span className="block text-white/40">
              Millions Of Experiences.
            </span>
          </h2>

          <p className="mt-14 text-white/60 text-xl leading-relaxed max-w-3xl">
            Quietly supporting restaurants, cafés, food businesses,
            institutions, and homes through premium dairy innovation,
            scalable manufacturing, and uncompromising quality.
          </p>
        </div>
      </section>

      <section className="py-14 border-b border-white/10">
        <div className="marquee">
          <div className="marquee-track text-5xl md:text-7xl font-bold uppercase text-white/10">
            <span>Premium Dairy</span>
            <span>Food Innovation</span>
            <span>Industrial Excellence</span>
            <span>Nationwide Distribution</span>
            <span>Quality Manufacturing</span>

            <span>Premium Dairy</span>
            <span>Food Innovation</span>
            <span>Industrial Excellence</span>
            <span>Nationwide Distribution</span>
            <span>Quality Manufacturing</span>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-white/40 mb-5">
            Legacy
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            A Brand Built On Generations Of Trust
          </h2>

          <p className="mt-8 text-white/70 text-lg leading-relaxed">
            Combining modern manufacturing with premium dairy innovation,
            Amrit Food powers cafés, restaurants, families, and food businesses
            across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/amritfood1.png"
            alt="Amrit Food facility and product showcase"
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="rounded-[40px]"
          />
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-6 py-32"
      >
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-white/40 mb-4">
            Product Ecosystem
          </p>

          <h2 className="text-5xl font-bold">
            Premium Food Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "UHT Milk",
            "Dairy Creams",
            "Flavored Milk",
            "Ice Cream Mixes",
            "Dessert Solutions",
            "Institutional Ingredients",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl hover:bg-white/10 transition duration-500"
            >
              <Milk
                size={42}
                className="mb-6 group-hover:rotate-6 transition"
              />

              <h3 className="text-2xl font-semibold mb-4">
                {item}
              </h3>

              <p className="text-white/60 leading-relaxed">
                Premium-grade food and dairy solutions engineered for
                consistency, scalability, and superior quality.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[40px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=2070&auto=format&fit=crop"
              alt="Large scale dairy manufacturing process"
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="hover:scale-110 transition duration-[3000ms]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-white/40 mb-5">
              Enterprise Scale
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Large Scale Food Manufacturing With Premium Standards
            </h2>

            <p className="mt-8 text-white/60 text-lg leading-relaxed">
              Built with operational precision, advanced infrastructure,
              and modern food technologies that ensure consistency,
              scalability, safety, and premium quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section
        id="impact"
        className="py-32 bg-white text-black"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Factory size={40} />,
              title: "Manufacturing Excellence",
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "Food Safety & Precision",
            },
            {
              icon: <Globe size={40} />,
              title: "Nationwide Distribution",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="bg-black text-white p-10 rounded-[35px]"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-3xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-white/60 leading-relaxed">
                Advanced operations and modern infrastructure delivering
                excellence at national scale.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FUTURE */}
      <section
        id="future"
        className="relative py-40 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-white/40 mb-5">
            Future Vision
          </p>

          <h2 className="text-6xl md:text-7xl font-bold leading-tight">
            Building The Future Of India’s Premium Food Industry
          </h2>

          <p className="mt-10 text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
            Sustainable operations, advanced food technologies, and scalable
            manufacturing designed for the next generation.
          </p>

          <button className="mt-12 px-10 py-5 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            Discover Future
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold">
              AMRIT FOOD
            </h2>

            <p className="mt-5 text-white/50 leading-relaxed">
              Premium dairy innovation and food manufacturing
              powering India’s evolving food ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-white/50">
              <li>About</li>
              <li>Infrastructure</li>
              <li>Quality</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Products
            </h3>

            <ul className="space-y-3 text-white/50">
              <li>UHT Milk</li>
              <li>Dairy Creams</li>
              <li>Flavored Milk</li>
              <li>Desserts</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Connect
            </h3>

            <ul className="space-y-3 text-white/50">
              <li>Contact</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Email</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-white/40 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Amrit Food. All rights reserved.</p>

          <p>Crafted With Excellence.</p>
        </div>
      </footer>
    </main>
  );
}
