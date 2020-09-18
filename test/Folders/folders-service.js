const FoldersService = {
  getAllFolders(knex) {
    return knex.select("*").from("noteful_folders");
  },
  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into("noteful_folders")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.from("noteful_folders").select("*").where("id", id).first();
  },
  //   deleteNote(knex, id) {
  //     return knex("noteful_notes").where({ id }).delete();
  //   },
  //   updateNote(knex, id, newNoteFields) {
  //     return knex("noteful_notes").where({ id }).update(newNoteFields);
  //   },
};

module.exports = FoldersService;
