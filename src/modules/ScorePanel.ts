//定义记分牌的类
class ScorePanel{
    score = 0;
    level = 1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    maxLevel:number;
    upScore:number;  //升级所需分数
    constructor(maxLevel:number = 10,upScore:number = 10){
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    //设置一个加分的方法
    addScore(){
        this.score ++;
        this.scoreEle.innerHTML = this.score+'';
        if(this.score % this.upScore === 0){
            this.addLevel();
        }
    }
    //等级提升
    addLevel(){
        if(this.level < this.maxLevel)
            this.levelEle.innerHTML = ++this.level + '';
    }
}

//测试代码
// const scorePanel = new ScorePanel();
// scorePanel.addScore();


export default ScorePanel;