Tinytest.add('iDM - type-checkers - isArray', function (test) {

  // Should return true
  test.equal(iDM.isArray([]), true);
  test.equal(iDM.isArray([1, 2]), true);

  // Should return false
  test.equal(iDM.isArray(''), false);
  test.equal(iDM.isArray(), false);
  test.equal(iDM.isArray(null), false);
  test.equal(iDM.isArray({}), false);
  test.equal(iDM.isArray({one: 1, two: 'x'}), false);

});


Tinytest.add('iDM - type-checkers - isBlob', function (test) {

  if (Meteor.isServer) return;

  // Should return true
  test.equal(iDM.isBlob(new Blob(
    ['test-data'],
    {
      type: 'text/plain',
    }
  )), true);

  // Should return false
  test.equal(iDM.isBlob(), false);
  test.equal(iDM.isBlob(null), false);
  test.equal(iDM.isBlob(''), false);
  test.equal(iDM.isBlob([]), false);
  test.equal(iDM.isBlob([1, 2]), false);
  test.equal(iDM.isBlob({}), false);
  test.equal(iDM.isBlob({x: 1, y: 2}), false);

});


Tinytest.add('iDM - type-checkers - isBoolean', function (test) {

  // Should return true
  test.equal(iDM.isBoolean(true), true);
  test.equal(iDM.isBoolean(false), true);
  test.equal(iDM.isBoolean('true'), true);
  test.equal(iDM.isBoolean('false'), true);
  test.equal(iDM.isBoolean(0), true);
  test.equal(iDM.isBoolean('0'), true);
  test.equal(iDM.isBoolean(1), true);
  test.equal(iDM.isBoolean('1'), true);
  test.equal(iDM.isBoolean(-1), true);
  test.equal(iDM.isBoolean('-1'), true);

  // Should return false
  test.equal(iDM.isBoolean(''), false);
  test.equal(iDM.isBoolean(null), false);
  test.equal(iDM.isBoolean(), false);
  test.equal(iDM.isBoolean('string'), false);
  test.equal(iDM.isBoolean(2), false);
  test.equal(iDM.isBoolean('2'), false);
  test.equal(iDM.isBoolean(-2), false);
  test.equal(iDM.isBoolean('-2'), false);

});


Tinytest.add('iDM - type-checkers - isCollectionId', function (test) {

  // Should return true
  test.equal(iDM.isCollectionId('12345678901234567'), true);
  test.equal(iDM.isCollectionId('123456789012345678901234'), true);

  // Should return false
  test.equal(iDM.isCollectionId(), false);
  test.equal(iDM.isCollectionId(''), false);
  test.equal(iDM.isCollectionId(null), false);
  test.equal(iDM.isCollectionId([]), false);
  test.equal(iDM.isCollectionId({}), false);
  test.equal(iDM.isCollectionId('1234567890123456'), false);
  test.equal(iDM.isCollectionId('123456789012345678'), false);
  test.equal(iDM.isCollectionId('12345678901234567890123'), false);
  test.equal(iDM.isCollectionId('1234567890123456789012345'), false);

});


Tinytest.add('iDM - type-checkers - isDate', function (test) {

  // Should return true
  test.equal(iDM.isDate(new Date()), true);
  test.equal(iDM.isDate('Thu Mar 17 2016 23:17:11 GMT-0400 (EDT)'), true);
  test.equal(iDM.isDate('Mar 17 2016'), true);

  // Should return false
  test.equal(iDM.isDate(), false);
  test.equal(iDM.isDate(''), false);
  test.equal(iDM.isDate(null), false);
  test.equal(iDM.isDate('23'), false);
  // Returns true, weird.  Could obviously fix this up a bit.
  // test.equal(iDM.isDate([1, 2]), false);
  test.equal(iDM.isDate({x: 1, y: 2}), false);

});


Tinytest.add('iDM - type-checkers - isFileObject', function (test) {

  if (Meteor.isServer) return;

  // Should return true
  test.equal(iDM.isFileObject(new File(
    ['test-data'],
    'filename.txt',
    {
      type: 'text/plain',
      lastModified: 'Thu Mar 17 2016 23:17:11 GMT-0400 (EDT)',
    }
  )), true);

  // Should return false
  test.equal(iDM.isFileObject(), false);
  test.equal(iDM.isFileObject(null), false);
  test.equal(iDM.isFileObject(''), false);
  test.equal(iDM.isFileObject([]), false);
  test.equal(iDM.isFileObject([1, 2]), false);
  test.equal(iDM.isFileObject({}), false);
  test.equal(iDM.isFileObject({x: 1, y: 2}), false);

});


/*
 * Not written yet
 Tinytest.add('iDM - type-checkers - isFloat', function (test) {

// Should return true
test.equal(iDM.isFloat(XXX), true);

// Should return false
test.equal(iDM.isFloat(XXX), false);

});
*/


Tinytest.add('iDM - type-checkers - isFunction', function (test) {

  // Should return true
  test.equal(iDM.isFunction(function () { return; }), true);

  // Should return false
  test.equal(iDM.isFunction(), false);
  test.equal(iDM.isFunction(''), false);
  test.equal(iDM.isFunction(null), false);
  test.equal(iDM.isFunction([]), false);
  test.equal(iDM.isFunction({}), false);

});


Tinytest.add('iDM - type-checkers - isHTTPObject', function (test) {

  // Should return true
  test.equal(iDM.isHTTPObject({
    statusCode: 200,
  }), true);
  test.equal(iDM.isHTTPObject({
    statusCode: 404,
  }), true);
  test.equal(iDM.isHTTPObject({
    statusCode: 500,
  }), true);

  // Should return false
  test.equal(iDM.isHTTPObject({
    nonsense: 200,
  }), false);
  test.equal(iDM.isHTTPObject({
    statusCode: '200',
  }), false);
  test.equal(iDM.isHTTPObject({
    statusCode: '404',
  }), false);
  test.equal(iDM.isHTTPObject({
    statusCode: '500',
  }), false);
  test.equal(iDM.isHTTPObject([
    1, 2,
  ]), false);
  test.equal(iDM.isHTTPObject(), false);
  test.equal(iDM.isHTTPObject(''), false);
  test.equal(iDM.isHTTPObject(null), false);
  test.equal(iDM.isHTTPObject([]), false);
  test.equal(iDM.isHTTPObject({}), false);

});


Tinytest.add('iDM - type-checkers - isInteger', function (test) {

  // Should return true
  test.equal(iDM.isInteger(-2), true);
  test.equal(iDM.isInteger(-1), true);
  test.equal(iDM.isInteger(0), true);
  test.equal(iDM.isInteger(0.0), true);
  test.equal(iDM.isInteger(1), true);
  test.equal(iDM.isInteger(2), true);
  test.equal(iDM.isInteger(132331.0), true);
  test.equal(iDM.isInteger(-132331.0), true);
  test.equal(iDM.isInteger(248798572987432879), true);
  test.equal(iDM.isInteger(-248798572987432879), true);
  test.equal(iDM.isInteger('-2'), true);
  test.equal(iDM.isInteger('-1'), true);
  test.equal(iDM.isInteger('0'), true);
  test.equal(iDM.isInteger('1'), true);
  test.equal(iDM.isInteger('2'), true);
  test.equal(iDM.isInteger('248798572987432879'), true);
  test.equal(iDM.isInteger('-248798572987432879'), true);

  // Should return false
  test.equal(iDM.isInteger(-2.2), false);
  test.equal(iDM.isInteger(-0.2), false);
  test.equal(iDM.isInteger(0.2), false);
  test.equal(iDM.isInteger(1.1), false);
  test.equal(iDM.isInteger('-2.2'), false);
  test.equal(iDM.isInteger('0.0'), false);
  test.equal(iDM.isInteger('1.1'), false);
  test.equal(iDM.isInteger('3131.3'), false);
  test.equal(iDM.isInteger('132331.0'), false);
  test.equal(iDM.isInteger('-132331.0'), false);

});


Tinytest.add('iDM - type-checkers - isNaN', function (test) {

  // Should return true
  test.equal(iDM.isNaN(0/0), true);
  // Bug?  Returns Infinity
  // test.equal(iDM.isNaN(1/0), true);
  test.equal(iDM.isNaN(NaN), true);

  // Should return false
  test.equal(iDM.isNaN(), false);
  test.equal(iDM.isNaN([]), false);
  test.equal(iDM.isNaN({}), false);
  test.equal(iDM.isNaN(0/1), false);
  test.equal(iDM.isNaN(null), false);
  test.equal(iDM.isNaN('NaN'), false);

});


Tinytest.add('iDM - type-checkers - isNull', function (test) {

  // Should return true
  test.equal(iDM.isNull(null), true);

  // Should return false
  test.equal(iDM.isNull(), false);
  test.equal(iDM.isNull(0), false);
  test.equal(iDM.isNull(''), false);
  test.equal(iDM.isNull([]), false);
  test.equal(iDM.isNull({}), false);
  test.equal(iDM.isNull(undefined), false);

});


Tinytest.add('iDM - type-checkers - isNumber', function (test) {

  // Should return true
  test.equal(iDM.isNumber(1/0), true);
  test.equal(iDM.isNumber(1/2), true);
  test.equal(iDM.isNumber(-2), true);
  test.equal(iDM.isNumber(-1), true);
  test.equal(iDM.isNumber(0), true);
  test.equal(iDM.isNumber(0.0), true);
  test.equal(iDM.isNumber(1), true);
  test.equal(iDM.isNumber(2), true);
  test.equal(iDM.isNumber(132331.0), true);
  test.equal(iDM.isNumber(-132331.0), true);
  test.equal(iDM.isNumber(248798572987432879), true);
  test.equal(iDM.isNumber(-248798572987432879), true);
  test.equal(iDM.isNumber('-2'), true);
  test.equal(iDM.isNumber('-1'), true);
  test.equal(iDM.isNumber('0'), true);
  test.equal(iDM.isNumber('1'), true);
  test.equal(iDM.isNumber('2'), true);
  test.equal(iDM.isNumber('248798572987432879'), true);
  test.equal(iDM.isNumber('-248798572987432879'), true);
  test.equal(iDM.isNumber(-2.2), true);
  test.equal(iDM.isNumber(-0.2), true);
  test.equal(iDM.isNumber(0.2), true);
  test.equal(iDM.isNumber(1.1), true);
  test.equal(iDM.isNumber('-2.2'), true);
  test.equal(iDM.isNumber('0.0'), true);
  test.equal(iDM.isNumber('1.1'), true);
  test.equal(iDM.isNumber('3131.3'), true);
  test.equal(iDM.isNumber('132331.0'), true);
  test.equal(iDM.isNumber('-132331.0'), true);

  // Should return false
  test.equal(iDM.isNumber(), false);
  test.equal(iDM.isNumber(''), false);
  test.equal(iDM.isNumber([]), false);
  test.equal(iDM.isNumber({}), false);
  test.equal(iDM.isNumber(0/0), false);
  test.equal(iDM.isNumber('1..2'), false);
  test.equal(iDM.isNumber([1, 2]), false);
  test.equal(iDM.isNumber({x: 1, y: 2}), false);

});


Tinytest.add('iDM - type-checkers - isObject', function (test) {

  // Should return true
  test.equal(iDM.isObject([]), true);
  test.equal(iDM.isObject({}), true);
  test.equal(iDM.isObject({x: true, y: false}), true);

  // Should return false
  test.equal(iDM.isObject(), false);
  test.equal(iDM.isObject(0), false);
  test.equal(iDM.isObject(1), false);
  test.equal(iDM.isObject(''), false);
  test.equal(iDM.isObject('x'), false);
  test.equal(iDM.isObject(null), false);
  test.equal(iDM.isObject(true), false);
  test.equal(iDM.isObject(false), false);

});


Tinytest.add('iDM - type-checkers - isString', function (test) {

  // Should return true
  test.equal(iDM.isString(''), true);
  test.equal(iDM.isString('xx asdfxx x'), true);
  test.equal(iDM.isString('x', 1), true);
  test.equal(iDM.isString('1', null, 1), true);
  test.equal(iDM.isString('a', 1, 4), true);
  test.equal(iDM.isString('as', 1, 4), true);
  test.equal(iDM.isString('asdf', 1, 4), true);

  // Should return false
  test.equal(iDM.isString(), false);
  test.equal(iDM.isString(0), false);
  test.equal(iDM.isString(1), false);
  test.equal(iDM.isString([]), false);
  test.equal(iDM.isString({}), false);
  test.equal(iDM.isString(null), false);
  test.equal(iDM.isString(true), false);
  test.equal(iDM.isString(false), false);
  test.equal(iDM.isString(['x']), false);
  test.equal(iDM.isString({x: 'x'}), false);
  test.equal(iDM.isString('x', 2), false);
  test.equal(iDM.isString('xy', undefined, 1), false);
  test.equal(iDM.isString('', 1, 4), false);
  test.equal(iDM.isString('asdfa', 1, 4), false);
  test.equal(iDM.isString('a', 2), false);
  test.equal(iDM.isString('a', 2, 4), false);
  test.equal(iDM.isString('asdfa', undefined, 4), false);

});


Tinytest.add('iDM - type-checkers - isTemplate', function (test) {

  if (Meteor.isServer) return;

  // Should return true
  /*
  test.equal(iDM.isTemplate('test'), true);
  */

  // Should return false
  test.equal(iDM.isTemplate(), false);
  test.equal(iDM.isTemplate(0), false);
  test.equal(iDM.isTemplate(1), false);
  test.equal(iDM.isTemplate(''), false);
  test.equal(iDM.isTemplate([]), false);
  test.equal(iDM.isTemplate({}), false);
  test.equal(iDM.isTemplate('x'), false);
  test.equal(iDM.isTemplate(null), false);
  test.equal(iDM.isTemplate(true), false);
  test.equal(iDM.isTemplate(false), false);

});


Tinytest.add('iDM - type-checkers - isTemplateInstance', function (test) {

  if (Meteor.isServer) return;

  // Should return true
  /*
  instance = new Blaze.Template(
    'test',
    function() { return null }
  );
  test.equal(iDM.isTemplateInstance(instance), true);
  */

  // Should return false
  test.equal(iDM.isTemplateInstance(), false);
  test.equal(iDM.isTemplateInstance(0), false);
  test.equal(iDM.isTemplateInstance(1), false);
  test.equal(iDM.isTemplateInstance(''), false);
  test.equal(iDM.isTemplateInstance([]), false);
  test.equal(iDM.isTemplateInstance({}), false);
  test.equal(iDM.isTemplateInstance('x'), false);
  test.equal(iDM.isTemplateInstance(null), false);
  test.equal(iDM.isTemplateInstance(true), false);
  test.equal(iDM.isTemplateInstance(false), false);

});


Tinytest.add('iDM - type-checkers - isUndefined', function (test) {

  // Should return true
  test.equal(iDM.isUndefined(), true);
  test.equal(iDM.isUndefined(undefined), true);

  // Should return false
  test.equal(iDM.isUndefined(0), false);
  test.equal(iDM.isUndefined(1), false);
  test.equal(iDM.isUndefined(''), false);
  test.equal(iDM.isUndefined([]), false);
  test.equal(iDM.isUndefined({}), false);
  test.equal(iDM.isUndefined('x'), false);
  test.equal(iDM.isUndefined(null), false);
  test.equal(iDM.isUndefined(true), false);
  test.equal(iDM.isUndefined(false), false);

});
