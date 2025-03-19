
import { useEffect, useRef } from "react";
import { 
  BookOpenCheck, 
  Gift, 
  RefreshCw, 
  Heart, 
  ListTodo, 
  MessageCircle, 
  User, 
  Search 
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureProps) => (
  <div 
    className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] reveal-bottom"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 text-primary">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
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

  const features = [
    {
      icon: <BookOpenCheck className="h-6 w-6" />,
      title: "Sell Your Books",
      description: "List and sell your books to readers who will appreciate them, and make some extra cash.",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Give Away Books",
      description: "Clear your shelves by giving books to those who are excited to read them.",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Exchange Books",
      description: "Swap your books with others in the community to discover new stories.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Book Donations",
      description: "Donate books to libraries, schools, and organizations that need them.",
    },
    {
      icon: <ListTodo className="h-6 w-6" />,
      title: "Wishlist & Requests",
      description: "Create a wishlist of books you're looking for and get notified when they become available.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Chat System",
      description: "Communicate directly with other users to negotiate prices or arrange exchanges.",
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "User Profiles",
      description: "Build your profile to showcase your book collection and reading preferences.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Filters & Categories",
      description: "Easily find books by genre, condition, price range, and more with our filtering system.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold reveal-bottom">Everything You Need</h2>
          <p className="text-muted-foreground mt-4 reveal-bottom" style={{ transitionDelay: "100ms" }}>
            Our platform offers a comprehensive set of features to connect book lovers and make sharing literature easier than ever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
