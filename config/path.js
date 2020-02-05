import path from 'path';

const projectPath = {
    src: {
        html: path.join(__dirname, '../src/html/'),
        sass: path.join(__dirname, '../src/sass/'),
        js: path.join(__dirname, '../src/js'),
    },
    dist: {
        dev: path.join(__dirname, '../.serve/'),
        prod: path.join(__dirname, '../dist/')
    }
}

export default projectPath;