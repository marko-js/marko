// template.marko
_shells({ a: "a !a2; b%;<button>t</button><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global_brand__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	let on = true;
	_html(`<button>t</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", $global$1.brand, $scope0_page)}</em>`);
			forOf([1, 2], (x) => {
				const $scope2_id = _scope_id();
				_html(`<i>${_escape(x)}${_text_mark($scope2_id, "b", $global$1.brand, $scope0_page * 2)}</i>`);
				_subscribe($global_brand__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $scope0_page);
				$scope0_page || _resume_branch($scope2_id);
			});
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_fill_global_subscribe("a1", $scope0_id, 1);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: on,
		d: $global_brand__closures
	});
}, 1);
