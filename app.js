require('dotenv').config()
const app = require('./config/server')
const database = require('./config/database')

const port = process.env.PORT || 3000

/* CREATE */
app.route('/')
    .get((req, res) => {
        res.send("It's working online!")
    })
        /*res.render('inserter')
    })
    .post((req, res) => {

        let primeiro_nome = req.body.primeiro_nome
        let segundo_nome = req.body.segundo_nome
        let idade = req.body.idade

        let query = `update laborat.pessoas set historico = 1 where primeiro_nome = '${primeiro_nome}' and segundo_nome = '${segundo_nome}';insert into laborat.pessoas (primeiro_nome, segundo_nome, idade) values ('${primeiro_nome}', '${segundo_nome}', '${idade}');`

        database().query(query, (err, result) => {
            if(!err) {
                console.log("Dados inseridos com sucesso!")
                res.redirect('/list')
            } else {
                res.send(err)
            }
        })
    })

app.listen(port, () => {
    console.log(`Listening at ${port}.`)
})

/* READ
app.route('/list')
    .get((req, res) => {

        let query = `select * from pessoas where historico = 0;`

        database().query(query, (err, result) => {
            if(!err) {
                res.render('list', {
                    raw: result
                })
            } else {
                res.send(err)
            }
        })
    })


/* UPDATE
app.route('/edit/:id')
    .get((req, res) => {
        
        let query = `select * from pessoas where id = '${req.params.id}';`

        database().query(query, (err, result) => {
            if(!err) {
                res.render('edit', {
                    data: result
                })
            } else {
                res.send(err)
            }
        })
    })

/* DELETE
app.route('/delete/:primeiro_nome')
    .get((req, res) => {

        let query = `delete from pessoas where primeiro_nome = '${req.params.primeiro_nome}';`

        database().query(query, (err, result) => {
            if(!err) {
                res.redirect('/list')
            } else {
                res.send(err)
            }
        })
    }) */