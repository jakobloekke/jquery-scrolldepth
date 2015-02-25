Package.describe({
    name: 'jakobloekke:jquery-scrolldepth',
    version: '1.0.0',
    // Brief, one-line summary of the package.
    summary: 'jquery-scrolldepth.js packaged for Meteor.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/jakobloekke/jquery-scrolldepth.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');
    api.use('jquery')
    api.addFiles('jquery.scrolldepth.js', 'client');
    api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
});
