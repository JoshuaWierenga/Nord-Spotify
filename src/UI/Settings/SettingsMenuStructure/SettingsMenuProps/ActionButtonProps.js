import Banner from "../../../../features/banner/banner"
import RegularSnippets from "../../../../features/snippets/externalCssSnippets/regularSnippets"
import JsSnippets from "../../../../features/snippets/jsSnippets/jsSnippets"
import Snippet from "../../../../features/snippets/snippets"
import LocalStorage from "../../../../localStorage/localStorage"
import State from "../../../../state/state"

const ActionButtonProps = {
    showBanner: {
        name: "Show Banner",
        field: "showBanner",
        onClickHandler: Banner.event.hideOrShowBanner,
    },
    fullPageBanner: {
        name: "Full Page Banner",
        field: "fullPageBanner",
        onClickHandler: () => {
            if (LocalStorage.config.fullPageBanner && LocalStorage.config.showBanner) {
                Snippet.utils.injectClassDynamicUI("bigBannerNew", "bigBannerLibX", "bigBannerOld")
            } else {
                Snippet.utils.injectClassDynamicUI("bigBannerNew", "bigBannerLibX", "bigBannerOld", false)
            }
        },
    },
    bannersInLyricsPage: {
        name: "Show Banners in Lyrics Page",
        field: "bannersInLyricsPage",
        onClickHandler: () => {
            if (State.app.pageType === "lyrics-plus" || State.app.pageType === "lyrics") {
                Spicetify.Platform.History.goBack()
                Spicetify.Platform.History.goForward()
            }
            Banner.event.hideOrShowLyricsPageBanners()
        },
    },
    songBannersOnly: {
        name: "Show song's banner only",
        field: "songBannersOnly",
    },
    changeCoverArtOnSongChange: {
        name: "Change Page's Banner On Song Change",
        field: "changeCoverArtOnSongChange",
    },
    hideDefaultCoverArt: {
        name: "Hide Page's Default Cover Art",
        info: "Hide playlist cover art in playlist page",
        field: "hideDefaultCoverArt",
        onClickHandler: () => RegularSnippets.utils.toggle("hideDefaultCoverArt"),
    },
    hidePageDetails: {
        name: "Hide Page's Details",
        info: "Hide playlist info in playlist page",
        field: "hidePageDetails",
        onClickHandler: () => RegularSnippets.utils.toggle("hidePageDetails"),
    },
    fitBannerImage: {
        name: "Fit Banner Image to Screen",
        field: "fitBannerImage",
        onClickHandler: () => {
            const banner = document.querySelector("#main-banner")
            if (LocalStorage.config.fitBannerImage) {
                banner.style.backgroundSize = "contain"
            } else {
                banner.style.backgroundSize = "cover"
            }
        },
    },
    hideHomePageRecommendation: {
        name: "Hide Home Page Recommendation",
        field: "hideHomePageRecommendation",
        onClickHandler: () => RegularSnippets.utils.toggle("hideHomePageRecommendation"),
    },
    hoverTime: {
        name: "Show Timestamp on Hovering the Progress Bar",
        field: "hoverTime",
        onClickHandler: () => RegularSnippets.utils.toggle("hoverTime"),
    },
    hideSimilarSongsRecommendation: {
        name: "Hide Similar Songs Recommendation in Playlist Page",
        field: "hideSimilarSongsRecommendation",
        onClickHandler: () => RegularSnippets.utils.toggle("hideSimilarSongsRecommendation"),
    },
    hidePlaylistImageEditButton: {
        name: "Hide Playlist Image Edit Button",
        field: "hidePlaylistImageEditButton",
        onClickHandler: () => RegularSnippets.utils.toggle("hidePlaylistImageEditButton"),
    },
    hideLikedSongsCard: {
        name: "Hide Liked Song's Card",
        field: "hideLikedSongsCard",
        onClickHandler: () => RegularSnippets.utils.toggle("hideLikedSongsCard"),
    },
    centeredLyrics: {
        name: "Make Lyrics alignment Center",
        field: "centeredLyrics",
        onClickHandler: () => RegularSnippets.utils.toggle("centeredLyrics"),
    },
    rightClickToReload: {
        name: "Right Click Nord Spotify Settings Icon to Refresh Spotify",
        field: "rightClickToReload",
    },
    quickSearch: {
        name: "Quick Search ( Ctrl + Space )",
        field: "quickSearch",
        onClickHandler: () => JsSnippets.snippets.quickSearch(),
    },
    search: {
        name: "Search ( Ctrl + / )",
        field: "search",
        onClickHandler: () => JsSnippets.snippets.search(),
    },
    redo: {
        name: "Redo ( Ctrl + Shift + z )",
        field: "redo",
        onClickHandler: () => JsSnippets.snippets.redo(),
    },
}

export default ActionButtonProps
