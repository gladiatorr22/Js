const map = new Map()
map.set('in','india')
map.set('esp','spain')
map.set('fr','france')
map.set('in','india') //  wont be added again
//console.log(map)

for (const country of map) {
    console.log(country);
}

for (const [key,value] of map) {
    console.log(key);
    console.log(key,':-',value);
    console.log(value);   
}

const myobj={
    'game1' : 'nfs',
    'game2' : 'cod',
    'game3' : 'pes'
}

for (const [key,value] of myobj) {
    console.log(key,value) // obj is not iteratable thru forof loop
}