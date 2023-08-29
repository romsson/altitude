const test = require('tape');
const al = require('../')

test('basic intervals equal', function (t) {

    const intervals = [
        [10, 20], [30, 40]
    ]

    t.equal(al().data(intervals).data(), intervals);
    t.end();
});