const knex = require('../knex');

class Comment {
  constructor({ id, body, userId }) {
    this.id = id;
    this.body = body;
    this.userId = userId;
  }

  static async list() {
    const query = `SELECT * FROM comments`;
    const { rows } = await knex.raw(query);
    // use the constructor to hide each user's passwordHash
    return rows.map((comment) => new Comment(comment));
  }

  static async find(id) {
    const query = `SELECT * FROM users WHERE id = ?`;
    const { rows } = await knex.raw(query, [id]);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = `SELECT * FROM users WHERE username = ?`;
    const { rows } = await knex.raw(query, [username]);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async create(username, password) {
    // hash the plain-text password using bcrypt before storing it in the database
    const passwordHash = await authUtils.hashPassword(password);

    const query = `INSERT INTO users (username, password_hash)
      VALUES (?, ?) RETURNING *`;
    const { rows } = await knex.raw(query, [username, passwordHash]);
    const user = rows[0];
    return new User(user);
  }

  // this is an instance method that we can use to update
  static async update(id, username) { // dynamic queries are easier if you add more properties
    const query = `
      UPDATE users
      SET username=?
      WHERE id=?
      RETURNING *
    `
    const { rows } = await knex.raw(query, [username, id])
    const updatedUser = rows[0];
    return updatedUser ? new User(updatedUser) : null;
  };

  static async deleteAll() {
    return knex('users').del()
  }
}

module.exports = Comment;
