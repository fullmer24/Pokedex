import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Wild.js').Wild[]} */
  wild = []

  /** @type {import('./Models/Caught.js').Caught[]} */
  caught = []

  /** @type {import('./Models/Active.js').Active} */
  // @ts-ignore
  active = {}



}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
