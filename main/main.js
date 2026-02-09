//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';
import { Login } from '../api/Login.js';
import { Create_Areas } from '../api/Create_Areas.js';
import { Areas_All } from '../api/Areas_All.js';
import { Areas_per500 } from '../api/Areas_per500.js';
import { Update_Areas } from '../api/Update_Areas.js';
import { Record_NewEvent } from '../api/Record_NewEvent.js';
import { Provinces } from '../api/Provinces.js';
import { District } from '../api/District.js';
import { Sub_District } from '../api/Sub_District.js';
import { Village } from '../api/Village.js';
import { ApproveSts } from '../api/ApproveSts.js';
import { Production_Years } from '../api/Production_Years.js';
import { Area_Detail } from '../api/Area_Detail.js';
import { GetCoordinatesByZoneId } from '../api/GetCoordinatesByZoneId.js';
import { Update_Areas2 } from '../api/Update_Areas2.js';
//import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //========= Scenario Mobile ===================================
  response = Login()
  error_check(response);
  if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
    console.log("เข้าสูระบบ Fail : " + response.status);
    return;
  }
  sleep(1);

  response = Create_Areas(cid)
  error_check(response);
  if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
    console.log("สร้างข้อมูลแปลง Fail : " + response.status);
    return;
  }
  const data = response.json();
  const areaId = data.id;
  const landNo = data.land_no;
  sleep(1);

  response = Areas_per500()
  error_check(response);
  if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
    console.log("ดาวน์โหลดข้อมูลแปลง Fail : " + response.status);
    return;
  }
  sleep(1);

  response = Record_NewEvent(scenario, areaId)
  error_check(response);
  if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
    console.log("บันทึกกิจกรรมปลูกใหม่ Fail : " + response.status);
    return;
  }
  sleep(1);


  //========= Scenario Frontend ===================================
  // response = Login()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("เข้าสูระบบ Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = Areas_All()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("ข้อมูลแปลงทั้งหมด Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = GetCoordinatesByZoneId()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("GetCoordinatesByZoneId Fail : " + response.status);
  // }
  // response = Provinces()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("จังหวัด Fail : " + response.status);
  // }
  // response = District()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("อำเภอ Fail : " + response.status);
  // }
  // response = Sub_District()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("ตำบล Fail : " + response.status);
  // }
  // response = Village()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("หมู่บ้าน  Fail : " + response.status);
  // }
  // sleep(1);

  // response = Update_Areas2(scenario)
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("อัพเดรตข้อมูลแปลง Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = Area_Detail()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("แสดงรายละเอียดข้อมูลแปลง Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = ApproveSts()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("สถานะแปลง Fail : " + response.status);
  // }
  // response = Production_Years()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("ปีการผลิต Fail : " + response.status);
  // }
  // sleep(1);










  // response = Login()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("เข้าสูระบบ Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = Create_Areas(cid)
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("สร้างข้อมูลแปลง Fail : " + response.status);
  //   return;
  // }
  // const data = response.json();
  // const areaId = data.id;
  // const landNo = data.land_no;
  // sleep(1);

  // response = Areas_All()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("ข้อมูลแปลงทั้งหมด Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = Areas_per500()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("ดาวน์โหลดข้อมูลแปลง Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = Area_Detail()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("แสดงรายละเอียดข้อมูลแปลง Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = Update_Areas(scenario, areaId, landNo)
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("อัพเดรตข้อมูลแปลง Fail : " + response.status);
  //   return;
  // }
  // sleep(1);

  // response = Record_NewEvent(scenario, areaId)
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("บันทึกกิจกรรมปลูกใหม่ Fail : " + response.status);
  //   return;
  // }
  // sleep(1);
  // //====================================================================================================================
  // response = Provinces()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("จังหวัด Fail : " + response.status);
  // }
  // sleep(1);
  // response = District()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("อำเภอ Fail : " + response.status);
  // }
  // sleep(1);
  // response = Sub_District()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("ตำบล Fail : " + response.status);
  // }
  // sleep(1);
  // response = Village()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("หมู่บ้าน  Fail : " + response.status);
  // }
  // sleep(1);
  // response = ApproveSts()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("สถานะแปลง Fail : " + response.status);
  // }
  // sleep(1);
  // response = Production_Years()
  // error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log("ปีการผลิต Fail : " + response.status);
  // }
  // response = Create_Areas(cid)
  // error_check(response);
  // sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: false,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 4) {
  options = {
    insecureSkipTLSVerify: true,
    stages: [
      { duration: '2m', target: user },  // ramp-up
      { duration: '5m', target: user },  // steady load
      { duration: '2m', target: 0 },    // ramp-down
    ],
    thresholds: {
      http_req_failed: ['rate<0.01'],        // error rate < 1%
      http_req_duration: ['p(95)<1000'],     // 95% requests < 1s
    },
  };
}
else if (scenariox == 5) {
  options = {
    insecureSkipTLSVerify: true,
    stages: [
      { duration: '1m', target: 100 },   // เริ่มจาก 100 VUs
      { duration: '1m', target: 200 },
      { duration: '1m', target: 400 },
      { duration: '1m', target: 600 },
      { duration: '1m', target: 800 },
      { duration: '1m', target: 1000 },
      { duration: '1m', target: 1200 },  // เพิ่มขึ้นเรื่อย ๆ จนถึงจุดที่ระบบอาจล้ม
      { duration: '2m', target: 0 },     // ลด VUs ลง
    ],
    thresholds: {
      'http_req_failed': ['rate<0.1'],    // กำหนดว่าผิดพลาดเกิน 10% ถือว่าล้ม
      'http_req_duration': ['p(95)<5000'] // 95% ของ request ต้อง < 5 วินาที
    }
  };
}
else if (scenariox == 6) {
  options = {
    insecureSkipTLSVerify: true,
    stages: [
      { duration: '1m', target: 10 },      // เริ่มเบา ๆ
      { duration: '30s', target: 500 },    // Spike ขึ้นทันที
      { duration: '1m', target: 500 },     // รักษาระดับสูง
      { duration: '30s', target: 10 },     // ลดทันที
      { duration: '1m', target: 10 },      // รักษาระดับต่ำ
    ],
    thresholds: {
      'http_req_failed': ['rate<0.1'],     // Error rate ต้อง <10%
      'http_req_duration': ['p(95)<10000'], // 95% ของ request < 10 วินาที
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };