var gameState=0
var database,form,player,game,playerCount
function setup(){
    createCanvas(400,400);
    database=firebase.database();
    game= new Game()
    game.getState()
    game.start()
}