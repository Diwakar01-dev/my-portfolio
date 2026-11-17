import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogs, getBlogBySlug } from "../components/data/blog";
import Section from "../components/Section";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = useMemo(() => (slug ? getBlogBySlug(slug) : undefined), [slug]);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = blogs.filter((post) => post.slug !== blog.slug).slice(0, 3);

  return ( 
    <div className="min-h-screen bg-app text-main py-24 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_0.9fr]">
        <article className="space-y-8 rounded-3xl border border-secondary/10 bg-card/90 p-8 shadow-xl backdrop-blur-xl">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">Blog post</span>
            </div>
            <h1 className="text-4xl font-extrabold text-main sm:text-5xl">{blog.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-muted">{blog.description}</p>
          </div>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded-[2rem] object-cover shadow-2xl"
            />
          )}

          <div className="space-y-6 text-base leading-8 text-muted">
            {blog.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-secondary/20"
          >
            ← Back to all posts
          </Link>
        </article>

        <aside className="space-y-6 rounded-3xl border border-secondary/10 bg-card/90 p-6 shadow-xl backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary-dark">More posts</p>
            <h2 className="mt-3 text-2xl font-semibold text-main">Continue reading</h2>
          </div>
          <div className="space-y-4">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="block rounded-3xl border border-secondary/10 bg-secondary/5 p-4 transition hover:border-primary/20 hover:bg-secondary/10"
              >
                <h3 className="text-lg font-semibold text-main">{post.title}</h3>
                <p className="mt-1 text-sm text-muted">{post.description}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
