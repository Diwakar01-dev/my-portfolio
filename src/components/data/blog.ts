export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  slug: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Designing a Portfolio with Glassmorphism",
    description:
      "A practical walkthrough for shaping a sleek portfolio style using glassmorphism, subtle shadows, and clean typography.",
    content:
      "Glassmorphism is a great fit for portfolios because it highlights content while keeping the interface airy and modern.\n\nIn this post, I share the exact layout decisions that make a portfolio look elegant: muted backgrounds, soft borders, and polished hover states.\n\nYou’ll also learn how to structure sections and cards so your case studies and blog posts feel consistent with a brand-forward design.",
    date: "2026-05-08",
    slug: "glassmorphism-portfolio-design",
    image: "/images/profile.jpg",
  },
  {
    id: 2,
    title: "Building a Responsive Blog Section in React",
    description:
      "How to create a mobile-first blog section for a portfolio with accessible cards, previews, and smooth navigation.",
    content:
      "A clean blog section gives visitors a quick sense of your ideas and expertise. It should be easy to scan on mobile and polish into a strong first impression.\n\nIn this article, I cover the React components, layout patterns, and small details that make a blog preview feel premium.\n\nFrom card hover states to CTA buttons, every element should support the portfolio’s visual rhythm.",
    date: "2026-04-15",
    slug: "responsive-react-blog-section",
  },
  {
    id: 3,
    title: "Modern Typography for Web Portfolios",
    description:
      "Typography is the foundation of polished web design. Learn how to pair fonts, spacing, and scale for better readability.",
    content:
      "Good typography turns a page from functional to memorable. In a portfolio, it is especially important to create a strong hierarchy and visual flow.\n\nThis post explains when to use display fonts, how to keep paragraphs readable, and why contrast matters in dark mode.\n\nBy tuning line height, letter spacing, and weight, you can create a professional reading experience across every screen.",
    date: "2026-03-26",
    slug: "portfolio-typography-best-practices",
  },
  {
    id: 4,
    title: "SEO-friendly React Pages for Personal Sites",
    description:
      "A beginner-friendly guide to making React pages search friendly while preserving fast load times and clean structure.",
    content:
      "Search engines still reward semantic markup and strong page structure, even for React apps.\n\nIn this guide, I show how to keep blog content readable, use accessible headings, and support clean URLs with routing.\n\nThese tips help your portfolio feel more discoverable and maintainable for future growth.",
    date: "2026-02-10",
    slug: "seo-react-personal-site",
  },
];

export const blogs = blogPosts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}