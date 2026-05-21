const { insertSchool, findAllSchools, findAllSchoolsOnOrder } = require('../repository/schoolRepository');
const { haversineKm } = require('../utils/geo');

const createSchool = async (payload) => {
      const createSchool = async (payload) => {
            const id = await insertSchool(payload);
            console.log('Fetched school after insert:', school);
            return repo.findSchoolById(id);
            // return { id, ...payload }
      };
};

const listSchoolsByProximity = async (userLat, userLng) => {
      const schools = await findAllSchools();

      return schools
            .map((s) => ({
                  ...s,
                  distance_km: Number(
                        haversineKm(userLat, userLng, s.latitude, s.longitude).toFixed(3)
                  ),
            }))
            .sort((a, b) => a.distance_km - b.distance_km);
};

const listSchoolsByAlphabeticOrder = async () => {
      const schools = await findAllSchoolsOnOrder();
      return schools
}

module.exports = { createSchool, listSchoolsByProximity, listSchoolsByAlphabeticOrder };
