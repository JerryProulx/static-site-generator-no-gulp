import projectPath from '../config/path';
import Handlebars from 'handlebars';
import fs from 'fs';


//HANDLEBARS
function compileHB(){
    fs.readFile(`${projectPath.src.html}index.handlebars`, function(err, data) {
        if(data){
            var template = Handlebars.compile(data.toString());
                    var data = { "name": "Alan", "hometown": "Somewhere, TX",
                     "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
            var result = template(data);
        
            fs.writeFile(`${projectPath.dist.dev}index.html`, result, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
        }else{
            console.log(err);
        }
    }); 
}

export default compileHB;