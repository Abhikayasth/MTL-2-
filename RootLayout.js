import React, { useEffect } from 'react';
import './globals.css'; // Ensure this includes your Tailwind CSS configurations.

const spaceGrotesk = {
  fontFamily: "'Space Grotesk', sans-serif",
};

function RootLayout({ children }) {
  // Set document metadata (title and meta tags) manually in React
  useEffect(() => {
    document.title = 'Madhav Tech Labs | Innovative Digital Solutions & Web Development';
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Madhav Tech Labs creates cutting-edge digital experiences, from stunning websites to powerful mobile apps. Transform your business with our innovative tech solutions, expert web development, and digital marketing services.'
      );
    }

    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'web development, mobile apps, UI/UX design, digital solutions, tech innovation, SEO optimization, custom software, cybersecurity, data analytics'
      );
    }

    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Madhav Tech Labs | Transforming Ideas into Digital Realities'
      );
    }

    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute(
        'content',
        'Experience the future of digital solutions with Madhav Tech Labs. We specialize in web development, mobile apps, and innovative tech solutions that drive business growth.'
      );
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute('content', '/og-image.jpg');
    }
  }, []);

  return (
    <div className="scroll-smooth bg-black text-white" style={{ fontFamily: spaceGrotesk.fontFamily }}>
      {children}
    </div>
  );
}

export default RootLayout;
