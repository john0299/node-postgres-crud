const messagesRouter = require('express').Router();

const User = require('../models/User');
const Message = require('../models/Message');

messagesRouter.get('/messages', async (req, res) => {
 
    const getMessages = await Message.query().select();
    
    res.json(getMessages)
})

messagesRouter.get('/messages/:id', async (req, res) => {
    //userWithMessage
    const { id } = req.params;
    const user = await User.query().select('id','username','email').where('id', '=', id);
    const messages = await Message.query().select('title','message').where('user_id', '=', id);

    user[0].messages = messages

    res.json(user)
   
})

messagesRouter.post('/message/add', async (req, res) => {
    const { id,title,message,user_id } = req.body;
    const addMessage = await Message.query().insert({ id,title,message,user_id });



    res.json(addMessage)
})

messagesRouter.patch('/message/update/:id', async (req, res) => {
    const { title, message } = req.body;
    const { id } = req.params;

    const updateMessage = await Message.query().findById(id).patch({ title,message });

    res.json(updateMessage)
})

messagesRouter.get('/message/:id', async (req, res) => {
    const { id } = req.params;
    const messages = await Message.query().findById(id);

    res.json(messages)
})

messagesRouter.delete('/message/delete/:id', async (req, res) => {
    const { id } = req.params;
    const deleteMessage = await Message.query().deleteById(id);

    res.json(deleteMessage)
})

module.exports = messagesRouter