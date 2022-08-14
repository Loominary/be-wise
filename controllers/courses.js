const joi = require('joi');
const database = require('./database');
const fileMgmt = require('../shared/fileMgmt');

module.exports ={
getAllCourses: async function (req, res, next){
    const param = req.query;

    const schema = joi.object({
        column: joi.string().valid('name', 'price').default('name'),
        sort: joi.string().valid('ASC', 'DESC').default('ASC'),
    });

    const { error, value } = schema.validate(param);

    if (error) {
        console.log(error);
        res.status(400).send('add failed');
        return
    }

    const fieldsMap = new Map([
        ['name', 'courses.name'],
        ['price', 'courses.price'],
    ]);

    const sql = `SELECT id, course_code, name, description, price, start_date, lessons, ( SELECT CONCAT(name, ' ', surname) FROM lecturers WHERE id = courses.lecturer ) AS lecturer, ( SELECT name FROM categories WHERE id = courses.category ) AS category FROM courses ORDER BY ${fieldsMap.get(value.column)} ${value.sort};`

    try {
        const result = await database.query(sql);
        res.json(result[0])
    }
    catch(err){
        console.log(err);
    }
},

exportCourses: function (req, res, next) {
    
    const sql = "SELECT id, course_code, name, description, price, start_date, lessons, ( SELECT CONCAT(name, ' ', surname) FROM lecturers WHERE id = courses.lecturer ) AS lecturer, ( SELECT name FROM categories WHERE id = courses.category ) AS category FROM courses;"

    fileMgmt.exportToFile(res, sql, 'courses');
},

findCourse: async function (req, res, next) {
    console.log('findcoursehere');
    const param = req.query;

    const schema = joi.object({
        search: joi.string().required().min(2)
    });

    const { error, value } = schema.validate(param);

    if (error) {
        res.status(400).send(`search error: ${error}`);
        throw error;
    }

    const searchQuery = `%${value.search}%`;

    const sql = `SELECT crs.course_code, crs.name, crs.description, crs.price, crs.start_date, crs.lessons, ( SELECT CONCAT(name, ' ', surname) FROM lecturers WHERE id = crs.lecturer ) AS lecturer, 
    categories.id AS category_id, categories.name AS category_name 
    FROM courses crs
    LEFT JOIN categories ON crs.category = categories.id
    WHERE categories.name LIKE ?
    ORDER BY crs.name ASC;`;

    try {
        const result = await database.query(
            sql,
            [
                searchQuery,
                
            ]
        );
            
        res.json(result[0]);
    } catch (err) {
        res.status(400).send(`search error: ${err}`);
        throw error;
    }
},

}