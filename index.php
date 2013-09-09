<!DOCTYPE html>
<html>
<head>
    <title>Testing AngularJS App Setup</title>

    <?php if (isset($_GET['live'])): ?>
    <script src="vendor/angular-loader/angular-loader.min.js"></script>
    <?php endif; ?>
</head>
<body>
    <div id="app2">
        <section ng-init="people = [{name: 'Jacob'},{name: 'Will'},{name: 'Israel'},{name: 'Nick'},{name: 'Mike'},{name: 'Michael'},{name: 'John'},{name: 'Alyssa'},{name: 'Dustin'}];">
            <h1>Basic List</h1>

            <div cb-slider="{collectionName: 'people'}" cb-slider-data="people">
                <div class="group">
                    <div class="group-title">People:</div>
                    <div class="group-name" ng-repeat="person in slider.people ">
                        {{ person.name }}
                    </div>
                </div>
            </div>

            <h1>Grouped List</h1>

            <div cb-slider="{collectionName: 'groups', perPage: 3}" cb-slider-data="people">
                <div class="group" ng-repeat="group in slider.groups">
                    <div class="group-title">Group {{ $index }}:</div>
                    <div class="group-name" ng-repeat="person in group">
                        {{ person.name }}
                    </div>
                </div>
            </div>

            <h1>Basic Slider</h1>

            <div cb-slider="{collectionName: 'people'}" cb-slider-data="people">
                <div class="group" ng-repeat="person in slider.people" ng-show="slider.currentPage == $index">
                    <div class="group-title">{{ person.name }}</div>
                </div>
                <div class="controls">
                    <a class="control-left" ng-click="slider.prev()">Prev</a>
                    <div class="divider"></div>
                    <a class="control-right" ng-click="slider.next()">Next</a>
                </div>
            </div>

            <h2>Grouped Slider</h2>

            <div cb-slider="{collectionName: 'groups', perPage: 3}" cb-slider-data="people">
                <div class="group" ng-repeat="group in slider.groups" ng-show="slider.currentPage == $index">
                    <div class="group-title">Group {{ $index }}:</div>
                    <div class="group-name" ng-repeat="person in group">
                        {{ person.name }}
                    </div>
                </div>
                <div class="controls">
                    <a class="control-left" ng-click="slider.prev()">Prev</a>
                    <div class="divider"></div>
                    <a class="control-right" ng-click="slider.next()">Next</a>
                </div>
            </div>
         </section>
    </div>

    <?php if (isset($_GET['live'])): ?>
    <script src="js/main.all.js"></script>
    <?php else: ?>
    <script src="/vendor/requirejs/require.js" data-main="/js/main.js"></script>
    <?php endif; ?>
</body>
</html>
