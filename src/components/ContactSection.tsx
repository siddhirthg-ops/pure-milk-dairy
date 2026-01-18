import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, ShoppingBag, Handshake } from "lucide-react";
import ownerPhoto from "@/assets/ownerphoto.jpeg";

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

  const handleSubmit = async (e: FormEvent) => {
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
      // First, save to database via API
      // For Vercel, use /api/submit-form, for local dev use full URL if needed
      const apiUrl = import.meta.env.VITE_API_URL || '/api/submit-form';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          inquiryType: inquiryType,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      // If database save successful, also send email notification
      const customerName = formData.name.trim() || "Customer";
      const subject = inquiryType === "order" 
        ? `Order Inquiry from ${customerName}`
        : `Franchise Application from ${customerName}`;
      
      const emailBody = `${inquiryType === "order" ? "Order Details" : "Franchise Application Details"}:\n\n` +
        `Name: ${formData.name.trim()}\n` +
        `Email: ${formData.email.trim()}\n` +
        `Phone: ${formData.phone.trim()}\n\n` +
        `${inquiryType === "order" ? "Order Details" : "Application Details"}:\n${formData.message.trim()}\n\n` +
        `---\nThis inquiry was submitted through the Pure Milk Dairy website and saved to database.`;
      
      const encodedBody = encodeURIComponent(emailBody);
      const encodedSubject = encodeURIComponent(subject);
      const mailtoLink = `mailto:${ownerEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Open email client for notification
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Success!",
        description: "Your inquiry has been saved and your email client opened. Please send the email to complete the notification.",
      });
      
      // Clear form
      setFormData({ name: "", email: "", phone: "", message: "" });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Fallback to email-only if database fails
      try {
        const customerName = formData.name.trim() || "Customer";
        const subject = inquiryType === "order" 
          ? `Order Inquiry from ${customerName}`
          : `Franchise Application from ${customerName}`;
        
        const emailBody = `${inquiryType === "order" ? "Order Details" : "Franchise Application Details"}:\n\n` +
          `Name: ${formData.name.trim()}\n` +
          `Email: ${formData.email.trim()}\n` +
          `Phone: ${formData.phone.trim()}\n\n` +
          `${inquiryType === "order" ? "Order Details" : "Application Details"}:\n${formData.message.trim()}\n\n` +
          `---\nThis inquiry was submitted through the Pure Milk Dairy website.`;
        
        const encodedBody = encodeURIComponent(emailBody);
        const encodedSubject = encodeURIComponent(subject);
        const mailtoLink = `mailto:${ownerEmail}?subject=${encodedSubject}&body=${encodedBody}`;
        
        const link = document.createElement("a");
        link.href = mailtoLink;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast({
          title: "Saved via Email (Database unavailable)",
          description: "Your inquiry was sent via email. Database save failed but email notification was sent.",
        });
        
        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (emailError) {
        toast({
          title: "Error",
          description: "Unable to submit form. Please try again or contact us directly at " + ownerEmail,
          variant: "destructive",
        });
      }
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
            {/* Owner Photo and Name */}
            <div className="flex flex-col items-center text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4 relative"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated">
                  <img
                    src={ownerPhoto}
                    alt="Owner Siddhart Anil Gadhe"
                    className="w-full h-full object-cover object-center"
                    style={{
                      objectPosition: 'center center',
                      transform: 'scale(1.5)',
                      minWidth: '100%',
                      minHeight: '100%',
                    }}
                  />
                </div>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-display text-xl font-bold text-foreground"
              >
                Siddhart Anil Gadhe
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-muted-foreground mt-1"
              >
                Owner
              </motion.p>
            </div>

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