# DevOps Deployment Dashboard 🚀

A full-stack real-time DevOps monitoring dashboard that tracks deployments, logs, workflows, and system health metrics using GitHub Actions, Socket.IO, MongoDB, Render, and Vercel.

---

## 📌 Features

- 🔄 Real-time deployment tracking
- 📡 Live logs streaming using Socket.IO
- 📊 Dynamic deployment analytics charts
- ⚙️ GitHub Actions integration
- 🚀 CI/CD workflow monitoring
- 🟢 Deployment status updates:
  - Pending
  - In Progress
  - Success
  - Failed
- 💻 Terminal-style logs UI
- 📈 Server health monitoring
- 🔔 Live activity dashboard
- 🌐 Fully deployed frontend & backend
- 🔐 Authentication system
- 📱 Responsive UI

---

# 🏗️ System Architecture

```text
GitHub Push
    ↓
GitHub Actions Workflow
    ↓
Render Backend Webhook
    ↓
MongoDB Atlas
    ↓
Socket.IO Live Events
    ↓
Vercel Frontend Dashboard
```

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- CSS Modules
- Socket.IO Client
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- SystemInformation

## DevOps / Deployment
- GitHub Actions
- Render
- Vercel
- MongoDB Atlas

---

# 📂 Project Structure
DevOps/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── socket/
│   └── server.js
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── socket.js
│
├── .github/
│   └── workflows/
│       └── dashboard.yml
│
└── README.md
```

---

# ⚙️ Environment Variables
```

## Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
FRONTEND_URL=your_frontend_url
```

---

## Frontend `.env`

```env
VITE_API_URL=your backend_url
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/Devops_Final_Project.git
cd Devops_Final_Project
```

---

## 2️⃣ Install Dependencies

### Backend

```bash
cd Backend
npm install
```

### Frontend

```bash
cd Frontend
npm install
```

---

# ▶️ Run Locally

## Backend

```bash
npm run dev
```

## Frontend

```bash
npm run dev
```

---

# 🔄 GitHub Actions Workflow

The project uses GitHub Actions to send deployment status updates to the backend webhook.

Workflow stages:

```text
Pending
   ↓
In Progress
   ↓
Success / Failed
```

---

# 📡 Real-Time Logs

Socket.IO is used for:

- Live deployment updates
- Real-time logs streaming
- Instant dashboard refresh

---

# 📊 Dynamic Metrics

The dashboard dynamically tracks:

- CPU Usage
- Memory Usage
- Active Deployments
- Critical Errors
- Weekly Deployment Activity

---

# 🌍 Deployment Links

## Frontend
Deployed on Vercel

## Backend
Deployed on Render

## Database
MongoDB Atlas

---

# 🧪 Testing Deployment Flow

Run dummy deployment:

```bash
git commit --allow-empty -m "test deployment"
git push
```

---

# 🔮 Future Improvements

- Docker support
- Kubernetes YAML configs
- Slack/Discord notifications
- Role-based access
- Deployment rollback
- Advanced analytics
- Email alerts
- Multi-service monitoring

---

# 👨‍💻 Author

Developed by Rishu Singla

---

# ⭐ If you like this project

Give it a star on GitHub ⭐
