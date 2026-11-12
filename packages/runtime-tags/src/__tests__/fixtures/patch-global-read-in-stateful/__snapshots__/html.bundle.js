// template.marko
_shells({ a: "a !a1; b%;<button>t</button><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	_html(`<button>t</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", $global$1.brand, $scope0_page)}</em>`);
			_global_subscribe("a0", $scope0_id, 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: on });
}, 1);
