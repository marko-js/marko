// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $hide__closures = new Set();
	let hide = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(hide ? [] : input.head, (item) => {
		const $scope3_id = _scope_id();
		_html(`<i>${_escape(item)}${_el_resume($scope3_id, "#text/0")}</i>`);
		writeScope($scope3_id, {}, "__tests__/template.marko", "5:6");
	}, 0, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_await($scope0_id, "#text/2", resolveAfter(input.mid, 1), (mid) => {
		const $scope1_id = _scope_id();
		_html("<ol>");
		_for_of(hide ? [] : mid, (item) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_escape(item)}${_el_resume($scope4_id, "#text/0")}</b>`);
			writeScope($scope4_id, {}, "__tests__/template.marko", "7:8");
		}, 0, $scope1_id, "#ol/0", 1, 1, 1, "</ol>", 1);
		_subscribe($hide__closures, writeScope($scope1_id, {
			mid,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "6:2", { mid: "6:8" }));
		_resume_branch($scope1_id);
	});
	_await($scope0_id, "#text/3", resolveAfter(input.tail, 5), (tail) => {
		const $scope2_id = _scope_id();
		_html("<ol>");
		_for_of(hide ? [] : tail, (item) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_escape(item)}${_el_resume($scope5_id, "#text/0")}</em>`);
			writeScope($scope5_id, {}, "__tests__/template.marko", "10:8");
		}, 0, $scope2_id, "#ol/0", 1, 1, 1, "</ol>", 1);
		_subscribe($hide__closures, writeScope($scope2_id, {
			tail,
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:hide": 1
		}, "__tests__/template.marko", "9:2", { tail: "9:8" }));
		_resume_branch($scope2_id);
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_head: input.head,
		hide,
		"ClosureScopes:hide": $hide__closures
	}, "__tests__/template.marko", 0, {
		input_head: ["input.head"],
		hide: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
