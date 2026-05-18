// template.marko
const $template = "<button>Toggle</button><pre></pre><!><!>";
const $walks = " b b%c";
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_el_read($scope._["#pre/1"]).innerHTML += "\nmounted";
	$signal($scope, 0).onabort = () => {
		_el_read($scope._["#pre/1"]).innerHTML += "\ndestroyed";
	};
});
const $if_content__setup = ($scope) => {
	$signalReset($scope, 0);
	$if_content__setup__script($scope);
};
const $if = /* @__PURE__ */ _if("#text/2", "<div>child</div>", "b", $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
