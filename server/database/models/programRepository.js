const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "category" as configuration
    super({ table: "program" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of categories
    return rows;
  }

  async readFilterById(id) {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ${id} `
    );

    // Return the array of categories
    return rows;
  }
}

module.exports = ProgramRepository;