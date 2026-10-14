export const getApiUrl = (endpoint = "") => {
  let base = "http://localhost:5000";
  if (typeof window !== "undefined" && window.location && window.location.hostname) {
    const host = window.location.hostname;
    if (host !== "localhost" && host !== "127.0.0.1") {
      base = `http://${host}:5000`;
    }
  }
  const cleanEndpoint = endpoint ? (endpoint.startsWith("/") ? endpoint : `/${endpoint}`) : "";
  return `${base}${cleanEndpoint}`;
};

export const getAssetUrl = (path = "") => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  let base = "http://localhost:5000";
  if (typeof window !== "undefined" && window.location && window.location.hostname) {
    const host = window.location.hostname;
    if (host !== "localhost" && host !== "127.0.0.1") {
      base = `http://${host}:5000`;
    }
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

export const getDownloadUrl = (path = "", customName = "") => {
  if (!path) return "";
  const nameParam = customName ? `&name=${encodeURIComponent(customName)}` : "";
  return getApiUrl(`/api/courses/download-file?url=${encodeURIComponent(path)}${nameParam}`);
};

export default { getApiUrl, getAssetUrl, getDownloadUrl };
