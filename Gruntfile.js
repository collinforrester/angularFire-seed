module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  grunt.initConfig({
    karma: {
      options: {
        configFile: 'config/karma.conf.js'
      },
      unit: {
        background: false,
        port: 9999,
        browsers: ['PhantomJS'],
        singleRun: true
      }
    }
  });
};