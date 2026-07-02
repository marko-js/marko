// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<button>${_escape(((() => {
		if (clickCount > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
	})(), clickCount))}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0_input_onCount");
	writeScope($scope0_id, {
		input_onCount: input.onCount,
		clickCount
	}, "__tests__/tags/counter.marko", 0, {
		input_onCount: ["input.onCount"],
		clickCount: "1:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	const onCount = _resume(function(count) {
		show = count < 1;
	}, "__tests__/template.marko_0/onCount", $scope0_id);
	_html("<div>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			counter_default({ onCount });
			_html("</div>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	writeScope($scope0_id, { onCount }, "__tests__/template.marko", 0, { onCount: "2:8" });
	_resume_branch($scope0_id);
}, 1);
