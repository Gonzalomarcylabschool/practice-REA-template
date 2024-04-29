/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('username').notNullable().unique();
  table.string('password_hash').notNullable();
  table.timestamps(true, true);
}).createTable('comments', (table) => {
  table.increments();
  table.string('body').notNullable();
  table.integer('user_id').unsigned().notNullable();
  table.foreign('user_id').references('users.id').onDelete('CASCADE');
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('comments').dropTable('users');
