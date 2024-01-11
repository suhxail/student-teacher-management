
const router = require('express').Router();
const {
    listPeople,
    listStudentsForMentor,
    listMentorsForStudents,
    createMentors,
    createStudents,
    addStudentForMentor,
    addMentorForStudent
} = require('../controller/controller')

router.get("/", (req, res) => {
    res.status(200).end("welcome to ABC institue")
})

router.get("/people", listPeople);

router.get("/:mentor_id/list_students",listStudentsForMentor);
router.get("/:student_id/mentors_history",listMentorsForStudents);

router.post("/create_mentors", createMentors);
router.post("/create_students", createStudents);

router.post("/:mentor_id/add_student", addStudentForMentor);
router.post("/:student_id/add_mentor/:mentor_id", addMentorForStudent);


router.use("*", (req, res) => {
    res.status(404).send("page not exist")
});

module.exports = router;