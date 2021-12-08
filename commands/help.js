module.exports = {
    name: 'help',
    description: 'this is a help command',
    execute(message)
    {
        message.channel.send("```Command list: "+ 
        "metal - provides the Metal-Archives link of the provided band\n"+
        "img - provides a random image of the args provided\n"+
        "pick - picks a random number from 0 to the provided number\n"+
        "randbandc - returns a random band from MA based on hte country provided"+
        "randband - provides a random band of the specificed genre from Metal-Archives\n"+
        "createRole - creates a new role with the name provided"+
        "addrole - adds the selected role to the provided user"+
        "deleterole - deletes the provided role"+
        "removerole - removes the selected role from the provided user";
       
    }
}
