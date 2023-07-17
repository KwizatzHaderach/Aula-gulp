const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
//gulp-sass integra o gulp com o sass, mas o require sass que integra ao CSS

function compilaSass(){
    return gulp.src('./source/styles/main.scss')//pega os arquivos fontes
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));//mostra a destinação
    //pipe tem a função de encadear as funções que estamos usando
}

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log("Executando via Gulp");
        callback();
    }, 2000)
}

function dizOi(callback){
    console.log("Olá gulp");
    dizTchau();
    callback();
}
// tarefa privada
function dizTchau(){
    console.log("Tchau Gulp");
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;