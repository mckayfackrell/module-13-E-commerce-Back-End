const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json({ message: "Error finding all categories" });
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error finding category" });
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating category" });
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const [updatedRowsCount, updatedCategories] = await Category.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    );
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.json(updatedCategories[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating category" });
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedRowsCount = await Category.destroy({
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
