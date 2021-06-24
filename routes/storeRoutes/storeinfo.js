const router = require("express").Router();
const brandController = require("../../controllers/storeController");

//router for boutiques directory (all brands)
router
.router("/")
.get(brandController.findAll)
.post(brandController.create);

//router to search boutiques by name
router
.route("/:name")
.get(brandController.findByName)
.put(brandController.update)
.delete(brandController.remove);

//router to show boutiques by location 
router
.route("/:location")
.get(brandController.findByLocation)
.put(brandController.update)

//router to show boutiques by type of goods sold
router
.route("/:type")
.get(brandController.findByType)
.put(brandController.update)



module.exports = router;

<? same deal will this work for what I'm trying to do?