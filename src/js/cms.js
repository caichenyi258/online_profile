import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

CMS.registerPreviewStyle(styles, {raw: true});
// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: "2-images",
//   // Visible label
//   label: "2 images",
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [{name: "image1", label: "Image1", widget: "image"}, {name: "image2", label: "Image2", widget: "image"}],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^\!\[.*?\]\((.*?)( \".*?\")?\)\ \!\[.*?\]\((.*?)( \".*?\")?\)$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: function(match) {
//     return {
//       image1: match[1],
//       image2: match[3]
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: function(obj) {
//     return "![](" + obj.image1 + ") ![](" + obj.image2 + ")";
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function(obj) {
//     return (
//       '<img src="' + obj.image1 + '"/>' + '<img src="' + obj.image2 + '"/>'
//     );
//   }
// });
CMS.init();
