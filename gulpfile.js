/* gulp.task -> Crear una tarea -> gulp.task('nombre de la tarea',()=>{lo que va ha hacer la tarea})
gulp.src ->  Origen del documento -> gulp.src('ruta del origen del archivo')
gulp.pipe -> Unión de las diferentes secciones de la tarea -> .pipe(sección)
gulp.dest -> Destino del documento -> gulp.dest('ruta de destino del archivo')
gulp.watch -> Vigilar los camios en la ruta que le digamos -> gulp.watch('ruta a vigilar',['tarea'])

/nested | compact | expanded | compresed
*/

const gulp = require('gulp');
const concat = require('gulp-concat');
const cssMin = require('gulp-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', (done) => {

  return gulp.src('./dev/css/*.css')
    .pipe(concat('styles-dist.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssMin())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', () => {
  gulp.watch('./dev/css/*.css', gulp.series('css'))
})
