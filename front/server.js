const app = require('./index');

const port = process.env.PORT || 8080;

app.listen(port, () => { 
    console.log(`Initializing ${process.env.APP_NAME}`);
    console.log('Listen on port ' + port);
})

