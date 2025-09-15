const myobj={
    css:'cascading style sheet',
    html:'hyper text markup language',
    js:'javascript'
}

for ( const key in myobj){
    console.log(`${key} is the shortcut for ${myobj[key]}`);
    
}


const prog=["js","html","css"]

for (const key in prog){
    console.log(key); // prints index => keys of array
    console.log(prog[key])
}


const map = new Map()
map.set('in','india')
map.set('esp','spain')
map.set('fr','france')

for (const key in map){
    console.log(key); // map is iterable only thru forof loop and not forin loop
    
}