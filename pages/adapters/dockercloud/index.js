import fetch from 'isomorphic-unfetch'

const username = process.env.DOCKERCLOUD_USERNAME
const apiKey = process.env.DOCKERCLOUD_APIKEY

async function get(path) {
  const authString = new Buffer(`${username}:${apiKey}`).toString('base64')
  const options = {
    headers: {
      Authorization: `Basic ${authString}`
    }
  }

  let response, json
  try {
    response = await fetch(`https://cloud.docker.com/${path}`, options)
    json = await response.json()
  } catch (e) {
    return e
  }
  return json
}

async function getActions() {
  const actions = await get('/api/audit/v1/action/')
  return actions.objects
}

module.exports = {
  getActions
}
