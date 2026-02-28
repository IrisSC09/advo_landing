import { useState } from "react";
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
  const { toast } = useToast();

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
      id="waitlist"
      className="py-12 md:py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${waitlistBackground})`
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          Ready to turn passion into <span className="neon-glow">power?</span>
        </h2>
        <p className="text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 font-light">
          Join a movement of young activists who are ready for real change.
        </p>
        
        <div className="max-w-sm sm:max-w-md mx-auto">
          <div className="glass-panel p-6 md:p-8 rounded-2xl neon-border hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 neon-glow">Join the Waitlist</h3>
            <p className="text-orange-500 mb-6">Be the first to turn your passion into powerful action</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Causes you care about (optional)"
                  value={formData.causes}
                  onChange={(e) => handleInputChange("causes", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div>
              <Button 
                type="submit"
                className="w-full neon-button shimmer text-white font-semibold py-4 text-lg relative overflow-hidden"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Joining...
                  </div>
                ) : (
                  "Start now!"
                )}
              </Button>
            </form>
            
            
            <p className="text-orange-500 mt-4 text-sm text-center">
              For future changemakers. Launching Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;