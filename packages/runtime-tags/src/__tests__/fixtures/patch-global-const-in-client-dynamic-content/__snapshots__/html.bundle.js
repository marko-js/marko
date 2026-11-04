// template.marko
_shells({ a: "a !a3; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $h__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	let open = true;
	const h = $global$1.label + "!";
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	const A = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<p>${_text_mark($scope1_id, "a", h, $scope1_page)}</p>`);
		_subscribe($h__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $scope1_page);
		$scope1_page || _resume_branch($scope1_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "b", A, {});
	_fill_global_subscribe("a2", $scope0_id);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: open,
		d: h,
		e: A,
		g: $h__closures
	}) || _patch_write($scope0_id, "xd", h) && _patch_subscribers($scope0_id, "a4", "d");
}, 1);
