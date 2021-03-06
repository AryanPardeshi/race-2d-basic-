class Form{

    constructor(){
    this.input=createInput("name");
    this.button=createButton("Play");
    this.gretting=createElement('H3');
    this.title=createElement('H2')
    this.reset=createButton("Reset")
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.gretting.hide();
        this.title.hide();
    }

    display(){
        
        this.title.html("Race!!");
        this.title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-80);
       
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,20)
        
        this.button.mousePressed( ()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount=playerCount+1;
            player.index=playerCount
            player.update();
            player.updateCount(playerCount);
            this.gretting.html("hello " + player.name);
            this.gretting.position(displayWidth/2-70,displayHeight/2);
        });
        
        this.reset.mousePressed( ()=>{
            player.updateCount(0)
            game.update(0)
            location.reload()
        })

    }

}