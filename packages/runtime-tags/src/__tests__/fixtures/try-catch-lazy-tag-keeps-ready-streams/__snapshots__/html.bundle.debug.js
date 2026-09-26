// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=child>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
});

// other.marko
var other_default = _template("__tests__/other.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=other>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/other.marko_0");
	_scope($scope0_id, { count }, "__tests__/other.marko", 0, { count: "1:6" });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
const $Other_withLoadAssets = withLoadAssets(other_default, "ready:__tests__/other.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Other_withLoadAssets({});
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		$Child_withLoadAssets({});
		_await($scope1_id, "#text/2", rejectAfter(new Error("caught"), 1), (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>${_escape(v)}</p>`);
		}, 0);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("loading");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("__tests__/template.marko_3*content", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(_text_resume($scope3_id, "#text/0", err.message, $sg__err_message));
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "12:4");
		}, $scope0_id) })
	});
	_await($scope0_id, "#text/3", resolveAfter("done", 2), (v) => {
		const $scope5_id = _scope_id();
		_html(`<p>${_escape(v)}</p>`);
	}, 0);
}, 1);
