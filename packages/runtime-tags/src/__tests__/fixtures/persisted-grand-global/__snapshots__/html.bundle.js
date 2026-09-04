// tags/outer/tags/inner/index.marko
const $template = "<em> </em>";
_shells({ c: "c;D ;<em> </em>" });
var inner_default = _template_persisted("c", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", $global().brand)}</em>`);
	_global_subscribe("c0", $scope0_id);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 1);

// tags/outer/index.marko
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D l"), $template) });
var outer_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	inner_default({});
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [inner_default]);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			outer_default({});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { c: show });
}, 1, () => [outer_default]);
