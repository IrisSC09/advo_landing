import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import waitlistBackground from "@/assets/waitlist-background.jpg";

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    causes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>\"'&]/g, (match) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entities[match];
    });
  };

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sanitize inputs
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedCauses = sanitizeInput(formData.causes);

    // Validation
    if (!sanitizedName || sanitizedName.length < 2) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (at least 2 characters).",
        variant: "destructive"
      });
      return;
    }

    if (!sanitizedEmail || !isValidEmail(sanitizedEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (sanitizedName.length > 100) {
      toast({
        title: "Name Too Long",
        description: "Name must be less than 100 characters.",
        variant: "destructive"
      });
      return;
    }

    if (sanitizedEmail.length > 255) {
      toast({
        title: "Email Too Long",
        description: "Email must be less than 255 characters.",
        variant: "destructive"
      });
      return;
    }

    if (sanitizedCauses.length > 500) {
      toast({
        title: "Causes Too Long",
        description: "Causes must be less than 500 characters.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({
          name: sanitizedName,
          email: sanitizedEmail,
          causes: sanitizedCauses
        });

      if (error) {
        // Handle specific database constraint errors
        if (error.message.includes('valid_email_format')) {
          throw new Error('Please enter a valid email address.');
        }
        if (error.message.includes('valid_name_format')) {
          throw new Error('Please enter a valid name (at least 2 characters).');
        }
        if (error.message.includes('reasonable_field_lengths')) {
          throw new Error('One or more fields exceed maximum length.');
        }
        throw error;
      }

      toast({
        title: "Welcome to the movement! 🚀",
        description: "You've been added to our waitlist. Get ready to turn passion into power!"
      });
      
      setFormData({ name: "", email: "", causes: "" });
    } catch (error: any) {
      console.error('Error submitting to waitlist:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error joining the waitlist. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section 
      ref={sectionRef}
      id="waitlist"
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${waitlistBackground})`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Ready to turn passion into <span className="neon-glow">power?</span>
        </h2>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Join a movement of young activists who are done with performative politics
          and ready for real change.
        </p>
        
        <div className={`max-w-md mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-black/60 p-8 rounded-2xl neon-border card-hover group">
            <h3 className="text-2xl font-bold mb-2 neon-glow">Join the Waitlist</h3>
            <p className="text-orange-500 mb-6 group-hover:text-pink-400 transition-colors duration-300">Be the first to turn your passion into powerful action</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 transition-colors duration-300"
                disabled={isSubmitting}
              />
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 transition-colors duration-300"
                disabled={isSubmitting}
              />
              <Input
                type="text"
                placeholder="Causes you care about (optional)"
                value={formData.causes}
                onChange={(e) => handleInputChange("causes", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 transition-colors duration-300"
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                className="w-full neon-button btn-professional text-white font-semibold py-4 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Start now!"}
              </Button>
            </form>
            
            <p className="text-orange-500 mt-4 text-sm group-hover:text-pink-400 transition-colors duration-300">
              For future changemakers. Launching Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;