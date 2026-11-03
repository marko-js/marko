// counter.marko
var counter_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// lazy.marko
var lazy_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { g: count });
});

// other.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "b", flush, "_b");
var other_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</i>`);
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	$Lazy_withLoadAssets({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { c: _existing_scope($childScope) });
});

// tags/chooser.marko
var chooser_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "e0");
	_scope($scope0_id, {
		e: input.Tag,
		f: input.label,
		g: show
	});
});

// template.marko
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.which ? counter_default : other_default, { label: input.label }, 0, 0, $wg__input_which__OR__input_label);
	_set_scope_reason($wg__input_which__OR__input_label << 1);
	const $childScope = _peek_scope_id();
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.which,
		f: _write_if($scope0_reason, 1) && input.label,
		b: _existing_scope($childScope)
	});
}, 1);
