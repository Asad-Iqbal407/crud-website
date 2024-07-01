const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./models/Item');
const app = express();

// Connect to MongoDB with the new database name
mongoose.connect('mongodb://localhost:27017/crudApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', async (req, res) => {
    const searchQuery = req.query.search;
    let items;

    if (searchQuery) {
        items = await Item.find({
            $or: [
                { firstname: new RegExp(searchQuery, 'i') },
                { lastname: new RegExp(searchQuery, 'i') },
                { address: new RegExp(searchQuery, 'i') }
            ]
        });
    } else {
        items = await Item.find();
    }

    res.render('index', { items: items, search: searchQuery });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', async (req, res) => {
    const newItem = new Item({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address
    });
    await newItem.save();
    res.redirect('/');
});

app.get('/edit/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('edit', { item: item });
});

app.post('/edit/:id', async (req, res) => {
    await Item.findByIdAndUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address
    });
    res.redirect('/');
});

app.post('/delete/:id', async (req, res) => {
    try {
        console.log('Delete request received for ID:', req.params.id);
        const result = await Item.findByIdAndDelete(req.params.id);
        if (!result) {
            console.log('Item not found');
            return res.status(404).send('Item not found');
        }
        console.log('Item deleted successfully');
        res.redirect('/');
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
