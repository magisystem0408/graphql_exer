const  express =require("express")
const {graphqlHTTP} =require('express-graphql')
const mongoose =require('mongoose')
const schema =require('./schema/schema')
const app =express()

require('dotenv').config()
const env=process.env


mongoose.connect(env.CONNECT_DB)
// 接続確認
mongoose.connection.once('open',()=>{
    console.log('データベースの接続が完了しました')

})

// 一つのエンドポイントでデータがやりとりできるようになる
app.use('/graphql',graphqlHTTP({
    schema,
    // これでURLにアクセスすると簡単にテストできる
    graphiql:true
}))


app.listen(env.PORT,()=>{
    console.log("サーバーが開いた")
})
