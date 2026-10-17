// template.marko
const $Badge_content__walks = "D l";
const $Badge_content__template = "<p> </p>";
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)($Badge_content__walks, $Badge_content__template),
	a: /*@__PURE__*/ (() => `a !a2;${((_w0) => `D/${_w0}& l`)($Badge_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template)}`)()
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const Badge = { content: _content_elide("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_patch_text($scope1_id, "a", input.value + $global$1.flag, void 0, $scope1_reason, 0)}</p>`);
		_fill_global_subscribe("a1", $scope1_id, _client_guard($scope1_reason, 0));
		_patch_write($scope1_id, "wd", input.value, 1);
		_scope($scope1_id, { d: _unfilled_if($scope1_reason, 0) && input.value });
	}, $scope0_id) };
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a");
	Badge.content({ value: count });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va3", count, 1);
	$scope0_page && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
}, 1);
