import Script from 'next/script'

export function SEOStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prakriti Aircon",
    "description": "Professional HVAC contractor specializing in ducting work, GI sheet fabrication, Symphony evaporative coolers, HVAC fans, HVLS fans, duct coolers, industrial coolers, exhaust fans, and complete air conditioning solutions in Indore.",
    "url": "https://prakritiairconditioner.com",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates"
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HVAC Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HVAC Ducting Installation",
            "description": "Professional ductwork installation using high-quality GI sheets and materials for optimal air distribution."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Symphony Evaporative Coolers",
            "description": "Installation and maintenance of Symphony brand evaporative cooling systems for energy-efficient cooling."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Fan Systems",
            "description": "Heavy-duty industrial fans for warehouses, factories, and commercial ventilation applications."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HVAC Fans & Duct Coolers",
            "description": "High-performance HVAC fans and duct coolers for efficient air circulation and temperature control."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HVLS Fans Installation",
            "description": "High Volume Low Speed fans for large industrial spaces, warehouses, and commercial facilities."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exhaust Fan Systems",
            "description": "Industrial exhaust fans for smoke extraction, ventilation, and air quality management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GI Sheet Fabrication",
            "description": "Custom galvanized iron sheet fabrication for ductwork, ventilation systems, and HVAC components."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Air Conditioning",
            "description": "Complete commercial HVAC solutions including VRF systems, chillers, and central air conditioning."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HVAC Maintenance & Repair",
            "description": "Preventive maintenance and emergency repair services for all types of HVAC systems."
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City", 
        "name": "Delhi"
      },
      {
        "@type": "City",
        "name": "Bangalore"
      },
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "City",
        "name": "Pune"
      },
      {
        "@type": "City",
        "name": "Indore"
      },
      {
        "@type": "State",
        "name": "Madhya Pradesh"
      }
    ],
    "knowsAbout": [
      "HVAC Ducting",
      "GI Sheet Fabrication", 
      "Symphony Coolers",
      "Industrial Fans",
      "HVAC Fans",
      "Duct Coolers",
      "HVLS Fans",
      "Exhaust Fans",
      "Industrial Coolers",
      "Air Conditioning",
      "Ventilation Systems",
      "Evaporative Cooling",
      "Commercial HVAC",
      "Residential AC",
      "Duct Installation",
      "HVAC Maintenance",
      "Energy Efficient Cooling",
      "Clean Room Systems",
      "Data Center Cooling",
      "Hospital HVAC",
      "Industrial Ventilation",
      "High Volume Low Speed Fans",
      "Smoke Extraction Systems",
      "Air Circulation Systems",
      "Temperature Control Systems",
      "Warehouse Cooling",
      "Factory Ventilation",
      "Commercial Kitchen Exhaust",
      "Parking Garage Ventilation",
      "Indore HVAC Services"
    ],
    "sameAs": [
      "https://www.facebook.com/prakritiairconditioner",
      "https://www.linkedin.com/company/prakritiairconditioner",
      "https://www.instagram.com/prakritiairconditioner"
    ]
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of HVAC ducting services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive HVAC ducting services including design, fabrication, and installation of rectangular ducts, round ducts, spiral ducts, and flexible ducts using high-quality GI sheets and materials."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you install Symphony evaporative coolers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are authorized dealers and installers of Symphony evaporative coolers. We provide installation, maintenance, and repair services for all Symphony cooling products including desert coolers, air coolers, and industrial cooling systems."
        }
      },
      {
        "@type": "Question",
        "name": "What is GI sheet and why is it used in HVAC systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GI (Galvanized Iron) sheets are zinc-coated steel sheets that provide excellent corrosion resistance and durability. They are widely used in HVAC ductwork fabrication because they resist rust, have good structural strength, and are cost-effective for air distribution systems."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide industrial fan installation services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in industrial fan systems including exhaust fans, ventilation fans, centrifugal fans, and axial fans for warehouses, factories, commercial kitchens, and industrial facilities."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for HVAC services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide HVAC services across major cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, and Indore, covering both commercial and residential projects within a 50km radius of each service area."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide HVLS fans and industrial cooling solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in HVLS (High Volume Low Speed) fans, industrial coolers, duct coolers, and exhaust fan systems for large warehouses, factories, and commercial spaces. Our solutions provide efficient air circulation and temperature control."
        }
      },
      {
        "@type": "Question",
        "name": "What types of HVAC fans and cooling systems do you install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We install various HVAC fans including exhaust fans, industrial fans, HVLS fans, duct coolers, evaporative coolers, and complete ventilation systems for optimal air circulation and cooling efficiency."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="structured-data-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
    </>
  )
}