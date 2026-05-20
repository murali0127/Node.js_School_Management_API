const router = require('express').Router();
const { createServer } = require('mysql2');
const { addSchool, listSchools } = require('../controllers/school_controller');
const validate = require('../middleware');
// school validation modules
const {
      addSchoolSchema,
      listSchoolsSchema,
} = require('../validation');

router.get('/home', (req, res) => {
      res.json('Welcome to School_Magaement API');
})
router.post('/addSchool', validate(addSchoolSchema, 'body'), addSchool);
router.get('/listSchools', validate(listSchoolsSchema, 'query'), listSchools);

module.exports = router;
