const checkDuplicate = (fields, model) => {
  return async (req, res, next) => {
    try {
      for (const field of fields) {
        const newValue = req.body[field];
        if (!newValue) continue;
        const existingData = await model.findOne({ [field]: newValue });
        if (existingData) {
          return res.status(409).json({
            message: `${field} '${newValue}' already exists.`,
          });
        }
      }
      next();
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
};

export default checkDuplicate;
