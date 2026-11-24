import { LanguageProvider } from '@/lib/i18n'
import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { StackSection } from '@/components/stack-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function App() {
  return (
    <LanguageProvider>
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
