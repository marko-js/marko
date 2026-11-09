// template.marko
const $template = "<div><!>/<!> <!>/<!> <!></div>";
const $walks = "D%c%c%c%c%l";
const $setup = ($_) => {};
const $nullish = ($scope, nullish) => {
	_text($scope["#text/0"], nullish.label);
	_text($scope["#text/1"], nullish.size);
};
const $falsy = ($scope, falsy) => {
	_text($scope["#text/2"], falsy.label);
	_text($scope["#text/3"], falsy.size);
};
const $guarded = ($scope, guarded) => _text($scope["#text/4"], guarded?.label);
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
const $input = ($scope, input) => $input_opts($scope, input.opts);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
