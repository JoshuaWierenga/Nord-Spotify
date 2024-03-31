import LocalStorage from "../../../localStorage/localStorage"
import Utils from "../../../utils/utils"
import { changeKeyBind } from "./jsSnippetsUtils"

let quickSearchOn = false
let searchOn = false

export function toggleQuickSearchKeyBind() {
    quickSearchOn |= LocalStorage.config.quickSearch
    if (!quickSearchOn) {
        return
    }
    changeKeyBind("mod+space", "mod+k", LocalStorage.config.quickSearch)
}

export function toggleSearchPageKeyBind() {
    searchOn |= LocalStorage.config.search
    if (!searchOn) {
        return
    }
    changeKeyBind("mod+/", "mod+l", LocalStorage.config.search)
}

export async function toggleRedoKeyBind() {
    const isWindows = await Utils.api.checkOS("Win")
    if (isWindows) {
        if (LocalStorage.config.redo) {
            Spicetify.Mousetrap.bind("ctrl+shift+z", async () => {
                await Spicetify.CosmosAsync.post("sp://desktop/v1/redo")
            })
        } else {
            Spicetify.Mousetrap.unbind("ctrl+shift+z")
        }
    }
}
