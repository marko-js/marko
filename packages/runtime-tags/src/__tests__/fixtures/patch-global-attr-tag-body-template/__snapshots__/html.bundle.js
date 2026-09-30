// tags/other.marko
const $template$1 = "<i>user=<!></i>";
const $walks$1 = "Db%l";
_shells({ c: "c;Db%;<i>user=<!></i>" });
var other_default = _template_patch("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<i>user=${_patch_text($scope0_id, "a", $global$1.user, 2)}</i>`);
	_global_subscribe("c0", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
}, 0, 1);

// tags/child.marko
const $template = "<div><!><b> </b></div>";
const $walks = "D%bD m";
_shells({ b: "b;D%bD ;<div><!><b> </b></div>" });
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.item;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html(`<b>${_patch_text($scope0_id, "b", input.n, void 0, $scope0_reason, 1)}</b></div>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1),
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0) => `/${_w0}& b`)($walks), ((_w0) => `${_w0}<button>+</button>`)($template))
});
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	const $childScope2 = _peek_scope_id();
	if ($scope0_page || _must_render(child_default, other_default)) {
		_set_serialize_reason(8);
		_patch_child($scope0_id, "a", $childScope2);
		child_default({
			n: count,
			item: attrTag({ content: _content_elide("a0", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope1_id, "a", $childScope);
				other_default({});
				_scope($scope1_id, { a: _existing_scope($childScope) });
			}, $scope0_id) })
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope2)
	});
}, 1, () => [other_default, child_default]);
