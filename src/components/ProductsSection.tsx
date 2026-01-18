import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import milkImage from "@/assets/product-milk.jpg";
import butterImage from "@/assets/product-butter.jpg";
import gheeImage from "@/assets/product-ghee.jpg";
import paneerImage from "@/assets/product-paneer.jpg";
import buttermilkImage from "@/assets/product-buttermilk.jpg";

const products = [
  {
    name: "Fresh Milk",
    description: "Farm-fresh whole milk, rich in nutrients and natural goodness.",
    image: milkImage,
    variants: "500ml, 1L",
    tag: "Bestseller",
  },
  {
    name: "Pure Butter",
    description: "Creamy, golden butter made from fresh cream. Perfect for cooking.",
    image: butterImage,
    variants: "100g, 500g",
    tag: null,
  },
  {
    name: "Desi Ghee",
    description: "Traditional clarified butter with rich aroma and authentic taste.",
    image: gheeImage,
    variants: "200ml, 500ml, 1L",
    tag: "Premium",
  },
  {
    name: "Fresh Paneer",
    description: "Soft, fresh cottage cheese perfect for your favorite dishes.",
    image: paneerImage,
    variants: "200g, 500g",
    tag: null,
  },
  {
    name: "Buttermilk",
    description: "Refreshing traditional buttermilk with herbs and spices.",
    image: buttermilkImage,
    variants: "250ml, 500ml",
    tag: "Refreshing",
  },
];

const ProductsSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-gold/20 text-accent rounded-full">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Farm Fresh{" "}
            <span className="text-primary">Dairy Products</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our range of pure, unadulterated dairy products made with love
            and traditional methods.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-cream-dark">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-gold text-accent-foreground rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">
                    {product.variants}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1.5"
                    onClick={scrollToContact}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Order
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button variant="default" size="lg" onClick={scrollToContact}>
            Contact Us for Custom Orders
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;