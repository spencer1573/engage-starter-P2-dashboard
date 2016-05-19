

var tableElement = document.getElementById('dashboard-list');

var tableList = [
    {rank: '1', name: 'LoL1', type: 'MOBA1', cost: 'free1',  year: '2011'},
    {rank: '2', name: 'LoL2', type: 'MOBA2', cost: 'free2',  year: '2012'},
    {rank: '3', name: 'LoL3', type: 'MOBA3', cost: 'free3',  year: '2013'}
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
