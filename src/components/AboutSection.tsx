import { motion } from "framer-motion";
import { Heart, Leaf, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every drop is handled with care, ensuring the highest quality for your family.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No preservatives, no additives. Just pure, fresh dairy from grass-fed cows.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous quality checks at every step to maintain premium standards.",
  },
  {
    icon: Truck,
    title: "Fresh Delivery",
    description: "Daily fresh delivery to your doorstep, maintaining the cold chain.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bringing Nature's Goodness to{" "}
            <span className="text-primary">Your Home</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pure Milk Dairy is a startup committed to delivering farm-fresh, unadulterated
            dairy products directly from our certified farms to your family. We believe in
            transparency, quality, and the traditional goodness of dairy.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            To become the most trusted dairy brand by providing pure, nutritious, and
            affordable dairy products while supporting local farmers and promoting
            sustainable farming practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;