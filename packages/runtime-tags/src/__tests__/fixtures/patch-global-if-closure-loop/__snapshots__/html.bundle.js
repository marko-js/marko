// template.marko
_shells({ a: "a !a3; b%;<button>t</button><!><!>" });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global_brand__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	let on = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", $global$1.brand, $scope0_page)}</em>`);
			if ($scope0_page) forOf([1, 2], (x) => {
				const $scope2_id = _scope_id();
				_html(`<i>${_escape(x)}${_text_resume($scope2_id, "b", $global$1.brand, $scope0_page * 2)}</i>`);
				_global_subscribe("a1", $scope2_id, 1);
				_subscribe($global_brand__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2", $scope0_page);
			});
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a3");
	$scope0_page && _scope($scope0_id, { c: on });
}, 1, 1);
