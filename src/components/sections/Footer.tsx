import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "/facebook.png",
      bg: "bg-[rgba(59,89,152,1)]",
      href: "#"
    },
    {
      name: "X",
      icon: "/x.png",
      bg: "bg-black",
      href: "#"
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.png",
      bg: "bg-[rgba(0,119,181,1)]",
      href: "#"
    },
    {
      name: "Instagram",
      icon: "/instagram.png",
      bg: "bg-neutral-800",
      href: "#"
    }
  ];

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Webinars", href: "#webinars" },
        { name: "Career", href: "#career" },
        { name: "Blog", href: "#blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Partners", href: "#partners" },
        { name: "Support portals", href: "#support" },
        { name: "Contact us", href: "#contact" }
      ]
    },
    {
      title: "Policy",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Cookies Policy", href: "#cookies" },
        { name: "Terms and Conditions", href: "#terms" }
      ]
    }
  ];

  return (
    <footer className="bg-[rgba(10,9,25,1)] flex w-full flex-col overflow-hidden items-stretch justify-center px-[70px] py-[77px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1067px] items-center gap-[40px_75px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 w-[323px] my-auto">
          <img
            src="/vontech.png"
            alt="VonTech Group Logo"
            className="aspect-[3.66] object-contain w-[165px] max-w-full"
          />
          <div className="min-h-[50px] w-full mt-[17px]">
            <div className="flex w-full gap-[5px]">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.bg} flex items-center justify-center w-[50px] h-[50px] rounded-[25px] hover:opacity-80 transition-opacity`}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <img
                    src={social.icon}
                    alt={`${social.name} icon`}
                    className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
                  />
                </a>
              ))}
            </div>
          </div>
          <p className="text-white text-base font-medium mt-[17px]">
            VonTech Group is a cloud consulting company
            <br />
            dedicated to helping businesses achieve their
            <br />
            cloud goals with innovative solutions.
          </p>
        </div>
        <nav className="self-stretch flex min-w-60 min-h-[186px] items-stretch gap-[40px_60px] text-xl text-white font-normal tracking-[-0.54px] leading-[1.4] flex-wrap my-auto max-md:max-w-full">
          {footerSections.map((section, index) => (
            <div key={index} className="capitalize">
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-6">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white hover:text-[#FFE21B] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="bg-[rgba(251,251,251,1)] flex min-h-px w-full mt-8 max-md:max-w-full" />
    </footer>
  );
};

export default Footer;
