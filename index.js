const nums=[1,5,8,12,17,25];
////////////
const nums2=[...nums];
let newArr=[]
console.log(nums2)



//////////
let arr="";
for (let i=0; i<nums.length; i++){
    newArr.push(nums[i])
    if(
        nums[i]%2==0 && nums[i+1]%2==0
    ){
      newArr.push('-')

    }
    
}
console.log(newArr.join(''));

////////////////////

const combine =[...nums, ...nums2]
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  const Nums3 = removeDuplicates(nums);
  console.log(Nums3); 
  


/////////////////

nums.splice(2,1)
console.log(nums);
 
const arry=combine.slice(3,4)
console.log(arry);
//////////////////


const resultArray = removeDuplicates(combine);
console.log(resultArray);

/////////////////

function sumArr(){
  
  const numberArr=[1,2,3,4,5];
  const userNum=prompt('enter in number');
  if (
    numberArr.includes(parseFloat(userNum))
  ) {
  return true
  }
  else{ 
  return false
  }
  
}


console.log(sumArr());


///////////////
let arrr=[]
const a=[1,4,7,9,11]
const b=[3,4,15,9,11]
a.forEach(el=>{
   if(b.includes(el)){
    arrr.push(el)
   }
})
console.log(arrr);