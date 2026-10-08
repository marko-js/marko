// tags/dia-d/index.marko
const $template$2 = "<em> </em>";
_shells({ e: "e;D ;<em> </em>" });
var dia_d_default = _template_patch("e", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.note, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/dia-b/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
_shells({ c: /*@__PURE__*/ ((_w0) => `c;${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2) });
var dia_b_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	dia_d_default({ note: input.note });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/dia-c/index.marko
const $template = $template$2;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
_shells({ d: /*@__PURE__*/ ((_w0) => `d;${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2) });
var dia_c_default = _template_patch("d", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	dia_d_default({ note: input.note });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/dia-a/index.marko
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template)}`)() });
var dia_a_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	dia_b_default({ note: input.note });
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope2);
	dia_c_default({ note: input.note });
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			dia_a_default({ note: input.note });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a2", show, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: show
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a1", input.note);
}, 1);
