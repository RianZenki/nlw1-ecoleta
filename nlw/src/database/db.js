//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
    // db.serialize(() => {
//     // criar uma tabela

//     db.run(`
//         create table if not exists places (
//             id integer primary key autoincrement,
//             image text,
//             name text,
//             address text,
//             address2 text,
//             state text,
//             city text,
//             items text
//         );
//     `)

    // cadastrar os dados na tabela
    const query = `
        insert into places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) values (?,?,?,?,?,?,?);
`
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    // db.run(query, values, afterInsertData)


//     //consultar os dados da tabela
//     // db.all(`select * from places`, function(err,rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros")
//     //     console.log(rows)
//     // })

    //deletar um dados na tabela
//     db.run(`delete from places where id = ?`, [3], function(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Registro deletado com sucesso!")
//     })

    

// })