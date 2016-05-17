


var tableElement = document.getElementById('dashboard-list');
var tr = document.createElement('TR'); 

var tableList = [
    {rank: '1', name: 'LoL', type: 'MOBA', cost: 'free',  year: '2010'},
    {rank: '2', name: 'LoL', type: 'MOBA', cost: 'free',  year: '2010'}
];

for (var i=0; i < tableList.length; i++) {
    var tdText = document.createTextNode(tableList[i].rank);
    var td = document.createElement('TD').appendChild(tdText);
    tr.appendChild(td);
}

tableElement.appendChild(tr);