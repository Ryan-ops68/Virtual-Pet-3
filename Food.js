    class Food {
        constructor(){

        }
    }
    
var deductFood
var updateFoodStock   
var getFoodStock
var foodStock
var lastFed


display();


GameState = ("hungry")


addButton = hide

currentTime = lastFed+1

garden();

GameState =("playing")
    update();

    currentTime = lastFed+2

    bedroom();

    GameState = ("sleeping")


    washroom();

    GameState = ("bathing")

var x=80,y=180;


imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock!=0);
    for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
            x =80;
            y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
        }
    }
}

ifelse(addImage = milk.png,){
        addImage = milk.png
}



setupfunction();
var object


fedTime = database.ref('FeedTime');
fedTime.on("value", function(data){
    lastFed=data.val();

}


addFood();


feeddog();


hour();



bedroom();


garden();


washroom();




