import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import cors from 'cors';

export const app = express();
export const port = process.env.PORT || 5000;

//hablito cors

app.use(cors());

//conecto a mongo db atlas

mongoose.connect('mongodb+srv://ateriss:aterissco@cluster0.6wd8ss6.mongodb.net/alura-flix?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=>{
    console.log('Conectado a MongoDB Atlas');
})

.catch((error)=>{
    console.error('Error de conexión a db', error);
});

// definiendo schema

const videoSchema = new mongoose.Schema({
    id: Object,
    title: String,
    description: String,
    category: String,
    image: String,
    video: String,
});

const videoModel = mongoose.model('videos', videoSchema);

const categorySchema = new mongoose.Schema({
    id: Object,
    title: String,
    color: String,
});

const categoryModel = mongoose.model('categories', categorySchema);

app.get('/api/categories', async (req, res)=>{
    try{
        const categories = await categoryModel.find({});
        res.json(categories);
    }catch(error){
        res.status(500).json({error: error.message})
    }
});


app.get('/api/videos', async (req, res)=>{
    try{
        const videos = await videoModel.find({});
        res.json(videos);
    }catch(error){
        res.status(500).json({error: error.message})
    }
});

app.listen(port, ()=>{
    console.log(`Servidor API en el puerto ${port}`)
})

