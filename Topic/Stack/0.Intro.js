// Stack follows LIFO - Last In First Out 

// it's contain 5 things
// 1) push() - to push element 
// 2) pop() - remove the element (taking the element out of the stack)
// 3) peek() - to see which element is currenly on top
// 4) isEmpty() - is tell that stack is empty or not (is stcak is empty then it will give true)
// 5) size() - how many element currenly in our stack

class Stack{
    constructor(){
        this.stack =[];

    }
    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is Empty.Can't perform pop."
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty. Can't perform peek."
        }
        return this.stack[this.size() - 1]
    }
    isEmpty(){
        return this.size() === 0
    }

    size(){
        return this.stack.length
    }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.size())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())
