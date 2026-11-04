// tags/reader.marko
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_mark($scope0_id, "#button/0")}<pre></pre>${_el_mark($scope0_id, "#pre/1")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_input_fn#4");
	_scope($scope0_id, { input_fn: input.fn }, "__tests__/tags/reader.marko", 0, { input_fn: ["input.fn"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_hide__OR__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<output id=out></output>");
	_dynamic_tag($scope0_id, "#text/0", input.hide ? null : reader_default, { fn: _resume(function() {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "__tests__/template.marko_0/fn", $scope0_id) }, 0, 0, $wg__input_hide__OR__input_title);
	_scope($scope0_id, {
		input_hide: _write_if($scope0_reason, 1) && input.hide,
		input_title: input.title
	}, "__tests__/template.marko", 0, {
		input_hide: ["input.hide"],
		input_title: ["input.title"]
	});
}, 1);
