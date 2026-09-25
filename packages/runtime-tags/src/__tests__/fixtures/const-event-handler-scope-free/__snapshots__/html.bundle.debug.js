// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const stop = function(e) {
		e.preventDefault();
	};
	const mark = function() {
		document.querySelector("#t").textContent = "marked";
	};
	_html(`<a href=#x>link</a>${_el_resume($scope0_id, "#a/0")}<button id=mark>mark</button>${_el_resume($scope0_id, "#button/1")}<button id=inc>${_text_resume($scope0_id, "#text/3", n)}</button>${_el_resume($scope0_id, "#button/2")}<p id=t>unmarked</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_mark#6");
	_script($scope0_id, "__tests__/template.marko_0_stop#5");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
