/*
 * Count the new visitor and then show total number of visitors (refreshes)
 */

// Fetch value from cosmo db via python api

alert(fetch("https://pageviewupdater.azurewebsites.net/api/http_trigger?code=GRyanmDN1F6NCfi5CcWSH44tldLB5ygEtDcWbOU1UphkAzFu8XBi3Q=="));


var counter = 0; // TODO

// increment value
counter++;

// store new value
// TODO!

// present value on page
alert(counter);