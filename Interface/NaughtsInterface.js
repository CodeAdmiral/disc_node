class NaughtsInterface {
    static HandleMessage = function(message, prefix) {
        if ((message.content === prefix + 'help') | (message.content === prefix + '?')) {
            message.channel.send(
`
========== TIC TAC TOE ==========
reset - 
this command will reset the game to scratch

px or po -
this is to set yourself as the player X or O

move [grid location] -
places your move on the board

show - 
shows the current game grid
=================================        
        `);
        };
        if (message.content === prefix + 'reset') {
            naughtsInstance.reset();
            message.channel.send('==== GAME TIC TAC TOE RESET ====');
        };
        if (message.content === prefix + 'px') {
            taken = naughtsInstance.setPlayerX(message.author.id);
            if (taken == false)
                message.channel.send('==== Player X has been set! ====');
            else
                message.channel.send('==== Player X has already been taken! ====');
        };
        if (message.content === prefix + 'po') {

            taken = naughtsInstance.setPlayerO(message.author.id);

            if (taken == false)
                message.channel.send('==== Player O has been set! ====');
            else
                message.channel.send('==== Player O has already been taken! ====');
        };
        if (message.content === prefix + 'show') {
            message.channel.send(naughtsInstance.show());
        };
        if (message.content.startsWith(prefix + 'move')) {
            if (message.author.id == naughtsInstance.nextPlay) {
                var input = message.content.substring(prefix.length + 4);
                naughtsInstance.move(input.trim());
                message.channel.send(naughtsInstance.show());

            } else {
                message.channel.send("==== It's not your turn yet! ====");
            }
        };
    };
}

module.exports = NaughtsInterface