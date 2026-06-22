// template.marko
function getStringBy() {
	return "id";
}
function getFunctionBy() {
	return (item) => item.id;
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{
			id: 0,
			text: "first"
		},
		{
			id: 1,
			text: "second"
		},
		{
			id: 2,
			text: "third"
		}
	];
	_html("<div><div class=by-string>");
	_for_of(items, ({ text }) => {
		const $scope1_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, 1, "</div>", 1, 1);
	_html("<div class=by-function>");
	_for_of(items, ({ text }) => {
		const $scope2_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope2_id, "a")}`);
		writeScope($scope2_id, {});
	}, (item) => item.id, $scope0_id, "b", 1, 1, 1, "</div>", 1, 1);
	_html("<div class=by-unknown-string>");
	_for_of(items, ({ text }) => {
		const $scope3_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope3_id, "a")}`);
		writeScope($scope3_id, {});
	}, getStringBy(), $scope0_id, "c", 1, 1, 1, "</div>", 1, 1);
	_html("<div class=by-unknown-function>");
	_for_of(items, ({ text }) => {
		const $scope4_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope4_id, "a")}`);
		writeScope($scope4_id, {});
	}, getFunctionBy(), $scope0_id, "d", 1, 1, 1, "</div>", 1, 1);
	_html("<div class=by-unknown-missing>");
	_for_of(items, ({ text }) => {
		const $scope5_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope5_id, "a")}`);
		writeScope($scope5_id, {});
	}, void 0, $scope0_id, "e", 1, 1, 1, "</div>", 1, 1);
	_html(`<button>Rotate</button>${_el_resume($scope0_id, "f")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { g: items });
	_resume_branch($scope0_id);
}, 1);
