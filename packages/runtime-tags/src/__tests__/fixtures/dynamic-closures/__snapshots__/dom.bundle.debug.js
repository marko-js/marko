// tags/custom-tag.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
const $input = ($scope, input) => $input_content($scope, input.content);
var custom_tag_default = /* @__PURE__ */ _template("__tests__/tags/custom-tag.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button></button>${_w0}<div></div>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}& b`)("D%l");
const a = 1;
const $if_content2__c = /* @__PURE__ */ _closure_get("c", ($scope) => _text($scope["#text/1"], $scope._._.c), ($scope) => $scope._._);
const $if_content2__setup = ($scope) => {
	$if_content2__c($scope);
	_text($scope["#text/0"], a);
};
const $if_content__if = /* @__PURE__ */ _if("#text/0", "<!> 2 <!>", "%d%b", $if_content2__setup);
const $if_content__setup = ($scope) => $if_content__if($scope, Math.random() ? 0 : 1);
const $customtag_content__c = /* @__PURE__ */ _closure_get("c", ($scope) => _text($scope["#text/1"], $scope._.c));
const $customtag_content__setup = ($scope) => {
	$customtag_content__c($scope);
	_text($scope["#text/0"], a);
};
const $customtag_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<!> 2 <!>", "%d%b", $customtag_content__setup);
const $c__closure = /* @__PURE__ */ _closure($customtag_content__c, $if_content2__c);
const $c = /* @__PURE__ */ _let("c/4", $c__closure);
const $if = /* @__PURE__ */ _if("#div/2", "<!><!><!>", "b%c", $if_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, 4);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $customtag_content($scope));
	$c($scope, 3);
	$if($scope, Math.random() ? 0 : 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
