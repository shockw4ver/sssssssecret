const HOST = process.env.NODE_ENV === 'production' ?
  'http://api.useyourself.cn' :
  'http://localhost:3000'

export async function request(path, options) {
  const finalPath = HOST + path

  return fetch(finalPath, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  })
    .then(response => response.json())
}