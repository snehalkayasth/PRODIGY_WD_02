let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');
let lap=document.getElementById('lap');//button
let laplist=document.getElementById("laplist");//ul list
let lapcount=1;//lap list count

let count=0;
let hr=0;
let min=0;
let sec=0;
let timer;

let hrstr=0;
let minstr=0;
let secstr=0;
let countstr=0;

start.addEventListener('click' , function()
{
    timer=true;
    watch();
});

stop.addEventListener('click', function()
{
    timer=false;

});

reset.addEventListener('click', function()
{
    timer=false;
     hr=0;
     min=0;
     sec=0;
    count=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";
});

lap.addEventListener('click', function()
{
    
    let time=hrstr+" : "+minstr+" : "+secstr+" : "+countstr;
    let list=document.createElement('li');
    list.innerText=time;
    laplist.appendChild(list);
    

});



function watch()
{

    if (timer)
    {
        count++;
    
    if(count==100)
    {
        sec++;
        count=0;
    }
    if(sec==60)
    {
        min++;
        sec=0;
    
    }
    if(min==60)
    {
        hr++;
        min=0
        sec=0;
    }

    hrstr=hr;
    minstr=min;
    secstr=sec;
    countstr=count;

    if(hr<10)
    {
        hrstr="0"+hr;

    }

    if(min<10)
    {
        minstr="0"+min;
        
    }

    if(sec<10)
    {
        secstr="0"+sec;
        
    }

    if(count<10)
    {
        countstr="0"+count;
        
    }

    document.getElementById('hr').innerHTML=hrstr;
    document.getElementById('min').innerHTML=minstr;
    document.getElementById('sec').innerHTML=secstr;
    document.getElementById('count').innerHTML=countstr;

    setTimeout(watch,10);
}
}