// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr_class(input.id)}>${_text_resume($scope0_id, "b", input.id, _serialize_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.id,
		g: count
	});
});

// reordered.marko
var reordered_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr_class(input.id)}>${_text_resume($scope0_id, "b", input.id, _serialize_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		f: input.id,
		g: count
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
const $Reordered_withLoadAssets = withLoadAssets(reordered_default, "_b");
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	$Child_withLoadAssets({ id: "a" });
	_await($scope0_id, "c", resolveAfter("b", 1), (v) => {
		_scope_id();
		$Child_withLoadAssets({ id: v });
	}, 0);
	_try($scope0_id, "d", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", resolveAfter("c", 2), (v) => {
			_scope_id();
			$Reordered_withLoadAssets({ id: v });
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "c0");
	_await($scope0_id, "e", resolveAfter("d", 3), (v) => {
		_scope_id();
		$Child_withLoadAssets({ id: v });
	}, 0);
}, 1);
