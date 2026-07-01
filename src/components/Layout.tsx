import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarFullscreen from "@/components/ui/NavbarFullscreen";
import FooterBrand from "@/components/sections/footer/FooterBrand";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarFullscreen
                logo="Joe's Coffee"
                navItems={[
                  { name: "Menu", href: "#menu" },
                  { name: "Find Us", href: "#locations" },
                ]}
                ctaButton={{ text: "Order Now", href: "#order" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterBrand
                brand="Joe's Coffee"
                columns={[
                  {
                    items: [
                      { label: "Menu", href: "#menu" },
                      { label: "Hot Drinks", href: "#menu" },
                      { label: "Pastries", href: "#menu" },
                    ],
                  },
                  {
                    items: [
                      { label: "Find Us", href: "#locations" },
                      { label: "Hours", href: "#locations" },
                      { label: "About", href: "#about" },
                    ],
                  },
                  {
                    items: [
                      { label: "Contact", href: "#contact" },
                      { label: "Careers", href: "#careers" },
                      { label: "Gift Cards", href: "#gift-cards" },
                    ],
                  },
                ]}
              />
    </StyleProvider>
  );
}
