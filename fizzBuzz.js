let i //creates variable for i

fizzBuzz("cat", "dog", "fish");

function fizzBuzz(input, secondInput, thirdInput)
{
    for (let i =1; i<=100; i= i+1)//Creating a for loop that will continue untill 100
    {
        if (i%3==0 && i%5==0)// sets the conditions
        {
            console.log (input)
        }
        else if (i%3==0)//
        {
                console.log  (secondInput)
        }       
        else if (i%5==0)
        {
            console.log (thirdInput)
        }
        else
        {
        console.log (i)
        }
    }
}
