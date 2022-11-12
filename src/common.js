export function sum(a, b) {
  return a + b
}

export function queryDB() {
  return null
}

export function someCallingDB() {
  throw new Error('connect ECONNREFUSED 127.0.0.1:2727')
}
