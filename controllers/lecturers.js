const database = require('./database');

module.exports ={
getAllLecturers: async function (req, res, next){
    const sql ="SELECT * FROM lecturers"

    try {
        const result = await database.query(sql);
        res.json(result[0])
    }
    catch(err){
        console.log(err);
    }
}

}