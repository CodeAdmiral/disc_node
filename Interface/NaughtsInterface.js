class NaughtsInterface {
    static HandleMessage = function(message, prefix) {
        
        // ----------- Help section ----------------------------------
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
        //--------------------------------------------------------------



        // ------ Reset the game ---------------
        if (message.content === prefix + 'reset') {
            naughtsInstance.reset();
            message.channel.send('==== GAME TIC TAC TOE RESET ====');
        };
        //--------------------------------------

        //------------ Take player X and O ---------------
        if (message.content === prefix + 'px') {
            var taken = naughtsInstance.setPlayerX(message.author.username);
            if (taken == false)
                message.channel.send('==== Player X has been set! ====');
            else
                message.channel.send('==== Player X has already been taken! ====');
        };
        if (message.content === prefix + 'po') {
            var taken = naughtsInstance.setPlayerO(message.author.username);

            if (taken == false)
                message.channel.send('==== Player O has been set! ====');
            else
                message.channel.send('==== Player O has already been taken! ====');
        };
        //--------------------------------------------------


        //----------- show the grid ---------------------
        if (message.content === prefix + 'show') {
            message.channel.send(naughtsInstance.show());
        };
        //----------------------------------------------


        //--------- Make a move ------------------------
        if (message.content.startsWith(prefix + 'move')) {
            if (message.author.username == naughtsInstance.nextPlay) {
                var input = message.content.substring(prefix.length + 4);
                naughtsInstance.move(input.trim());
                message.channel.send(naughtsInstance.show());

            } else {
                message.channel.send("==== It's not your turn yet! ====");
            }
        };
        //-----------------------------------------------
    };
}

module.exports = NaughtsInterface