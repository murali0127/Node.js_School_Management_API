const asyncHandler = require('../utils/asyncHandler');
const success = require('../utils/apiResponse');
const { createSchool, listSchoolsByProximity, listSchoolsByAlphabeticOrder } = require('../services/schoolServices');

const addSchool = asyncHandler(async (req, res) => {
      const school = await createSchool(req.body);
      return success(res, 201, 'School added successfully', school);
});


const listSchools = asyncHandler(async (req, res) => {

      const { latitude, longitude } = req.query;
      if ((latitude !== null && longitude !== null) || (latitude !== 0 && longitude !== 0)) {
            const schools = await listSchoolsByProximity(latitude, longitude);
            return success(res, 200, 'Schools fetched successfully', {
                  count: schools.length,
                  userLocation: { latitude, longitude },
                  schools,
            });
      } else {

            const schools = await listSchoolsByAlphabeticOrder();
            return success(res, 200, 'Schools fetched successfully', {
                  count: schools.length,
                  sortOrder: 'Aplhabetic',
                  schools,
            });
      }
});

module.exports = { addSchool, listSchools };
