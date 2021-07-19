module.exports = {
    name: 'deleterole',
    permissions: "ADMINISTRATOR",
    execute(message, args){

        let guild = message.guild;

        if (message.member.hasPermission(['MANAGE_ROLES'])) {
        const role = guild.roles.cache.find(role => role.name === args[0]);
        role.delete("testing")
  .then(deleted => console.log(`Deleted role ${deleted.name}`))
  .catch(console.error);
  message.channel.send("Deleted the role "+ role.name + ".");
        }
        else{
            message.channel.send("You don't have the perms to delete a role.");
        }
    }
}