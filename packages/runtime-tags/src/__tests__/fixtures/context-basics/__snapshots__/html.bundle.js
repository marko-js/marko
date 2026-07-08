// settings.marko
var settings_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("a", "dark", () => {
		_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/cart-size.marko
var cart_size_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(_context_get("c").length)}${_el_resume($scope0_id, "a")} items</span>`);
	writeScope($scope0_id, {});
});

// tags/cart-provider.marko
var cart_provider_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("c", [
		"a",
		"b",
		"c"
	], () => {
		_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	cart_provider_default({ content: _content("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $cartprovider_content__items__closures = /* @__PURE__ */ new Set();
		const items = _context_get("c");
		cart_size_default({});
		settings_default({ content: _content("b0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const theme = _context_get("a");
			_html(`<div>${_escape(items.join(","))}${_el_resume($scope2_id, "a")}-<!>${_escape(theme)}${_el_resume($scope2_id, "b")}</div>`);
			_subscribe($cartprovider_content__items__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
			_resume_branch($scope2_id);
		}) });
		writeScope($scope1_id, { Bc: $cartprovider_content__items__closures });
	}) });
}, 1);
