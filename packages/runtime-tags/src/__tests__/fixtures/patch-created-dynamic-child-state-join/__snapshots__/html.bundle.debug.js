// tags/child/index.marko
const $template$1 = "<p> </p><button>+</button>";
const $walks$1 = "D l b";
const $setup$1 = [[], ["__tests__/tags/child/index.marko_0"]];
_shells({ "__tests__/tags/child/index.marko": "__tests__/tags/child/index.marko !__tests__/tags/child/index.marko_0;D l ;<p> </p><button>+</button>" });
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.x, 1, $scope0_reason, 0)}</p><button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child/index.marko_0");
	_script($scope0_id, "__tests__/tags/child/index.marko_0_input_x#4_n#5", 1, 0, $fg__input_x && "input_x", "__tests__/tags/child/index.marko_0_input_x#4_n#5/setup");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child/index.marko_0_n#5/fill", n, 1);
	_scope($scope0_id, {
		input_x: input.x,
		n
	}, "__tests__/tags/child/index.marko", 0, {
		input_x: ["input.x"],
		n: "1:6"
	}) || $fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_a = _write_guard($scope0_reason, 0), $ui__input_show__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.show ? child_default : null, { x: input.a }, 1, 0, 0, $wg__input_show__OR__input_a, $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_show#3_input_a#4/setup", (($fg__input_show ? " input_show" : "") + ($fg__input_a ? " input_a" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_show: _write_if($scope0_reason, 2) && $ui__input_show__OR__input_a && input.show,
		input_a: _write_if($scope0_reason, 1) && $ui__input_show__OR__input_a && input.a
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_a: ["input.a"]
	}) || ($fg__input_show && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 1)), $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 2)));
}, 1);
