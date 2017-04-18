let path = require('path');
let express = require('express');
let favicon = require('serve-favicon');

let app = express();

app.set('port',process.env.PORT || 3000);//设置端口

app.use(express.static(path.join(__dirname,'public')));
app.use(favicon(path.join(__dirname,'public','favicon.jpg')));


app.listen(app.get('port'),function(){
	console.log('is running on ' + app.get('port'));
});
