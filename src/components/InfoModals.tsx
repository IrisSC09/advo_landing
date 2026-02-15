import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalTrigger,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface InfoModalProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const InfoModal = ({ trigger, title, children }: InfoModalProps) => {
  return (
    <Modal>
      <ModalTrigger asChild>{trigger}</ModalTrigger>
      <ModalContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <div className="mt-4 text-gray-300 space-y-4">{children}</div>
      </ModalContent>
    </Modal>
  );
};

export const FeaturesModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <InfoModal trigger={trigger} title="Features">
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Smart Bill Analysis
        </h3>
        <p>
          Transform complex legislation into clear, actionable insights. Our AI
          breaks down bills into digestible summaries, highlighting key impacts
          and opportunities for action.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Advocacy Tools
        </h3>
        <p>
          Create compelling campaigns with our suite of tools including petition
          builders, social media templates, and contact management for
          lawmakers.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Youth Network
        </h3>
        <p>
          Connect with like-minded changemakers in your area. Coordinate
          actions, share resources, and amplify your collective voice.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Real-time Updates
        </h3>
        <p>
          Stay informed with instant notifications about bill progress, voting
          schedules, and emerging opportunities to make your voice heard.
        </p>
      </div>
    </div>
  </InfoModal>
);

export const HowItWorksModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <InfoModal trigger={trigger} title="How It Works">
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
          1
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Sign Up & Set Interests
          </h3>
          <p>
            Create your profile and tell us what issues matter most to you -
            from climate action to social justice.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center text-white font-bold">
          2
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Get Smart Alerts
          </h3>
          <p>
            Receive personalized notifications about relevant legislation,
            upcoming votes, and action opportunities.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold">
          3
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Take Action</h3>
          <p>
            Use our tools to contact representatives, organize campaigns, and
            collaborate with other youth activists.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
          4
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Track Impact
          </h3>
          <p>
            See your influence grow with detailed analytics showing how your
            actions contribute to real policy changes.
          </p>
        </div>
      </div>
    </div>
  </InfoModal>
);

export const PrivacyPolicyModal = ({
  trigger,
}: {
  trigger: React.ReactNode;
}) => (
  <InfoModal trigger={trigger} title="Privacy Policy">
    <div className="space-y-4">
      <p className="text-sm text-gray-400">Last updated: January 2025</p>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Information We Collect
        </h3>
        <p>
          We collect information you provide directly, such as your name, email,
          and advocacy interests. We also collect usage data to improve our
          platform.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          How We Use Your Data
        </h3>
        <p>
          Your information is used to personalize your advocacy experience, send
          relevant alerts, and connect you with relevant opportunities and other
          activists.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Data Protection
        </h3>
        <p>
          We implement industry-standard security measures to protect your
          personal information. We never sell your data to third parties.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Your Rights
        </h3>
        <p>
          You have the right to access, update, or delete your personal
          information at any time. Contact us for any privacy-related requests.
        </p>
      </div>
    </div>
  </InfoModal>
);

export const TermsOfServiceModal = ({
  trigger,
}: {
  trigger: React.ReactNode;
}) => (
  <InfoModal trigger={trigger} title="Terms of Service">
    <div className="space-y-4">
      <p className="text-sm text-gray-400">Last updated: January 2025</p>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Platform Use
        </h3>
        <p>
          Advoline is designed for legitimate political advocacy and civic
          engagement. Users must be respectful and follow all applicable laws.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          User Conduct
        </h3>
        <p>
          We prohibit harassment, hate speech, misinformation, and any illegal
          activities. Users are responsible for the accuracy of information they
          share.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Content Policy
        </h3>
        <p>
          All content must be relevant to civic engagement. We reserve the right
          to moderate content that violates our community guidelines.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Service Availability
        </h3>
        <p>
          We strive for 99.9% uptime but cannot guarantee uninterrupted service.
          We're not liable for temporary service interruptions.
        </p>
      </div>
    </div>
  </InfoModal>
);

export const HelpCenterModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <InfoModal trigger={trigger} title="Help Center">
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Getting Started
        </h3>
        <ul className="space-y-2 ml-4">
          <li>• How to set up your advocacy profile</li>
          <li>• Understanding bill summaries and alerts</li>
          <li>• Finding relevant campaigns in your area</li>
          <li>• Connecting with other youth activists</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Common Questions
        </h3>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-white">
              Q: How do I contact my representatives?
            </p>
            <p className="text-sm">
              A: Use our built-in contact tools to find and message your local,
              state, and federal representatives directly through the platform.
            </p>
          </div>
          <div>
            <p className="font-medium text-white">
              Q: Can I create my own campaigns?
            </p>
            <p className="text-sm">
              A: Yes! Use our campaign builder to create petitions, organize
              events, and mobilize your network around issues you care about.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Technical Support
        </h3>
        <p>
          Having technical issues? Check our troubleshooting guide or contact
          our support team for personalized help.
        </p>
      </div>
    </div>
  </InfoModal>
);

export const CommunityModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <InfoModal trigger={trigger} title="Community">
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Join the Movement
        </h3>
        <p>
          Connect with thousands of young changemakers who are transforming
          politics through technology and collective action.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Community Guidelines
        </h3>
        <ul className="space-y-2 ml-4">
          <li>• Be respectful and constructive in all discussions</li>
          <li>• Focus on policy and issues, not personal attacks</li>
          <li>• Share accurate information and cite sources</li>
          <li>• Support fellow activists and celebrate wins together</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Ways to Engage
        </h3>
        <ul className="space-y-2 ml-4">
          <li>• Join local advocacy groups in your area</li>
          <li>• Participate in virtual events and webinars</li>
          <li>• Share your advocacy wins and learn from others</li>
          <li>• Collaborate on campaigns and initiatives</li>
        </ul>
      </div>
    </div>
  </InfoModal>
);

export const ContactUsModal = ({ trigger }: { trigger: React.ReactNode }) => (
  <InfoModal trigger={trigger} title="Contact Us">
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Get in Touch
        </h3>
        <p>
          We'd love to hear from you! Whether you have questions, feedback, or
          want to collaborate, we're here to help.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Email Us
        </h3>
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
          <p className="text-orange-500 font-medium">
            contact.advoline@gmail.com
          </p>
          <p className="text-sm text-gray-400 mt-1">
            We typically respond within 24 hours
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          What to Include
        </h3>
        <ul className="space-y-2 ml-4">
          <li>• Your name and contact information</li>
          <li>• Detailed description of your inquiry</li>
          <li>• Screenshots if reporting a technical issue</li>
          <li>• Any relevant context or background</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 neon-glow">
          Partnership Inquiries
        </h3>
        <p>
          Interested in partnering with Advoline? We work with organizations,
          schools, and advocacy groups to amplify youth voices in politics.
        </p>
      </div>
    </div>
  </InfoModal>
);
