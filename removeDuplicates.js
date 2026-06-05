function removeDuplicates(nums)
{
    let new1 = [];
    if(nums.length==0)return0;

    new1.push(nums[0]);

    for (let i = 1;i < nums.length;i++)
    {
        if(nums[i] == nums[i-1])
        {
            continue;
        }
        else
        {
            new1.push(nums[i]);
        }


    } return new1;


}

let nums = [1,1,2,2,3,4,4];

console.log(removeDuplicates(nums));