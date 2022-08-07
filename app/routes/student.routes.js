const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller.js");
/**
 * @swagger
 * components:
 *  schemas:
 *    student:
 *      type: object
 *      required:
 *        - studentid
 *        - name
 *        - major
 *      properties:
 *        id:
 *          type: int
 *          description: auto-generated id of student
 *        studentid:
 *          type: string
 *          description: string of student - id
 *        name:
 *          type: string
 *          description: fullname of student
 *        major:
 *          type: string
 *          description: name of major
 *      example:
 *        id: 1
 *        studentid: XXXXXXXXX-X
 *        name: Mickey Mouse
 *        major: Computer and Information Science
 */

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: The student managing API
 */

/**
 * @swagger
 * /student:
 *   get:
 *     summary: Returns the list of all student
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: The list of the student
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/student'
 */

router.get("/", (req, res) => {
  studentController.findAll(req, res);
});
router.get("/:id", (req, res) => {
  studentController.findOne(req, res);
});
router.post("/", (req, res) => {
  studentController.create(req, res);
});
router.put("/:id", (req, res) => {
  studentController.update(req, res);
});
router.delete("/:id", (req, res) => {
  studentController.delete;
});

module.exports = router;
