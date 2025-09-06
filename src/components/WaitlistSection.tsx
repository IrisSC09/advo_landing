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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({
          name: formData.name,
          email: formData.email,
          causes: formData.causes
        });

      if (error) throw error;

      toast({
        title: "Welcome to the movement! 🚀",
        description: "You've been added to our waitlist. Get ready to turn passion into power!"
      });
      
      setFormData({ name: "", email: "", causes: "" });
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error joining the waitlist. Please try again.",
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
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${waitlistBackground})`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to turn passion into <span className="neon-glow">power?</span>
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light">
          Join a movement of young activists who are done with performative politics
          and ready for real change.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="bg-black/60 p-8 rounded-2xl neon-border">
            <h3 className="text-2xl font-bold mb-2 neon-glow">Join the Waitlist</h3>
            <p className="text-orange-500 mb-6">Be the first to turn your passion into powerful action</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                disabled={isSubmitting}
              />
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                disabled={isSubmitting}
              />
              <Input
                type="text"
                placeholder="Causes you care about (optional)"
                value={formData.causes}
                onChange={(e) => handleInputChange("causes", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                className="w-full neon-button text-white font-semibold py-4 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Start now!"}
              </Button>
            </form>
            
            <p className="text-orange-500 mt-4 text-sm">
              For future changemakers. Launching Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;