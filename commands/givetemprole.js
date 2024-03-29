module.exports = {
    name: 'givetemprole',
    permissions: "ADMINISTRATOR",
    execute(message, args){

            const targetUser = message.mentions.users.first()
            if (!targetUser)
            {
                message.reply("Please specify.")
                return
            }

            const roleName = args[1];
            console.log(roleName);
            var time = args[2];
        
            if (args[3] === "minutes")
                {
            time = time * 60000;
                }
            
            else if (args[3] === "hours")
            {
                time = time * 60000;
                time = time * 60;
            }
        
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
                var interval = setInterval(function() {
                member.roles.remove(role);
        
                message.channel.send("Done! User no longer has this role.");
                clearInterval(interval);
                }, time);
          
                
    }
    else{
        message.channel.send("You can't add roles.");
    }
}
}
