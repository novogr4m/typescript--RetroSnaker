//定义食物类
class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor(){
        //获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    //定义获取食物坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    //修改食物的位置
    change(){
        //生成随机的位置
        //食物的位置最小是0 最大是290
        //要求食物的坐标必须是10的倍数
        let left = Math.round((Math.random()*29))*10;  //Math.random()*29：取到0-29之间的小数（不包括0和29），使用round四舍五入就可以取到0和29 
        let top = Math.round((Math.random()*29))*10;   //再乘以10 得到区间[0,290]
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}

//test code
// const food = new Food();
// food.change();       

export default Food;