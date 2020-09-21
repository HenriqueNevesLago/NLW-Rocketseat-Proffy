// const database = require('./db')
// const createProffy = require('./createProffy')
// database.then(async (db) => {
//     //inserir dados

//     proffyValue = {
//         name: 'Mayk Brito',
//         avatar: 'https://i.pinimg.com/236x/8d/07/d9/8d07d969955c7044702e7da9703e17f1.jpg',
//         whatsapp: '899749932',
//         bio: 'Instrutor de educação Física',
//     }
//     classValue = {
//         subject: 1,
//         cost:"20",
//         //o proffy id virá pelo BD
//     }
//     classScheduleValues = [
//         //class id vira automáticamente pelo BD
//         {
//         weekday: 1,
//         time_from: 720,
//         time_to: 1220
//     },
//     {
//         weekday: 0,
//         time_from: 520,
//         time_to: 1220
//     }
// ]

//     // await createProffy(db, {proffyValue, classValue, classScheduleValues})
//     //Consultar dados inseridos

//     // todos os proffys
//     const selectedProffys = await db.all("SELECT * FROM proffys")
//     // console.log(selectedProffys)

//     // consultar as classes de um determinado proffesor e trazer junto aos dados do professor
//     const selectClassesAndProffys = await db.all(`
//         SELECT classes.*, proffys.*
//         FROM proffys
//         JOIN classes ON (classes.proffy_id = proffys.id)
//         WHERE classes.proffy_id = 1;
//     `)
//     // console.log(selectClassesAndProffys)

//     // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
//     // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
//     // o time_to precisa ser a cima desse valor

//     const selectClassesSchedules = await db.all (`
//         SELECT class_schedule.*
//         FROM class_schedule
//         Where class_schedule.class_id = 1
//         AND class_schedule.weekday = "0"
//         AND class_schedule.time_from <= "520"
//         AND class_schedule.time_to > "120"
//     `)
//     // console.log(selectClassesSchedules)
// })