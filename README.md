# clone_coding_wetube
nodejs youtube 클론코딩

## Code
- Node.js 12 ~ 14

## Database
- MongoDB 4.4

## Requirements
- express
- bcrypt 5.0.1
- connect-mongo 4.4.1
- dotenv 10.0.0
- express 4.17.1
- express-session 1.17.2 
- mongoose 5.12.13
- morgan 1.10.0
- node-fetch 2.6.1
- pug 3.0.2

## Router

#### Root

| Router | Info |
|----|----|
| / | Home |
| /join| Join |
| /login | Login
| /search | Search |

#### User

| Router | Info |
|----|----|
| /users/:id | See User |
| /users/logout | Log Out |
| /users/edit | Edit MY Profile |
| /users/delete | Delete MY Profile |

#### Video

| Router | Info |
|----|----|
| /videos/:id | See Video |
| /videos/:id/edit | Edit Video |
| /videos/:id/delete | Delete Video |
| /videos/upload | Upload Video |

## Days

|날짜|내용|
|----|----|
|21.06.09| 설치 및 초기설정 |
|21.06.10| request, response|
|21.06.11| router, clean code, Architecture|
|21.06.12| templates|
|21.06.13| Post, Database|
|21.06.14| Account, Login |
|21.06.16| Session|
|21.06.17| MongoStore |
|21.06.19| Github Login Setting|
|21.06.24| Post Github Login|
|21.06.25| Edit Profile Get|
|21.06.26| Edit Profile Post|