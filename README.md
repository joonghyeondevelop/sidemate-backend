# Sidemate API

Sidemate는 **사이드 프로젝트 팀원을 모집하고, 지원 / 승인 / 역할 / 진행 상태를 관리하는 플랫폼**입니다.

이 저장소는 **Sidemate의 백엔드 API 서버**입니다.

---

# Tech Stack

### Framework

- NestJS
- TypeScript

### Database

- MySQL
- Prisma ORM

### Authentication

- JWT
- Passport (passport-jwt)
- bcrypt

### Validation

- class-validator
- class-transformer

### Security

- helmet
- cors

### Documentation

- Swagger

### Infrastructure

- Docker

---

# Backend Architecture

이 프로젝트는 **도메인 기반 모듈 구조**로 구성되어 있습니다.

각 도메인은 **Module / Controller / Service**로 분리되어 있습니다.

Controller → Service → Prisma → Database

### Controller

HTTP 요청을 처리하고 Service로 전달합니다.

### Service

비즈니스 로직을 처리합니다.

### Prisma

데이터베이스 접근을 담당합니다.

---

# Key Features

- 사용자 회원가입 및 로그인
- JWT 기반 인증 시스템
- 프로젝트 생성 및 관리
- 프로젝트 모집 포지션 관리
- 프로젝트 지원 시스템
- 프로젝트 멤버 역할 관리

---

# Project Structure

src
├ common
│ ├ config
│ ├ decorators
│ ├ guards
│ ├ filters
│ └ utils
│
├ modules
│ ├ auth
│ ├ users
│ ├ projects
│ ├ positions
│ ├ applications
│ └ members
│
├ prisma
│ ├ prisma.module.ts
│ └ prisma.service.ts
│
└ swagger

---

# Database

주요 엔티티

- User
- Project
- Position
- Application
- ProjectMember

---

# API Documentation

Swagger를 통해 API 문서를 확인할 수 있습니다.

http://localhost:3000/api

---

# Running Locally

## 1. Install dependencies

```bash
npm install
```

Future Improvements

프로젝트 알림 시스템

프로젝트 활동 로그

프로젝트 검색 및 필터

실시간 알림 시스템
