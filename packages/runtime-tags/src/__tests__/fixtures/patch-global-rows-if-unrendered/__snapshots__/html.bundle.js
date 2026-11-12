// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a3: "a3 !a1;D b%;<li><button>t</button><!></li>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<ul>");
	_for_until(3, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		let show = i === 1;
		_html(`<li><button>t</button>${_el_mark($scope1_id, "a")}`);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(`<b>${_text_mark($scope2_id, "a", $global$1.x, $scope0_page)}</b>`);
				_global_subscribe("a0", $scope1_id, 1);
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "b", 1, 1, 0, 0, 1);
		_html("</li>");
		_script($scope1_id, "a1");
		_patch_fill($scope1_id, "va2", show, 1);
		_scope($scope1_id, { d: show });
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a3", 0, 0);
	_html(`</ul>${_el_mark($scope0_id, "a")}`);
	_scope($scope0_id, {});
}, 1);
