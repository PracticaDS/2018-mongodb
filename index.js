import { MongoClient } from 'mongodb'
const url = 'mongodb://localhost:27017'

const run = async () => {
  const client = await MongoClient.connect(url)
  const db = client.db('pdes')

  const juegos = await db.collection('juegos').find({}).toArray()
  
  console.log(`Hay ${juegos.length} juegos !`)
  console.log(juegos)
}

run()
  .then(() => process.exit(0))
  .catch(err => { console.error(err.message, err.stack); process.exit(-1) })