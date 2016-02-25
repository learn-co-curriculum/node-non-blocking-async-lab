# Async File Read and Write

## Objectives

1. Implement async file read script
1. Implement async file write script

## Introduction

In this lab, you'll practice using reading and writing from/to files in asynchronous way.

## Instructions

1. Create a file `mask.js`
1. Read from a file `customers.csv` with `fs.readFile()`. 
1. Handle the error object in the callback by checking for the error.
1. Convert CSV into JS/Node object. 
1. Iterate over each record and mask the credit card number by replacing all but the last four digits with the `*` symbol
1. Save the resulting masked customer data into `customers.json` file with `JSON.stringify()` and `fs.writeFile()`.
1. Wrap all of this masking logic in a function, so that this function has an argument `callback` 
1. Invoke the `callback` when you have an error by passing the error as the first argument and passing `null` as the second argument (second argument is the transformed/masked data, because we encountered an error, the data is null). 
1. Invokes this callback function with the masked `customers` data when the writing is over as the second argument. Keep the first argument (error) as null, because for writing to finish me must have 0 errors.
1. Create a module out of `mask.js` (which exports your logic of masking as function) with `module.exports = ...`. 
1. Run tests
