export function changeKeyBind(newKey, oldKey, shouldMap) {
    try {
        const callbacks = Spicetify.Mousetrap.trigger()._directMap
        const fromKey = shouldMap ? oldKey : newKey
        const toKey = shouldMap ? newKey : oldKey
        const callbackName = Object.keys(callbacks).find((key) => key.startsWith(fromKey))

        Spicetify.Mousetrap.bind(toKey, callbacks[callbackName])
        Spicetify.Mousetrap.unbind(fromKey)
    } catch (err) {
        console.error(`Nord:unexpected: can't change keybind > from: \`changeKeyBind()\` > error: ${err}`)
    }
}
