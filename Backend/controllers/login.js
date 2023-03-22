const handleSignin = (db, bcrypt) => async (req, res) => {
    const { email, password } = req.body;
    console.log('email: ', email);
    console.log('password: ', password);
    if (!email || !password) {
      return res.status(400).json('incorrect form submission');
    }
  
    try {
      const data = await db.any('SELECT email, hash FROM login WHERE email = $1', [email]);
      console.log('data: ', data);
      const isValid = bcrypt.compareSync(password, data[0].hash);
      console.log('isValid: ', isValid);
      if (isValid) {
        const user = await db.any('SELECT * FROM users WHERE email = $1', [email]);
        console.log('user: ', user);
        return res.json(user[0]);
      } else {
        return res.status(400).json('wrong credentials');
      }
    } catch (err) {
        console.error(err);
      return res.status(400).json('wrong credentials');
    }
  };
  
  module.exports = {
    handleSignin
  };