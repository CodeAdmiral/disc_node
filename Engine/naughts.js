class naughts {
    grid ='';
    playerX = '';
    playerO = '';
    lastPlayed = 'X';
    nextPlay = '';

    constructor(){
        this.reset();
    }

    move(location){
        if(this.lastPlayed == 'O'){
            this.grid[location] = '  X  ';
            this.nextPlay = this.playerO;
            this.lastPlayed = 'X'
        }else if(this.lastPlayed == 'X'){
            this.grid[location] = '  O  ';
            this.nextPlay = this.playerX;
            this.lastPlayed = 'O'
        }
    }

    setPlayerX(inputID){
        if(this.playerX != '')
            return true;
        this.playerX = inputID;
        if(this.nextPlay == ''){
            this.nextPlay = inputID;
        }
        return false;
    }

    setPlayerO(inputID){
        if(this.playerO != '')
            return true;
        this.playerO = inputID;
        if(this.nextPlay == ''){
            this.nextPlay = inputID;
        }
        return false;
    }

    reset(){
        this.grid =
        { 
            a1: '        ', a2: '        ', a3: '        ',
            b1: '        ', b2: '        ', b3: '        ',
            c1: '        ', c2: '        ', c3: '        '    
        }
        this.lastPlayed = 'X';
        this.playerX = '';
        this.playerO = '';
        this.nextPlay = '';
    }

    show(){
        var player =
        '|===== WHOS PLAYING ======\t' + '\n' +
        '|\t\tPlayer X\t|\t' + this.playerO + '\t\t' + '\n' +
        '|\t\tPlayer O\t|\t' + this.playerX + '\t\t' + '\n' +
        '|------------------------------------\t\t\n'+
        '|\tWhos next\t|\t' + this.nextPlay + '\t\t\n' +
        '|========================\t\t' + '\n\n\n'
        
        
        var grid = '.     |    1    |    2    |    3    |\n' +
        'A   | ' + this.grid.a1 + ' | ' + this.grid.a2  + ' | ' + this.grid.a3 + ' |\n' +
        '      |--------------------|' + '\n' +
        'B   | ' + this.grid.b1 + ' | ' + this.grid.b2  + ' | ' + this.grid.b3 + ' |\n' +
        '      |--------------------|' + '\n' +
        'C   | ' + this.grid.c1 + ' | ' + this.grid.c2  + ' | ' + this.grid.c3 + ' |\n' 
        return player + grid;
    }
}

module.exports = naughts
