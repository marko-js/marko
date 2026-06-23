// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = {
		a: 1,
		b: 2,
		c: 3
	};
	const { a, ...partialObj } = obj;
	_html(`<div class=obj>${_escape(JSON.stringify(obj))}${_el_resume($scope0_id, "#text/0")}</div><div class=partialObj>${_escape(JSON.stringify(partialObj))}${_el_resume($scope0_id, "#text/1")}</div><div class=a>${_escape(a)}${_el_resume($scope0_id, "#text/2")}</div><div class=b>${_escape(partialObj.b)}${_el_resume($scope0_id, "#text/3")}</div><div class=a>${partialObj.a === undefined ? "removed a" : "didn't remove a"}${_el_resume($scope0_id, "#text/4")}</div><button>Update</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
