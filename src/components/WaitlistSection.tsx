import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import waitlistBackground from "@/assets/waitlist-background.jpg";

const WaitlistSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [causes, setCauses] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: name.trim(),
            email: email.trim(),
            causes: causes.trim() || null,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Welcome to the movement! 🚀",
        description: "You're now on the waitlist. We'll keep you updated on our progress!",
      });

      // Reset form
      setName("");
      setEmail("");
      setCauses("");
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (setter: (value: string) => void) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setter(e.target.value);
  };

  return (
    <section 
      id="waitlist"
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${waitlistBackground})`
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 fade-in-up animate">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to turn passion into{" "}
                <span className="text-neon-purple neon-glow font-extralight">
                  power?
                </span>
              </h2>
            <p className="text-xl text-gray-300 font-light">
              Join a movement of young activists who are done with performative politics and ready for real change.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-card p-8 hover-lift fade-in-up animate stagger-1">
            <div className="space-y-6">
              <div className="fade-in-up animate stagger-1">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={handleInputChange(setName)}
                  disabled={isSubmitting}
                  className="bg-black/50 border-gray-700 text-white placeholder-gray-400 h-12 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-all"
                />
              </div>
              
              <div className="fade-in-up animate stagger-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  disabled={isSubmitting}
                  className="bg-black/50 border-gray-700 text-white placeholder-gray-400 h-12 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-all"
                />
              </div>
              
              <div className="fade-in-up animate stagger-3">
                <Textarea
                  placeholder="What causes do you care about? (optional)"
                  value={causes}
                  onChange={handleInputChange(setCauses)}
                  disabled={isSubmitting}
                  className="bg-black/50 border-gray-700 text-white placeholder-gray-400 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-all min-h-[100px]"
                />
              </div>
              
              <div className="fade-in-up animate stagger-3">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="modern-button w-full h-14 text-lg font-semibold hover-lift"
                >
                  {isSubmitting ? "Joining the Movement..." : "Thank you for joining!"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
