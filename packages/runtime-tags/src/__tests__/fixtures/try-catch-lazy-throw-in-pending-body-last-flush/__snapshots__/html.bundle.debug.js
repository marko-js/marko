// thrower.marko
var thrower_default = _template("__tests__/thrower.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", (() => {
		throw new Error("ERROR!");
	})(), {}, 0, 0, 0);
});

// template.marko
const $Thrower_withLoadAssets = withLoadAssets(thrower_default, "ready:__tests__/thrower.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter("a", 3), (a) => {
		const $scope1_id = _scope_id();
		_html(_escape(a));
	}, 0);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", resolveAfter("b", 1), (b) => {
			const $scope4_id = _scope_id();
			$Thrower_withLoadAssets({});
			_await($scope4_id, "#text/2", resolveAfter("c", 3), (c) => {
				const $scope5_id = _scope_id();
				_html(_escape(c));
			}, 0);
		}, 0);
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`caught ${_text_resume($scope3_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "14:4");
	}, void 0, "__tests__/template.marko_3*content");
}, 1);
