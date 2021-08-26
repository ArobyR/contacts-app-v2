const express = require("express")
const route = express.Router()
const { getUser, creteUser } = require("../services/userService")

route.get("/:email", async (req, res) => {
    const user = await getUser(req.params.email)
    res.json(user)
})

route.post("/", async (req, res) => {
    const result = await creteUser(req.body)
    res.json(result)
})

module.exports = route