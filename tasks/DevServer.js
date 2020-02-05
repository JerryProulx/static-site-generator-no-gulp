var path = require('path');
import projectPath from '../config/path';
import browserSync from 'browser-sync';

class DevServer {
    constructor() {
        this.bs = browserSync.create();
    }
    startServer(){
        this.bs.init({server: projectPath.dist.dev});
        this.bs.watch(path.join(__dirname, '/src/**/*.handlebars')).on("change", () => {
            this.reload();
        });
    }
    reload(){
        this.bs.reload();
    }
}

export default DevServer;