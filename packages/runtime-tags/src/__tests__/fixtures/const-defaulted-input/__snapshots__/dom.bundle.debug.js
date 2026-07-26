// template.marko
const $template = "<div><!>/<!> <!>/<!> <!></div>";
const $walks = "D%c%c%c%c%l";
const $setup = () => {};
const $nullish = ($scope, nullish) => {
	$nullish_label($scope, nullish.label);
	$nullish_size($scope, nullish.size);
};
const $nullish_label = ($scope, nullish_label) => _text($scope["#text/0"], nullish_label);
const $nullish_size = ($scope, nullish_size) => _text($scope["#text/1"], nullish_size);
const $falsy = ($scope, falsy) => {
	$falsy_label($scope, falsy.label);
	$falsy_size($scope, falsy.size);
};
const $guarded = ($scope, guarded) => $guarded_label($scope, guarded?.label);
const $input_opts = ($scope, input_opts) => {
	$nullish($scope, input_opts ?? {
		label: "nullish",
		size: 1
	});
	$falsy($scope, input_opts || {
		label: "falsy",
		size: 2
	});
	$guarded($scope, input_opts && {
		label: "guarded",
		size: 3
	});
};
const $falsy_label = ($scope, falsy_label) => _text($scope["#text/2"], falsy_label);
const $falsy_size = ($scope, falsy_size) => _text($scope["#text/3"], falsy_size);
const $guarded_label = ($scope, guarded_label) => _text($scope["#text/4"], guarded_label);
const $input = ($scope, input) => $input_opts($scope, input.opts);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
