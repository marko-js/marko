// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<!DOCTYPE html><html><head><title>Branch</title>${_flush_head()}</head><body>`);
	_await($scope0_id, "a", resolveAfter("x", 1), (v) => {
		const $scope1_id = _scope_id();
		let show = true;
		_html(`<button></button>${_el_resume($scope1_id, "a")}`);
		_if(() => {
			{
				const $scope2_id = _scope_id();
				$Child_withLoadAssets({ value: v });
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "b");
		_script($scope1_id, "b0");
		_scope($scope1_id, {
			d: v,
			e: show
		});
	});
	_trailers("</body></html>");
}, 1);
