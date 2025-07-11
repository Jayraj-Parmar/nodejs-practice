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
      return res.status(400).send({ error: "All feilds required" });
    }
    await employee.create(newEmpData);
    res.status(302).redirect("/employeedata");
  } catch (error) {
    res.send({ error: "Server Error", message: error.message });
  }
};
const handleDeleteEmployee = async (req, res) => {
  try {
    const { _id } = req.body;
    await employee.findByIdAndDelete(_id);
    res.status(302).redirect("/employeedata");
  } catch (error) {
    res.send({ error: "Server Error", message: error.message });
  }
};
export { handleCreateEmployee, handleDeleteEmployee };
