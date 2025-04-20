const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'db', 'todos.db');
const db = new sqlite3.Database(dbPath);

// Create table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      priority TEXT DEFAULT 'low',
      isComplete INTEGER DEFAULT 0,
      isFun TEXT DEFAULT 'true'
    )
  `);
});

module.exports = {
  getAllTodos(callback) {
    db.all(`SELECT * FROM todos`, [], callback);
  },

  getTodoById(id, callback) {
    db.get(`SELECT * FROM todos WHERE id = ?`, [id], callback);
  },

  addTodo(todo, callback) {
    const { name, priority = 'low', isFun = 'true' } = todo;
    db.run(
      `INSERT INTO todos (name, priority, isFun) VALUES (?, ?, ?)`,
      [name, priority, isFun],
      function (err) {
        if (err) return callback(err);
        callback(null, { id: this.lastID, name, priority, isComplete: 0, isFun });
      }
    );
  },

  deleteTodo(id, callback) {
    db.run(`DELETE FROM todos WHERE id = ?`, [id], function (err) {
      if (err) return callback(err);
      if (this.changes === 0) return callback(null, false); // Not found
      callback(null, true);
    });
  }
};
