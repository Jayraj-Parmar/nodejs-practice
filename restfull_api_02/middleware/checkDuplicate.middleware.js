import employee from "../models/employee.model.js";
const checkDuplicate = (fields) => {
  return async (req, res, next) => {
    try {
      for (const field of fields) {
        const value = req.body[field];
        if (!value) continue;
        const existing = await employee.findOne({ [field]: value });
        if (existing) {
          return res.status(409).json({
            message: `Employee's ${field} '${value}' already exists.`,
          });
        }
      }
      next();
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: err.message });
    }
  };
};
export default checkDuplicate;
