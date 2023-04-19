//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getAllContacts = async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create New contact
//@route POST /api/contacts
//@access public

const createtContact = async (req, res) => {
  console.log("the req body is ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(201).json({ message: "Create contact" });
};

//@desc Get by Id contacts
//@route GET /api/contacts/:id
//@access public

const getContactById = async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc update by Id contacts
//@route PUT /api/contacts/:id
//@access public

const updateContactById = async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc delete by Id contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContactById = async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

module.exports = {
  getAllContacts,
  createtContact,
  updateContactById,
  getContactById,
  deleteContactById,
};
