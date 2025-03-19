
import { useState } from "react";
import { Heart, MessageSquare, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type BookType = {
  id: string;
  title: string;
  author: string;
  cover: string;
  type: "sell" | "exchange" | "donate" | "wishlist";
  price?: number;
  condition?: string;
  category?: string;
  liked?: boolean;
};

interface BookCardProps {
  book: BookType;
  variant?: "default" | "horizontal";
}

const BookCard = ({ book, variant = "default" }: BookCardProps) => {
  const [isLiked, setIsLiked] = useState(book.liked || false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "sell":
        return "bg-blue-100 text-blue-800";
      case "exchange":
        return "bg-purple-100 text-purple-800";
      case "donate":
        return "bg-green-100 text-green-800";
      case "wishlist":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "sell":
        return "For Sale";
      case "exchange":
        return "Exchange";
      case "donate":
        return "Donation";
      case "wishlist":
        return "Wanted";
      default:
        return type;
    }
  };

  if (variant === "horizontal") {
    return (
      <div 
        className="group flex bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-1/3 min-w-[120px]">
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
          <img 
            src={book.cover} 
            alt={book.title} 
            className="w-full h-full object-cover aspect-[2/3] transition-transform duration-500 group-hover:scale-105"
          />
          <Badge 
            className={`absolute top-2 left-2 ${getTypeColor(book.type)}`}
            variant="outline"
          >
            {getTypeLabel(book.type)}
          </Badge>
        </div>
        
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex-1">
            <h3 className="font-medium text-base md:text-lg line-clamp-1">{book.title}</h3>
            <p className="text-muted-foreground text-sm mb-2">{book.author}</p>
            {book.type === "sell" && book.price && (
              <p className="font-semibold text-base">${book.price.toFixed(2)}</p>
            )}
            {book.condition && (
              <p className="text-sm text-muted-foreground mt-1">
                <span className="font-medium">Condition:</span> {book.condition}
              </p>
            )}
          </div>
          
          <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={handleLike}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              variant="default" 
              size="sm"
              className="text-xs h-8"
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
        <img 
          src={book.cover} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full p-3 flex justify-between">
          <Badge 
            className={`${getTypeColor(book.type)}`}
            variant="outline"
          >
            {getTypeLabel(book.type)}
          </Badge>
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
        
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform transition-transform duration-300 ${isHovered ? "translate-y-0" : "translate-y-full"}`}>
          <div className="flex justify-between items-center">
            <div>
              {book.type === "sell" && book.price && (
                <span className="text-white font-semibold">${book.price.toFixed(2)}</span>
              )}
              {book.condition && (
                <span className="text-white/80 text-sm block">
                  {book.condition}
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-base md:text-lg line-clamp-1">{book.title}</h3>
        <p className="text-muted-foreground text-sm">{book.author}</p>
        
        <div className="mt-3 flex justify-between items-center">
          {book.category && (
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
              {book.category}
            </span>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs flex items-center gap-1 -mr-2 h-8"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Details</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
