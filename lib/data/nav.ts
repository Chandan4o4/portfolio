import { Mail, Phone } from "lucide-react";
import type { NavItem, SocialLink } from "@/lib/types";
import {
  GithubIcon,
  LinkedInIcon,
  XIcon,
  WhatsAppIcon,
} from "@/components/ui/brand-icons";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Chandan4o4",
    username: "@Chandan4o4",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chandanknl",
    username: "in/chandanknl",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:chandanknl77@gmail.com",
    username: "chandanknl77@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918708021345",
    username: "+91 87080 21345",
    icon: WhatsAppIcon,
  },
  {
    label: "Phone",
    href: "tel:+918708021345",
    username: "+91 87080 21345",
    icon: Phone,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/chandanknl",
    username: "@chandanknl",
    icon: XIcon,
  },
];
