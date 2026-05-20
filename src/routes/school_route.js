const router = require('express').Router();
const { createServer } = require('mysql2');
const { addSchool, listSchools } = require('../controllers/school_controller');
const validate = require('../middleware');
// school validation modules
const {
      addSchoolSchema,
      listSchoolsSchema,
} = require('../validation');

router.get('/', (req, res) => {
      res.json({ success: true, message: 'Welcome to School_Magaement API' });
})
router.post('/addSchool', validate(addSchoolSchema, 'body'), addSchool);

router.get('/listSchools', listSchools);

module.exports = router;
