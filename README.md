# To-Do List Application

A simple and responsive **To-Do List Application** built using **Spring Boot** for the backend and **HTML, CSS, and JavaScript** for the frontend. The application allows users to create, view, update, and delete tasks through REST APIs.

---

## Features

-  Add new tasks
-  View all tasks
-  Update task status (Complete/Incomplete)
-  Delete tasks
-  Real-time UI updates using JavaScript Fetch API
-  Responsive and clean user interface
-  RESTful API architecture

---

##  Tech Stack

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Maven

### Frontend
- HTML5
- CSS3
- JavaScript (Fetch API)

### Database
- MySQL

### Tools
- IntelliJ IDEA
- Postman
- Git & GitHub

---

##  Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### 2️⃣ Navigate to the project

```bash
cd your-repository
```

### 3️⃣ Configure MySQL

Update your `application.properties` file.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
```

### 4️⃣ Run the application

```bash
mvn spring-boot:run
```

or

Run `ToDoListApplication.java` from your IDE.

---

## Access the Application

Open your browser and visit:

```
http://localhost:8082
```
---
# Made by Nivya Mahajan 2026
