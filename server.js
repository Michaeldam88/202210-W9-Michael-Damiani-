import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('.server/db.json');
const middlewares = jsonServer.defaults();
server.use(jsonServer.bodyParser);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/api/pokemon', (req, res) => {
    res.jsonp(router.db.get('pokemons').value());
});

server.post('/api/pokemon', (req, res) => {
    const { id } = req.body;
    if (!id) return res.sendStatus(500);
    const savedInfo = router.db.get('pokemons').value() || [];
    const exist = savedInfo.some((e)=> e.id === req.body.id)
    console.log(exist)
    if (!exist) {
        savedInfo.push(req.body)
        router.db.set('pokemons', savedInfo).write();    
    } 
    res.jsonp(req.body);
});

server.patch('/api/pokemon/:id', (req, res) => {
    res.jsonp(req.params.id);
});

server.delete('/api/pokemon/:id', (req, res) => {
    res.jsonp(req.params.id);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
