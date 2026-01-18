import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Handshake } from "lucide-react";
import heroImage from "@/assets/hero-dairy.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh dairy farm with grazing cows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-gold/20 text-gold rounded-full border border-gold/30">
              100% Pure & Natural
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-milk leading-tight mb-6"
          >
            From Farm to
            <span className="block text-gradient-gold">Your Doorstep</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-milk/80 mb-10 max-w-xl leading-relaxed"
          >
            Experience the goodness of farm-fresh dairy products. Pure, nutritious,
            and delivered with love to nourish your family every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              variant="hero"
              className="gap-2"
              onClick={() => scrollToSection("#contact")}
            >
              <ShoppingBag className="w-5 h-5" />
              Order Now
            </Button>
            <Button
              size="lg"
              variant="heroOutline"
              className="gap-2"
              onClick={() => scrollToSection("#contact")}
            >
              <Handshake className="w-5 h-5" />
              Become Franchise Partner
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-milk/20"
          >
            {[
              { value: "500+", label: "Happy Families" },
              { value: "100%", label: "Pure Milk" },
              { value: "5+", label: "Products" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-milk/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-milk/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-milk/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;