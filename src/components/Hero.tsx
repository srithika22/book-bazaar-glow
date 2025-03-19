
import { useEffect, useRef } from "react";
import { ArrowRight, BookOpen, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const revealElements = document.querySelectorAll(".reveal-bottom");
    revealElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-background to-background -z-10" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA2IDQgNiA0LTMuNzkxIDQtNnptMi0yNGMwIDIuMjA5IDEuNzkgNCA0IDRzNC0xLjc5MSA0LTQtMi43OTEtNi00LTYtNCAzLjc5MS00IDZ6bTAgNDhjMCAyLjIwOSAxLjc5IDQgNCA0czQtMS43OTEgNC00LTIuNzkxLTYtNC02LTQgMy43OTEtNCA2em0tMjQgMGMwIDIuMjA5IDEuNzkgNCA0IDRzNC0xLjc5MSA0LTQtMi43OTEtNi00LTYtNCAzLjc5MS00IDZ6TTM2IDEwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMi43OTEgNiA0IDYgNC0zLjc5MSA0LTZ6TTEyIDM0YzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMi43OTEgNiA0IDYgNC0zLjc5MSA0LTZ6bTAtMjRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA2IDQgNiA0LTMuNzkxIDQtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat opacity-50 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-primary mb-6 reveal-bottom">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>Books connecting people</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight reveal-bottom" style={{ transitionDelay: "100ms" }}>
              Find your next great 
              <span className="text-primary"> book adventure</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground reveal-bottom" style={{ transitionDelay: "200ms" }}>
              Join a community where books find new homes, stories get shared, and readers connect. Sell, exchange, or donate your books to fellow book lovers.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 reveal-bottom" style={{ transitionDelay: "300ms" }}>
              <Button size="lg" className="group">
                Explore Books
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 reveal-bottom" style={{ transitionDelay: "400ms" }}>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">10k+</span>
                <span className="text-muted-foreground">Books Listed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">5k+</span>
                <span className="text-muted-foreground">Active Users</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">1k+</span>
                <span className="text-muted-foreground">Book Donations</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute w-full h-full rounded-2xl bg-primary/5 rotate-3 transform-gpu"></div>
            <div className="relative z-10 glass rounded-2xl p-6 shadow-lg">
              <div className="aspect-[3/4] w-full rounded-lg overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Collection of books" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm font-medium text-white/80">Featured</div>
                      <h3 className="text-xl font-bold text-white">Community Library</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="icon" variant="secondary" className="rounded-full h-9 w-9">
                        <Users className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full h-9 w-9">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -bottom-8 -right-8 glass rounded-xl p-4 shadow-md animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Daily Exchanges</p>
                    <p className="text-2xl font-bold">128</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 glass rounded-xl p-4 shadow-md animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Books Donated</p>
                    <p className="text-2xl font-bold">1,243</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
