module.exports = {
    name: 'help',
    description: 'this is a help command',
    execute(message)
    {
        message.channel.send("```Command list: "+ 
        "randbandc - returns a random band from MA based on the country provided"+
        "randband - provides a random band of the specificed genre from Metal-Archives\n"+
        "createRole - creates a new role with the name provided"+
        "addrole - adds the selected role to the provided user"+
        "deleterole - deletes the provided role"+
        "removerole - removes the selected role from the provided user";
       
    }
}
