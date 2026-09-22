// template.marko
const $template = "<pre></pre>";
const $walks = " b";
const $setup = () => {};
const $opts__script = _script("__tests__/template.marko_0_opts#4", ($scope) => {
	{
		if ($scope.opts) {
			$scope.opts.seen = true;
			_el_read($scope["#pre/0"]).textContent = JSON.stringify($scope.opts);
		}
	}
});
const $opts = /*@__PURE__*/ _const("opts", $opts__script);
const $input_label = ($scope, input_label) => $opts($scope, input_label ? { label: input_label } : null);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
