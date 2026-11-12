// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $dark__closures = new Set();
	let dark = false;
	_html(`<html lang=en><head><title>x</title>${_flush_head()}</head><body${dark ? " class=dark" : ""}>`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("done", 1), (v) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_escape(v)} ${_text_mark($scope2_id, "#text/2", dark, 2)}</button>${_el_mark($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_subscribe($dark__closures, _scope($scope2_id, {}, "__tests__/template.marko", "8:8"), "__tests__/template.marko_2_dark#0:2/subscribe");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:6");
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_3*content");
	_html(`</body>${_el_mark($scope0_id, "#body/0")}`), _trailers("</html>");
	_scope($scope0_id, {
		dark,
		"ClosureScopes:dark/3": $dark__closures
	}, "__tests__/template.marko", 0, { dark: "2:6" });
}, 1);
