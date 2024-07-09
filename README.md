<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Tools that needs to be installed:
- Docker (https://docs.docker.com/desktop/install/windows-install/)
- Node (https://nodejs.org/en/download)
- VS Code (https://code.visualstudio.com/)
  
### Tech Stack
- NestJS - Back-end Framework.
- Prisma - Object Relational Mapping (ORM) Tool.
- Supabase - Database, Storage and Authentication Provider.
- PostgreSQL - Database Management System.
- Docker - Containerization Tool.
- Git/Github - Version Control.

### Setting up your application
1. Clone the Repository:
```bash
git clone https://github.com/ErriekaP/expensetracker-backend.git
```
2. Install the libraries with this command:
```bash
npm i
```
3. Install and create the docker containers with this command (make sure that you already started your docker application, this may take some time):
```bash   
npx supabase start
```
  - <i>If you get errors indicating that the container is unhealthy, run this instead:</i>
  ```bash   
  supabase start --ignore-health-check
  ```
4. Get supabase credentials:
```bash   
npx supabase status
```
5. Add a .env file
    1. Create a .env file in your root directory
    2. Add this to your .env file:
    ```bash   
    DATABASE_URL = DB URL
    SUPABASE_URL = API URL
    SUPABASE_KEY = anon key
    ```
6. Update the database by the Prisma migrations with these commands:
   
```bash   
npm run prisma:migrate:reset
```

```bash   
npx prisma generate
```

### Running your application
Run the following commands:
1. Run the NestJS backend
```bash   
npm run start
```
- 📌 After you finish programming, run this command to stop the docker containers:
```bash   
    npx supabase stop
```

2. Access Prisma Backend
```bash   
npx prisma studio
```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
