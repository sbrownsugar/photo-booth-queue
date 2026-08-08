/* ============================================================
   ตั้งค่า Firebase — ตั้งค่าเสร็จเรียบร้อยแล้ว ไม่ต้องแก้อะไรอีก

   โปรเจกต์: queue-845ad  ·  ฐานข้อมูล: Realtime Database (Singapore)

   หมายเหตุเรื่องความปลอดภัย: apiKey ของ Firebase ฝั่งเว็บ "เปิดเผยได้"
   โดยธรรมชาติ เพราะมันต้องถูกส่งไปกับหน้าเว็บให้เบราว์เซอร์ลูกค้าอ่านอยู่แล้ว
   ไม่ใช่รหัสผ่าน สิ่งที่กันคนอื่นเข้ามายุ่งจริง ๆ คือ "Rules" ในหน้า
   Realtime Database ไม่ใช่ค่าตัวนี้
   ============================================================ */

window.FIREBASE_CONFIG = {

  apiKey: "AIzaSyBENDBLk1FPwb3oIQo9tR-LbkDcJpjUMMI",

  projectId:   "queue-845ad",
  authDomain:  "queue-845ad.firebaseapp.com",
  databaseURL: "https://queue-845ad-default-rtdb.asia-southeast1.firebasedatabase.app",
};

/* ⚠️ ถ้าตอนสร้าง Realtime Database คุณเลือกที่ตั้งอื่นที่ไม่ใช่ Singapore
   ให้เอาลิงก์ที่ขึ้นบนหน้า Realtime Database มาทับค่า databaseURL ข้างบนแทน
   (ของ US จะลงท้ายด้วย .firebaseio.com ไม่ใช่ .firebasedatabase.app) */
