import { observable, decorate } from 'mobx'
import * as nginxApi from '../api/nginx'

export class NginxStore {
  nginxConfigs = []

  currentConfigName = ''
  currentConfigContent = ''

  async getNginxConfigs() {
    const res = await nginxApi.getList()
    if (res.code === 1) {
      this.nginxConfigs = res.data
    }
  }

  async getNginxConfigContent(name) {
    this.currentConfigName = name
    const res = await nginxApi.getContent(name)
    if (res.code === 1) {
      this.currentConfigContent = res.data
    }
  }

  async updateNginxConfig(content) {
    const res = await nginxApi.updateConfig(this.currentConfigName, content)
    if (res.code === 1) {
      this.currentConfigContent = res.data
    }
  }
}

decorate(NginxStore, {
  nginxConfigs: observable,
  currentConfigName: observable,
  currentConfigContent: observable
})