// template.marko
function getStringBy() {
	return "id";
}
function getFunctionBy() {
	return (item) => item.id;
}
function getMissingBy() {
	return undefined;
}
var template_default = _template("__tests__/template.marko", (input) => {
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
		_html(`${_escape(text)}${_el_resume($scope1_id, "#text/0")}`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "17:6");
	}, "id", $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html("<div class=by-function>");
	_for_of(items, ({ text }) => {
		const $scope2_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope2_id, "#text/0")}`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "21:6");
	}, (item) => item.id, $scope0_id, "#div/1", 1, 1, 1, "</div>", 1);
	_html("<div class=by-unknown-string>");
	_for_of(items, ({ text }) => {
		const $scope3_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope3_id, "#text/0")}`);
		writeScope($scope3_id, {}, "__tests__/template.marko", "25:6");
	}, getStringBy(), $scope0_id, "#div/2", 1, 1, 1, "</div>", 1);
	_html("<div class=by-unknown-function>");
	_for_of(items, ({ text }) => {
		const $scope4_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope4_id, "#text/0")}`);
		writeScope($scope4_id, {}, "__tests__/template.marko", "29:6");
	}, getFunctionBy(), $scope0_id, "#div/3", 1, 1, 1, "</div>", 1);
	_html("<div class=by-unknown-missing>");
	_for_of(items, ({ text }) => {
		const $scope5_id = _scope_id();
		_html(`${_escape(text)}${_el_resume($scope5_id, "#text/0")}`);
		writeScope($scope5_id, {}, "__tests__/template.marko", "33:6");
	}, getMissingBy(), $scope0_id, "#div/4", 1, 1, 1, "</div>", 1);
	_html(`<button>Rotate</button>${_el_resume($scope0_id, "#button/5")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_items");
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "14:8" });
	_resume_branch($scope0_id);
}, 1);
