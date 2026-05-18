// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<button>${_escape(((() => {
		if (clickCount > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
	})(), clickCount))}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		e: input.onCount,
		f: clickCount
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	const onCount = _resume(function(count) {
		show = count < 1;
	}, "a0", $scope0_id);
	_html("<div>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			counter_default({ onCount });
			_html("</div>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	writeScope($scope0_id, { c: onCount });
	_resume_branch($scope0_id);
}, 1);
