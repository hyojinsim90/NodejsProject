const express = require('express');
const customerRoute = require('./routes/customer'); // customer 라우트를 추가
const productRoute = require('./routes/product'); // product 라우트를 추가
const app = express()
const port = 3000 // 서버 포트 번호

app.use(express.json({
    limit: '50mb' // 최대 50메가
})); // 클라이언트 요청 body를 json으로 파싱 처리

// 클라이언트에서 HTTP 요청 메소드 중 GET을 이용해서 'host:port'로 요청을 보내면 실행되는 라우트입니다.
app.get('/',(req, res) => {
    res.send('Hello World!')
});

// app.listen() 함수를 사용해서 서버를 실행합니다.
// 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있습니다.
app.listen(port, () => {
    // 3000번 포트로 웹서버 실행
    console.log(`서버가 실행됩니다. http://localhost:${port}`)
});

app.use('/customer', customerRoute); // customer 라우트를 추가하고 기본 경로로 /customer 사용
app.use('/product', productRoute); // product 라우트를 추가하고 기본 경로로 /product 사용