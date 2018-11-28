var dns = require("dns");

//callbacks
dns.resolve4("www.mum.edu", function(err, data) {
  if (err) throw err;
  console.log("callback", data[0]);
});

//Promise
function getIpAddress(domainName) {
  return new Promise(function(resolve, reject) {
    dns.resolve4(domainName, function(error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

getIpAddress("www.mum.edu")
  .then(data => console.log("promise", data[0]))
  .catch(function(err) {
    console.log(err);
  });

//async/await

async function getIpAddressAsync(value) {
  try {
    const result = await getIpAddress(value);
    console.log("async", result[0]);
    return result;
  } catch (error) {
    throw console.error("Error occured");
  }
}
getIpAddressAsync("www.mum.edu");
