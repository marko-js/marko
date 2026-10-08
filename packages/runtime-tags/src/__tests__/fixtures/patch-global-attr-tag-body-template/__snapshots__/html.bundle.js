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
	_fill_global_subscribe("c0", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
});

// tags/child.marko
const $template = "<div><!><b> </b></div>";
const $walks = "D%bD m";
_shells({ b: "b;D%bD ;<div><!><b> </b></div>" });
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.item;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), void 0, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html(`<b>${_patch_text($scope0_id, "b", input.n, void 0, $scope0_reason, 1)}</b></div>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	a: /*@__PURE__*/ (() => `a !a1;${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}`)()
});
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8);
	const $childScope2 = _peek_scope_id();
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
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a2", count, 1);
	$scope0_page && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope2)
	});
}, 1);
