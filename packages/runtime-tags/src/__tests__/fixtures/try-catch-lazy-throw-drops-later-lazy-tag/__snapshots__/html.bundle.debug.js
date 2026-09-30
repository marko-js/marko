// thrower.marko
var thrower_default = _template("__tests__/thrower.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", (() => {
		throw new Error("ERROR!");
	})(), {}, 0, 0, 0);
});

// counter.marko
var counter_default = _template("__tests__/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/counter.marko_0");
	_scope($scope0_id, { count }, "__tests__/counter.marko", 0, { count: "1:6" });
});

// template.marko
const $Thrower_withLoadAssets = withLoadAssets(thrower_default, "ready:__tests__/thrower.marko");
const $Counter_withLoadAssets = withLoadAssets(counter_default, "ready:__tests__/counter.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("b", 1), (b) => {
			const $scope3_id = _scope_id();
			$Thrower_withLoadAssets({});
			$Counter_withLoadAssets({});
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "10:4");
	}, void 0, "__tests__/template.marko_2*content");
	_await($scope0_id, "#text/1", resolveAfter("d", 2), (d) => {
		const $scope4_id = _scope_id();
		_html(`<p>${_escape(d)}</p>`);
	}, 0);
}, 1);
