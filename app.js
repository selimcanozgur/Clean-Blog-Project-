const express = require('express');
const app = express();


// Uygulamamızda ejs modülünü kullanacağımızı belirtiyoruz
app.set('view engine', 'ejs');

// Public klasörü oluşturup içerisinde statik olan dosyaları aktardık
// İlgili middleware fonksiyonunu oluşturarak public klasörünü uygulamamıza kaydedicez.
app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.render('index');
})

app.get('/about',(req, res)=>{
    res.render('about');
})

app.get('/add',(req, res)=>{
    res.render('add_post');
})

app.get('/post',(req, res)=>{
    res.render('post');
})

const port = 3000;

app.listen(port,()=>{
    console.log(`Server port ${port}'de başlatıldı`);
})

