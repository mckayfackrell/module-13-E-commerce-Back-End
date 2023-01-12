const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  router.get("/", async (req, res) => {
    try {
      const tagData = await ProductTag.findAll({
        include: [
          {
            model: Product,
          },
        ],
      });
      res.json(tagData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error finding all tags" });
    }
  });
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    res.json(tagData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error finding tag" });
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.json(tagData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating tag" });
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
    try {
      const updatedTag = await Tag.update({ name: req.body.name }, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({ message: "Tag updated successfully", updatedTag });
    } catch (err) {
      res.status(500).json({ message: "Error updating tag" });
    }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedRowsCount = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.json({ message: "Category deleted" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting category" });
  }
});

module.exports = router;
