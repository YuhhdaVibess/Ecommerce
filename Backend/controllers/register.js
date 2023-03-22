const { json } = require("body-parser");
const saltRounds = 10;

const handleRegister = async (req, res, db, bcrypt) => {
    const { email, firstName, lastName, password } = req.body;
    if (!email || !firstName || !lastName || !password) {
      return res.status(400).json('incorrect form submission');
    }

    if (password.length < 6) {
      return res.status(400).json('Password must be at least 6 characters long');
    }
    if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      return res.status(400).json('Password must contain at least 1 letter and 1 number');
    }

  
    try {
      
      const hash = bcrypt.hashSync(password, saltRounds);
      await db.query('BEGIN');
  
      const loginEmail = await db.one(
        'INSERT INTO login (hash, email) VALUES ($1, $2) RETURNING email',
        [hash, email]
      );
    
      const user = await db.one(
        'INSERT INTO users (email, firstName, lastName, joined) VALUES ($1, $2, $3, $4) RETURNING *',
        [loginEmail.email, firstName, lastName, new Date()]
      );
  
      await db.query('COMMIT');
      res.json(user);
    } catch (err) {
      console.error(err);
      await db.query('ROLLBACK');
      res.status(400).json('unable to register');
    }
  };
  
  module.exports = {
    handleRegister
  };
  