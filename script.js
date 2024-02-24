//your JS code here. If required.
const output = document.getElementById("output");

 const btn = document.getElementById('btn');

btn.addEventListner('click', function(){
	const inputElement = document.getElementById('ip');
	cosnt inputValue = inputElement.value;
   alert("Please enter valid valie:" + inputValue);
});

function getNumber(Number){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const result = ip.filter((num)=>num > 0 || num != NAN);
			output.innerText = result.join("Result:, ");
			resolve(result);
			
		}, 2000);
	});
}

getNumber();