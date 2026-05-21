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
      console.log(`latitude : ${latitude} and longitude : ${longitude}`)
      if (!latitude || !longitude || !latitude.trim() || !longitude.trim()) {
            return success(res, 204, 'Query Strings Required to Fetch the List of Schools', null)
      }
      const schools = await listSchoolsByProximity(latitude, longitude);
      return success(res, 200, 'Schools fetched successfully', {
            count: schools.length,
            userLocation: { latitude, longitude },
            schools,
      });
});

module.exports = { addSchool, listSchools };
