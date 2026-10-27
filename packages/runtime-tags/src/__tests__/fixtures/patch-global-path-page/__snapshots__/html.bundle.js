// template.marko
_shells({ a: "a !a6 a5 a4 a3 a2 a7; b%b b b b b b ;<button>t</button><!><ul></ul><div></div><div></div><div></div><div></div><div></div>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "a", $global$1.a + $global$1.c, $scope0_page)}</b>`);
			_fill_global_subscribe("a0", $scope1_id, 1);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html("<ul>");
	if ($scope0_page) _for_until(1, 0, 1, (i) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_resume($scope2_id, "a", $global$1.a + $global$1.c, $scope0_page)}</li>`);
		_fill_global_subscribe("a1", $scope0_id, 1);
		$scope0_page && _scope($scope2_id, {});
	}, 0, $scope0_id, "c", 1, 1, 1, "</ul>", 1);
	_html(`<div></div>${_el_resume($scope0_id, "d")}<div></div>${_el_resume($scope0_id, "e")}<div></div>${_el_resume($scope0_id, "f")}<div></div>${_el_resume($scope0_id, "g")}<div></div>${_el_resume($scope0_id, "h")}`);
	_script($scope0_id, "a6");
	_script($scope0_id, "a5");
	_script($scope0_id, "a4");
	_script($scope0_id, "a3");
	_script($scope0_id, "a2");
	_script($scope0_id, "a7");
	$scope0_page && _scope($scope0_id, { i: open });
}, 1);
