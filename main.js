

var tableElement = document.getElementById('dashboard-list');
var personsAreaElement = document.getElementById('persons-area');

var person = [
  {name: 'Fire Fly', info: 'I like my ship', img: './hr-char/kot.png'}
];

var tableList = [
    {rank: '1', name: 'LoL1', type: 'MOBA1', cost: 'free1',  year: '2011'},
    {rank: '2', name: 'LoL2', type: 'MOBA2', cost: 'free2',  year: '2012'},
    {rank: '3', name: 'LoL3', type: 'MOBA3', cost: 'free3',  year: '2013'}
];

dashboard = {};

dashboard.buildTable = function buildTable(value) {
    if (value) {value = value.toLowerCase();}
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




dashboard.buildPersonsArea = function buildPersonsArea(params) {
    var personArea = '';
    
    personsAreaElement.innerHTML = '';
    personsAreaElement.innerHTML = "<img src=\"./hr-char/kot.png\">";
/*
    for (var i = 0; i < persons.length; i++) {

        var element = persons[i];

        if(element.name.toLowerCase().indexOf(value.toLowerCase())) {
            var person =
                '<div class="col-xs-6 col-sm-3 placeholder">'+
                   '<img src="' + element.img + '" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">' +
                   '<h4>' + element.name + '</h4>' +
                   '<span class="text-muted">' + element.info + '</span>' +
                '</div>';

            personsArea += person;
        }

    }
*/
    personsAreaElement.innerHTML = personArea;
};

dashboard.search = function search(value) {
        dashboard.buildTable(value);
};

//dashboard.buildPersonsArea('');

dashboard.buildTable('');





