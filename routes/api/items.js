const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc  Get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items))
})

// @route POST api/items
// @desc  Add an Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        urgency: req.body.urgency
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc  Delete an Item
// @access Public
var id = '64e6b307d3f8ea8ed6bbe76f'
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.deleteOne().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}))
});

module.exports = router;