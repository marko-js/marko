// lazy.marko
var lazy_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
});

// tags/opener.marko
withLoadAssets(() => lazy_default, "a", flush, "_a");
var opener_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "c0");
	_scope($scope0_id, { c: open });
});

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "a", flush, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	opener_default({});
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			$Lazy_withLoadAssets({ label: "s" });
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, {});
}, 1);
