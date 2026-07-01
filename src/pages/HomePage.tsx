// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import PageTransitionSwirl from "@/components/ui/PageTransitionSwirl";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import MenuSection from './HomePage/sections/Menu';
import FeaturesSection from './HomePage/sections/Features';
import ContactSection from './HomePage/sections/Contact';


import MembershipSection from './HomePage/sections/Membership';
import BookingsSection from './HomePage/sections/Bookings';export default function HomePage(): React.JSX.Element {
  return (
<StyleProvider siteBackground="aurora" heroBackground="none" buttonVariant="bounce">
        <SiteBackgroundSlot />
        <PageTransitionSwirl />
        

        <HeroSection />

        <AboutSection />
      <MembershipSection />
      <BookingsSection />

        <MenuSection />

        <FeaturesSection />

        <ContactSection />

        
      </StyleProvider>
  );
}
