import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/blog";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    category: "Technology",
    author: "Cybrical Tech",
    published: true,
  });

  /* =========================
     GET ALL BLOGS
  ========================= */

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const response = await axios.get(API_URL);

      setBlogs(response.data.data || []);
    } catch (error) {
      console.error("Fetch blogs error:", error);
      alert("Blogs load nahi ho paaye.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* =========================
     FORM CHANGE
  ========================= */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* =========================
     CREATE / UPDATE
  ========================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.slug || !form.content) {
      alert("Title, Slug aur Content required hain.");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, form);

        alert("Blog successfully update ho gaya.");
      } else {
        await axios.post(API_URL, form);

        alert("Blog successfully create ho gaya.");
      }

      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error("Save blog error:", error);

      alert(
        error.response?.data?.message ||
          "Blog save nahi ho paaya."
      );
    }
  };

  /* =========================
     EDIT
  ========================= */

  const handleEdit = (blog) => {
    setEditingId(blog._id);

    setForm({
      title: blog.title || "",
      slug: blog.slug || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      image: blog.image || "",
      category: blog.category || "Technology",
      author: blog.author || "Cybrical Tech",
      published: blog.published ?? true,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================
     DELETE
  ========================= */

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Kya aap is blog ko delete karna chahte hain?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      alert("Blog delete ho gaya.");

      fetchBlogs();
    } catch (error) {
      console.error("Delete blog error:", error);

      alert(
        error.response?.data?.message ||
          "Blog delete nahi ho paaya."
      );
    }
  };

  /* =========================
     RESET FORM
  ========================= */

  const resetForm = () => {
    setEditingId(null);

    setForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      image: "",
      category: "Technology",
      author: "Cybrical Tech",
      published: true,
    });
  };

  /* =========================
     DATE FORMAT
  ========================= */

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.backgroundGlow}></div>

      <div style={styles.container}>

        {/* =========================
            HEADER
        ========================= */}

        <div style={styles.header}>
          <div>
            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              CYBRICAL ADMIN
            </div>

            <h1 style={styles.title}>
              Blog <span>Management</span>
            </h1>

            <p style={styles.subtitle}>
              Create, edit, view and manage your digital content.
            </p>
          </div>

          <button
            onClick={resetForm}
            style={styles.newButton}
          >
            <span>＋</span>
            New Blog
          </button>
        </div>

        {/* =========================
            BLOG FORM
        ========================= */}

        <div style={styles.card}>

          <div style={styles.cardHeader}>
            <div>
              <span style={styles.sectionLabel}>
                {editingId ? "UPDATE CONTENT" : "CREATE CONTENT"}
              </span>

              <h2 style={styles.cardTitle}>
                {editingId
                  ? "Edit Blog"
                  : "Create New Blog"}
              </h2>
            </div>

            {editingId && (
              <div style={styles.editingBadge}>
                Editing Mode
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>

            {/* TITLE */}

            <div style={styles.field}>
              <label style={styles.label}>
                Title <span>*</span>
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                style={inputStyle}
              />
            </div>

            {/* SLUG */}

            <div style={styles.field}>
              <label style={styles.label}>
                Slug <span>*</span>
              </label>

              <input
                type="text"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="example-blog-title"
                style={inputStyle}
              />
            </div>

            {/* CATEGORY + AUTHOR */}

            <div style={styles.twoColumns}>

              <div style={styles.field}>
                <label style={styles.label}>
                  Category
                </label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="Technology">
                    Technology
                  </option>

                  <option value="AI & GenAI">
                    AI & GenAI
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="SEO">
                    SEO
                  </option>

                  <option value="SEO & Growth">
                    SEO & Growth
                  </option>

                  <option value="UI/UX">
                    UI/UX
                  </option>

                  <option value="Automation">
                    Automation
                  </option>
                </select>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Author
                </label>

                <input
                  type="text"
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  placeholder="Author name"
                  style={inputStyle}
                />
              </div>

            </div>

            {/* IMAGE */}

            <div style={styles.field}>
              <label style={styles.label}>
                Image URL
              </label>

              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://..."
                style={inputStyle}
              />
            </div>

            {/* IMAGE PREVIEW */}

            {form.image && (
              <div style={styles.imagePreview}>
                <img
                  src={form.image}
                  alt="Blog preview"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}

            {/* EXCERPT */}

            <div style={styles.field}>
              <label style={styles.label}>
                Excerpt
              </label>

              <textarea
                name="excerpt"
                value={form.excerpt}
                onChange={handleChange}
                placeholder="Short description..."
                rows="3"
                style={textareaStyle}
              />
            </div>

            {/* CONTENT */}

            <div style={styles.field}>
              <label style={styles.label}>
                Content <span>*</span>
              </label>

              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                placeholder="Write complete blog content..."
                rows="12"
                style={textareaStyle}
              />
            </div>

            {/* PUBLISHED */}

            <div style={styles.publishBox}>

              <label style={styles.switchContainer}>

                <input
                  type="checkbox"
                  name="published"
                  checked={form.published}
                  onChange={handleChange}
                  style={styles.checkbox}
                />

                <span style={styles.checkmark}></span>

                <span>
                  <strong style={styles.publishTitle}>
                    Publish this blog
                  </strong>

                  <small style={styles.publishText}>
                    Make this article visible on the website.
                  </small>
                </span>

              </label>

              <div
                style={
                  form.published
                    ? styles.statusPublished
                    : styles.statusDraft
                }
              >
                {form.published
                  ? "● Published"
                  : "○ Draft"}
              </div>

            </div>

            {/* BUTTONS */}

            <div style={styles.formButtons}>

              <button
                type="submit"
                style={styles.saveButton}
              >
                {editingId
                  ? "Update Blog"
                  : "Create Blog"}

                <span>↗</span>
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  style={styles.cancelButton}
                >
                  Cancel Edit
                </button>
              )}

            </div>

          </form>
        </div>

        {/* =========================
            BLOG LIST
        ========================= */}

        <div style={styles.card}>

          <div style={styles.listHeader}>

            <div>
              <span style={styles.sectionLabel}>
                CONTENT LIBRARY
              </span>

              <h2 style={styles.cardTitle}>
                All Blogs
              </h2>
            </div>

            <div style={styles.blogCount}>
              {blogs.length}
              <span> Blogs</span>
            </div>

          </div>

          {loading ? (
            <div style={styles.emptyState}>
              <div style={styles.loader}></div>
              <p>Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>✦</div>

              <h3>No Blogs Yet</h3>

              <p>
                Abhi koi blog available nahi hai.
              </p>
            </div>
          ) : (
            <div style={styles.blogGrid}>

              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  style={styles.blogItem}
                >

                  <div style={styles.blogContent}>

                    <div style={styles.blogTop}>

                      <div style={styles.categoryTag}>
                        {blog.category}
                      </div>

                      <div
                        style={
                          blog.published
                            ? styles.publishedTag
                            : styles.draftTag
                        }
                      >
                        {blog.published
                          ? "● Published"
                          : "○ Draft"}
                      </div>

                    </div>

                    <h3 style={styles.blogTitle}>
                      {blog.title}
                    </h3>

                    {blog.excerpt && (
                      <p style={styles.blogExcerpt}>
                        {blog.excerpt}
                      </p>
                    )}

                    <div style={styles.blogMeta}>

                      <span>
                        ✍ {blog.author}
                      </span>

                      <span>
                        📅 {formatDate(blog.createdAt)}
                      </span>

                    </div>

                  </div>

                  {/* ACTIONS */}

                  <div style={styles.actions}>

                    <button
                      onClick={() => handleEdit(blog)}
                      style={styles.editButton}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(blog._id)
                      }
                      style={styles.deleteButton}
                    >
                      Delete
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

/* =========================
   INPUT STYLES
========================= */

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 15px",
  marginTop: "8px",
  border: "1px solid rgba(74, 222, 128, 0.14)",
  borderRadius: "10px",
  fontSize: "14px",
  outline: "none",
  background: "#07110b",
  color: "#eaffef",
};

const textareaStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 15px",
  marginTop: "8px",
  border: "1px solid rgba(74, 222, 128, 0.14)",
  borderRadius: "10px",
  fontSize: "14px",
  outline: "none",
  resize: "vertical",
  background: "#07110b",
  color: "#eaffef",
  lineHeight: "1.7",
};

/* =========================
   PAGE STYLES
========================= */

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 15% 10%, rgba(34,197,94,0.08), transparent 28%), radial-gradient(circle at 85% 70%, rgba(16,185,129,0.06), transparent 30%), #030807",
    padding: "50px 20px 80px",
    color: "#ecfdf5",
    overflow: "hidden",
  },

  backgroundGlow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    top: "-250px",
    right: "-180px",
    borderRadius: "50%",
    background: "rgba(34,197,94,0.07)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1200px",
    margin: "0 auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px",
    gap: "20px",
    flexWrap: "wrap",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "7px 12px",
    border: "1px solid rgba(74,222,128,0.18)",
    borderRadius: "999px",
    background: "rgba(34,197,94,0.06)",
    color: "#86efac",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.8px",
  },

  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#4ade80",
    boxShadow: "0 0 10px rgba(74,222,128,0.8)",
  },

  title: {
    margin: "14px 0 7px",
    fontSize: "clamp(30px, 4vw, 46px)",
    lineHeight: 1.05,
    letterSpacing: "-1.8px",
    fontWeight: "700",
    color: "#f0fdf4",
  },

  subtitle: {
    margin: 0,
    color: "#7f9789",
    fontSize: "14px",
  },

  newButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "13px 20px",
    border: "1px solid rgba(74,222,128,0.2)",
    borderRadius: "999px",
    background: "linear-gradient(135deg,#4ade80,#16a34a)",
    color: "#022c16",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "13px",
    boxShadow: "0 10px 30px rgba(34,197,94,0.15)",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(7,20,13,0.96), rgba(4,12,8,0.96))",
    border: "1px solid rgba(74,222,128,0.1)",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "30px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "28px",
  },

  sectionLabel: {
    display: "block",
    color: "#4ade80",
    fontSize: "9px",
    fontWeight: "800",
    letterSpacing: "2px",
    marginBottom: "8px",
  },

  cardTitle: {
    margin: 0,
    color: "#ecfdf5",
    fontSize: "23px",
    letterSpacing: "-0.5px",
  },

  editingBadge: {
    padding: "8px 12px",
    borderRadius: "999px",
    background: "rgba(34,197,94,0.08)",
    border: "1px solid rgba(34,197,94,0.18)",
    color: "#86efac",
    fontSize: "11px",
    fontWeight: "700",
  },

  field: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    color: "#b9cfc1",
    fontSize: "12px",
    fontWeight: "700",
  },

  twoColumns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  imagePreview: {
    marginTop: "-8px",
    marginBottom: "20px",
    maxWidth: "280px",
    height: "150px",
    overflow: "hidden",
    borderRadius: "12px",
    border: "1px solid rgba(74,222,128,0.12)",
    background: "#07110b",
  },

  publishBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: "16px",
    marginBottom: "25px",
    borderRadius: "12px",
    border: "1px solid rgba(74,222,128,0.1)",
    background: "rgba(34,197,94,0.025)",
  },

  switchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  },

  checkbox: {
    width: "18px",
    height: "18px",
    accentColor: "#22c55e",
    cursor: "pointer",
  },

  checkmark: {
    display: "none",
  },

  publishTitle: {
    display: "block",
    color: "#d9fbe3",
    fontSize: "13px",
    marginBottom: "3px",
  },

  publishText: {
    display: "block",
    color: "#667d70",
    fontSize: "11px",
  },

  statusPublished: {
    color: "#4ade80",
    fontSize: "11px",
    fontWeight: "800",
  },

  statusDraft: {
    color: "#7d9186",
    fontSize: "11px",
    fontWeight: "800",
  },

  formButtons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  saveButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "13px 22px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#4ade80,#16a34a)",
    color: "#022c16",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "13px",
  },

  cancelButton: {
    padding: "13px 22px",
    border: "1px solid rgba(148,163,184,0.15)",
    borderRadius: "10px",
    background: "transparent",
    color: "#9caf9f",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "13px",
  },

  listHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "25px",
  },

  blogCount: {
    padding: "9px 14px",
    borderRadius: "999px",
    background: "rgba(34,197,94,0.07)",
    border: "1px solid rgba(34,197,94,0.14)",
    color: "#4ade80",
    fontSize: "12px",
    fontWeight: "800",
  },

  blogCountSpan: {
    color: "#71877a",
  },

  blogGrid: {
    display: "grid",
    gap: "14px",
  },

  blogItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid rgba(74,222,128,0.09)",
    background: "rgba(3,12,7,0.6)",
  },

  blogContent: {
    flex: 1,
    minWidth: "250px",
  },

  blogTop: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "10px",
  },

  categoryTag: {
    display: "inline-block",
    padding: "5px 9px",
    borderRadius: "6px",
    background: "rgba(34,197,94,0.08)",
    color: "#86efac",
    fontSize: "9px",
    fontWeight: "800",
    letterSpacing: "0.7px",
  },

  publishedTag: {
    color: "#4ade80",
    fontSize: "10px",
    fontWeight: "800",
  },

  draftTag: {
    color: "#71877a",
    fontSize: "10px",
    fontWeight: "800",
  },

  blogTitle: {
    margin: "0 0 8px",
    color: "#eaffef",
    fontSize: "17px",
  },

  blogExcerpt: {
    margin: "0 0 12px",
    color: "#758b7d",
    fontSize: "12px",
    lineHeight: "1.6",
  },

  blogMeta: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    color: "#61766a",
    fontSize: "10px",
  },

  actions: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },

  editButton: {
    padding: "9px 15px",
    border: "1px solid rgba(74,222,128,0.2)",
    borderRadius: "8px",
    background: "rgba(34,197,94,0.08)",
    color: "#86efac",
    cursor: "pointer",
    fontSize: "11px",
    fontWeight: "800",
  },

  deleteButton: {
    padding: "9px 15px",
    border: "1px solid rgba(248,113,113,0.2)",
    borderRadius: "8px",
    background: "rgba(239,68,68,0.07)",
    color: "#fca5a5",
    cursor: "pointer",
    fontSize: "11px",
    fontWeight: "800",
  },

  emptyState: {
    textAlign: "center",
    padding: "60px 20px",
    color: "#71877a",
  },

  emptyIcon: {
    width: "50px",
    height: "50px",
    margin: "0 auto 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "14px",
    background: "rgba(34,197,94,0.08)",
    color: "#4ade80",
    fontSize: "22px",
  },

  loader: {
    width: "28px",
    height: "28px",
    margin: "0 auto 15px",
    border: "3px solid rgba(74,222,128,0.15)",
    borderTop: "3px solid #4ade80",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default AdminBlogs;