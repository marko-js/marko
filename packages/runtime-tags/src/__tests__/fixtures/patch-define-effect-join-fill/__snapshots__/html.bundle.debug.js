// template.marko
const $Row_content__walks = "D l b";
const $Row_content__template = "<p> </p><div></div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<p>${_patch_text($scope1_id, "#text/0", a + b, void 0, $scope1_reason, 0)}</p><div></div>${_el_resume($scope1_id, "#div/1")}`);
		_script($scope1_id, "__tests__/template.marko_1_a#4", 1, 1);
		_server_guard($scope1_reason, 1) && _patch_effect($scope1_id, "PatchQueuedEffect:__tests__/template.marko_1_a#4", "a");
		_patch_write($scope1_id, "PatchWrite:b", b, 1);
		$scope1_page ? _scope($scope1_id, {
			a,
			b: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 2)) && b
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		}) : _filled_guard($scope1_reason, 1) && (_client_guard($scope1_reason, 2) ? _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", a, !_server_guard($scope1_reason, 1)) : _patch_write($scope1_id, "PatchWrite:a", a, !_server_guard($scope1_reason, 1)));
	}, $scope0_id) };
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Row.content({
		a: input.a,
		b: n
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
