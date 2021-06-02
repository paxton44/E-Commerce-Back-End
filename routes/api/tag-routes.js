const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  //using libraryCardRoutes.js as an example for setting up routes
  // GET all Tags

  try {
    const tagData = await Tag.findAll({
      include: Product
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});


 // find a single tag by its `id`
 // be sure to include its associated Product data
 //libraryCardRoutes.js has a killer example of how to set this up
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: Product
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});


// create a new tag
//libraryCardRoutes.js shows how to create a new object on line 34
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(
    req.body
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  
});


// update a tag's name by its `id` value
// activity 18 userRoutes.js has a good updating a tags id example
router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});


 // delete on tag by its `id` value
// activity 22 libraryCardRoutes has a solid example how to delete tags by id line 49 
router.delete("/:id", async (req, res) => {
 // DELETE a card
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No Tag found with that id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
