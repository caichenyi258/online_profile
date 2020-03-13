import "./css/main.css";
import $ from "jquery";

$(() => {
  $(".case-page p:has( > img)").addClass("has-img");
});
