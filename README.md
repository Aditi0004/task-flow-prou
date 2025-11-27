TaskFlow – Full-Stack Employee & Task Management System
A full-stack web application designed for managing employees, tasks, analytics, and workflow operations.  
This project is submitted as part of the **ProU Technology – Full-Stack Development Assessment**.

---

Overview
TaskFlow is a modular and scalable dashboard application built using modern web technologies.  
It includes authentication, a complete UI dashboard, employee and task management workflows, and is structured for backend integration.  
The application follows a professional SaaS-style design and supports both light and dark modes.

---

Tech Stack

Frontend
- Next.js 14 (App Router)
- React 18
- TailwindCSS
- ShadCN UI
- Framer Motion
- Lucide Icons
- Zustand (state management)
- Sonner (toast notifications)

Backend (Prepared for integration)
- API service layer using Axios  
- Mock local storage for authentication and data persistence  
- Folder-based structure ready for Node.js, FastAPI, or Spring Boot integration

Database
- Prepared schema for MySQL/PostgreSQL  
(Currently simulated using local storage for assessment purposes)

---

Features

Authentication
- Login  
- Signup  
- Logout  
- Protected routes  
- Session persistence through local storage

Employee Management
- Add employee  
- Edit employee  
- Delete employee  
- Searchable and sortable employee table  
- Animated modal forms

Task Management
- Create task  
- Update task  
- Set status and priority  
- Filter tasks  
- Status badges and priority indicators

Dashboard
- Animated statistics  
- Donut chart  
- Area chart  
- Recent activity section

Settings
- User profile section  
- Theme selection (dark/light)  
- Notification preferences  

UI/UX
- Modern SaaS dashboard layout  
- Smooth transitions and animations  
- Responsive design  
- Sidebar and top navigation system  
- Blue-accent theme applied throughout

---

Installation & Setup

1. Clone the repository
```bash:
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Access the application
Open the browser and visit:
```
http://localhost:3000
```

---

Live Demo
Add your deployed Vercel link here:
```
https://your-vercel-link.vercel.app
```

---

Bonus Features Implemented
- Complete authentication flow  
- Advanced animations using Framer Motion  
- Toast notification system  
- Dynamic theme handling  
- Dashboard-grade UI components  
- Full responsive behavior  
- Backend-ready API structure  
- Clean and scalable folder architecture  

---

Assumptions
- Local storage is used temporarily for authentication and data persistence  
- Backend APIs can be connected without altering UI components  
- Database schema is prepared for integration  

---

Author
Aditi Ranjan  
