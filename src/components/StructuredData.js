export default function StructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Madhav Tech Labs",
      "url": "https://www.madhavtechlabs.com",
      "logo": "https://www.madhavtechlabs.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/MadhavTechLabs",
        "https://www.twitter.com/MadhavTechLabs",
        "https://www.linkedin.com/company/madhav-tech-labs",
        "https://www.instagram.com/madhavtechlabs"
      ],
      "description": "Madhav Tech Labs creates cutting-edge digital experiences, from stunning websites to powerful mobile apps. Transform your business with our innovative tech solutions.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "Digital City",
        "addressRegion": "TC",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-234-567-8900",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "employee": {
        "@type": "Person",
        "name": "Madhav",
        "jobTitle": "Founder & CEO",
        "url": "https://www.madhavtechlabs.com/about",
        "image": "https://www.madhavtechlabs.com/madhav-image.jpg",
        "sameAs": "https://www.linkedin.com/in/madhav-tech"
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    );
  }
  