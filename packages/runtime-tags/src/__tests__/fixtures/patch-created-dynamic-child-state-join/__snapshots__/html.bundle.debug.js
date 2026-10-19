// tags/child/index.marko
const $template$1 = "<p> </p><button>+</button>";
const $walks$1 = "D l b";
_shells({ "__tests__/tags/child/index.marko": "__tests__/tags/child/index.marko __tests__/tags/child/index.marko_0_input_x#4_n#5/init!__tests__/tags/child/index.marko_0;D l ;<p> </p><button>+</button>" });
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.x, void 0, $scope0_reason, 0)}</p><button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child/index.marko_0");
	_script($scope0_id, "__tests__/tags/child/index.marko_0_input_x#4_n#5", 1, 1);
	_server_guard($scope0_reason, 0) && _patch_effect($scope0_id, "PatchQueuedEffect:__tests__/tags/child/index.marko_0_input_x#4_n#5", "input_x");
	_patch_init($scope0_id, "__tests__/tags/child/index.marko_0_input_x#4_n#5/init", 1);
	_patch_value($scope0_id, "PatchValue:__tests__/tags/child/index.marko_fill0", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_x: input.x,
		n
	}, "__tests__/tags/child/index.marko", 0, {
		input_x: ["input.x"],
		n: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_x", input.x, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_a = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.show ? child_default : null, { x: input.a }, 0, 0, $wg__input_show__OR__input_a, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "PatchWrite:input_show", input.show, 1);
	_patch_write($scope0_id, "PatchWrite:input_a", input.a, 1);
	$scope0_page && _scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_a: ["input.a"]
	});
}, 1);
