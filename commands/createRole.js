const { User } = require("discord.js");

module.exports = {
    name: 'createrole',
    permissions: "ADMINISTRATOR",
    execute(message, args){

        const name = args[0];
        var color = args[1];
        color = color.toUpperCase();


        let guild = message.guild;
       
        if (message.member.hasPermission(['MANAGE_ROLES'])) {
        message.guild.roles.create({
    data: {
      name: name,
      color: color,
    },
    reason: 'we needed a role for Super Cool People',
  })
    .then(console.log)
    .catch(console.error);

    message.channel.send("Created role " + name + " with the color "+ color);
}
else {
    message.channel.send("You don't have the perms to create a new role.");
}
}}
