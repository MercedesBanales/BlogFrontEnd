import { MongoClient } from 'mongodb';

// [{
//     name: 'learn-react',
//     upvotes: 0,
//     comments: [],
// }, {
//     name: 'learn-node',
//     upvotes: 0,
//     comments: [],
// }, {
//     name: 'mongodb',
//     upvotes: 0,
//     comments: [],
// }]

let db;

async function connectToDb(cb) {
    const client = new MongoClient('mongodb://127.0.0.1:27018');
    await client.connect();

    db = client.db('react-blog-db');
    cb();
}

export {
    db, 
    connectToDb
};
