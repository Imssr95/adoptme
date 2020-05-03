<div ng-app>
    <p>
        <label>Select a date</label>
        <input type="date" id="date" ng-model="datevalue" />
    </p>

    <p> {{ datevalue | date : 'fullDate'}} </p>
</div>