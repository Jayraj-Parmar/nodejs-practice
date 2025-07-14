import employee from "../models/employee.model.js";

const getAllEmployee = async (user) => {
  return await employee.find(user);
};
const handleGetAllEmployee = async (req, res) => {
  try {
    const allEmployeeData = await getAllEmployee({ createdBy: req.user._id });
    res.status(200).render("employeedata", { allEmployeeData });
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};
const handleCreateEmployee = async (req, res) => {
  try {
    res.render("createemployee");
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};
const handleDeleteEmployee = async (req, res) => {
  try {
    const allEmployeeData = await getAllEmployee({ createdBy: req.user._id });
    if (allEmployeeData.length === 0) {
      return res.status(204).render("deleteemployee");
    }
    res.status(200).render("deleteemployee", { allEmployeeData });
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};
const handleUpdateEmployee = async (req, res) => {
  try {
    const allEmployeeData = await getAllEmployee({ createdBy: req.user._id });
    if (allEmployeeData.length === 0) {
      return res.status(204).render("updateemployee");
    }
    res.status(200).render("updateemployee", { allEmployeeData });
  } catch (error) {
    res.status(500).json({ error: "Server Error", message: error.message });
  }
};
export {
  handleGetAllEmployee,
  handleCreateEmployee,
  handleDeleteEmployee,
  handleUpdateEmployee,
};
