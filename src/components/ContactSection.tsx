import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, ShoppingBag, Handshake } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [inquiryType, setInquiryType] = useState<"order" | "franchise">("order");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Owner's email from contact section
  const ownerEmail = "puremilkdairy757@gmail.com";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your inquiry.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Create email subject based on inquiry type
      const customerName = formData.name.trim() || "Customer";
      const subject = inquiryType === "order" 
        ? `Order Inquiry from ${customerName}`
        : `Franchise Application from ${customerName}`;
      
      // Create email body with form data
      const emailBody = `${inquiryType === "order" ? "Order Details" : "Franchise Application Details"}:\n\n` +
        `Name: ${formData.name.trim()}\n` +
        `Email: ${formData.email.trim()}\n` +
        `Phone: ${formData.phone.trim()}\n\n` +
        `${inquiryType === "order" ? "Order Details" : "Application Details"}:\n${formData.message.trim()}\n\n` +
        `---\nThis inquiry was submitted through the Pure Milk Dairy website.`;
      
      // Encode the email body for mailto link
      const encodedBody = encodeURIComponent(emailBody);
      const encodedSubject = encodeURIComponent(subject);
      
      // Create mailto link that opens user's email client
      const mailtoLink = `mailto:${ownerEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Open email client using a hidden anchor to avoid page navigation
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Email Client Opened!",
        description: "Your email client should open with a pre-filled message. Please send it to complete your inquiry.",
      });
      
      // Clear form after a short delay
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 1500);
    } catch (error) {
      console.error("Error opening email client:", error);
      toast({
        title: "Error",
        description: "Unable to open email client. Please try clicking the email address directly or contact us at " + ownerEmail,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-cream">
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
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Experience{" "}
            <span className="text-primary">Pure Goodness?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you want to order our products or explore franchise opportunities,
            we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border"
          >
            {/* Inquiry Type Tabs */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setInquiryType("order")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                  inquiryType === "order"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                Order Now
              </button>
              <button
                onClick={() => setInquiryType("franchise")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                  inquiryType === "franchise"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Handshake className="w-5 h-5" />
                Franchise Partner
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 12345 67890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {inquiryType === "order" ? "Order Details" : "Tell us about yourself"}
                </label>
                <Textarea
                  placeholder={
                    inquiryType === "order"
                      ? "What products would you like to order? Mention quantities and delivery address..."
                      : "Share your background, location, and why you're interested in our franchise..."
                  }
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-5 h-5" />
                {inquiryType === "order" ? "Submit Order Inquiry" : "Apply for Franchise"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 9307325521",
                    href: "tel:+919307325521",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: ownerEmail,
                    href: `mailto:${ownerEmail}`,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Nashik, Maharashtra, India",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-foreground">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Partner With Us */}
            <div className="bg-gradient-hero rounded-2xl p-6 lg:p-8">
              <h4 className="font-display text-xl font-bold text-primary-foreground mb-4">
                Why Partner With Pure Milk?
              </h4>
              <ul className="space-y-3">
                {[
                  "Low investment, high returns",
                  "Complete training & support",
                  "Exclusive territory rights",
                  "Quality products with great margins",
                  "Growing brand with loyal customers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;