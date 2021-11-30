import express from 'express';
import expressasynchandler from "express-async-handler";
import User from '../model/userModel.js';
import Member from '../model/memberModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/utils.js';
const router = express.Router();
import { item } from '../item.js';


router.get('/seed', expressasynchandler(async (req, res) => {
    await User.deleteMany()
    const createdusers = await User.insertMany(item.users)
    res.send({ createdusers })
})
)

router.post('/login', expressasynchandler(async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email.toLowerCase() }) 
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                res.status(200).send({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    lastName: user.lastName,
                    sex: user.sex,
                    _id: user._id,
                    token: generateToken(user)
                })
            } else {
                res.status(400).send({ message: "Что то пошло не так. логин или пароль некорректны" }) 
            }
        } else {
            res.status(400).send({ message: "Что то пошло не так. логин или пароль некорректны" })
        }
    } catch (error) {
        console.log(error);
    }
}))

router.post('/register', expressasynchandler(async (req, res) => {

    const { name, email, password } = req.body
    if (password !== req.body.repeatpassword) {
        res.status(400).send({ message: "Passwords must to be equal !" })
        return
    }
    const user = await User.findOne({ email })
    if (user) {
        res.status(400).send({ message: "User with that email already exists !" })
    } else {
        const newUser = new User({
            name, email: email.toLowerCase(), password: bcrypt.hashSync(password, 12)
        })
        await newUser.save()
        res.status(200).send({
            name: newUser.name,
            email: newUser.email,
            image: newUser.image,
            lastName: newUser.lastName,
            sex: newUser.sex,
            _id: newUser._id,
            token: generateToken(newUser)
        })
    }
}))

router.post('/membersave', expressasynchandler(async (req, res) => {
    const { name } = req.body
    const check = await Member.findOne({ name })
    if (check) {
        res.status(400).send({ message: "Участник с таким именем уже есть" })
    } else {
        const member = new Member({
            name
        })
        await member.save()
        res.status(200).send({
            name: member.name,
        })
    }
}))


 

router.post('/changesettings/:id', expressasynchandler(async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ message: "Something went wrong. Please try again !" })
    }
}))

router.post('/deleteaccount/:id', expressasynchandler(async (req, res) => {
    try {
        const data = await User.findByIdAndRemove(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ message: "Something went wrong. Please try again !" })
    }
}))

router.post('/checkemail', expressasynchandler(async (req, res) => {
    try {
        const data = await User.findOne(req.body)
        if (data) { res.status(200).send(data) }
        else {
            if (!Validator.isEmail(req.body.email)) {
                res.status(400).send({ message: "Email is invalid." })
                return
            }
            else {
                res.status(400).send({ message: "There is no user with that email." })
            }
        }
    } catch (error) {
        return res.status(400).send(errors);
    }
}))

router.post('/changepassword/:id', expressasynchandler(async (req, res) => {
    try {
        if (req.body.newpassword.length >= 6) {
            const data = await User.findByIdAndUpdate(req.params.id, { password: bcrypt.hashSync(req.body.newpassword, 12) })
            if (data) { res.status(200).send(data) }
            else {
                res.status(400).send({ message: "There is no user with that email." })
            }
        } else {
            res.status(400).send({ message: "Password must be at least 6 characters." })
        }

    } catch (error) {
        res.status(400).send({ message: "There is no user with that email." })
    }
}))


export default router