import CMS from "netlify-cms-app";
import $ from "jquery";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/__preview__.css";

CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerEditorComponent({
    // Internal id of the component
    id: "image-pro",
    // Visible label
    label: "Image Pro",
    // Fields the user need to fill out when adding an instance of the component
    fields: [
        {label: "Image", name: "image", widget: "image", default: ""},
        {label: "Width", name: "width", widget: "string", default: "45%"},
        {label: "Index", name: "index", widget: "string", default: ""}
    ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^<img.*?\/>$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
        let ele = $(match[0]);
        return {
            image: ele.attr("src"),
            width: ele.css("width"),
            index: ele.attr("index")
        };
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
        return `<img src="${obj.image}" style="width:${obj.width}" index="${obj.index}" />`;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
        return (
            `<img src="${obj.image}" />`
        );
    }
});
CMS.init();
