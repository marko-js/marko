// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = {
		n,
		set: _resume(function(value) {
			n = value;
		}, "__tests__/tags/counter.marko_0/_return", $scope0_id)
	};
	return $return;
});

// tags/forward.marko
var forward_default = _template("__tests__/tags/forward.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputasCounter_scope = _peek_scope_id();
	let api = _dynamic_tag($scope0_id, "#text/0", input.as || counter_default, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $inputasCounter_scope, "__tests__/tags/forward.marko_0_api#5/var");
	const $return = api;
	_scope($scope0_id, {}, "__tests__/tags/forward.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let Tag = counter_default;
	const $Tag_scope = _peek_scope_id();
	let api = _dynamic_tag($scope0_id, "#text/0", Tag, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $Tag_scope, "__tests__/template.marko_0_api#5/var");
	_if(() => {
		if (api) {
			const $scope1_id = _scope_id();
			let clicks = 0;
			_html(`<button class=inner>${_text_resume($scope1_id, "#text/1", clicks)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { clicks }, "__tests__/template.marko", "6:2", { clicks: "7:8" });
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { Tag }, "__tests__/template.marko", 0, { Tag: "4:6" });
}, 1);
