async function fetchObject(uri) {
  const response = await fetch(uri);
  return await response.json();
}

async function fetchAll(uris) {
  return await Promise.all(uris.map(fetchObject));
}

async function fetchGraphQL(endpoint, query) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  });
  return await response.json();
}

function unique(array) {
  return [...new Set(array)];
}

// array.flat() not supported on all browsers
function flatten(arrayOfArrays) {
  let res = [];
  for (let inner of arrayOfArrays) {
    res.push(...inner);
  }
  return res;
}