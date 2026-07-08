// settings.marko
var settings_default = _template("__tests__/settings.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("__tests__/settings.marko", "dark", () => {
		_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/settings.marko", 0);
});

// tags/cart-size.marko
var cart_size_default = _template("__tests__/tags/cart-size.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const items = _context_get("__tests__/tags/cart-provider.marko", "<cart-provider>");
	_html(`<span>${_escape(items.length)}${_el_resume($scope0_id, "#text/0")} items</span>`);
	writeScope($scope0_id, {}, "__tests__/tags/cart-size.marko", 0);
});

// tags/cart-provider.marko
var cart_provider_default = _template("__tests__/tags/cart-provider.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("__tests__/tags/cart-provider.marko", [
		"a",
		"b",
		"c"
	], () => {
		_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/cart-provider.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	cart_provider_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $cartprovider_content__items__closures = new Set();
		const items = _context_get("__tests__/tags/cart-provider.marko", "<cart-provider>");
		cart_size_default({});
		settings_default({ content: _content("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const theme = _context_get("__tests__/settings.marko", "./settings.marko");
			_html(`<div>${_escape(items.join(","))}${_el_resume($scope2_id, "#text/0")}-<!>${_escape(theme)}${_el_resume($scope2_id, "#text/1")}</div>`);
			_subscribe($cartprovider_content__items__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4"));
			_resume_branch($scope2_id);
		}) });
		writeScope($scope1_id, { "ClosureScopes:items": $cartprovider_content__items__closures }, "__tests__/template.marko", "3:2");
	}) });
}, 1);
