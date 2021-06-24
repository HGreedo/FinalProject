const path = require("path");
const router = require("express").Router();

const brandRoutes = require("./brandRoutes");
const storeRoutes = require("./storeRoutes");

router.use("/brandRoutes", brandRoutes);
router.use("/storeRoutes", storeRoutes);


//need help locating which html to connect to 
router.use(function(req,res) {
    res.sendFile(path.join(__dirname, "../"))  <?
});

module.exports = router;