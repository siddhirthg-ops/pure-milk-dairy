import businessLogo from "@/assets/businesslogo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={businessLogo}
              alt="Pure Milk Dairy Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-display text-xl font-bold text-background">
              Pure Milk
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Products", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const element = document.querySelector(`#${link.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-background/70 hover:text-background transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-background/60">
            © {currentYear} Pure Milk Dairy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;