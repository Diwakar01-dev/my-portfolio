import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Section from "../Section";
import { blogs } from "../data/blog";

export default function Blog() {
  const latest = blogs.slice(0, 3);

  return (
    <Section id="blog" eyebrow="Latest updates" title="From the blog">
      <div className="grid gap-6 lg:grid-cols-3">
        {latest.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="group overflow-hidden rounded-3xl border border-secondary/10 bg-card/90 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">Blog</span>
              </div>
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full rounded-3xl object-cover"
                />
              ) : (
                <div className="h-52 rounded-3xl bg-secondary/10" />
              )}
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-main transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="text-sm leading-7 text-muted">{post.description}</p>
              </div>
            </div>
            <Link
              to={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
            >
              Read article
              <span aria-hidden="true">→</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
