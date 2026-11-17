import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../components/data/blog";
import Section from "../components/Section";

export default function Blogpage() {
  return (
    <div className="min-h-screen bg-app text-main py-24 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl rounded-3xl border border-secondary/10 bg-card/90 p-8 shadow-xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-primary-dark">Blog</p>
          <h1 className="mt-4 text-4xl font-extrabold text-main sm:text-5xl">
            All posts
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">
            Explore my latest writing on design, development, and building polished portfolio experiences.
          </p>
        </div>

        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group overflow-hidden rounded-3xl border border-secondary/10 bg-card p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">Article</span>
                </div>
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-44 w-full rounded-3xl object-cover"
                  />
                ) : (
                  <div className="h-44 rounded-3xl bg-secondary/10" />
                )}
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-main transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-7 text-muted">{post.description}</p>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
                >
                  Read more
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
