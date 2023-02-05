//
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
class GameControl{
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    direction: string = 'ArrowRight';  //运动方向
    isLive = true;   //蛇是否存活
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        //初始化
        this.init();
    }
    //初始化方法
    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        //调用run方法
        this.run();
    }

    keydownHandler(event:KeyboardEvent){
        //需要检查是否按正确的方向键
        //这里没有写检查方法
         this.direction = event.key;
    }

    //创建一个控制蛇移动的方法
    run(){
        //根据方向来使蛇的位置发生变化
        //向上 top 减少
        //向下 top 增加
        //向左 left 减少
        ///向右 left 增加
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction){
            case "ArrowUp":
                Y-=10;
                break;
            case "ArrowDown":
                Y+=10;
                break;
            case "ArrowLeft":
                X-=10;
                break;
            case "ArrowRight":
                X+=10;
                break;
        }

        this.checkEat(X,Y);
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (error:any){
            alert(error.message);
            this.isLive = false;
        }
   
        //自动运动
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
    
    }
      //检查蛇是否吃到食物
      checkEat(X:Number,Y:Number){
       if( X === this.food.X && Y === this.food.Y){
        this.food.change();
        this.scorePanel.addScore();
        this.snake.addBody();
       }
    }    
}

export default GameControl;