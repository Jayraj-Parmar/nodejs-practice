import employee from "../models/employee.model.js";

const handleGetAllEmployee = async (req, res) => {
  try {
    const employeeData = await employee.find();
    if (employeeData.length === 0) {
      return res.status(404).json({ message: "No Employee Found" });
    }
    res.status(200).send(employeeData);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const handleGetEmployeeById = async (req, res) => {
  try {
    const emp = await employee.findById(req.params.id);
    if (!emp) {
      return res.status(404).json({ message: "No Employee Found" });
    }
    res.status(200).json(emp);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid employee ID format" });
    }
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.gender ||
      !req.body.department
    ) {
      return res.status(400).json({ error: "All fields are require." });
    }
    const newEmployee = await employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const handleUpdateEmployeeDataById = async (req, res) => {
  try {
    const existingEmployee = await employee.findById(req.params.id);
    if (!existingEmployee) {
      return res.status(404).json({ message: "No Employee Found" });
    }
    const updatedEmployee = await employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Employee Update successfully", updatedEmployee });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid employee ID format" });
    }
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const handleDeleteEmployeeDatById = async (req, res) => {
  try {
    const existingEmployee = await employee.findById(req.params.id);
    if (!existingEmployee) {
      return res.status(404).json({ message: "No Employee Found" });
    }
    await employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid employee ID format" });
    }
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

export {
  handleGetAllEmployee,
  handleGetEmployeeById,
  createEmployee,
  handleUpdateEmployeeDataById,
  handleDeleteEmployeeDatById,
};
