import { motion } from "motion/react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import Tag from "@/components/ui/Tag";

export default function GallerySection() {
  const images = [
    {
      src: "https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1782951920218-dn9n7n03.png",
      title: "Indoor Courts",
      colSpan: "md:col-span-3"
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1782951920219-3sznj2xy.png",
      title: "Outdoor Complex",
      colSpan: "md:col-span-3"
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1782951920220-nisd5a9c.webp",
      title: "Championship Stadium",
      colSpan: "md:col-span-2"
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1782951920221-rb0wtby4.jpg",
      title: "Clay Courts",
      colSpan: "md:col-span-2"
    },
    {
      src: "https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1782951920222-umx1babl.jpg",
      title: "Grass Courts",
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <section data-webild-section="gallery" id="gallery" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <ScrollReveal variant="fade">
            <Tag text="Gallery" />
          </ScrollReveal>
          <TextAnimation
            text="Club Facilities"
            variant="slide-up"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-foreground"
            gradientText={false}
          />
          <ScrollReveal variant="fade" delay={0.1}>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Explore our world-class tennis courts and amenities designed for players of all levels.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {images.map((img, index) => (
            <ScrollReveal variant="fade" 
              key={index} 
              delay={0.1 * index}
              className={`relative group overflow-hidden rounded-lg aspect-video ${img.colSpan}`}
            >
              <ImageOrVideo
                imageSrc={img.src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-medium text-xl">{img.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}