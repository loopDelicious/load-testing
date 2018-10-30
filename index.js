// index file for Lambda
let filePathName = './ExampleEchoRequestMethodsCollection.json';
console.log('Loading function from ' + filePathName);

exports.handler = (event, context) => {

    // A sample script to demonstrate parallel collection runs using async from:
    // https://github.com/postmanlabs/newman/blob/develop/examples/parallel-collection-runs.js

    const path = require('path'), 
        async = require('async'), 
        newman = require('newman'),
        // options for the parallel collection runs
        options = {
            collection: path.join(__dirname, filePathName)
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
            let failures = result.run.failures;

            console.log(failures.length ? JSON.stringify(failures.failures, null, 2) :
                `${result.collection.name} ran successfully.`);
            // return feedback about the collection run

        });
        console.log("hey");

    });
    
    return "hello there returned at the end";
};