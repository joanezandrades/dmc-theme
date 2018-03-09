module.exports = function (grunt) {

    grunt.initConfig({
        
        /* Limpa arquivos */
        clean: {
            // Arquivos
            css: ['libs/css/main-style.css']
        },

        /* Compila .sass -> css */
        sass: {

            dist: {

                files: [{
                    
                    expand: true,
                    cwd: 'libs/css/sass',
                    src: ['main-style.sass'],
                    dest: 'libs/css',
                    ext: '.css'
                }],
                style: 'compressed',
                update: true
            }
        },
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Registro de tarefas
    grunt.registerTask( 'default', ['clean', 'sass'] );
}