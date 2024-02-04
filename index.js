// Q1

let array1 = [4,3,2,1]

function Q1(array1)
    {
        let result = []
        array1.forEach(i =>
            {
                result.push(i*5)
            });
            return result
    }
console.log(Q1(array1))
////////////////////////////////

//Q2

let array2 = [9,11,17,31]

function Q2(array2)
    {
        let result
        for (let i = 0; i < array2.length; i++)
        {
            if(array2[i] > 12)
            {
                result = i
                break;
            }
        
        }
        return result;
    }
console.log(Q2(array2))
////////////////////////////////

//Q3

let array3 = [8,6,4,2]

function Q3(array3)
    {
        let result
        array3.forEach(i =>
            {
                if(i%6 !==0)
                {
                    result = false
                }
                else
                {
                    result = true
                }
            })
            return result
    }

console.log(Q3(array3))
////////////////////////////////

//Q4

let array4 = [12,5,3,1]

function Q4(array4)
    {
        for (let i = 0; i < array4.length; i++)
            {
                if(array4[i] > 20)
                    {
                        return true
                    }
            }
            return false
    };

console.log(Q4(array4))
////////////////////////////////

//Q5

let array5 = ['a',2,'b',1]
function Q5(array5)
    {
        let result = []
        array5.forEach(i =>
            {
            if (typeof i== 'string'&& i.length == 1)
                {
                    result.push(i)
                }
            })
            return result
    }

console.log(Q5(array5))
////////////////////////////////

//Q6

let array6 = [8,'6',4,'3']

function Q6(array6)
    {
        let result
        for (let i = 0; i < array6.length; i++)
        {
            if(array6[i] > 5)
            {
                result = array6[i]
                break
            }
        
        }
        return result
    }
console.log(Q6(array6))
////////////////////////////////

//Q7

let array7 = [4,3,2,1]
function Q7(array7)
    {
        let result = []
            array7.forEach(i =>
                {
                    result.push(i*2)
                })
                return result
    }

console.log(Q7(array7))
////////////////////////////////

//Q8

let array8 = [7,5,3,1]

function Q8(array8)
    {
        let result
        for (let i = 0; i < array8.length; i++)
        {
            if(typeof array8[i] === 'number' && array8 [i] > 9)
            {
                return false
            }
        
        }
        return true
    }
console.log(Q8(array8))
////////////////////////////////

//Q9

let array9 = [6,5,4,3,2,1]
function Q9(array9)
    {
        let result = []
            array9.forEach(i =>
                {
                    if (i%2 !== 0)
                    {
                        result.push(i)
                    }
                })
                return result
    }

console.log(Q9(array9))
////////////////////////////////

//Q10

let array10 = ["apple","mango","banana"]
function Q10(array10)
    {
        let result = []
            array10.forEach(i =>
                {
                        result.push(i + "-java")
                })
                return result
    }

console.log(Q10(array10))
////////////////////////////////

//Q11

let array11 = ["hello","world","programming","computer"]

function Q11(array11)
    {
        let result
        for (let i = 0; i < array11.length; i++)
        {
            if(array11[i].length > 2)
            {
                result = i
                break
            }
        
        }
        return result
    }
console.log(Q11(array11))
////////////////////////////////

//Q12

let array12 = ["cat","dog","elphant","fox"]

function Q12(array12)
    {
        for (let i = 0; i < array12.length; i++)
        {
            if(typeof array12[i] > 4)
            {
                return true
            }
        
        }
        return false
    }
console.log(Q12(array12))
////////////////////////////////

//Q13

let array13 = ["apple","banana","cherry","date"]

function Q13(array13)
    {
        for (let i = 0; i < array13.length; i++)
        {
            if(array13[i].charAt(0).toLowerCase() === 'b')
            {
                return true
            }
        
        }
        return false
    }
console.log(Q13(array13))
////////////////////////////////

//Q14

let array14 = ["apple","banana","orange","grape"]

function Q14(array13)
    {
        let result = []
        for (let i = 0; i < array14.length; i++)
        {
            if(array14[i].charAt(array14[i].length -1).toLowerCase() === 'e')
            {
                result.push(array14[i])
            }
        
        }
        return result
    }
console.log(Q14(array14))
////////////////////////////////

//Q15

function Q15(array15)
{
    let result = [];
        for (let i = 0; i < array15.length; i++)
            {
                let word = array15[i]
                if (word.charAt(0).toLowerCase() === 'b')
                {
                    result.push(word)
                }
            }
    return result
};
let array15ofQ15 = ["apple","banana","cherry"]
console.log(Q15(array15ofQ15))
////////////////////////////////
//jason proj

const yazan =
{
    date: "11/03/2001",
    country: "jerusalem",
    freinds:["monqeth","ahmad"]
}