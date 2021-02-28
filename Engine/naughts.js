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
            this.grid[location] = 'X';
            this.nextPlay = this.playerO;
            this.lastPlayed = 'X'
        }else if(this.lastPlayed == 'X'){
            this.grid[location] = 'O';
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
            a1: ' ', a2: ' ', a3: ' ',
            b1: ' ', b2: ' ', b3: ' ',
            c1: ' ', c2: ' ', c3: ' '    
        }
        this.lastPlayed = 'X';
        this.playerX = '';
        this.playerO = '';
        this.nextPlay = '';
    }

    show(){
        var player = 
        '\t|========== WHOS PLAYING ========\t' + '\n' +
        '\t| Player X\t |\t' + this.playerO + '\t\t' + '\n' +
        '\t| Player O\t |\t' + this.playerX + '\t\t' + '\n' +
        '\t|--------------------------------\t\t\n'+
        '\t| Whos next\t|\t' + this.nextPlay + '\t\t\n' +
        '\t|================================\t\t' + '\n\n\n'
        
        
        var grid = '\t |\t1\t|\t2\t|\t3\t|\n' +
        '\t |-----------------------------|' + '\n' +
        'A\t|\t' + this.grid.a1 + '\t|\t' + this.grid.a2  + '\t|\t' + this.grid.a3 + '\t|\n' +
        '\t |-----------------------------|' + '\n' +
        'B\t|\t' + this.grid.b1 + '\t|\t' + this.grid.b2  + '\t|\t' + this.grid.b3 + '\t|\n' +
        '\t |-----------------------------|' + '\n' +
        'C\t|\t' + this.grid.c1 + '\t|\t' + this.grid.c2  + '\t|\t' + this.grid.c3 + '\t|\n' +
        '\t |-----------------------------|' + '\n' 
        return "```\n" + player + grid + "```\n";
    }
}

module.exports = naughts
