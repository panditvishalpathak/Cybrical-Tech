const getBaseUrl = () => {
  if (import.meta.env && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/+$/, "");
  }
  if (typeof window !== "undefined" && window.location) {
    const host = window.location.hostname;
    // When developing on Vite dev server (port 5173 or other dev ports)
    if ((host === "localhost" || host === "127.0.0.1") && window.location.port !== "5000") {
      return "http://localhost:5000";
    }
    // Local LAN dev server (e.g. mobile testing on port 5173)
    if (/^(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/.test(host) && window.location.port !== "5000") {
      return `http://${host}:5000`;
    }
    // In production or when frontend is served directly by backend
    return window.location.origin || "https://cybrical-tech.onrender.com";
  }
  return "https://cybrical-tech.onrender.com";
};

export const getApiUrl = (endpoint = "") => {
  const base = getBaseUrl();
  const cleanEndpoint = endpoint ? (endpoint.startsWith("/") ? endpoint : `/${endpoint}`) : "";
  return `${base}${cleanEndpoint}`;
};

export const getAssetUrl = (path = "") => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const base = getBaseUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

export const getDownloadUrl = (path = "", customName = "") => {
  if (!path) return "";
  const nameParam = customName ? `&name=${encodeURIComponent(customName)}` : "";
  return getApiUrl(`/api/courses/download-file?url=${encodeURIComponent(path)}${nameParam}`);
};

export default { getApiUrl, getAssetUrl, getDownloadUrl };
