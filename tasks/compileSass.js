import fs from 'fs';
import sass from 'node-sass';
import projectPath from '../config/path';


//SASS
function compileSass(){
    sass.render({
        file: `${projectPath.src.sass}styles.scss`,
    }, function(err, result) { 
        if(err){
                console.log(err);
        }else{

                const css = result.css.toString();
                fs.writeFile(`${projectPath.dist.dev}css/styles.css`, css, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
        }
    }); 
}

export default compileSass;