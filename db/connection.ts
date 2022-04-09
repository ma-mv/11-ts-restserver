
import { Sequelize } from "sequelize";


const db = new Sequelize('node', 'root', '1234.q', {
    host: 'localhost',
    dialect: 'mysql'
    // logging: false
});


export default db;

