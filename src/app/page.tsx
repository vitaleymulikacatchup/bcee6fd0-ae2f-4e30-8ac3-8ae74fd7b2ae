"use client"

import { Building2, HelpCircle, Mail, Quote, Rocket, Star, Target, TrendingUp, Users, Zap } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="StartupXYZ"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Build the Future with Us"
          description="We're revolutionizing how startups scale with cutting-edge technology and innovative solutions that drive real results."
          tag="Post-Startup Innovation"
          tagIcon={Rocket}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/6774432/pexels-photo-6774432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Innovative startup team collaborating"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We're a post-startup company that bridges the gap between ambitious ideas and scalable solutions, empowering businesses to achieve sustainable growth through innovative technology and strategic partnerships."
          buttons={[
            { text: "Our Story", href: "team" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Powerful Features"
          description="Everything you need to scale your business efficiently"
          tag="Innovation"
          tagIcon={Zap}
          features={[
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your business performance with our comprehensive analytics dashboard and real-time reporting.",
              imageSrc: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Analytics dashboard interface"
            },
            {
              title: "Seamless Collaboration",
              description: "Enable your team to work together efficiently with integrated collaboration tools and unified workflows.",
              imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Team collaboration workspace"
            },
            {
              title: "Smart Automation",
              description: "Automate repetitive tasks and streamline operations with intelligent workflow automation and AI-powered insights.",
              imageSrc: "https://images.pexels.com/photos/11035393/pexels-photo-11035393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Automation workflow visualization"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Numbers that showcase our growth and success in the post-startup ecosystem"
          tag="Growth"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "150+",
              title: "Companies",
              description: "Businesses accelerated to next-level growth",
              icon: Building2
            },
            {
              id: "2",
              value: "500K+",
              title: "Users",
              description: "Active users across our platform ecosystem",
              icon: Users
            },
            {
              id: "3",
              value: "98%",
              title: "Success Rate",
              description: "Client satisfaction and retention rate",
              icon: Target
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="The visionary leaders driving innovation in the post-startup space"
          tag="Leadership"
          tagIcon={Star}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/sarah-johnson" },
                { icon: "Twitter", url: "https://twitter.com/sarahjohnson" }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              imageSrc: "https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/michael-chen" },
                { icon: "Github", url: "https://github.com/mchen" }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Head of Design",
              imageSrc: "https://images.pexels.com/photos/7652465/pexels-photo-7652465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/emily-rodriguez" },
                { icon: "Globe", url: "https://emilydesigns.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from companies we've helped scale"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "David Kim",
              role: "Founder, TechStart Inc",
              testimonial: "Working with this team transformed our business. Their post-startup expertise and innovative solutions helped us scale efficiently and achieve sustainable growth.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            },
            {
              id: "2",
              name: "Lisa Thompson",
              role: "CEO, GrowthCo",
              testimonial: "The level of strategic insight and technical execution exceeded our expectations. They truly understand the challenges facing post-startup companies.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Thompson"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "CTO, ScaleUp Labs",
              testimonial: "Their innovative approach to solving complex scaling challenges is unmatched. We saw immediate results and long-term value from our partnership.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "4",
              name: "Maria Gonzalez",
              role: "VP Operations, NextGen Solutions",
              testimonial: "The team's deep understanding of post-startup dynamics and their ability to deliver scalable solutions made them an invaluable partner for our growth journey.",
              imageSrc: "https://images.pexels.com/photos/7414112/pexels-photo-7414112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Gonzalez"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our post-startup solutions"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes you different from other consulting firms?",
              content: "We specialize specifically in post-startup companies, understanding the unique challenges of scaling beyond the initial startup phase. Our team combines strategic consulting with hands-on technical implementation."
            },
            {
              id: "2",
              title: "How long does a typical engagement last?",
              content: "Engagements typically range from 3-12 months depending on the scope and complexity of your scaling needs. We work closely with you to define clear milestones and deliverables."
            },
            {
              id: "3",
              title: "Do you work with companies in specific industries?",
              content: "We work across various industries including SaaS, fintech, e-commerce, and deep tech. Our methodology is adaptable to different sectors while maintaining focus on post-startup scaling challenges."
            },
            {
              id: "4",
              title: "What size companies do you typically work with?",
              content: "We focus on companies that have achieved product-market fit and are looking to scale, typically ranging from 10-500 employees with annual revenue between $1M-$50M."
            },
            {
              id: "5",
              title: "How do you measure success?",
              content: "Success metrics are defined collaboratively and typically include revenue growth, operational efficiency improvements, team productivity gains, and achievement of specific scaling milestones."
            },
            {
              id: "6",
              title: "Do you provide ongoing support?",
              content: "Yes, we offer ongoing support packages and can transition to advisory roles post-engagement to ensure sustained growth and continued success of implemented solutions."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Scale Your Post-Startup?"
          description="Join our newsletter to get insights on scaling, growth strategies, and exclusive updates from the post-startup ecosystem."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and updates. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="StartupXYZ"
          columns={[
            {
              items: [
                { label: "About", href: "about" },
                { label: "Features", href: "features" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Privacy Policy", href: "https://startupxyz.com/privacy" },
                { label: "Terms of Service", href: "https://startupxyz.com/terms" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}