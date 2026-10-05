// thrower.marko
var thrower_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", (() => {
		throw new Error("ERROR!");
	})(), {}, 0, 0, 0);
});

// counter.marko
var counter_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
});

// template.marko
const $Thrower_withLoadAssets = withLoadAssets(thrower_default, flush$1, "_c");
const $Counter_withLoadAssets = withLoadAssets(counter_default, flush$1, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("b", 1), (b) => {
			_scope_id();
			$Thrower_withLoadAssets({});
			$Counter_withLoadAssets({});
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "b0");
	_await($scope0_id, "b", resolveAfter("d", 2), (d) => {
		_scope_id();
		_html(`<p>${_escape(d)}</p>`);
	}, 0);
}, 1);
