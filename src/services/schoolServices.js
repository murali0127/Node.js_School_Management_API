const repo = require('../repository/schoolRepository');
const { haversineKm } = require('../utils/geo');

const createSchool = async (payload) => {
      const createSchool = async (payload) => {
            const id = await repo.insertSchool(payload);
            return repo.findSchoolById(id);
      };
};

const listSchoolsByProximity = async (userLat, userLng) => {
      const schools = await repo.findAllSchools();

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
      const schools = await repo.findAllSchoolsOnOrder();
      return schools
}

module.exports = { createSchool, listSchoolsByProximity, listSchoolsByAlphabeticOrder };
