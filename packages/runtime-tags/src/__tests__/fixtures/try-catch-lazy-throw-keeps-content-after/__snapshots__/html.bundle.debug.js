// thrower.marko
var thrower_default = _template("__tests__/thrower.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", (() => {
		throw new Error("ERROR!");
	})(), {}, 0, 0, 0);
});

// template.marko
const $Thrower_withLoadAssets = withLoadAssets(thrower_default, flush$1, "ready:__tests__/thrower.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("b", 1), (b) => {
			const $scope3_id = _scope_id();
			$Thrower_withLoadAssets({});
			_await($scope3_id, "#text/2", resolveAfter("c", 4), (c) => {
				const $scope4_id = _scope_id();
				_html(_escape(c));
			}, 0);
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "11:4");
	}, void 0, "__tests__/template.marko_2*content");
	_await($scope0_id, "#text/1", resolveAfter("d", 2), (d) => {
		const $scope5_id = _scope_id();
		_html(_escape(d));
	}, 0);
	_html("<p>after</p>");
}, 1);
