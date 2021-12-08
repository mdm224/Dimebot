module.exports = {
    name: 'giverole',
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

                const member = guild.members.cache.get(targetUser.id);
                if (message.member.hasPermission(['MANAGE_ROLES'])) {
                member.roles.add(role);

                message.channel.send("Done! User now has this role.");
                var interval = setInterval(removeTempRole, 500, targetUser, role, guild, message, interval, member);
    }
    else{
        message.channel.send("You can't remove roles.");
    }
}
}




function removeTempRole (targetUser, role, guild, message, interval, member) {
        member.roles.remove(role);
        
        message.channel.send("Done! User no longer has this role.");
        endInterval(interval);
        
        
}


function endInterval(interval)
{
    return clearInterval(interval);
}
