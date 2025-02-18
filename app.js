import cors from 'cors';
import express from 'express';
const app = express(); 
const port = process.env.PORT || 3000; 

const corsOptions = {
    origin: '*',
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    try {
        res.send('Hello amit Pass.'); 
    } catch (err) {
        console.error("Error handling request:!!", err);
        res.status(500).send('Something went wrong.....');
    }
});

export default app;
if (import.meta.url === `file://${process.argv[1]}`) {
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`);
    });
}