module.exports = {
    name: 'removerole',
    permissions: "ADMINISTRATOR",
    execute(message, args){
        
        const targetUser = message.mentions.users.first()
        if (!targetUser)
        {
            message.reply("Please specify.")
            return
        }

        args.shift();

        const roleName = args.join(' ');

        const { guild } = message;

        const role = guild.roles.cache.find((role)=>{
            return role.name === roleName;
        })
            if (!role){
                message.reply("Does not exist.");
                return
            }

            const members = guild.members.cache.get(targetUser.id);
            if (members.hasPermission(['MANAGE_ROLES'])) {
            if (members.roles.cache.get(role.id)){
            members.roles.remove(role);
            }
            else {
                message.reply("They don't have this role.");
            }
            message.channel.send("Done!");
        }
        else{
            message.channel.send("You can't remove roles.");
        }
   
    }
}
