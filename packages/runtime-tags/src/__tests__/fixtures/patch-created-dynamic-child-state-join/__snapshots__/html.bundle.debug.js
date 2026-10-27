// tags/child/index.marko
const $template$1 = "<p> </p><button>+</button>";
const $walks$1 = "D l b";
const $setup$1 = [["__tests__/tags/child/index.marko_0_input_x#4_n#5/init"], ["__tests__/tags/child/index.marko_0"]];
_shells({ "__tests__/tags/child/index.marko": "__tests__/tags/child/index.marko __tests__/tags/child/index.marko_0_input_x#4_n#5/init!__tests__/tags/child/index.marko_0;D l ;<p> </p><button>+</button>" });
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.x, void 0, $scope0_reason, 0)}</p><button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child/index.marko_0");
	_script($scope0_id, "__tests__/tags/child/index.marko_0_input_x#4_n#5");
	$sg__input_x && _patch_effect($scope0_id, "PatchQueuedEffect:__tests__/tags/child/index.marko_0_input_x#4_n#5", "input_x");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child/index.marko_fill0", n, 1);
	_scope($scope0_id, {
		input_x: input.x,
		n
	}, "__tests__/tags/child/index.marko", 0, {
		input_x: ["input.x"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_a = _write_guard($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.show ? child_default : null, { x: input.a }, 1, 0, 0, $wg__input_show__OR__input_a, $scope0_reason, 0);
	_scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_a: ["input.a"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_a && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 1)), $cg__input_a && _content_withhold(input.show), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.a, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.a));
}, 1);
