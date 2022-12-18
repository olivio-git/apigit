import mysql from 'mysql2';
import {
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    DB_NAME,
} from './config.js'
export const db=mysql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_NAME,
    ssl:{
        rejectUnauthorized:false
    }
})

