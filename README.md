# 🚀 Hero Apps
App Name : HERO.IO
It is a modern React-based web application that showcases different web apps, their details, and installation guides.

**MERN Stack Web Application – Download your favorite apps easily**

---

## 🌟 Project Overview
HERO.IO is a platform where users can easily explore a variety of useful applications   each with clear details about their features, size, and user reviews.
The site also includes a separate installation guide, a complete apps listing, and an option for developers to contribute to the project directly.

**Live Project:** : https://heroapps-haupia-e82bea.netlify.app/

---

## 🖥 Screenshot
![Hero Apps Screenshot](assets/hero-apps-screenshot.png)
*Add a clean screenshot of homepage or app listing page*

---

## 🛠 Technologies Used
- **Frontend:** React.js, HTML5, CSS3, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (optional, for admin login)  
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

---

## ⚙ Core Features
- Browse apps by categories (Games, Productivity, Social, etc.)  
- Search apps by name or type  
- Detailed app description pages  
- Download button for each app  
- Admin panel to add/edit apps (optional)  
- Responsive design for all devices  
- Error404 & App Not Found pages  

---

## 📦 Dependencies
### Backend
- express
- mongoose
- dotenv
- cors
- bcryptjs
- jsonwebtoken (if authentication implemented)

### Frontend
- react
- react-router-dom
- axios
- redux (optional)
- react-toastify (optional for notifications)

---

## 💻 Local Setup
Follow these steps to run Hero Apps locally:

### Step 1: Clone the Repository
```bash
git clone https://github.com/Shourav52/hero-apps.git
cd hero-apps

### Step 2: Setup Backend
cd server
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

Start backend server:
npm run server
Backend runs on: http://localhost:5000

### Step 3: Setup Frontend
cd ../client
npm install
npm start


Frontend runs on: http://localhost:3000

### Step 4: View the Project

Open http://localhost:3000
 in your browser

Browse, search, and download apps
