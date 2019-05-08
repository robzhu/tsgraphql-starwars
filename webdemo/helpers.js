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

let latencyREST = undefined;
let latencyGraphQL = undefined;

async function benchmark(action) {
  const before = performance.now();
  await action();
  const after = performance.now();
  return Math.round(after - before);
}

async function benchmarkREST() {
  latencyREST = await benchmark(runREST);
  if (!latencyGraphQL) width = 100;
  else {
    if (latencyREST > latencyGraphQL) {
      width = 100;
      document.getElementById("graphql").style = `width: ${latencyGraphQL / latencyREST * 100}%`;
    }
    else {
      width = latencyREST / latencyGraphQL * 100;
      document.getElementById("graphql").style = `width: 100%`;
    }
  }
  document.getElementById("rest").style = `width: ${width}%`;
  document.getElementById("rest-latency").innerText = `${latencyREST}ms`;
}

async function benchmarkGraphQL() {
  latencyGraphQL = await benchmark(runGraphQL);
  if (!latencyREST) width = 100;
  else {
    if (latencyGraphQL > latencyREST) {
      width = 100;
      document.getElementById("rest").style = `width: ${latencyREST / latencyGraphQL * 100}%`;
    }
    else {
      width = latencyGraphQL / latencyREST * 100;
      document.getElementById("rest").style = `width: 100%`;
    }
  }
  document.getElementById("graphql").style = `width: ${width}%`;
  document.getElementById("graphql-latency").innerText = `${latencyGraphQL}ms`;
}