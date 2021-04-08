module.exports = {
    name: 'pick',
    execute(message, args)
    {
      args = args + '';
      args = args.split(",");
      const pickNumb = Math.floor(Math.random() * (args.length));
       
       message.channel.send(args[pickNumb]);
    }
}