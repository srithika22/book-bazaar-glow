
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Menu, X, Search, Bell, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 transition duration-300 hover:opacity-80"
          >
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-display font-semibold">BookMates</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/explore">Explore</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/donate">Donate</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Messages">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Profile">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="default" className="ml-2">Sign In</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } pt-20`}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          <Link
            to="/"
            className="text-xl font-medium py-2 border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="text-xl font-medium py-2 border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            Explore
          </Link>
          <Link
            to="/donate"
            className="text-xl font-medium py-2 border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            Donate
          </Link>
          <Link
            to="/about"
            className="text-xl font-medium py-2 border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          
          <div className="flex flex-col space-y-4 mt-6">
            <Button variant="outline" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
              <MessageSquare className="mr-2 h-4 w-4" /> Messages
            </Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
              <User className="mr-2 h-4 w-4" /> Profile
            </Button>
            <Button className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
