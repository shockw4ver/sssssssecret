import { request } from './index'

export function getList() {
  return request('/nginx/configs')
}

export function getContent(name) {
  return request('/nginx/' + name)
}

export function updateConfig(name, content) {
  return request('/nginx/' + name, {
    method: 'PUT',
    body: JSON.stringify({
      content
    })
  })
}