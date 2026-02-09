import http from 'k6/http';
import { token } from './env.js';

const imgPath = open('../file/image.png', 'b'); // เปิดไฟล์ใน init stage

export function Create_Areas(cid) {
    const base = cid + '9-0000163619-'; // 14 ตัว
    const suffix = `${__VU}${__ITER}`.padStart(4, '0'); // ให้ครบ 4 ตัว
    const land_no = (base + suffix).slice(0, 18);
    // const base = cid + '9-0000163619-'; // 14 ตัว
    // const suffix = ((__VU * 1000) + __ITER).toString().padStart(4, '0').slice(-4);
    // const land_no = base + suffix;
    //console.log(land_no);


    const url = 'https://api.thunderinsure.com/api/v1/areas';

    const payload = {
        land_no: '' + land_no,
        name: '-',
        area_amt: '11.346611534275',
        yield_amt: '20',
        approveSts: '1',
        point: JSON.stringify({ lat: 14.753059166666667, lng: 102.92649583333333 }),
        coordinates: JSON.stringify([
            { lat: 15.276140084673228, lng: 103.1787206669116 },
            { lat: 15.275991117407438, lng: 103.17783966516627 },
            { lat: 15.27480806363326, lng: 103.17774679762978 },
            { lat: 15.274663330139514, lng: 103.1785507829047 },
        ]),
        supervisor_id: '11943',
        farmer_id: '11615',
        zone_id: '1',
        province_id: '1',
        district_id: '1',
        subdistrict_id: '1',
        village_id: '1',
        root: '1',
        sequence: '1',
        plant_cat_id: '1',
        ownership_id: '1',
        level_of_the_area_id: '1',
        wasted_space_id: '1',
        images: [
            http.file(imgPath, 'image1.png'),
            http.file(imgPath, 'image2.png'),
            http.file(imgPath, 'image3.png'),
        ],
        land_no_ref: 'test',
        production_year_id: '9',
        main_plant_category_id: '1',
        wasted_space_amt: '1',
        areaSts: '1',
    };

    const params = {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    };

    const response = http.post(url, payload, params);
    //console.log('Response body:', response.body);
    return response;
}
