// tags/path-child.marko
_shells({ b: "b;D ;<p> </p>" });
var path_child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$2 = $global();
	_html(`<p>${_text_resume($scope0_id, "a", $global$2.o.x, void 0, 4, 0)}</p>`);
	_fill_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a1; b%;<button>t</button><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "a", $global$1.k, $scope0_page)}</b>`);
			_patch_child($scope1_id, "b", 0);
			path_child_default({});
			_patch_child_end();
			_fill_global_subscribe("a0", $scope1_id, 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: open });
}, 1);
