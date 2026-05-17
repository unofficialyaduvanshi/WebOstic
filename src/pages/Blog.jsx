import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Sparkles } from "lucide-react";

// KEEP YOUR FULL ARTICLES ARRAY EXACTLY HERE
const articles = [
  {
    id: "website-cost-india-2026",
    title: "Website Development Cost in India (2026 Price Guide)",
    excerpt:
      "Confused by agencies charging ₹5,000 vs ₹5 Lakhs? We break down the real cost of building a business website in India.",
    category: "Development",
    date: "Jan 9, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1544980919-e17526d4ed0a?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "razorpay-vs-phonepe",
    title: "Razorpay vs PhonePe: Best Payment Gateway for Startups?",
    excerpt:
      "UPI is king. Which payment gateway offers the lowest TDR and fastest settlement for Indian businesses?",
    category: "Fintech",
    date: "Jan 9, 2026",
    readTime: "6 min read",
    image:
      "https://media.istockphoto.com/id/1855314717/photo/two-hands-holding-mobile-phones-transferring-funds-between-accounts-isolated-on-purple.webp?a=1&b=1&s=612x612&w=0&k=20&c=spTckbb8lrvAqdoOe_aQN_oSqZhV6F88Xe-WGZ6y0P0=",
  },

  {
    id: "local-seo-google-maps",
    title: "Rank #1 on Google Maps: Local SEO Guide for Indian Shops",
    excerpt:
      "Learn how local Indian businesses dominate Google Maps and drive more customers using Local SEO.",
    category: "Marketing",
    date: "Jan 8, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=873&auto=format&fit=crop",
  },

  {
    id: "shopify-vs-custom-d2c",
    title: "Shopify vs Custom Code: What’s Best for Indian D2C Brands?",
    excerpt:
      "Compare Shopify vs custom React stores for Indian D2C brands and understand long-term scaling costs.",
    category: "E-commerce",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1676150789916-2c7d1fdda6b9?q=80&w=774&auto=format&fit=crop",
  },

  {
    id: "whatsapp-business-automation",
    title: "Automate Your Sales: The Power of WhatsApp Business API",
    excerpt:
      "Use WhatsApp automation to recover abandoned carts and increase Indian business sales.",
    category: "Marketing",
    date: "Jan 7, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1678329886668-6f44024b9ae6?q=80&w=928&auto=format&fit=crop",
  },

  {
    id: "startup-india-website-benefits",
    title: "Startup India Scheme: How a Website Helps You Get Funding",
    excerpt:
      "Learn why having a professional startup website improves DPIIT recognition and investor trust.",
    category: "Business",
    date: "Jan 7, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/startup/1200/600",
  },

  {
    id: "ondc-explained",
    title: "ONDC Explained: Will It Kill Amazon and Flipkart?",
    excerpt:
      "Understand how ONDC is changing Indian e-commerce and empowering small sellers.",
    category: "E-commerce",
    date: "Jan 6, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1674027392887-751d6396b710?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "instagram-reels-vs-seo",
    title: "Instagram Reels vs. SEO: Where Should Indian Brands Focus?",
    excerpt:
      "Reels create awareness. SEO creates long-term sales. Discover the best marketing mix.",
    category: "Marketing",
    date: "Jan 6, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1519423791119-fef2800aaef7?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "mobile-speed-jio-era",
    title: "Jio Changed Everything: Why Your Site Must Be Mobile-Fast",
    excerpt:
      "Discover why fast-loading mobile websites are essential in India's 4G and 5G era.",
    category: "Development",
    date: "Jan 5, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1603533262601-ce30bda5f45c?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "cod-vs-prepaid-trust",
    title: "Cash on Delivery (COD) vs Prepaid: How to Build Trust Online",
    excerpt:
      "Increase prepaid orders and reduce RTO by adding trust-building elements to your store.",
    category: "E-commerce",
    date: "Jan 4, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1687199127283-2bb87b8a92fc?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "vernacular-seo-india",
    title: "Bharat Goes Digital: Why You Need a Hindi/Regional Website",
    excerpt:
      "Reach India's next billion internet users with regional and vernacular SEO strategies.",
    category: "SEO",
    date: "Jan 9, 2025",
    readTime: "5 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "wordpress-vs-react-india",
    title: "WordPress vs React: The Truth Indian Agencies Won't Tell You",
    excerpt:
      "Security, scalability, and speed comparison between WordPress and React websites.",
    category: "Development",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1560472355-109703aa3edc?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "freelancer-vs-agency",
    title: "Freelancer vs Agency: Who Should Build Your Business Website?",
    excerpt:
      "Understand the pros and cons of hiring freelancers vs professional web agencies.",
    category: "Business",
    date: "Jan 6, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "ai-tools-for-sme",
    title: "5 AI Tools Every Indian SME Needs to Save Lakhs",
    excerpt:
      "Top AI tools for Indian businesses to automate content, design, and customer support.",
    category: "Technology",
    date: "Jan 5, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1737641624486-7846df8528dc?w=500&auto=format&fit=crop&q=60",
  },

  {
    id: "influencer-marketing-roi",
    title: "Influencer Marketing in India: Is It Worth the Hype?",
    excerpt:
      "Micro influencers vs macro influencers — which gives better ROI for Indian brands?",
    category: "Marketing",
    date: "Jan 4, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1646446824387-f3b946d99c13?w=500&auto=format&fit=crop",
  },
];

const Blog = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="pt-28 pb-12 min-h-screen  font-sans relative">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full"></div>
        </div>
        {/* SEO */}
        {/* <Helmet>
          <title>Blog | Webostic - Business & Tech Insights</title>

          <meta
            name="description"
            content="Read the latest insights on Website Development costs in India, SEO strategies, Digital Marketing, and Business Growth."
          />

          <meta
            name="keywords"
            content="web development blog india, digital marketing tips, business growth india, webostic blog"
          />

          <link rel="canonical" href={currentUrl} />

          <meta property="og:title" content="Webostic Blog" />

          <meta
            property="og:description"
            content="Expert guides on Tech, SEO, and Growth."
          />
        </Helmet> */}
        {/* Header */}
        <div className="relative z-10 ">
          <div className="w-full px-0 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div
                className="
          relative
          z-10
          mx-auto
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-sky-400/20
          bg-sky-500/10
          px-5
          py-2.5
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.25em]
          text-cyan-200
          backdrop-blur-xl
        "
              >
                <Sparkles size={14} />
                Blogs
              </div>

              {/* Heading */}
              <h2 className="text-[clamp(1.4rem,3.5vw,2.5rem)] mt-5 font-extrabold tracking-tight text-white">
                The{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  WebOstic{" "}
                </span>
                <span>Insights </span>
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Blog
                </span>
              </h2>

              {/* Description */}
              <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7 mb-5">
                Insights for the Indian Market. We decode Tech, SEO, and
                Business Growth for Desi Entrepreneurs.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Grid */}
        <div className="container mx-auto px-4 pb-24 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles &&
              articles.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 flex flex-col group h-full"
                >
                  {/* Image */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="h-52 overflow-hidden relative block"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

                    <div className="absolute top-4 left-4 bg-cyan-400/10 backdrop-blur-md border border-cyan-400/20 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1">
                      <Tag size={12} />
                      {post.category}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-slate-400 mb-3 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <Link to={`/blog/${post.id}`} className="block mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-white/10">
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-sm font-bold text-cyan-300 hover:text-white transition-colors gap-2"
                      >
                        Read Article
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>{" "}
      </div>
    </HelmetProvider>
  );
};

export default Blog;
