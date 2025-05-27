# Todos SQLite API

This project is a Node.js + Express Todo API that uses SQLite as a persistent backend database instead of an in-memory array. It supports GET, POST, and DELETE operations, ensuring data persists even after server restarts.

---

## Features

- Todo items stored in a SQLite database  
- All API routes operate on the SQLite backend  
- Persistent data across server restarts  
- Clean separation of concerns: no in-memory data storage  
- Basic frontend to interact with the API (in `public/` folder)  

---

## Assignment Requirements

| Requirement                                                    | Status    |
|---------------------------------------------------------------|-----------|
| Converted in-memory todo API to use SQLite backend            | ✅ Done   |
| All GET, POST, DELETE routes operate via backend using SQLite | ✅ Done   |
| Persistent behavior: app doesn’t lose data on server restart  | ✅ Done   |
| Project is a working Node.js + Express app                    | ✅ Done   |
| All logic removed from in-memory array and now uses SQLite DB | ✅ Done   |
| App is deployed to Glitch                                     | ✅ Done   |
| GitHub repo exists and is linked                              | ✅ Done   |


---

## Deployment Links

- GitHub Repository: https://github.com/Ajmalmassoumy/todos-sqlite
- Glitch Deployment: https://kaput-pyrite-cosmonaut.glitch.me/


---

## Setup & Running Locally

1. Clone the repo:  
   ```bash
   git clone https://github.com/Ajmalmassoumy/todos-sqlite.git
