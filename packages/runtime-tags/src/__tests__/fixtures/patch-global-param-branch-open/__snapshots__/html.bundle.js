// template.marko
_shells({ a: "a !a3;D b%;<main><button>t</button><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_name = _write_guard($scope0_reason, 0), $fg__input_name = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = true;
	_html(`<main><button>t</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", $global$1.brand, $scope0_page)}</p><b>${_text_mark($scope1_id, "b", input.name + ":" + $global$1.brand, $scope0_page || $wg__input_name)}</b>`);
			_fill_global_subscribe("a0", $scope1_id, 1);
			_fill_global_subscribe("a1", $scope1_id, 1);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html("</main>");
	_script($scope0_id, "a3");
	$fg__input_name && _patch_render($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: input.name,
		f: open
	}) || $fg__input_name && _patch_write($scope0_id, "xe", input.name, !_server_guard($scope0_reason, 0));
}, 1);
