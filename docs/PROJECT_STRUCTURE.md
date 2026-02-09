# Project Structure Guide

This repository is a Spring Boot backend with an Angular frontend bundled into backend static resources for deployment.

## Root

- `pom.xml`: Backend dependency and build configuration.
- `Procfile`: Heroku start command.
- `system.properties`: Heroku Java runtime version.
- `src/main/java`: Backend source code.
- `src/main/resources`: Backend configuration, templates, and deployed frontend assets.
- `frontend`: Angular source project.

## Backend (`src/main/java/com/programming/techie/humanfirst`)

- `controller`: REST endpoints (`/api/auth`, `/api/posts`, `/api/subreddit`, etc.).
- `service`: Business logic (auth, posts, votes, comments, mail).
- `repository`: Spring Data JPA repositories.
- `model`: JPA entities (`User`, `Post`, `Subreddit`, etc.).
- `dto`: Request/response payload classes.
- `mapper`: Mapping between entities and DTOs.
- `config`: Security, datasource, CORS, bootstrap configuration.
- `security`: JWT provider and filter.
- `exceptions`: Custom exceptions and global handler.

## Backend Resources (`src/main/resources`)

- `application.properties`: Shared defaults.
- `application-local.properties`: Local database profile.
- `application-prod.properties`: Production/Heroku profile.
- `templates`: Email HTML templates.
- `static`: Deployed Angular build output and TinyMCE assets.

## Frontend (`frontend/src/app`)

- `auth`: Login, signup, account verification, profile, auth service/guard.
- `home`: Home feed and domain filtering UI.
- `post`: Create/view post components.
- `subreddit`: Subreddit create/list components and service.
- `comment`: Comment API integration.
- `shared`: Reusable components and services (`post.service`, sidebars, voting).

## Generated/Local-only Directories

These are build artifacts or local dependencies and are safe to regenerate:

- `target`
- `frontend/node_modules`
- `frontend/dist`
