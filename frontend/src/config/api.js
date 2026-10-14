const getBaseUrl = () => {
  if (import.meta.env && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/+$/, "");
  }
  if (typeof window !== "undefined" && window.location && window.location.hostname) {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      return "http://localhost:5000";
    }
    // Local LAN network testing (e.g. 192.168.x.x, 10.x.x.x)
    if (/^(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/.test(host)) {
      return `http://${host}:5000`;
    }
  }
  return "http://localhost:5000";
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
