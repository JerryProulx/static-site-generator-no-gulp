import webpack from 'webpack';
import {webpackconfig} from '../webpack.config.js';

//JS
function compileJS(){
    webpack(webpackconfig, (err, stats) => { // Stats Object
        if (err || stats.hasErrors()) {
            console.log(stats);
        }else{
            console.log('working');
        }
    });
}

export default compileJS;