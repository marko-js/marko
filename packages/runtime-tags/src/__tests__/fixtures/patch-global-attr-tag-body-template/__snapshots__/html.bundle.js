// tags/other.marko
_shells({ c: "c;Db%;<i>user=<!></i>" });
var other_default = _template("c", (input) => {
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
const $setup$1 = [[], []];
_shells({ b: "b;D%bD ;<div><!><b> </b></div>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.item, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<b>${_patch_text($scope0_id, "b", input.n, void 0, $scope0_reason, 1)}</b></div>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8);
	const $childScope2 = _patch_child($scope0_id, "a", 1);
	child_default({
		n: count,
		item: attrTag({ content: _content("a0", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a", 0);
			other_default({});
			_patch_child_end();
			$scope1_page && _scope($scope1_id, { a: _existing_scope($childScope) });
		}, $scope0_id) })
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope2)
	});
}, 1);
