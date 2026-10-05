// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=child>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
});

// other.marko
var other_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=other>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a");
const $Other_withLoadAssets = withLoadAssets(other_default, flush$1, "_b");
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Other_withLoadAssets({});
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		$Child_withLoadAssets({});
		_await($scope1_id, "c", rejectAfter(/* @__PURE__ */ new Error("caught"), 1), (v) => {
			_scope_id();
			_html(`<p>${_escape(v)}</p>`);
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(_text_resume($scope3_id, "a", err.message, $wg__err_message));
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, "c0", "c1");
	_await($scope0_id, "d", resolveAfter("done", 2), (v) => {
		_scope_id();
		_html(`<p>${_escape(v)}</p>`);
	}, 0);
}, 1);
