import { initMap, updateMap } from './libs/renderer'
import { callLayer } from './libs/utils'
import base from './libs/base-conf'

export default class Sinomap {
  constructor (conf) {
    this.updateMap = updateMap.bind(this)
    this.callLayer = callLayer.bind(this)

    conf = Object.assign({}, base, conf)
    Object.keys(conf).forEach(key => {
      this[key] = conf[key]
    })

    initMap.bind(this)()
    this.updateMap()
  }
}

if (typeof module !== 'undefined') module.exports = Sinomap
