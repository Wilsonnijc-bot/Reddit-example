# humanfirst-MVP (Spring Boot + Angular)

Full-stack Reddit-style app with:
- Java/Spring Boot backend (REST API, JWT auth, JPA)
- Angular frontend (served as static assets in production)
- PostgreSQL in production (Heroku Postgres)
- SMTP for signup verification emails

---

## Tech Stack

### Backend
- Java `21`
- Spring Boot `3.2.5`
- Spring Security + JWT (`jjwt`)
- Spring Data JPA + Hibernate
- PostgreSQL driver (runtime)
- OpenAPI/Swagger (`springdoc-openapi`)
- Maven Wrapper (`./mvnw`)

### Frontend
- Angular `9.x`
- TypeScript
- Bootstrap + ng-bootstrap
- TinyMCE editor
- npm scripts (`npm start`, `npm run build -- --prod`)

### Deployment
- Heroku (`Procfile`, `system.properties`)
- Profile: `prod`

---

## How It Works (Runtime Flow)

```text
Browser
  -> Angular app (frontend/src/app)
    -> HTTP /api/* calls
      -> Spring Controller
        -> Service
          -> Repository (JPA)
            -> PostgreSQL
        -> MailService
          -> SMTP provider
```

---

## Mini File-Structure Flow Chart

```text
humanfirst-MVP
├─ src/
│  └─ main/
│     ├─ java/com/programming/techie/humanfirst/
│     │  ├─ controller/   (REST endpoints)
│     │  ├─ service/      (business logic)
│     │  ├─ repository/   (DB access)
│     │  ├─ model/        (JPA entities)
│     │  ├─ dto/          (request/response payloads)
│     │  ├─ mapper/       (entity <-> dto)
│     │  ├─ security/     (JWT filter/provider)
│     │  └─ config/       (security/cors/datasource/bootstrap)
│     └─ resources/
│        ├─ application.properties
│        ├─ application-local.properties
│        ├─ application-prod.properties
│        ├─ templates/    (mail templates)
│        └─ static/       (built Angular files for deployment)
├─ frontend/
│  ├─ src/app/
│  │  ├─ auth/
│  │  ├─ home/
│  │  ├─ post/
│  │  ├─ subreddit/
│  │  └─ shared/
│  └─ package.json
├─ pom.xml
├─ Procfile
└─ system.properties
```

---

## Main Features

- Signup + account verification email
- Login/logout + JWT auth
- Create/view posts
- Create/list subreddits
- Comment and vote APIs
- Home feed filtering by domain:
  - `all`
  - `discussions`
  - `AI prospects`

---

## Backend API Overview

Base API paths:
- `/api/auth`
- `/api/posts`
- `/api/subreddit`
- `/api/comments`
- `/api/votes`

Examples:
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/posts/`
- `GET /api/posts/by-subreddit/{id}`
- `POST /api/posts/`
- `GET /api/subreddit`

OpenAPI docs:
- `/swagger-ui.html`
- `/v3/api-docs`

---

## Run Locally

## 1) Backend

From repo root:

```bash
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
export PATH="$JAVA_HOME/bin:$PATH"
./mvnw spring-boot:run
```

Notes:
- App reads DB connection from env vars via `DataSourceConfig`.
- For production-like local runs, set `DATABASE_URL` or `JDBC_DATABASE_URL`.

## 2) Frontend (dev mode)

```bash
cd frontend
npm install
npm start
```

Angular dev URL: `http://localhost:4200`  
Backend URL (default): `http://localhost:8080`

---

## Build Frontend Into Backend Static Files

From repo root:

```bash
cd frontend
npm install
npm run build -- --prod
rsync -av --delete dist/humanfirst-mvp/ ../src/main/resources/static/
```

Then package backend:

```bash
cd ..
./mvnw -DskipTests package
```

---

## Heroku Deploy

Typical flow:

```bash
git push origin main
git push heroku main
heroku logs --tail -a <your-app-name>
```

Heroku runtime is defined by:
- `Procfile`
- `system.properties`

Required config vars (typical):
- `DATABASE_URL`
- `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, `MAIL_FROM`
- `APP_URL`

---

## Useful Commands

```bash
# Backend package
./mvnw -DskipTests package

# Check git status quickly
git status -sb

# Tail Heroku logs
heroku logs --tail -a <your-app-name>
```
