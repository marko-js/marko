// lazy.marko
var lazy_default = _template("__tests__/lazy.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_text_resume($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/lazy.marko_0");
	_scope($scope0_id, { count }, "__tests__/lazy.marko", 0, { count: "1:6" });
});

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "__tests__/lazy.marko", flush, "ready:__tests__/lazy.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wg__input_label = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			$Lazy_withLoadAssets({ label: "s" });
			_write_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_show, $wg__input_show);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
			const $childScope = _peek_scope_id();
			$Lazy_withLoadAssets({ label: input.label });
			_scope($scope1_id, { "#childScope/1": _write_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		open
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "2:6"
	});
}, 1);
