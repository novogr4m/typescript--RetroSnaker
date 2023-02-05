class Snake{
    //表示蛇头的元素
    head: HTMLElement;
    //蛇的身体
    body:HTMLCollection;
    element : HTMLElement;
    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.body = document.getElementById('snake')!.getElementsByTagName('div');
    }
    //获取蛇的坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    //设置蛇的新坐标
    set X(value:number){
        //判断是否是原位置
        if(this.X === value)
            return;
        //判断是否会撞墙
        if(value <0 || value >290){
            throw new Error('蛇撞墙了');
        }

        //修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头
        if(this.body[1]&&(this.body[1] as HTMLElement).offsetLeft === value){
            //如果掉头，让蛇继续向反方向继续移动
            if(value > this.X){
                value = this.X-10;
            }else{
                value = this.X+10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }

    set Y(value:number){
        if(this.Y === value)
            return;
        if(value <0 || value >290){
            throw new Error('蛇撞墙了');
        }

        if(this.body[1]&&(this.body[1]as HTMLElement).offsetTop === value){
            //如果掉头，让蛇继续向反方向继续移动
            if(value > this.Y){
                value = this.Y-10;
            }else{
                value = this.Y+10;
            }
        }

        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    addBody(){
        this.element.insertAdjacentHTML('beforeend',"<div></div>");
    }

    moveBody(){
        //第4节身体 = 第三节的位置
        //第3节身体 = 第2节的位置
        //第二节 = 蛇头
        for(let i = this.body.length-1;i>0;i--){
            //获取前面身体的位置
            let X = (<HTMLElement>this.body[i-1]).offsetLeft;
            let Y = (<HTMLElement>this.body[i-1]).offsetTop;

            //将值设置到当前身体
            (this.body[i] as HTMLElement).style.left = X +'px';
            (this.body[i] as HTMLElement).style.top = Y +'px';
        }
    }
    checkHeadBody(){
        //获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for(let i=1; i<this.body.length;i++){
            let bd = this.body[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y ===bd.offsetTop){
                    throw new Error('蛇撞到自己了,游戏结束');
            }
        }
    }
}
export default Snake;