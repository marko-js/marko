// template.marko
const $template = "<div> </div><!><span> </span>";
const $walks = "D l%b D l";
const $setup = () => {};
const $if = /*@__PURE__*/ _if("#text/1", "<b></b>");
const $input_button_id = ($scope, button_id) => {
	_text($scope["#text/0"], button_id);
	$if($scope, button_id ? 0 : 1);
};
const $rest__script = _script("__tests__/template.marko_0_rest#9", ($scope) => _attrs_script($scope, "#span/2"));
const $rest = /*@__PURE__*/ _const("rest", ($scope) => {
	_attrs($scope, "#span/2", $scope.rest);
	$rest__script($scope);
});
const $input_button_label = ($scope, label) => _text($scope["#text/3"], label);
const $input = ($scope, input) => $button($scope, input.button);
const $button = ($scope, button) => {
	$rest($scope, (({ label, ...rest }) => rest)(button));
	$input_button_id($scope, button.id);
	$input_button_label($scope, button.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
