const Users = require('..models/userModdel')

const userCtrl = {
    register: async (req, res) => {
        try{
            const {name, email, password} = req.body
            
            if(!name || !email || !password)
                return res.status(400).json({msg: "Please fill in all fields."})
            res.json({msg: "Register Test"})
        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    }
}
login: async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await Users.findOne({email})
        if(!user) return res.status(400).json({msg: "This email does not exist."})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

        res.json({msg: "Login success!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

module.exports = userCtrl 