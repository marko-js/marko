// template.marko
_shells({ a: "a !a2 a3; b%b ;<button>t</button><!><div></div>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = true;
	_html(`<button>t</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", $global$1.o.x, $scope0_page)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<div></div>${_el_mark($scope0_id, "c")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_fill_global_subscribe("a1", $scope0_id, 1);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_patch_render($scope0_id, "a4", ["i", "k"]);
	_scope($scope0_id, { d: open });
}, 1);
