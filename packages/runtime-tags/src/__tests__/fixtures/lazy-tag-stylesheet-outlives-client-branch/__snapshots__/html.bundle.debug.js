// child.css
var child_default$1 = ".child {\n  color: green;\n}\n";

// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!DOCTYPE html><html><head><title>Branch</title>${_flush_head()}</head><body>`);
	_await($scope0_id, "#text/0", resolveAfter("x", 1), (v) => {
		const $scope1_id = _scope_id();
		let show = true;
		_html(`<button></button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				$Child_withLoadAssets({ value: v });
				_scope($scope2_id, {}, "__tests__/template.marko", "13:6");
				return 0;
			}
		}, $scope1_id, "#text/1");
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			v,
			show
		}, "__tests__/template.marko", "10:4", {
			v: "10:10",
			show: "11:10"
		});
	});
	_trailers("</body></html>");
}, 1);
