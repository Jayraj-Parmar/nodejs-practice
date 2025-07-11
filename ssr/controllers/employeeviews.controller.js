import employee from "../models/employee.model.js";

const handleGetAllEmployee = async (req, res) => {
  try {
    const allEmployeeData = await employee.find();
    if (allEmployeeData.length === 0) {
      return res.status(204).render("employeedata", { allEmployeeData });
    }
    res.status(200).render("employeedata", { allEmployeeData });
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};
const handleCreateEmployee = async (req, res) => {
  res.render("createemployee");
};
export { handleGetAllEmployee, handleCreateEmployee };
