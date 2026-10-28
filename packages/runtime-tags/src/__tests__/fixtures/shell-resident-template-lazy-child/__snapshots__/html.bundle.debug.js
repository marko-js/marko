// counter.marko
var counter_default = _template("__tests__/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/counter.marko", 0);
});

// lazy.marko
var lazy_default = _template("__tests__/lazy.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/lazy.marko_0");
	_scope($scope0_id, { count }, "__tests__/lazy.marko", 0, { count: "1:6" });
});

// other.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "__tests__/lazy.marko", flush, "ready:__tests__/lazy.marko");
var other_default = _template("__tests__/other.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</i>`);
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	$Lazy_withLoadAssets({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/other.marko", 0);
});

// tags/chooser.marko
var chooser_default = _template("__tests__/tags/chooser.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.Tag, { label: input.label }, 0, 0, $wg__input_Tag__OR__input_label);
			_scope($scope1_id, {}, "__tests__/tags/chooser.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/chooser.marko_0");
	_scope($scope0_id, {
		input_Tag: input.Tag,
		input_label: input.label,
		show
	}, "__tests__/tags/chooser.marko", 0, {
		input_Tag: ["input.Tag"],
		input_label: ["input.label"],
		show: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.which ? counter_default : other_default, { label: input.label }, 0, 0, $wg__input_which__OR__input_label);
	_set_scope_reason($wg__input_which__OR__input_label << 1);
	const $childScope = _peek_scope_id();
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_which: _write_if($scope0_reason, 2) && input.which,
		input_label: _write_if($scope0_reason, 1) && input.label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_label: ["input.label"]
	});
}, 1);
