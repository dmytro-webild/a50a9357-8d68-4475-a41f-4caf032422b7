import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Tag from '@/components/ui/Tag';
import ImageOrVideo from '@/components/ui/ImageOrVideo';

export default function BookingsSection() {
  const steps = [
    {
      tag: "Login",
      title: "Access Your Account",
      subtitle: "Step 1",
      description: "Log in to your member portal using your credentials.",
      imageSrc: "https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1782951920218-dn9n7n03.png",
    },
    {
      tag: "Select",
      title: "Choose Your Court",
      subtitle: "Step 2",
      description: "Browse available courts and times up to 7 days in advance (14 days for Pro members).",
      imageSrc: "https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1782952546030-f2ubckey.jpg?_wi=1",
    },
    {
      tag: "Confirm",
      title: "Secure Your Time",
      subtitle: "Step 3",
      description: "Confirm your booking and receive an email confirmation with your court details.",
      imageSrc: "https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1782951363731-ti1gwsue.jpg",
    },
  ];

  return (
    <section id="bookings" data-webild-section="bookings" className="relative w-full py-24 bg-card">
      <div className="w-content-width mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Tag text="Court Bookings" className="mb-4" />
          <TextAnimation
            text="How to Book a Court"
            variant="fade-blur"
            tag="h2"
            gradientText={false}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          />
          <p className="text-lg text-accent">
            Reserving a court is quick and easy for members. Follow these simple steps to secure your playtime.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <ScrollReveal variant="fade" key={index} delay={index * 0.1}>
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <ImageOrVideo imageSrc={step.imageSrc} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary-cta/10 text-primary-cta text-sm font-medium">
                    {step.subtitle}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-lg text-accent">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}