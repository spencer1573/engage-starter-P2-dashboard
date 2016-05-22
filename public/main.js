

var tableElement = document.getElementById('dashboard-list');
var personsAreaElement = document.getElementById('persons-area');

var person = [
    {name: 'King of Town', info: 'Mrs. Buttersworth!', img: './hr-char/kot.png'},
    {name: 'Homestar', info: 'Everybody! Everybody!', img: './hr-char/homestar.png'}  
];

var tableList = [
    {rank: '1', name: 'LoL1', type: 'MOBA1', cost: 'free1',  year: '2011'},
    {rank: '2', name: 'LoL2', type: 'MOBA2', cost: 'free2',  year: '2012'},
    {rank: '3', name: 'LoL3', type: 'MOBA3', cost: 'free3',  year: '2013'}
];

dashboard = {};

dashboard.buildTable = function buildTable(value) {
    if (value) {value = value.toLowerCase();}
    if (!tableList) tableList = [];
    tableElement.innerHTML = '';
    for (var i=0; i < tableList.length; i++) {
        var tr = document.createElement('TR');
        var contentExists = false;
        for (var key in tableList[i]) {
            if (tableList[i].hasOwnProperty(key)) {
                var element = tableList[i][key];
                var td = document.createElement('td');
                if (element.toLowerCase().indexOf(value) > -1) {
                    contentExists = true;
                }
                var tdText = document.createTextNode(element);
                td.appendChild(tdText);
                tr.appendChild(td);
            }
        }

        if (contentExists) {tableElement.appendChild(tr);}
    }
};




dashboard.buildPersonsArea = function buildPersonsArea(value, person) {
    var personsArea = '';

    personsAreaElement.innerHTML = '';
    //personsArea = "<img src='./hr-char/kot.png'>";

    for (var i = 0; i < person.length; i++) {

        var element = person[i];

        //console.log(element.name.toLowerCase().indexOf(value.toLowerCase()));
        if (element.name.toLowerCase().indexOf(value.toLowerCase())) {
            personsAreaElement.innerHTML +=
                '<div class="col-xs-6 col-sm-3 placeholder">'+
                   '<img src="' + element.img + '" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">' +
                   '<h4>' + element.name + '</h4>' +
                   '<span class="text-muted">' + element.info + '</span>' +
                '</div>';
        }
    }
};

dashboard.search = function search(value) {
    dashboard.buildTable(value);
    dashboard.buildPersonsArea(value, person);    
};

dashboard.addTableElement = function addTableElement() {
    var name = document.getElementById('name-input');
    console.log('this is runnyg'); 
    firebase.database().ref('table-elements').push({
        rank: '1' + Math.random() * 100,
        name: name,
        type: 'MOBA1',
        cost: 'free1', 
        year: '2011'
    });
};

dashboard.buildPersonsArea('', person);

firebase.database().ref('table-elements').on('child_added', function(data) {
//HERE
    dashboard.buildTable('',[data.val()]);
});





