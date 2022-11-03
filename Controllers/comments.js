const db = require("../db/index")

const get = async (req, res) => {
    try {
        const comments = await db.query("select * from comments")
        return res
        .status(200)
        .json({ data: comments.rows })
    } catch (error) {
        console.log(error)
    }
}

const post = async(req, res) => {
    try {
        const { idchar, namechar, nameuser, comment } = req.body

        let newComment = {
            idchar,
            namechar,
            nameuser,
            comment
        }

        await db.query("insert into comments (idchar, namechar, nameuser, comment) values($1, $2, $3, $4)", [
            idchar, namechar, nameuser, comment
        ]) 
       
        return res
        .status(200)
        .json({ data: newComment })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { get, post }