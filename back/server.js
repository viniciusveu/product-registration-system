const app = require('./index');
require('./script'); 

const port = process.env.PORT || 9090;

app.listen(port, () => { 
    console.log(`Initializing ${process.env.API_NAME}`);
    console.log(`Server is listening on port ${port}`);
})

