const rootStyles = window.getComputedStyle(document.documentElement)

function getBookCoverWidth() {
    return rootStyles.getPropertyValue('--book-cover-width-large')
}

if (getBookCoverWidth() != null && getBookCoverWidth() != "") {
    ready()
} else {
    document.getElementById("main-css").addEventListener('load', ready)
}

function ready() {
    const coverWidth = parseFloat(getBookCoverWidth())
    const aspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
    const coverHeight = coverWidth / aspectRatio

    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode
    )
    
    FilePond.setOptions({
        stylePanelAspectRatio: 1 / aspectRatio,
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight
    })
    
    FilePond.parse(document.body);
}


