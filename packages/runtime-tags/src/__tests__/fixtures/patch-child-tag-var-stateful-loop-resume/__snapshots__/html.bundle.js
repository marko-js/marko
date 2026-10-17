// tags/ret.marko
_shells({ b: "b," });
var ret_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return String(input.x) + "!";
});

// tags/w.marko
_shells({ c: /*@__PURE__*/ (() => `c;${((_w0) => `0${_w0}&Db%l`)("")};${((_w0) => `${_w0}<p>r:<!></p>`)("")}`)() });
var w_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a");
	let r = ret_default({ x: input.x });
	_client_guard($scope0_reason, 0) && _var($scope0_id, "b", $childScope, "c0");
	_html(`<p>r:${_patch_text($scope0_id, "c", r, 2, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0; D l%;<button> </button><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let s = 0;
	_html(`<button>${_text_resume($scope0_id, "b", s)}</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _for_until(1, 0, 1, (n) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		w_default({ x: s + n });
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", s, 1);
	$scope0_page && _scope($scope0_id, { d: s });
}, 1);
