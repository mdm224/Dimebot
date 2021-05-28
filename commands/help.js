module.exports = {
    name: 'help',
    description: 'this is a help command',
    execute(message)
    {
        message.channel.send("```Command list: \n\nSerious commands:\n"+ 
        "addquote - adds the provided quote\n"+
        "randband - provides a random band of the specificed genre from Metal-Archives\n"+
        "lastfm - provides the last played song of the lastfm account provided\n"+
        "quotelist - provides the link to the quote list\n"+
        "metal - provides the Metal-Archives link of the provided band\n"+
        "img - provides a random image of the args provided\n"+
        "pick - picks a random number from 0 to the provided number\n"+
        "savefm - saves the provided lastfm name to a doc\n"+
        "fmnames - prints out the known lastfm names\n"+
        "\nMeme Commands:\n"+
        "mdm - returns 'weeb'\n"+
        "roots - returns the chorus of Roots by Sepultura and a gif of Max\n"+
        "jumpdafuckup - returns the chorus of Soulfly's JumpDaFuckUp\n"+
        "jon - returns something jon would say\n"+
        "disturbed - returns every disturbed song ever\n"+
        "brady - returns a gif of Tom Brady\n"+
        "trubisky - returns a gif of Mitch Trubisky\n"+
        "allen - returns a gif of Josh Allen\n"+
        "stars - returns a gif of a hockey player on the Dallas stars\n"+
        "room - returns a quote from The Room\n"+
        "jaqen - returns a Thrash or Die song and lyric\n"+
        "jason - returns the Lars gif\n"+
        "dragonforce - so far away\n"+
        "lars - returns a picture of Lars\n"+
        "poser - returns some of the lyrics of Poser by Nanowar\n"+
        "walk - returns the lyrics of Walk\n"+
        "labrie - shrimp\n"+
        "schaffer - 0-0-0\n"+
        "david - just playin the bass\n```"");
    }
}
