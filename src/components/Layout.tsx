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
                logo="Grand Slam Club"
                navItems={[
                  { name: "Facilities", href: "#menu" },
                  { name: "Membership", href: "#membership" },
                  { name: "Bookings", href: "#bookings" },
                ]}
                ctaButton={{ text: "Join Now", href: "#membership" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterBrand
                brand="Grand Slam Club"
                columns={[
                  {
                    items: [
                      { label: "Facilities", href: "#menu" },
                      { label: "Courts", href: "#menu" },
                      { label: "Coaching", href: "#menu" },
                    ],
                  },
                  {
                    items: [
                      { label: "Membership", href: "#membership" },
                      { label: "Bookings", href: "#bookings" },
                      { label: "Events", href: "#features" },
                    ],
                  },
                  {
                    items: [
                      { label: "Contact", href: "#contact" },
                      { label: "Pro Shop", href: "#shop" },
                      { label: "Rules", href: "#rules" },
                    ],
                  },
                ]}
              />
    </StyleProvider>
  );
}
