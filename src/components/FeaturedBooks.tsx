
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard, { BookType } from "./BookCard";

// Sample data
const featuredBooks: BookType[] = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    type: "sell",
    price: 12.99,
    condition: "Like New",
    category: "Fiction"
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    type: "exchange",
    condition: "Good",
    category: "Dystopian"
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    type: "donate",
    condition: "Fair",
    category: "Classic"
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80",
    type: "sell",
    price: 9.99,
    condition: "Very Good",
    category: "Romance"
  },
  {
    id: "5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80",
    type: "wishlist",
    category: "Fantasy"
  },
  {
    id: "6",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    type: "exchange",
    condition: "Good",
    category: "Coming-of-age"
  }
];

const FeaturedBooks = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const scrollContainer = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", name: "All Books" },
    { id: "sell", name: "For Sale" },
    { id: "exchange", name: "Exchange" },
    { id: "donate", name: "Donations" },
    { id: "wishlist", name: "Wishlist" }
  ];

  const filteredBooks = activeCategory === "all" 
    ? featuredBooks 
    : featuredBooks.filter(book => book.type === activeCategory);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const { current } = scrollContainer;
      const scrollAmount = direction === "left" 
        ? -current.clientWidth / 2 
        : current.clientWidth / 2;
        
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Featured Books</h2>
            <p className="text-muted-foreground mt-2">Discover books from our community</p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-1 mb-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="mx-1 whitespace-nowrap"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="relative">
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar"
          >
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="min-w-[250px] max-w-[250px] snap-start"
              >
                <BookCard book={book} />
              </div>
            ))}
          </div>
          
          {/* Gradient Fades */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
