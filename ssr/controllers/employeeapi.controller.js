import employee from "../models/employee.model.js";
const handleCreateEmployee = async (req, res) => {
  try {
    const newEmpData = req.body;
    if (
      !newEmpData.name ||
      !newEmpData.email ||
      !newEmpData.gender ||
      !newEmpData.department
    ) {
      res
        .status(404)
        .send({ error: "All feilds required", message: err.message });
    }
    await employee.create(newEmpData);
    res.status(302).redirect("/employeedata");
  } catch (error) {
    res.send({ error: "Server Error", message: error.message });
  }
};
export { handleCreateEmployee };
