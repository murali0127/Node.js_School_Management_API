const asyncHandler = require('../utils/asyncHandler');
const success = require('../utils/apiResponse');
const { createSchool, listSchoolsByProximity, listSchoolsByAlphabeticOrder } = require('../services/schoolServices');

const addSchool = asyncHandler(async (req, res) => {
      const school = await createSchool(req.body);
      console.log(school)
      return success(
            res,
            201,
            'School added successfully',
            school
      );
});


const listSchools = asyncHandler(async (req, res) => {

      const { latitude, longitude } = req.query;
      const schools = await listSchoolsByProximity(latitude, longitude);
      return success(res, 200, 'Schools fetched successfully', {
            count: schools.length,
            userLocation: { latitude, longitude },
            schools,
      });
});

module.exports = { addSchool, listSchools };
