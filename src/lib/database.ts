import Surreal from 'surrealdb.js'

const dbURL = 'http://localhost:8000/rpc';

const dbUser = 'root';
const dbPass = 'root';

export const getDatabaseClient = async () => {
    const db = new Surreal(dbURL);

    await db.signin({
        user: dbUser,
        pass: dbPass
    });

    await db.use('namespace', 'basicsdb');

    return db;
}