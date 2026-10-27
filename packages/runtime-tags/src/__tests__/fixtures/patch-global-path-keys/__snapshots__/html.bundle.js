// template.marko
_shells({ a: "a !a3; b%;<button>t</button><!><!>" });
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
			_html(`<p>${_text_resume($scope1_id, "a", $global$1.o.x.toUpperCase(), $scope0_page)}</p><b>${_text_resume($scope1_id, "b", $global$1.o.list.length, $scope0_page)}</b><i>${_text_resume($scope1_id, "c", $global$1.o["a.b"], $scope0_page)}</i><u>${_text_resume($scope1_id, "d", $global$1["c.d"], $scope0_page)}</u><s>${_text_resume($scope1_id, "e", $global$1.p?.x, $scope0_page)}</s>`);
			_fill_global_subscribe("a0", $scope1_id, 1);
			_fill_global_subscribe("a1", $scope1_id, 1);
			_fill_global_subscribe("a2", $scope1_id, 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a3");
	_scope($scope0_id, { c: open });
}, 1);
