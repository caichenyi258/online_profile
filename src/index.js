import "./css/main.css";
import $ from "jquery";

window.$ = $;
$(() => {
    // deal with img block in case view
    const $description = $(".case-page .description");
    if ($description.length) {
        $description.find("p:has( > img)").addClass("has-img");
        const $leadingImgBlocks = $description.find("p:has( > img[alt='1'])");
        $leadingImgBlocks.each((index, leadingImgBlock) => {
            const $leadingImgBlock = $(leadingImgBlock);
            let i = 2;
            while (true) {
                const $nextImgBlock = $leadingImgBlock.find(` + p:has( > img[alt='${i}'])`);
                if (!$nextImgBlock.length) break;

                const $nextImg = $nextImgBlock.find("img");
                $leadingImgBlock.append($nextImg);
                $nextImgBlock.remove();
                i++;
            }
        });
    }
    // deal with the logo
    $(".container .main .header .logo").click((e) => {
        if ($("html").scrollTop() === 0) {
            window.location.href = "/";
        } else {
            $("html").animate({
                scrollTop: 0
            }, 500);
        }

        return false;
    });
});
