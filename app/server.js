const express = require('express');
const Routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => { 
    console.log(`------------------------------------------------------------------------------------------`); 
    console.log(`\n--- [ GET ] Sequelize Models Display All ---`); 
    console.log(`------------------------------------------------------------------------------------------`);
    console.log(`App listening [ Display All Category ] at http://localhost:${PORT}/api/categories\n---`); 
    console.log(`App listening [ Display All Product ] at http://localhost:${PORT}/api/products\n---`);
    console.log(`App listening [ Display All Tag ] at http://localhost:${PORT}/api/tags`);
    console.log(`------------------------------------------------------------------------------------------`); 
    console.log(`\n--- [ GET ] Sequelize Models Display Data By ID ---`); 
    console.log(`------------------------------------------------------------------------------------------`);
    console.log(`App listening [ Display Category By ID ] at http://localhost:${PORT}/api/categories/3\n---`); 
    console.log(`App listening [ Display All Product By ID ] at http://localhost:${PORT}/api/products/3\n---`);
    console.log(`App listening [ Display All Tag By ID ] at http://localhost:${PORT}/api/tags/3`);
    console.log(`------------------------------------------------------------------------------------------`); 
});
