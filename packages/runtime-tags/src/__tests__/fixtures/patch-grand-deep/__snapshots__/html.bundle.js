// tags/l1/tags/l2/tags/l3/index.marko
const $template$1 = "<em> </em>";
_shells({ d: "d;D ;<em> </em>" });
var l3_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.note, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/l1/tags/l2/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=n> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D l");
_shells({ c: /*@__PURE__*/ (() => `c !c0;${((_w0) => ` D l/${_w0}&`)("D l")};${((_w0) => `<button class=n> </button>${_w0}`)($template$1)}`)() });
var l2_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "c");
	l3_default({ note: input.note });
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "vc1", n, 1);
	$scope0_page && _scope($scope0_id, {
		g: n,
		c: _existing_scope($childScope)
	});
});

// tags/l1/index.marko
_shells({ b: /*@__PURE__*/ ((_w0) => `b;${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var l1_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	l2_default({ note: input.note });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=t>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id();
			l1_default({ note: input.note });
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va2", show, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: show
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va1", input.note);
}, 1);
