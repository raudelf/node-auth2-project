
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('id');
        tbl.string('username')
            .notNullable()
            .unique();
        tbl.string('password', 20)
            .notNullable();
        tbl.string('department')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
