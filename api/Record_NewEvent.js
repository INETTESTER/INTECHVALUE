import http from 'k6/http';
import { token } from './env.js';
import { SharedArray } from 'k6/data';
const data2 = new SharedArray('id', function () {
  const json = JSON.parse(open('../file/areas.json'));
  return json.data.map(item => item.id);
});
export function Record_NewEvent(scenario, areaId) {
  const id = data2[scenario.iterationInTest];
  //const url = 'https://api.thunderinsure.com/api/v1/activity/newPlants';
  const url = 'https://api2.thunderinsure.com/api/v1/activity/newPlants';

  const payload = {
    //id: '' + id,
    id: '' + areaId,
    dry_herbicide_id: '1',
    plowing_blasting_id: '1',
    plowing_blasting_amt: '1',
    organic_fertilizer_id: '1',
    fertilizer_type_id: '1',
    fertilizer_rate_amt: '1',
    fertilizer_created_at: '2024-09-13',
    dolomite_id: '1',
    dolomite_rate_amt: '1',
    dolomite_created_at: '2024-09-05',
    drainage_area_not_flooded_id: '1',
    groove_distance_id: '1',
    groove_distance_more_160_cm_id: '1',
    plant_species_id: '1',
    breeding_id: '1',
    weed_control_id: '1',
    plant_disease_id: '1',
    plant_disease_type_id: '1',
    plant_disease_percent_amt: '1',
    plant_disease_control_id: '1',
    plant_insect_id: '1',
    plant_insect_type_id: '1',
    plant_insect_percent_amt_1: '1',
    crop_loss_estimate_amt: '1',
    plant_date: '2024-12-22',
    'fertilizers[0][fertilizer_per_desired_yield_id]': '1',
    'fertilizers[0][fertilizer_per_desired_yield_rate_amt]': '1',
    'fertilizers[0][fertilizer_n]': '15',
    'fertilizers[0][fertilizer_p]': '15',
    'fertilizers[0][fertilizer_k]': '15',
    'fertilizers[0][fertilization_date]': '2024-09-19',
    'plantDiseaseTypes[0]': '1',
    'plantInsectTypes[0]': '1',
    'plantInsectTypes[1]': '2',
    germination_percentage_id: '1',
    group_maintenance_code: '012101',
  };

  const params = {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = http.post(url, payload, params);

  //console.log('Response body:', response.body);
  return response;
}
