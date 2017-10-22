var packages = [
  'idometeor:init@0.0.1',
];

Package.describe({
  name: 'idometeor:type-checkers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '@iDoMeteor Javascript type checking utilities.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/iDoMeteor/meteor-type-checkers',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages);
  api.imply(packages);
  api.addFiles([
    'type-checkers.js',
  ], ['client', 'server']);
  api.export([
    'iDM',
  ]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  packages.push('idometeor:type-checkers');
  api.use(packages);
  api.addFiles('type-checkers-tests.js');
});
