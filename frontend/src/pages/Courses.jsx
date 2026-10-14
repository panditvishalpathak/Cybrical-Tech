import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getApiUrl } from "../config/api";
import "./Courses.css";

const defaultCourses = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Complete Full-Stack Web Development: HTML, CSS, JavaScript, React, Node.js & Full Project Source Code ZIPs for each lesson.",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    icon: "💻",
    modulesCount: 4,
    lessonsCount: 12,
  },
  {
    slug: "seo",
    title: "SEO",
    description:
      "Learn On-Page SEO, Off-Page SEO, Technical SEO and Local SEO.",
    level: "Beginner",
    duration: "8 Weeks",
    icon: "📈",
    modulesCount: 1,
    lessonsCount: 2,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Learn the fundamentals of digital marketing and online growth.",
    level: "Beginner",
    duration: "10 Weeks",
    icon: "📢",
    modulesCount: 1,
    lessonsCount: 2,
  },
  {
    slug: "ai",
    title: "Artificial Intelligence (AI)",
    description:
      "Master Modern Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks, and Generative AI with downloadable starter project ZIPs.",
    level: "Beginner to Advanced",
    duration: "16 Weeks",
    icon: "🤖",
    modulesCount: 2,
    lessonsCount: 2,
  },
  {
    slug: "android",
    title: "Android App Development",
    description:
      "Master Native Android App Development with Kotlin, Jetpack Compose, Android SDK, MVVM Architecture, Room Database, and REST APIs.",
    level: "Beginner to Advanced",
    duration: "14 Weeks",
    icon: "📱",
    modulesCount: 4,
    lessonsCount: 8,
  },
];

function Courses() {
  const [coursesList, setCoursesList] = useState(defaultCourses);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(getApiUrl("/api/courses"));
        const data = await response.json();
        if (data.success && data.courses && data.courses.length > 0) {
          const published = data.courses.filter((c) => c.isPublished !== false);
          
          // Make sure AI is present in published courses
          const hasAi = published.some((c) => (c.slug || "").toLowerCase() === "ai");
          if (!hasAi) {
            const aiDefault = defaultCourses.find((c) => c.slug === "ai");
            if (aiDefault) published.push(aiDefault);
          }
          
          setCoursesList(published);
        }
      } catch (e) {
        // Use default fallback courses
        setCoursesList(defaultCourses);
      }
    };
    fetchCourses();
  }, []);

  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <span className="courses-badge">CYBRICAL LMS</span>

          <h1>
            Learn. Build. <span>Grow.</span>
          </h1>

          <p>
            Explore our courses and build practical skills with
            structured learning.
          </p>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <div className="courses-heading">
            <span>OUR COURSES</span>

            <h2>Choose your course</h2>

            <p>
              Start learning with Cybrical and develop skills that
              matter.
            </p>
          </div>

          <div className="courses-grid">
            {coursesList.map((course) => {
              const lessonCount = course.lessonsCount || (course.modules ? course.modules.reduce((acc, m) => acc + (m.lessons ? m.lessons.length : 0), 0) : 0);
              const getIcon = () => {
                if (course.icon) return course.icon;
                const s = (course.slug || "").toLowerCase();
                if (s.includes("ai") || s.includes("artificial")) return "🤖";
                if (s.includes("web")) return "💻";
                if (s.includes("seo")) return "📈";
                if (s.includes("marketing")) return "📢";
                return "🎓";
              };

              return (
                <article
                  className="course-card"
                  key={course.slug || course._id}
                >
                  <div className="course-card-top">
                    <span className="course-icon">{getIcon()}</span>

                    <span className="course-level">
                      {course.level || "Beginner"}
                    </span>
                  </div>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <div className="course-info">
                    <span>⏱ {course.duration || "Self-Paced"}</span>
                    <span>
                      📚 {lessonCount} Lessons
                    </span>
                  </div>

                  <Link
                    to={`/courses/${course.slug}`}
                    className="course-button"
                  >
                    View Course <span>↗</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Courses;