const usersRouter = require('express').Router();

const User = require('../models/User');

usersRouter.get('/users', async (req, res) => {
    const users = await User.query().select();

    res.json(users)
})

usersRouter.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const users = await User.query().findById(id);

    res.json(users)
})


usersRouter.get('/user/:id/messages', async (req, res) => {
    const { id } = req.params;
    const userWithMessage = await User.query().select('users.*','messages.*').join('messages','users.id','messages.user_id').where('users.id', '=', id);

    res.json(userWithMessage)
})

usersRouter.post('/user/add', async (req, res) => {
    const { username, email } = req.body;
    const addUser = await User.query().insert({ username,email });

    res.json(addUser)
})

usersRouter.patch('/user/update/:id', async (req, res) => {
    const { username, email } = req.body;
    const { id } = req.params;

    const updateUser = await User.query().findById(id).patch({ username,email });

    res.json(updateUser)
})

usersRouter.delete('/user/delete/:id', async (req, res) => {
    const { id } = req.params;
    const deleteUser = await User.query().deleteById(id);

    res.json(deleteUser)
})



module.exports = usersRouter