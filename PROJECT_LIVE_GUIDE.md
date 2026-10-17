# 🚀 Cybrical Tech - Project Live & Deployment Guide

Yeh complete documentation aapko **Cybrical Tech LMS, Admin Portal aur AI Assistant** ko live internet par deploy karne, manage karne aur locally run karne ke step-by-step instructions provide karta hai.

---

## 📌 1. Project Overview & Live URLs
* **GitHub Repository:** [https://github.com/panditvishalpathak/Cybrical-Tech](https://github.com/panditvishalpathak/Cybrical-Tech)
* **Live Website URL:** [https://cybrical-tech.onrender.com](https://cybrical-tech.onrender.com)
* **Backend Health Check:** [https://cybrical-tech.onrender.com/api/health](https://cybrical-tech.onrender.com/api/health)
* **Admin Login Portal:** [https://cybrical-tech.onrender.com/admin/login](https://cybrical-tech.onrender.com/admin/login)
* **Database:** MongoDB Atlas Cloud Cluster
* **AI Assistant:** Perplexity Live Web Search + OpenAI Natural Language Reasoning

---

## 🌐 2. Live Hosting Steps (Render Single-URL Deployment)

Aapka project aise setup hai ki poora **Frontend (React)** aur **Backend (Node/Express API)** dono ek hi single link par live chalte hain:  
👉 **`https://cybrical-tech.onrender.com`**

Agar kabhi future me Render par dobara setup karna ho, toh ye steps hain:

### Step 1: Render Account
* [render.com](https://render.com) par jayein aur GitHub se Sign In karein.

### Step 2: New Web Service Banayein
* Render Dashboard me upar **New +** button par click karein.
* **Web Service** option choose karein.
* Apna GitHub repository **`Cybrical-Tech`** select karein.

### Step 3: Service Settings
| Setting | Value |
| :--- | :--- |
| **Name** | `cybrical-tech` |
| **Region** | `Singapore` (ya koi bhi nearest) |
| **Root Directory** | `backend` *(Zaroori: backend likhein)* |
| **Environment** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

### Step 4: Environment Variables (Secrets) Add Karein
Render Dashboard me **Environment Variables** section me jaakar ye 4 variables add karein:

1. `PORT` = `5000`
2. `MONGO_URI` = `mongodb+srv://cybricaladmin:CybricalTest2026@cluster0.uoawsnd.mongodb.net/cybricaltech?retryWrites=true&w=majority`
3. `JWT_SECRET` = `cybrical_super_secret_key_2026`
4. `OPENAI_API_KEY` = *(Aapki OpenAI ya Perplexity API key)*

### Step 5: Deploy
* Niche **Create Web Service** button dabayein.
* 2-3 minute me status **Live** ho jayega!

---

## 💻 3. Local Machine Par Run Karne Ke Steps

### A. Backend Start Karein:
```bash
cd /Users/macbook/Desktop/cybrical-tech/backend
npm run dev
```
👉 Chalu hoga: `http://localhost:5000`

### B. Frontend Start Karein:
Nayi terminal window kholein:
```bash
cd /Users/macbook/Desktop/cybrical-tech/frontend
npm run dev
```
👉 Chalu hoga: `http://localhost:5173`

### C. Mobile / LAN Testing (Same Wi-Fi par mobile me chalane ke liye):
```bash
cd /Users/macbook/Desktop/cybrical-tech/frontend
npm run dev -- --host
```

---

## 🔄 4. Naya Code Change Karke Live Update Kaise Karein

Jab bhi aap koi naya feature ya page edit karein aur use live karna ho:

```bash
# 1. Frontend ka naya production build banayein
cd /Users/macbook/Desktop/cybrical-tech/frontend
npm run build

# 2. Built frontend files ko backend/public me copy karein
cd /Users/macbook/Desktop/cybrical-tech
rm -rf backend/public
cp -r frontend/dist backend/public

# 3. GitHub par push karein
git add .
git commit -m "feat: added new feature"
git push origin main
```

👉 Push karte hi Render apne aap naya code pull karke **2 minute me live website update** kar dega!

---

## ☁️ 5. Alternative Hosting (Frontend Vercel + Backend Render)

Agar aapko Frontend Vercel par alag host karna ho:
1. [vercel.com](https://vercel.com) par jayein aur `Cybrical-Tech` repo import karein.
2. Root Directory me **`frontend`** select karein.
3. Settings ➔ Environment Variables me:
   * **Key**: `VITE_API_URL`
   * **Value**: `https://cybrical-tech.onrender.com`
4. **Deploy** par click karein.

---

## ⚠️ 6. Important Notes & Troubleshooting

1. **Free Render Cold Start:**  
   Free tier par 15 minute inactivity ke baad Render sleep mode me chala jata hai. Isliye jab bohot der baad pehli baar website open karte hain, toh pehla page khulne me 30-50 seconds lag sakte hain. Uske baad full speed chalega.

2. **MongoDB Atlas IP Whitelist:**  
   MongoDB Atlas Dashboard ([cloud.mongodb.com](https://cloud.mongodb.com)) me **Network Access** me IP address hamesha `0.0.0.0/0` (Allow from anywhere) hona chahiye taaki Render cloud se database connect ho sake.

3. **Admin Credentials:**  
   Admin Portal login link: `https://cybrical-tech.onrender.com/admin/login`

---

## ☁️ 7. Google Drive Se Course ZIP Files Add Karna (Recommended)

Render ke free tier par server restart hone par local files delete ho sakti hain. Isliye Google Drive use karna **100% permanent aur safe** hai:

1. Apni course ZIP file ko **Google Drive** par upload karein.
2. File par right-click ➔ **Share** ➔ General Access: **"Anyone with the link" (Viewer)** set karke **Copy link** karein.
3. [Admin Portal](https://cybrical-tech.onrender.com/admin/login) me course open karein ➔ Section 01 **"Course ZIP Files"** me jayein.
4. **"🌐 Google Drive Link (Recommended)"** tab select karein.
5. ZIP Title aur Google Drive share link paste karke **"Add Google Drive ZIP to Course"** par click karein.
6. System ise direct 1-click download link me automatically convert kar deta hai.
7. Students ko Course Details page par **"☁️ Google Drive"** badge ke sath instant high-speed download milega!

