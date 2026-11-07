// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__$global_brand__script = _script("__tests__/template.marko_1_$global_brand#0:5", ($scope) => document.body.dataset.brand = $scope.$global.brand);
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_brand#0:5/setup", "#text/0", 0, $if_content__$global_brand__script);
const $if_content__setup = $if_content__$global_brand;
const $if = /*@__PURE__*/ _if("#text/0", "<p>shown</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
const $global_brand = _fill_global_resume("__tests__/template.marko_0_$global_brand#5/subscribe", $if_content__$global_brand, "brand");
const $setup = $global_brand;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
