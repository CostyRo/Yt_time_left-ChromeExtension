//function that calculate the time
function calculate()
{
	let currentTime=document.getElementsByClassName("ytp-time-current")[0].innerHTML.split(":")
	//get the current time from html and split into array

	let finalTime=document.getElementsByClassName("ytp-time-duration")[0].innerHTML.split(":")
	//get the final time from html and split into array

	let currentSeconds,finalSeconds
	//define currentSeconds and finalSeconds

	if(finalTime.length==3) finalSeconds=3600*Number(finalTime[0])+60*Number(finalTime[1])+Number(finalTime[2])
	else finalSeconds=60*Number(finalTime[0])+Number(finalTime[1])
	//calculate the final time

	if(currentTime.length==3) currentSeconds=3600*Number(currentTime[0])+60*Number(currentTime[1])+Number(currentTime[2])
	else currentSeconds=60*Number(currentTime[0])+Number(currentTime[1])
	//calculate the current time

	let remainingSeconds=finalSeconds-currentSeconds
	//calculte the remaining seconds

	if(remainingSeconds>=3600) return ` -${~~(remainingSeconds/3600)}:${~~(remainingSeconds%3600/60)}:${remainingSeconds%3600%60}`
	else return ` -${~~(remainingSeconds%3600/60)}:${remainingSeconds%3600%60}`
	//return a formatted string with the remaining time
}

//function that prepare the extension
function prepare()
{
	const span1=document.createElement("span")
	const span2=document.createElement("span")
	//create 2 spans

	span2.className="time"
	//set class of second span to "time"

	span1.appendChild(document.createTextNode(" /"))
	//put a slash to first span

	span2.appendChild(document.createTextNode(calculate()))
	//put the time in second span

	document.getElementsByClassName("ytp-time-display notranslate")[0].appendChild(span1).appendChild(span2)
	//get the location from html and append the 2 spans
}

prepare()
//prepare extension

setInterval(()=>document.getElementsByClassName("time")[0].innerHTML=calculate(),500)()
//anonymus function that update the time 2 times per second