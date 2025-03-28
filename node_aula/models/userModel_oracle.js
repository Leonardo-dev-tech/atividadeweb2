// models/userModel_oracle.js
const oracledb = require('oracledb');

// ... (função getConnection)

// Função para buscar todos os usuários
async function findAllUsers() {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(
      `SELECT * FROM user_data`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    return result.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

// Função para criar um novo usuário
async function createUser(userData) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(
      `INSERT INTO user_data (name, email) VALUES (:name, :email)`,
      [userData.name, userData.email]
    );
    await connection.commit();
    return result.rowsAffected;
  } catch (err) {
    console.error(err);
    await connection.rollback();
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

// Função para excluir um usuário
async function deleteUser(userId) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(
      `DELETE FROM user_data WHERE id = :id`,
      [userId]
    );
    await connection.commit();
    return result.rowsAffected;
  } catch (err) {
    console.error(err);
    await connection.rollback();
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

// ... (outras funções)

module.exports = {
  // ... (outras funções exportadas)
  findAllUsers,
  createUser,
  deleteUser,
};