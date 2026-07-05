/**
 * SEO Optimization Utilities for Sri Anand Hospital, Anantapur
 * Formulates structured LocalBusiness & MedicalBusiness JSON-LD schemas
 * and manages page-specific titles and meta description tags.
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}

export const SEO_DATA: Record<string, PageSEO> = {
  home: {
    title: "Best Orthopedic & Multi-Specialty Hospital in Anantapur | Sri Anand Hospital",
    description: "Sri Anand Hospital in Anantapur is the leading 50-bedded multi-speciality hospital specializing in advanced orthopedics, complex trauma care, knee & hip joint replacement, and sports medicine under Dr. M. Anand. Emergency 24/7 near RTC Bus Stand.",
    keywords: [
      "best orthopedic hospital in anantapur",
      "sri anand hospital anantapur",
      "top orthopedic doctor in anantapur",
      "joint replacement surgeon anantapur",
      "best multi specialty hospital near rtc bus stand",
      "fracture and accident trauma care anantapur",
      "dr anand orthopedic surgeon anantapur",
      "knee replacement surgery anantapur",
      "arthroscopy surgery anantapur",
      "emergency hospital in anantapur 24/7"
    ],
    canonical: "https://www.srianandhospital.in/"
  },
  about: {
    title: "About Dr. M. Anand & Sri Anand Hospital Anantapur | 19+ Years of Excellence",
    description: "Learn about the legacy of Sri Anand Hospital, established in 2007 by leading Orthopedic Specialist Dr. Mude Anand Babu Naik. Discover our journey from a small clinic to a renowned 50-bedded multi-speciality hospital in Anantapur.",
    keywords: [
      "dr mude anand babu naik",
      "dr m anand orthopedician anantapur",
      "sri anand hospital history",
      "best bone specialist doctor in anantapur",
      "about sri anand hospital anantapur",
      "svmc tirupati orthopedic doctors",
      "kmc kurnool orthopedic postgraduates"
    ],
    canonical: "https://www.srianandhospital.in/about"
  },
  services: {
    title: "Orthopedics & Multi-Specialty Services in Anantapur | Joint & Trauma Care",
    description: "Explore world-class orthopedic services at Sri Anand Hospital Anantapur. Specialized treatments for Bones, Joints, Ligaments, Muscles, and Tendons. High-success Joint Replacements, Arthroscopy, Pediatric Orthopedics, and 24/7 Trauma Care.",
    keywords: [
      "orthopedic services in anantapur",
      "knee joint pain treatment anantapur",
      "sports injury rehabilitation anantapur",
      "arthroscopy surgeries anantapur",
      "pediatric orthopedics anantapur",
      "ligament tear surgery doctor anantapur",
      "hip replacement surgery anantapur"
    ],
    canonical: "https://www.srianandhospital.in/services"
  },
  doctors: {
    title: "Our Expert Doctors & Surgeons in Anantapur | Sri Anand Hospital",
    description: "Meet the top medical specialists at Sri Anand Hospital, Anantapur. Led by Dr. Mude Anand Babu Naik (Managing Director), our team includes expert Neurosurgeons, General Surgeons, Urologists, Plastic Surgeons, and Physiotherapists.",
    keywords: [
      "best doctors in anantapur",
      "neurosurgeon in anantapur",
      "plastic surgeon in anantapur",
      "urologist in anantapur",
      "general surgeon in anantapur",
      "sri anand hospital doctor team",
      "top surgeons in anantapur"
    ],
    canonical: "https://www.srianandhospital.in/doctors"
  },
  contact: {
    title: "Contact Sri Anand Hospital Anantapur | Book Appointment & Emergency Helpline",
    description: "Get in touch with Sri Anand Hospital near RTC Bus Stand, Anantapur. View contact numbers, emergency 24/7 hotline, interactive Google Map directions, and book an instant appointment with Dr. M. Anand.",
    keywords: [
      "sri anand hospital contact number",
      "sri anand hospital anantapur address",
      "hospital near rtc bus stand anantapur",
      "book appointment orthopedic doctor anantapur",
      "emergency contact hospital anantapur",
      "sri anand hospital phone number"
    ],
    canonical: "https://www.srianandhospital.in/contact"
  }
};

/**
 * Injects structured JSON-LD Schema metadata into the document head
 */
export function injectJSONLDSchema() {
  const schemaId = "sri-anand-hospital-schema";
  let scriptElement = document.getElementById(schemaId) as HTMLScriptElement;

  if (!scriptElement) {
    scriptElement = document.createElement("script");
    scriptElement.id = schemaId;
    scriptElement.type = "application/ld+json";
    document.head.appendChild(scriptElement);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Sri Anand Hospital",
    "alternateName": "Sri Anand Orthopedic & Multi-Specialty Hospital Anantapur",
    "description": "Sri Anand Hospital is a leading 50-bedded multi-speciality hospital in Anantapur. Specializes in advanced orthopedics, joint replacements, complex accident trauma care, and general medical care, directed by Dr. Mude Anand Babu Naik with 19+ years experience.",
    "logo": "https://res.cloudinary.com/dctf5un0g/image/upload/v1777024186/logo.png_ys4iva.png",
    "image": "https://res.cloudinary.com/dctf5un0g/image/upload/v1777024207/hospital.png_qshlpi.png",
    "url": "https://www.srianandhospital.in/",
    "telephone": "+91-6300882019",
    "priceRange": "$$",
    "medicalSpecialty": [
      "Orthopedics",
      "TraumaMedicine",
      "JointReplacement",
      "SurgicalProcedure",
      "SportsMedicine"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near RTC Bus Stand",
      "addressLocality": "Anantapur",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "515001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "14.6893436",
      "longitude": "77.6012148"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6300882019",
      "contactType": "Emergency & Inquiry Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Telugu"]
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Mude Anand Babu Naik",
      "jobTitle": "Managing Director & Orthopedic Specialist",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Sri Venkateswara Medical College (SVMC), Tirupati"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Kurnool Medical College (KMC), Kurnool"
        }
      ]
    }
  };

  scriptElement.textContent = JSON.stringify(structuredData, null, 2);
}

/**
 * Updates dynamic meta tags for SEO purposes on route change
 */
export function updatePageSEO(pageKey: keyof typeof SEO_DATA) {
  const data = SEO_DATA[pageKey];
  if (!data) return;

  // Title
  document.title = data.title;

  // Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute("content", data.description);

  // Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute("content", data.keywords.join(", "));

  // Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", data.canonical);

  // Inject general schema metadata
  injectJSONLDSchema();
}
