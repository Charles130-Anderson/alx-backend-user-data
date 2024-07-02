// Track call counts for each endpoint
const weakMap = new WeakMap();

// Increment call count for an endpoint
function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);

  // Throw error if calls exceed limit
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

// Export queryAPI and weakMap
export { queryAPI, weakMap };
