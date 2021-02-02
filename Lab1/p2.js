// check if a string conains a search text

//const search = '';
//const message = 'Hello JavaScript';
//const indexOf = message.indexOf('o');
//console.log(indexOf);
//output => true หรือ false

const searchMessage = (search) => {
    const message = 'Hello JavaScript';
    console.log(message.indexOf(search) >= 0 );
}
searchMessage ("x")