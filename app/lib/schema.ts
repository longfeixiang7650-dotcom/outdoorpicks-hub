export function organizationSchema(name: string, url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description,
  };
}

export function softwareSchema(
  name: string,
  category: string,
  ratingValue: number,
  reviewCount: number,
  price: string,
  priceCurrency: string = "USD"
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      ratingCount: reviewCount.toString(),
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
    },
  };
}

export function blogPostSchema(
  headline: string,
  author: string,
  datePublished: string,
  publisherName: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    description,
    publisher: {
      "@type": "Organization",
      name: publisherName,
    },
  };
}

export function webPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
  };
}
