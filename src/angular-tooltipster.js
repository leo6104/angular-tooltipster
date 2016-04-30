(function(angular) {
	angular.module("tooltipster",[]).directive('tooltipTitle', function() {
	    return {
            restrict: 'A',
            scope: {
                tooltipTitle: '@',
                tooltipOptions: "="
            },
            link: function(scope, element, attrs) {
                var tooltipOptions = scope.tooltipOptions || {};
                tooltipOptions.content = scope.tooltipTitle;
                element.tooltipster(tooltipOptions);

                scope.$watch("tooltipTitle", function (value) {
                    element.tooltipster('content', value);
                    if (!value) {
                        element.tooltipster('disable');
                    } else {
                        element.tooltipster('enable');
                    }
                });

                scope.$on("$destroy", function () {
                    element.tooltipster('destroy');
                });
            }
	    }	
	});
})(angular);
