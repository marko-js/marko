// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $dark__closures = /* @__PURE__ */ new Set();
	let dark = false;
	_html(`<html lang=en><head><title>x</title>${_flush_head()}</head><body>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("done", 1), (v) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_escape(v)} ${_text_mark($scope2_id, "c", dark, 2)}</button>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_subscribe($dark__closures, _scope($scope2_id, {}), "a1");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a2");
	_html(`</body>${_el_mark($scope0_id, "a")}`), _trailers("</html>");
	_scope($scope0_id, {
		c: dark,
		d: $dark__closures
	});
}, 1);
