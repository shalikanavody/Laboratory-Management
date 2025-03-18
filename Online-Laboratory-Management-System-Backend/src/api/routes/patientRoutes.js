const router = require("express").Router();

const {
    registerPatient,
    getPatients,
    getOnePatient,
    deletePatient,
    updatePatient,
    getFilteredPatients
} = require("../controllers/patientController");
const {
    verifyTokenAuthorization,
    verifyTokenAndLabAss,
} = require("../verifyToken/verifyToken");

// defining routes
router.post("/register", registerPatient);
router.get("/", verifyTokenAndLabAss, getPatients);
router.post("/filter", verifyTokenAuthorization, getFilteredPatients);
router.get("/:id", verifyTokenAuthorization, getOnePatient);
router.delete("/delete/:id", verifyTokenAndLabAss, deletePatient);
router.put("/update/:id", verifyTokenAuthorization, updatePatient);

module.exports = router;