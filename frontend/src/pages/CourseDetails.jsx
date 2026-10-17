import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiUrl, getAssetUrl, getDownloadUrl } from "../config/api";
import "./CourseDetails.css";

const AI_FALLBACK_DATA = {
  _id: "660000000000000000000004",
  title: "Artificial Intelligence (AI)",
  slug: "ai",
  description:
    "Master Modern Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks, and Generative AI. Download full source code and starter ZIPs for lessons.",
  category: "Artificial Intelligence",
  level: "Beginner to Advanced",
  duration: "16 Weeks",
  price: 0,
  isPublished: true,
  thumbnail:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
  modules: [
    {
      _id: "ai-mod-1",
      title: "Module 1: Course Introduction & Setup",
      description: "Welcome to the Artificial Intelligence course and team setup.",
      lessons: [
        {
          _id: "ai-les-1",
          title: "Lesson 1: Course Introduction TEAMWORK",
          description: "Introduction to AI bootcamp, collaboration workflow, and environment setup.",
          duration: "30 min",
          videoUrl: "",
          zipUrl: "/uploads/courses/1791286605286-173949088.zip",
          zipName: "Course Introduction TEAMWORK.zip",
          zipSize: "266.07 MB",
        },
      ],
    },
    {
      _id: "ai-mod-2",
      title: "Module 2: Python Fundamentals for AI",
      description: "Core Python programming, variables, data structures, and algorithms for AI.",
      lessons: [
        {
          _id: "ai-les-2",
          title: "Lesson 2: Python Fundamentals (Part-1)",
          description: "Python syntax, control flow, functions, and fundamental data science libraries.",
          duration: "45 min",
          videoUrl: "",
          zipUrl: "/uploads/courses/1791286656010-391085889.zip",
          zipName: "Python Fundamentals (Part-1).zip",
          zipSize: "457.43 MB",
        },
      ],
    },
  ],
  zipFile: {
    _id: "zf-ai-2",
    title: "Python Fundamentals (Part-1).zip",
    fileName: "Python Fundamentals (Part-1).zip",
    url: "/uploads/courses/1791286656010-391085889.zip",
    fileSize: "457.43 MB",
  },
  zipFiles: [
    {
      _id: "zf-ai-1",
      title: "Course Introduction TEAMWORK.zip",
      fileName: "Course Introduction TEAMWORK.zip",
      url: "/uploads/courses/1791286605286-173949088.zip",
      fileSize: "266.07 MB",
    },
    {
      _id: "zf-ai-2",
      title: "Python Fundamentals (Part-1).zip",
      fileName: "Python Fundamentals (Part-1).zip",
      url: "/uploads/courses/1791286656010-391085889.zip",
      fileSize: "457.43 MB",
    },
  ],
  resources: [
    {
      _id: "res-ai-1",
      title: "Course Introduction TEAMWORK.zip",
      fileName: "Course Introduction TEAMWORK.zip",
      url: "/uploads/courses/1791286605286-173949088.zip",
      fileUrl: "/uploads/courses/1791286605286-173949088.zip",
      fileSize: "266.07 MB",
    },
    {
      _id: "res-ai-2",
      title: "Python Fundamentals (Part-1).zip",
      fileName: "Python Fundamentals (Part-1).zip",
      url: "/uploads/courses/1791286656010-391085889.zip",
      fileUrl: "/uploads/courses/1791286656010-391085889.zip",
      fileSize: "457.43 MB",
    },
  ],
};

const FALLBACK_COURSES_MAP = {
  ai: AI_FALLBACK_DATA,
  "660000000000000000000004": AI_FALLBACK_DATA,
  "web-development": {
    _id: "660000000000000000000001",
    title: "Web Development",
    slug: "web-development",
    description:
      "Complete Web Development Bootcamp from Scratch — HTML, CSS, JavaScript, React, Node.js & Full-Stack Projects with downloadable Source Code ZIPs for every lesson.",
    category: "Web Development",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    price: 0,
    isPublished: true,
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    modules: [
      {
        _id: "web-mod-1",
        title: "Module 1: HTML5 & Modern Responsive CSS",
        description:
          "Foundations of modern web layout, semantic elements, and responsive design with project ZIP archives.",
        lessons: [
          {
            _id: "web-les-1",
            title: "Lesson 1: HTML5 Semantic Structure & Starter Project",
            description:
              "Learn semantic tags, forms, tables, and project directory scaffolding. Download the starter kit ZIP below.",
            duration: "35 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791194734125-528801946.zip",
            zipName: "01-HTML5-Starter-Project.zip",
            zipSize: "185 MB",
          },
          {
            _id: "web-les-2",
            title: "Lesson 2: CSS3 Flexbox & Grid Responsive Layouts",
            description:
              "Master modern layout techniques, media queries, CSS variables, and layout patterns with full source code.",
            duration: "45 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791194748044-253890491.zip",
            zipName: "02-CSS3-Flexbox-Grid-Layouts.zip",
            zipSize: "507 MB",
          },
          {
            _id: "web-les-3",
            title: "Lesson 3: Complete Responsive Agency Landing Page",
            description:
              "Build and deploy a mobile-friendly agency landing page with animations and interactive navigation.",
            duration: "50 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791194763164-769067527.zip",
            zipName: "03-Responsive-Landing-Page.zip",
            zipSize: "185 MB",
          },
        ],
      },
      {
        _id: "web-mod-2",
        title: "Module 2: JavaScript DOM & Interactive Applications",
        description:
          "Master core JavaScript, DOM manipulation, asynchronous programming, APIs, and interactive applications.",
        lessons: [
          {
            _id: "web-les-4",
            title: "Lesson 4: JavaScript Fundamentals & Dynamic DOM Control",
            description:
              "ES6+ syntax, arrays, objects, functions, event listeners, and dynamic DOM rendering practice project.",
            duration: "55 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791194776246-178006013.zip",
            zipName: "04-JS-DOM-Interactive-Project.zip",
            zipSize: "351 MB",
          },
          {
            _id: "web-les-5",
            title: "Lesson 5: Async JS, REST APIs & Live Weather Application",
            description:
              "Working with Promises, async/await, Fetch API, error handling, and building a live API-powered app.",
            duration: "60 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791195035501-472161838.zip",
            zipName: "05-Async-API-Weather-App.zip",
            zipSize: "436 MB",
          },
          {
            _id: "web-les-6",
            title: "Lesson 6: Interactive CRUD App with LocalStorage",
            description:
              "Create a persistent task management application with state persistence, filtering, and local storage.",
            duration: "50 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791196105477-687599394.zip",
            zipName: "06-Interactive-CRUD-Storage-App.zip",
            zipSize: "707 MB",
          },
        ],
      },
      {
        _id: "web-mod-3",
        title: "Module 3: React.js & Modern Frontend Architecture",
        description:
          "Build robust single-page applications using React components, hooks, routing, and state management.",
        lessons: [
          {
            _id: "web-les-7",
            title: "Lesson 7: React Setup, JSX, Components & Props",
            description:
              "Component architecture, props drilling, conditional rendering, and structured folder layout with Vite.",
            duration: "45 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791196912251-509649897.zip",
            zipName: "07-React-Components-Starter.zip",
            zipSize: "586 MB",
          },
          {
            _id: "web-les-8",
            title: "Lesson 8: React Hooks (useState, useEffect) & Context API",
            description:
              "Deep dive into state lifecycles, effect hooks, custom hooks, and global state management with Context.",
            duration: "55 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791197080020-426950135.zip",
            zipName: "08-React-Hooks-Context-Project.zip",
            zipSize: "356 MB",
          },
          {
            _id: "web-les-9",
            title: "Lesson 9: Full E-Commerce Product Catalog with Cart",
            description:
              "Build an interactive E-commerce frontend with cart management, checkout modals, and responsive UI.",
            duration: "65 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791198229799-559583431.zip",
            zipName: "09-Ecommerce-Cart-Frontend.zip",
            zipSize: "301 MB",
          },
        ],
      },
      {
        _id: "web-mod-4",
        title: "Module 4: Full-Stack Backend, Database & Deployment",
        description:
          "Build RESTful APIs with Node.js, Express, MongoDB, and deploy full-stack applications to cloud servers.",
        lessons: [
          {
            _id: "web-les-10",
            title: "Lesson 10: Node.js & Express REST API Architecture",
            description:
              "Express routing, middleware, request validation, error handling, and building secure REST endpoints.",
            duration: "50 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791199702700-413691350.zip",
            zipName: "10-Node-Express-REST-API.zip",
            zipSize: "253 MB",
          },
          {
            _id: "web-les-11",
            title: "Lesson 11: MongoDB, Mongoose Schemas & JWT Auth",
            description:
              "Database modeling, CRUD operations, password hashing with bcrypt, and JWT user authentication.",
            duration: "60 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791199715268-701008463.zip",
            zipName: "11-MongoDB-JWT-Auth-System.zip",
            zipSize: "197 MB",
          },
          {
            _id: "web-les-12",
            title: "Lesson 12: Full Stack Production Deployment & CI/CD",
            description:
              "Connecting frontend and backend, environment variables, building for production, and live cloud deployment.",
            duration: "60 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791199726034-613446791.zip",
            zipName: "12-FullStack-Production-Complete.zip",
            zipSize: "333 MB",
          },
        ],
      },
    ],
    zipFiles: [
      {
        _id: "zf-1",
        title: "01: HTML5 Starter Kit ZIP",
        fileName: "01-HTML5-Starter-Project.zip",
        url: "/uploads/courses/1791194734125-528801946.zip",
        fileSize: "185 MB",
      },
      {
        _id: "zf-2",
        title: "02: CSS3 Flexbox & Grid ZIP",
        fileName: "02-CSS3-Flexbox-Grid-Layouts.zip",
        url: "/uploads/courses/1791194748044-253890491.zip",
        fileSize: "507 MB",
      },
      {
        _id: "zf-3",
        title: "03: Responsive Landing Page ZIP",
        fileName: "03-Responsive-Landing-Page.zip",
        url: "/uploads/courses/1791194763164-769067527.zip",
        fileSize: "185 MB",
      },
      {
        _id: "zf-4",
        title: "04: JS DOM Interactive Project ZIP",
        fileName: "04-JS-DOM-Interactive-Project.zip",
        url: "/uploads/courses/1791194776246-178006013.zip",
        fileSize: "351 MB",
      },
      {
        _id: "zf-5",
        title: "05: Async API Weather App ZIP",
        fileName: "05-Async-API-Weather-App.zip",
        url: "/uploads/courses/1791195035501-472161838.zip",
        fileSize: "436 MB",
      },
      {
        _id: "zf-6",
        title: "06: Interactive CRUD App ZIP",
        fileName: "06-Interactive-CRUD-Storage-App.zip",
        url: "/uploads/courses/1791196105477-687599394.zip",
        fileSize: "707 MB",
      },
      {
        _id: "zf-7",
        title: "07: React Components Starter ZIP",
        fileName: "07-React-Components-Starter.zip",
        url: "/uploads/courses/1791196912251-509649897.zip",
        fileSize: "586 MB",
      },
      {
        _id: "zf-8",
        title: "08: React Hooks & Context Project ZIP",
        fileName: "08-React-Hooks-Context-Project.zip",
        url: "/uploads/courses/1791197080020-426950135.zip",
        fileSize: "356 MB",
      },
      {
        _id: "zf-9",
        title: "09: Ecommerce Cart Frontend ZIP",
        fileName: "09-Ecommerce-Cart-Frontend.zip",
        url: "/uploads/courses/1791198229799-559583431.zip",
        fileSize: "301 MB",
      },
      {
        _id: "zf-10",
        title: "10: Node & Express REST API ZIP",
        fileName: "10-Node-Express-REST-API.zip",
        url: "/uploads/courses/1791199702700-413691350.zip",
        fileSize: "253 MB",
      },
      {
        _id: "zf-11",
        title: "11: MongoDB & JWT Auth System ZIP",
        fileName: "11-MongoDB-JWT-Auth-System.zip",
        url: "/uploads/courses/1791199715268-701008463.zip",
        fileSize: "197 MB",
      },
      {
        _id: "zf-12",
        title: "12: FullStack Production Complete ZIP",
        fileName: "12-FullStack-Production-Complete.zip",
        url: "/uploads/courses/1791199726034-613446791.zip",
        fileSize: "333 MB",
      },
    ],
    resources: [],
  },
  seo: {
    _id: "660000000000000000000002",
    title: "SEO",
    slug: "seo",
    description: "Learn On-Page SEO, Off-Page SEO, Technical SEO and Local SEO.",
    category: "Search Engine Optimization",
    level: "Beginner",
    duration: "8 Weeks",
    price: 0,
    isPublished: true,
    modules: [
      {
        _id: "seo-mod-1",
        title: "Module 1: SEO Fundamentals",
        lessons: [
          { _id: "seo-les-1", title: "Keyword Research & Strategy", duration: "35 min", videoUrl: "" },
          { _id: "seo-les-2", title: "On-Page & Technical Optimization", duration: "45 min", videoUrl: "" },
        ],
      },
    ],
    zipFiles: [],
    resources: [],
  },
  "digital-marketing": {
    _id: "660000000000000000000003",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Learn the fundamentals of digital marketing and online growth.",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "10 Weeks",
    price: 0,
    isPublished: true,
    modules: [
      {
        _id: "dm-mod-1",
        title: "Module 1: Digital Marketing Strategy",
        lessons: [
          { _id: "dm-les-1", title: "Social Media Strategy & Ads", duration: "40 min", videoUrl: "" },
          { _id: "dm-les-2", title: "Email Marketing & Analytics", duration: "35 min", videoUrl: "" },
        ],
      },
    ],
    zipFiles: [],
    resources: [],
  },
  android: {
    _id: "660000000000000000000005",
    title: "Android App Development",
    slug: "android",
    description:
      "Master Native Android App Development with Kotlin, Jetpack Compose, Android SDK, MVVM Architecture, Room Database, and REST APIs.",
    category: "Mobile Development",
    level: "Beginner to Advanced",
    duration: "14 Weeks",
    price: 0,
    isPublished: true,
    thumbnail:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=80",
    modules: [
      {
        _id: "and-mod-1",
        title: "Module 1: Kotlin & Android Studio Setup",
        description: "Kotlin programming essentials, Android Studio IDE setup, and Project Anatomy.",
        lessons: [
          {
            _id: "and-les-1",
            title: "Lesson 1: Android Studio Installation & Project Anatomy",
            description: "Install Android Studio, configure Android Virtual Device (AVD), and understand project file hierarchy.",
            duration: "30 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791265931186-935533293.zip",
            zipName: "01-Android-Studio-Setup-Starter.zip",
            zipSize: "583 MB",
          },
          {
            _id: "and-les-2",
            title: "Lesson 2: Kotlin Fundamentals, OOP & Coroutines",
            description: "Variables, Null Safety, Lambdas, Coroutines and Asynchronous Kotlin for Android.",
            duration: "45 min",
            videoUrl: "",
            zipUrl: "",
            zipName: "",
            zipSize: "",
          },
        ],
      },
      {
        _id: "and-mod-2",
        title: "Module 2: Modern UI with Jetpack Compose",
        description: "Declarative UI, State management, Navigation, Material 3 Design.",
        lessons: [
          {
            _id: "and-les-3",
            title: "Lesson 3: Jetpack Compose Layouts & Material Design 3",
            description: "Column, Row, Box, Scaffold, LazyColumn and dynamic UI state manipulation.",
            duration: "50 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791265885918-768069909.zip",
            zipName: "02-Jetpack-Compose-Layouts.zip",
            zipSize: "534 MB",
          },
          {
            _id: "and-les-4",
            title: "Lesson 4: Compose State, ViewModel & Navigation",
            description: "Remember, MutableState, State Hoisting, and Navigation Component.",
            duration: "45 min",
            videoUrl: "",
            zipUrl: "",
            zipName: "",
            zipSize: "",
          },
        ],
      },
      {
        _id: "and-mod-3",
        title: "Module 3: Networking, Storage & MVVM Architecture",
        description: "Retrofit, Room SQLite Database, Repository Pattern, and Hilt Dependency Injection.",
        lessons: [
          {
            _id: "and-les-5",
            title: "Lesson 5: REST API Integration with Retrofit & OkHttp",
            description: "Fetching JSON data, Moshi/Gson serialization, error handling, and internet permissions.",
            duration: "55 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791265849347-992920259.zip",
            zipName: "03-Android-Retrofit-MVVM-App.zip",
            zipSize: "480 MB",
          },
          {
            _id: "and-les-6",
            title: "Lesson 6: Local Persistence with Room Database & DataStore",
            description: "Entities, DAOs, TypeConverters, LiveData/Flow, and Preferences DataStore.",
            duration: "50 min",
            videoUrl: "",
            zipUrl: "",
            zipName: "",
            zipSize: "",
          },
        ],
      },
      {
        _id: "and-mod-4",
        title: "Module 4: Full App Project, Testing & Play Store Deployment",
        description: "Capstone project, Unit testing, App bundle creation, and Play Console release.",
        lessons: [
          {
            _id: "and-les-7",
            title: "Lesson 7: Full E-Commerce / Social App Project with Firebase",
            description: "Firebase Auth, Firestore, Push Notifications with FCM, and Cloud Storage.",
            duration: "65 min",
            videoUrl: "",
            zipUrl: "/uploads/courses/1791265800123-2443587.zip",
            zipName: "04-Android-Full-Ecommerce-App.zip",
            zipSize: "412 MB",
          },
          {
            _id: "and-les-8",
            title: "Lesson 8: App Bundle (AAB), ProGuard & Google Play Release",
            description: "Keystore generation, signing, optimization, and deploying to Google Play Console.",
            duration: "40 min",
            videoUrl: "",
            zipUrl: "",
            zipName: "",
            zipSize: "",
          },
        ],
      },
    ],
    zipFile: {
      _id: "zf-and-1",
      title: "Android Capstone Project Complete Source Code ZIP",
      fileName: "04-Android-Full-Ecommerce-App.zip",
      url: "/uploads/courses/1791265800123-2443587.zip",
      fileSize: "412 MB",
    },
    zipFiles: [
      {
        _id: "zf-and-1",
        title: "01: Android Studio Setup & Starter Project ZIP",
        fileName: "01-Android-Studio-Setup-Starter.zip",
        url: "/uploads/courses/1791265931186-935533293.zip",
        fileSize: "583 MB",
      },
      {
        _id: "zf-and-2",
        title: "02: Jetpack Compose Layouts & Material Design 3 ZIP",
        fileName: "02-Jetpack-Compose-Layouts.zip",
        url: "/uploads/courses/1791265885918-768069909.zip",
        fileSize: "534 MB",
      },
      {
        _id: "zf-and-3",
        title: "03: Android Retrofit REST API & MVVM Architecture ZIP",
        fileName: "03-Android-Retrofit-MVVM-App.zip",
        url: "/uploads/courses/1791265849347-992920259.zip",
        fileSize: "480 MB",
      },
      {
        _id: "zf-and-4",
        title: "04: Android Full Capstone E-Commerce App Project ZIP",
        fileName: "04-Android-Full-Ecommerce-App.zip",
        url: "/uploads/courses/1791265800123-2443587.zip",
        fileSize: "412 MB",
      },
    ],
    resources: [
      {
        _id: "res-and-1",
        title: "01: Android Studio Setup & Starter Project ZIP",
        fileName: "01-Android-Studio-Setup-Starter.zip",
        url: "/uploads/courses/1791265931186-935533293.zip",
        fileUrl: "/uploads/courses/1791265931186-935533293.zip",
        fileSize: "583 MB",
      },
      {
        _id: "res-and-2",
        title: "02: Jetpack Compose Layouts & Material Design 3 ZIP",
        fileName: "02-Jetpack-Compose-Layouts.zip",
        url: "/uploads/courses/1791265885918-768069909.zip",
        fileUrl: "/uploads/courses/1791265885918-768069909.zip",
        fileSize: "534 MB",
      },
      {
        _id: "res-and-3",
        title: "03: Android Retrofit REST API & MVVM Architecture ZIP",
        fileName: "03-Android-Retrofit-MVVM-App.zip",
        url: "/uploads/courses/1791265849347-992920259.zip",
        fileUrl: "/uploads/courses/1791265849347-992920259.zip",
        fileSize: "480 MB",
      },
      {
        _id: "res-and-4",
        title: "04: Android Full Capstone E-Commerce App Project ZIP",
        fileName: "04-Android-Full-Ecommerce-App.zip",
        url: "/uploads/courses/1791265800123-2443587.zip",
        fileUrl: "/uploads/courses/1791265800123-2443587.zip",
        fileSize: "412 MB",
      },
    ],
  },
};

function CourseDetails() {
  const { slug } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError("");

        let fetchedCourse = null;

        try {
          let response = await fetch(getApiUrl(`/api/courses/${slug}`));
          if (!response.ok) {
            response = await fetch(getApiUrl(`/api/courses/id/${slug}`));
          }
          if (response.ok) {
            const data = await response.json();
            if (data.success && data.course) {
              fetchedCourse = data.course;
            }
          }
        } catch (apiErr) {
          console.warn("API fetch error, using fallback if available:", apiErr);
        }

        // Check localStorage and fallback map if not fetched from backend
        const cleanSlug = (slug || "").toLowerCase();
        let savedLocal = null;
        try {
          const raw =
            localStorage.getItem(`admin_course_${cleanSlug}`) ||
            localStorage.getItem(`admin_course_${slug}`);
          if (raw) savedLocal = JSON.parse(raw);
        } catch (e) {}

        if (!fetchedCourse) {
          fetchedCourse =
            savedLocal ||
            FALLBACK_COURSES_MAP[cleanSlug] ||
            (cleanSlug.includes("ai") || cleanSlug.includes("artificial")
              ? FALLBACK_COURSES_MAP["ai"]
              : null);
        } else if (savedLocal) {
          // Merge local uploaded zipFiles, resources, and modules if local has newer content
          const localZips = savedLocal.zipFiles || [];
          const remoteZips = fetchedCourse.zipFiles || [];
          fetchedCourse = {
            ...fetchedCourse,
            zipFiles: localZips.length >= remoteZips.length ? localZips : remoteZips,
            zipFile: savedLocal.zipFile || fetchedCourse.zipFile,
            resources: (savedLocal.resources && savedLocal.resources.length > 0) ? savedLocal.resources : fetchedCourse.resources,
            modules: (savedLocal.modules && savedLocal.modules.length > 0) ? savedLocal.modules : (fetchedCourse.modules && fetchedCourse.modules.length > 0 ? fetchedCourse.modules : FALLBACK_COURSES_MAP[cleanSlug]?.modules || []),
          };
        }

        // Ensure modules are always present if empty
        if (fetchedCourse && (!fetchedCourse.modules || fetchedCourse.modules.length === 0)) {
          const fallbackMod = FALLBACK_COURSES_MAP[cleanSlug]?.modules || FALLBACK_COURSES_MAP[slug]?.modules || [];
          if (fallbackMod && fallbackMod.length > 0) {
            fetchedCourse.modules = fallbackMod;
          }
        }
        if (fetchedCourse && (!fetchedCourse.zipFiles || fetchedCourse.zipFiles.length === 0)) {
          const fallbackZips = FALLBACK_COURSES_MAP[cleanSlug]?.zipFiles || FALLBACK_COURSES_MAP[slug]?.zipFiles || [];
          if (fallbackZips && fallbackZips.length > 0) {
            fetchedCourse.zipFiles = fallbackZips;
          }
        }
        if (fetchedCourse && !fetchedCourse.zipFile) {
          const fallbackZip = FALLBACK_COURSES_MAP[cleanSlug]?.zipFile || FALLBACK_COURSES_MAP[slug]?.zipFile;
          if (fallbackZip) {
            fetchedCourse.zipFile = fallbackZip;
          }
        }

        if (!fetchedCourse) {
          throw new Error("Course not found");
        }

        setCourse(fetchedCourse);

        // Auto-select first lesson if available
        if (fetchedCourse.modules && fetchedCourse.modules.length > 0) {
          const firstMod = fetchedCourse.modules.find((m) => m.lessons && m.lessons.length > 0);
          if (firstMod && firstMod.lessons.length > 0) {
            setSelectedLesson(firstMod.lessons[0]);
          }
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "Course not found");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  if (loading) {
    return (
      <main className="course-not-found">
        <h1>Loading Course...</h1>
      </main>
    );
  }

  if (error || !course) {
    return (
      <main className="course-not-found">
        <h1>Course Not Found</h1>
        <p>{error}</p>
        <Link to="/courses">
          ← Back to Courses
        </Link>
      </main>
    );
  }

  const totalLessons = course.modules
    ? course.modules.reduce((t, m) => t + (m.lessons ? m.lessons.length : 0), 0)
    : 0;

  // Gather ALL unique ZIP files from zipFiles, resources, zipFile, and all lessons
  const zipMap = new Map();

  // 1. From zipFiles
  (course.zipFiles || []).forEach((z, i) => {
    if (z && z.url) {
      zipMap.set(z.url, {
        _id: z._id || `zf-${i}`,
        title: z.title || `Project ZIP Part ${i + 1}`,
        fileName: z.fileName || `project-part-${i + 1}.zip`,
        url: z.url,
        fileSize: z.fileSize || "ZIP File",
      });
    }
  });

  // 2. From resources
  (course.resources || []).forEach((r, i) => {
    const url = r.url || r.fileUrl;
    if (url && (url.toLowerCase().endsWith(".zip") || (r.fileName && r.fileName.toLowerCase().endsWith(".zip")) || !zipMap.has(url))) {
      if (!zipMap.has(url)) {
        zipMap.set(url, {
          _id: r._id || `res-${i}`,
          title: r.title || r.fileName || `Resource ZIP Part ${i + 1}`,
          fileName: r.fileName || `resource-${i + 1}.zip`,
          url,
          fileSize: r.fileSize || "ZIP File",
        });
      }
    }
  });

  // 3. From legacy zipFile
  if (course.zipFile && course.zipFile.url && !zipMap.has(course.zipFile.url)) {
    zipMap.set(course.zipFile.url, {
      _id: "main-zip",
      title: course.zipFile.fileName || "Course Project ZIP",
      fileName: course.zipFile.fileName || "course-project.zip",
      url: course.zipFile.url,
      fileSize: course.zipFile.fileSize || "ZIP Archive",
    });
  }

  // 4. From any lessons with zipUrl
  (course.modules || []).forEach((m) => {
    (m.lessons || []).forEach((l) => {
      if (l.zipUrl && !zipMap.has(l.zipUrl)) {
        zipMap.set(l.zipUrl, {
          _id: l._id || l.zipUrl,
          title: `${l.title} (Project ZIP)`,
          fileName: l.zipName || `${l.title}.zip`,
          url: l.zipUrl,
          fileSize: l.zipSize || "Lesson ZIP",
        });
      }
    });
  });

  const allCourseZips = Array.from(zipMap.values());

  const handleDownloadAllZips = () => {
    if (!allCourseZips || allCourseZips.length === 0) return;
    setIsDownloadingAll(true);

    allCourseZips.forEach((z, index) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = getDownloadUrl(z.url, z.fileName);
        link.setAttribute("download", z.fileName || `course-project-part-${index + 1}.zip`);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noreferrer");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if (index === allCourseZips.length - 1) {
          setTimeout(() => setIsDownloadingAll(false), 1000);
        }
      }, index * 450);
    });
  };

  return (
    <main className="course-details-page">

      {/* HERO SECTION */}
      <section className="course-details-hero">
        <div className="container">

          <Link
            to="/courses"
            className="back-link"
          >
            ← Back to Courses
          </Link>

          <span className="details-badge">
            {course.category || "Development"}
          </span>

          <h1>{course.title}</h1>

          <p>{course.description}</p>

          <div className="course-meta">
            <span>📊 {course.level || "Beginner"}</span>
            <span>⏱ {course.duration || "Self-Paced"}</span>
            <span>📚 {totalLessons} Lessons</span>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="course-content-section">

        <div className="container course-details-grid">

          <div className="course-main-content">

            {/* LESSON VIEWER / PLAYER */}
            {selectedLesson ? (
              <section className="lesson-video-section">

                <div className="lesson-video-header">
                  <span>🎬 Now Playing</span>
                  <h2>{selectedLesson.title}</h2>
                </div>

                {selectedLesson.videoUrl ? (
                  <div className="video-player-wrapper">
                    <video
                      controls
                      controlsList="nodownload"
                      className="lesson-video-player"
                      src={getAssetUrl(selectedLesson.videoUrl)}
                      key={selectedLesson.videoUrl}
                    >
                      Your browser does not support video playback.
                    </video>
                  </div>
                ) : (
                  <div className="video-empty-state" style={{ minHeight: "180px", padding: "30px 20px" }}>
                    <div>📖</div>
                    <h2>{selectedLesson.title}</h2>
                    <p>{selectedLesson.description || "Video lecture for this lesson will be available soon."}</p>
                  </div>
                )}

                {selectedLesson.description && selectedLesson.videoUrl && (
                  <p className="lesson-video-description">
                    {selectedLesson.description}
                  </p>
                )}

                {/* LESSON SPECIFIC ZIP DOWNLOAD BUTTON */}
                {selectedLesson.zipUrl && (
                  <div
                    style={{
                      marginTop: "16px",
                      padding: "14px 18px",
                      background: "rgba(34, 197, 94, 0.08)",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#4ade80", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        📦 Lesson Project Code & Assets
                      </span>
                      <h4 style={{ margin: "4px 0 0 0", color: "#f0fdf4", fontSize: "15px" }}>
                        {selectedLesson.zipName || `${selectedLesson.title}.zip`} {selectedLesson.zipSize ? `(${selectedLesson.zipSize})` : ""}
                      </h4>
                    </div>

                    <a
                      href={getDownloadUrl(selectedLesson.zipUrl, selectedLesson.zipName || `${selectedLesson.title}.zip`)}
                      download={selectedLesson.zipName || `${selectedLesson.title}.zip`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        background: "#22c55e",
                        color: "#031007",
                        fontWeight: "800",
                        fontSize: "13px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                      }}
                    >
                      <span>📥</span> Download Lesson ZIP ⬇
                    </a>
                  </div>
                )}

              </section>
            ) : (
              <section className="video-empty-state">
                <div>🎬</div>
                <h2>Select a lesson to start learning</h2>
                <p>Choose any lesson from the course curriculum below to start watching video lectures.</p>
              </section>
            )}

            {/* ALL COURSE ZIP FILES LIST IN MAIN CONTENT */}
            {allCourseZips.length > 0 && (
              <section className="course-materials-section" style={{ marginTop: "30px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                  <div>
                    <h2 style={{ margin: 0 }}>📦 Course Resources & Project ZIP Files ({allCourseZips.length})</h2>
                    <p style={{ color: "#8da096", fontSize: "14px", margin: "6px 0 0 0" }}>
                      Download all project source codes, assets, and practice files for offline use:
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadAllZips}
                    disabled={isDownloadingAll}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "11px 20px",
                      background: isDownloadingAll
                        ? "linear-gradient(135deg, #10b981, #059669)"
                        : "linear-gradient(135deg, #22c55e, #16a34a)",
                      color: "#031007",
                      fontWeight: "800",
                      fontSize: "14px",
                      borderRadius: "10px",
                      border: "none",
                      cursor: isDownloadingAll ? "wait" : "pointer",
                      boxShadow: "0 6px 18px rgba(34, 197, 94, 0.4)",
                      transition: "all 0.2s ease",
                      opacity: isDownloadingAll ? 0.85 : 1,
                    }}
                  >
                    <span>⚡</span> {isDownloadingAll ? `Downloading ${allCourseZips.length} Files...` : `Download All ZIPs (${allCourseZips.length}) ⬇`}
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {allCourseZips.map((z, idx) => (
                    <div className="materials-card" key={z._id || idx}>
                      <div className="materials-icon">📦</div>
                      <div className="materials-details">
                        <h3>{z.title || z.fileName}</h3>
                        <p>{z.fileName}</p>
                        <span className="materials-badge">
                          {(z.isExternal || (z.url && (z.url.includes("drive.google.com") || z.url.includes("google.com"))))
                            ? `☁️ Google Drive • ${z.fileSize || "Cloud ZIP"}`
                            : (z.fileSize || "ZIP Archive")}
                        </span>
                      </div>
                      <a
                        href={getDownloadUrl(z.url, z.fileName)}
                        download={z.fileName || `project-${idx + 1}.zip`}
                        target="_blank"
                        rel="noreferrer"
                        className="materials-download-btn"
                      >
                        Download ZIP ⬇
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* WHAT YOU WILL LEARN */}
            <section className="learn-section" style={{ marginTop: "35px" }}>
              <h2>What You'll Learn</h2>
              <div className="learn-grid">
                {[
                  "Complete course fundamentals & hands-on practical skills",
                  "Industry-standard tools and modern workflow",
                  "Step-by-step real-world project development",
                  "Best practices and professional coding techniques",
                  "Certification of completion upon finishing all lessons",
                ].map((item) => (
                  <div className="learn-item" key={item}>
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* COURSE CURRICULUM */}
            <section className="curriculum-section" style={{ marginTop: "35px" }}>
              <h2>Course Curriculum</h2>
              <div className="modules">
                {course.modules && course.modules.length > 0 ? (
                  course.modules.map((module, moduleIndex) => (
                    <div className="module" key={module._id || moduleIndex}>
                      <h3>
                        Module {moduleIndex + 1} — {module.title}
                      </h3>

                      <div className="lesson-list">
                        {(!module.lessons || module.lessons.length === 0) ? (
                          <p style={{ color: "#718096", fontSize: "13px", padding: "10px 0" }}>
                            No lessons added in this module yet.
                          </p>
                        ) : (
                          module.lessons.map((lesson, lessonIndex) => (
                            <button
                              type="button"
                              className={`lesson ${
                                selectedLesson?._id === lesson._id ? "active-lesson" : ""
                              }`}
                              key={lesson._id || lessonIndex}
                              onClick={() => setSelectedLesson(lesson)}
                            >
                              <span className="lesson-number">{lessonIndex + 1}</span>
                              <span className="lesson-title">
                                {lesson.title}
                                {lesson.zipUrl && (
                                  <span style={{ marginLeft: "8px", fontSize: "10px", background: "rgba(34,197,94,0.15)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>
                                    📦 ZIP
                                  </span>
                                )}
                              </span>
                              <span className="lesson-duration">{lesson.duration || "Lesson"}</span>
                              <span className="lesson-play">
                                {lesson.videoUrl ? "▶" : "📖"}
                              </span>
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ color: "#8da096" }}>Curriculum content is being updated.</p>
                )}
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <aside className="course-sidebar">
            <div className="enroll-card">
              <div className="course-preview">
                {course.thumbnail ? (
                  <img
                    src={getAssetUrl(course.thumbnail)}
                    alt={course.title}
                    style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.1)" }}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                ) : (
                  <span>🎓</span>
                )}
              </div>

              <h3>{course.title}</h3>

              <div className="price-box">
                <span className="price">
                  {course.price === 0 ? "Free" : `₹${course.price}`}
                </span>
                <span className="price-tag">Lifetime Access</span>
              </div>

              {/* SIDEBAR MULTIPLE ZIP DOWNLOADS */}
              {allCourseZips.length > 0 && (
                <div style={{ marginTop: "16px", padding: "14px", background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.3)", borderRadius: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <strong style={{ color: "#4ade80", fontSize: "13px" }}>
                      📦 Project ZIPs ({allCourseZips.length}):
                    </strong>
                    {allCourseZips.length > 1 && (
                      <button
                        type="button"
                        onClick={handleDownloadAllZips}
                        disabled={isDownloadingAll}
                        style={{
                          background: "#22c55e",
                          color: "#031007",
                          fontSize: "11px",
                          fontWeight: "800",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          border: "none",
                          cursor: isDownloadingAll ? "wait" : "pointer",
                        }}
                      >
                        {isDownloadingAll ? "..." : "All ⬇"}
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {allCourseZips.map((z, idx) => (
                      <a
                        key={z._id || idx}
                        href={getDownloadUrl(z.url, z.fileName)}
                        download={z.fileName || `project-${idx + 1}.zip`}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          padding: "7px 10px",
                          background: "rgba(0,0,0,0.3)",
                          border: "1px solid rgba(34,197,94,0.3)",
                          borderRadius: "6px",
                          color: "#86efac",
                          fontSize: "12px",
                          textDecoration: "none",
                          fontWeight: "600",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginRight: "6px" }}>
                          📦 {z.title || z.fileName}
                        </span>
                        <span style={{ color: "#4ade80", fontWeight: "800", flexShrink: 0 }}>⬇</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="course-includes">
                <h4>This course includes:</h4>
                <ul>
                  <li>📹 {totalLessons} Video Lectures</li>
                  {allCourseZips.length > 0 && (
                    <li>📦 {allCourseZips.length} Downloadable ZIP File{allCourseZips.length > 1 ? "s" : ""}</li>
                  )}
                  <li>💻 Full Interactive Curriculum</li>
                  <li>📱 Mobile & Desktop Access</li>
                  <li>⚡ Self-Paced Learning</li>
                  <li>🏆 Certificate of Completion</li>
                </ul>
              </div>

              <button className="enroll-btn" onClick={() => alert("Enrollment is active! Select any lesson to start learning.")}>
                Enroll Now →
              </button>
            </div>
          </aside>

        </div>

      </section>

    </main>
  );
}

export default CourseDetails;