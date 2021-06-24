const router = require("express").Router();
const brandController = require("../../controllers/brandController");

//router for brand directory (all brands)
router
.router("/")
.get(brandController.findAll)
.post(brandController.create);

//router to search brand by name
router
.route("/:name")
.get(brandController.findByName)
.put(brandController.update)
.delete(brandController.remove);

//router to show brands by location 
router
.route("/:location")
.get(brandController.findByLocation)
.put(brandController.update)

//router to show brands by type of goods sold
router
.route("/:type")
.get(brandController.findByType)
.put(brandController.update)



module.exports = router;
<? is this all correct?