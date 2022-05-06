$(init)

function init() {
    $("body").on('click', '.m-btn', () => {
        $(".box").hide(1000, () => {
            console.log("finish!")
        });
    })
}