// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr_class(input.id)}>${_text_resume($scope0_id, "#text/1", input.id, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_input_id#5");
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, {
		input_id: input.id,
		count
	}, "__tests__/child.marko", 0, {
		input_id: ["input.id"],
		count: "5:6"
	});
});

// reordered.marko
var reordered_default = _template("__tests__/reordered.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr_class(input.id)}>${_text_resume($scope0_id, "#text/1", input.id, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/reordered.marko_0_input_id#5");
	_script($scope0_id, "__tests__/reordered.marko_0");
	_scope($scope0_id, {
		input_id: input.id,
		count
	}, "__tests__/reordered.marko", 0, {
		input_id: ["input.id"],
		count: "5:6"
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
const $Reordered_withLoadAssets = withLoadAssets(reordered_default, "ready:__tests__/reordered.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	$Child_withLoadAssets({ id: "a" });
	_await($scope0_id, "#text/2", resolveAfter("b", 1), (v) => {
		const $scope1_id = _scope_id();
		$Child_withLoadAssets({ id: v });
	}, 0);
	_try($scope0_id, "#text/3", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", resolveAfter("c", 2), (v) => {
			const $scope4_id = _scope_id();
			$Reordered_withLoadAssets({ id: v });
		}, 0);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_3*content");
	_await($scope0_id, "#text/4", resolveAfter("d", 3), (v) => {
		const $scope5_id = _scope_id();
		$Child_withLoadAssets({ id: v });
	}, 0);
}, 1);
