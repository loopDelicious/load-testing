// A sample script to demonstrate parallel collection runs using async from:
// https://github.com/postmanlabs/newman/blob/develop/examples/parallel-collection-runs.js

var path = require('path'), 
    async = require('async'), 
    newman = require('newman'),
    // options for the parallel collection runs
    options = {
        collection: path.join(__dirname, './ExampleEchoRequestMethodsCollection.json')
    },
    // callback function that marks the end of the current collection run, when called
    parallelCollectionRun = function (done) {
        newman.run(options, done);
    };

// Run the Postman sample collection thrice, in parallel.
async.parallel([
    parallelCollectionRun,
    parallelCollectionRun,
    parallelCollectionRun
],
// error or null that demonstrates whether or not parallel collection run succeeded
// results as array of collection run summary objects
function (err, results) {
    err && console.error(err);

    results.forEach(function (result) {
        var failures = result.run.failures;

        console.info(failures.length ? JSON.stringify(failures.failures, null, 2) :
            `${result.collection.name} ran successfully.`);
    });
});