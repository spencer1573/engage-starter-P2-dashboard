

var tableElement = document.getElementById('dashboard-list');

var tableList = [
    {rank: '1', name: 'LoL', type: 'MOBA', cost: 'free',  year: '2010'},
    {rank: '2', name: 'LoL', type: 'MOBA', cost: 'free',  year: '2010'}
];

for (var i=0; i < tableList.length; i++) {
    var tr = document.createElement('TR'); 
    for (var key in tableList[i]) {
        if (tableList[i].hasOwnProperty(key)) {
            var element = tableList[i][key];
            var td = document.createElement('td')
            var tdText = document.createTextNode(element);
            td.appendChild(tdText);
            tr.appendChild(td);
        }
    }
    tableElement.appendChild(tr);
}