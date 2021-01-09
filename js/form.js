class Form{
    constructor(){

    }
    display(){
        var title= createElement('h1')
        title.html("Car Racing Game")
        title.position(450,0)
        var input=createInput('')
        input.position(470,200)
        var button= createButton('START')
        button.position(520,250)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name= input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            var greeting= createElement('h2')
            greeting.html('Welcome '+ name)
            greeting.position(470,250)
        })
    }       
}
