// models/UserModelTransation.js
const oracledb = require('oracledb');

// Função para obter uma conexão com o banco de dados Oracle
async function getConnection() {
  return await oracledb.getConnection({
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECTSTRING,
  });
}

// Função para salvar uma transação de usuário
async function saveUserTransaction(transactionData) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(
      `INSERT INTO user_transactions (user_id, transaction_date, amount, description) VALUES (:userId, :transactionDate, :amount, :description)`,
      [
        transactionData.userId,
        transactionData.transactionDate,
        transactionData.amount,
        transactionData.description,
      ],
      { autoCommit: true } // Usando autoCommit para simplificar
    );
    return result.rowsAffected;
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

// Função para buscar transações de um usuário pelo ID do usuário
async function getUserTransactions(userId) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(
      `SELECT * FROM user_transactions WHERE user_id = :userId`,
      [userId],
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

// Outras funções relacionadas a transações...

module.exports = {
  saveUserTransaction,
  getUserTransactions,
  // Outras funções exportadas...
};