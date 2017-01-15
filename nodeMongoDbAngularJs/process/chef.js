process.on('message', function(message, parent){
    var meal = {};
    switch(message.cmd){
        case 'makeBreakfast':
            meal = ['hank', 'eggs', 'toast'];
            break;
        case 'makeLunch':
            meal = ['burger', 'fries', 'shake'];
            break;
        case 'makeDinner':
            meal = ['soup', 'salad', 'steak'];
            break;
    }
    
    process.send(meal);
});