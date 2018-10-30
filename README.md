### Get Started
Install dependencies

    $ npm install

Run script from the command line   

    $ node loadTest.js

Your Postman collection can be exported as a JSON file and run from your local file system, as in this example here. Alternatively, you can use the [Postman API](https://docs.api.getpostman.com/) to access the latest version of your collection. The second approach is recommended if you plan to update the collection more frequently.

Once script is uploaded to lambda, you can define the handler function in `index.js`.

Link to concurrency resources

---
[Example script](https://github.com/postmanlabs/newman/blob/develop/examples/parallel-collection-runs.js) is taken from the [Newman open source project](https://github.com/postmanlabs/newman).