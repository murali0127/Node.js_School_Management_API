const pool = require('../config/db');

const insertSchool = async ({ name, address, latitude, longitude }) => {
      const [result] = await pool.execute(
            `INSERT INTO schools (name, address, latitude, longitude)
     VALUES (:name, :address, :latitude, :longitude)`,
            { name, address, latitude, longitude }
      );
      return result.insertId;
};

const findSchoolById = async (id) => {
      const [rows] = await pool.execute(
            `SELECT id, name, address, latitude, longitude FROM schools WHERE id = :id`,
            { id }
      );
      return rows[0] || null;
};

const findAllSchools = async () => {
      const [rows] = await pool.query(
            `SELECT id, name, address, latitude, longitude FROM schools`
      );
      return rows;
};

const findAllSchoolsOnOrder = async () => {
      const [rows] = await pool.query(`
            SELECT 
                  id,
                  name,
                  address,
                  latitude,
                  longitude
            FROM schools
            ORDER BY name ASC
      `);

      return rows;
}
module.exports = { insertSchool, findSchoolById, findAllSchools, findAllSchoolsOnOrder };
