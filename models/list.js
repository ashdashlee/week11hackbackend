import pool from "../db/index.js";

export async function getAllList() {
  const query = "SELECT * FROM bootcampers";
  const result = await pool.query(query);
  const allList = result.rows;
  return allList;
}

export async function getAllNice() {
  const query = "SELECT * FROM bootcampers WHERE nice=true";
  const result = await pool.query(query);
  const allNice = result.rows;
  return allNice;
}

export async function getAllNaughty() {
  const query = "SELECT * FROM bootcampers WHERE nice=false";
  const result = await pool.query(query);
  const allNaughty = result.rows;
  return allNaughty;
}

export async function updateNice(id) {
  const result = await pool.query(
    "UPDATE bootcampers SET nice = NOT nice WHERE id=$1 RETURNING *",
    [id]
  );
  let updatedNice = result.rows[0];
  return updatedNice;
}
