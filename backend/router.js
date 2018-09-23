const router =module.exports=require('express').Router()
const userRoutes = require(`${__base}/user/router`)

router.use('/user', userRoutes)

router.get('/', (req, res) => {
    res.send("Admin DashBoard")
})