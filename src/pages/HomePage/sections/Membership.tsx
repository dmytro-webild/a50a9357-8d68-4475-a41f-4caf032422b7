import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { Check } from 'lucide-react';

export default function MembershipSection() {
  const plans = [
    {
      tag: "Individual",
      price: "$150/mo",
      description: "Perfect for individuals looking to play regularly and join club events.",
      features: ["Unlimited court access", "7-day advance booking", "Access to club tournaments", "10% off pro shop"],
    },
    {
      tag: "Family",
      price: "$250/mo",
      description: "Great for couples or families who want to enjoy the club together.",
      features: ["Unlimited court access for 2 adults and children", "7-day advance booking", "Access to family events", "15% off pro shop"],
    },
    {
      tag: "Pro",
      price: "$300/mo",
      description: "For the serious player who wants access to premium coaching and facilities.",
      features: ["All Individual benefits", "14-day advance booking", "2 private lessons per month", "Complimentary locker"],
    },
  ];

  return (
    <section id="membership" data-webild-section="membership" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Tag text="Membership Plans" className="mb-4" />
          <TextAnimation
            text="Join the Club"
            variant="fade-blur"
            tag="h2"
            gradientText={false}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          />
          <p className="text-lg text-accent">
            Choose the membership that fits your lifestyle. Enjoy unlimited court access, priority booking, and exclusive member events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal variant="fade" key={index} delay={index * 0.1}>
              <div className="card p-8 h-full flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-cta/10 text-primary-cta text-sm font-medium mb-4">
                    {plan.tag}
                  </span>
                  <div className="text-4xl font-bold text-foreground mb-2">{plan.price}</div>
                  <p className="text-accent text-sm">{plan.description}</p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary-cta shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button text="Select Plan" variant="primary" className="w-full justify-center" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}