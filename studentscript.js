function getval()
{
    var name=document.getElementById("sname").value;
    var sem=document.getElementById("ssem").value;
    var examcode=document.getElementById("examcode").value;
    var sub1=document.getElementById("sub1").value;
    var obtained1=parseInt(document.getElementById("obtained1").value)
    var total1=parseInt(document.getElementById("total1").value);
    var sub2=document.getElementById("sub2").value;
    var obtained2=parseInt(document.getElementById("obtained2").value);
    var total2=parseInt(document.getElementById("total2").value);
    var sub3=document.getElementById("sub3").value;
    var obtained3=parseInt(document.getElementById("obtained3").value);
    var total3=parseInt(document.getElementById("total3").value);
    var sub4=document.getElementById("sub4").value;
    var obtained4=parseInt(document.getElementById("obtained4").value);
    var total4=parseInt(document.getElementById("total4").value);
    var sub5=document.getElementById("sub5").value;
    var obtained5=parseInt(document.getElementById("obtained5").value);
    var total5=parseInt(document.getElementById("total5").value);
    var sub6=document.getElementById("sub6").value;
    var obtained6=parseInt(document.getElementById("obtained6").value);
    var total6=parseInt(document.getElementById("total6").value);


    var s1percent=calcpercent(obtained1,total1);
    var s1grade=calcgrade(s1percent);
    var s2percent=calcpercent(obtained2,total2);
    var s2grade=calcgrade(s2percent);
    var s3percent=calcpercent(obtained3,total3);
    var s3grade=calcgrade(s3percent);
    var s4percent=calcpercent(obtained4,total4);
    var s4grade=calcgrade(s4percent);
    var s5percent=calcpercent(obtained5,total5);
    var s5grade=calcgrade(s5percent);
    var s6percent=calcpercent(obtained6,total6);
    var s6grade=calcgrade(s6percent);

    var status=calcstatus(s1grade,s2grade,s3grade,s4grade,s5grade,s6grade);

    document.getElementById("pname").innerHTML=name;
    document.getElementById("psem").innerHTML=sem;
    document.getElementById("pexamcode").innerHTML=examcode;

    document.getElementById("psub1").innerHTML=sub1;
    document.getElementById("pobtained1").innerHTML=obtained1;
    document.getElementById("ptotal1").innerHTML=total1;
    document.getElementById("pgrade1").innerHTML=s1grade;
    document.getElementById("psub2").innerHTML=sub2;
    document.getElementById("pobtained2").innerHTML=obtained2;
    document.getElementById("ptotal2").innerHTML=total2;
    document.getElementById("pgrade2").innerHTML=s2grade;
    document.getElementById("psub3").innerHTML=sub3;
    document.getElementById("pobtained3").innerHTML=obtained3;
    document.getElementById("ptotal3").innerHTML=total3;
    document.getElementById("pgrade3").innerHTML=s3grade;
    document.getElementById("psub4").innerHTML=sub4;
    document.getElementById("pobtained4").innerHTML=obtained4;
    document.getElementById("ptotal4").innerHTML=total4;
    document.getElementById("pgrade4").innerHTML=s4grade;
    document.getElementById("psub5").innerHTML=sub5;
    document.getElementById("pobtained5").innerHTML=obtained5;
    document.getElementById("ptotal5").innerHTML=total5;
    document.getElementById("pgrade5").innerHTML=s5grade;
    document.getElementById("psub6").innerHTML=sub6;
    document.getElementById("pobtained6").innerHTML=obtained6;
    document.getElementById("ptotal6").innerHTML=total6;
    document.getElementById("pgrade6").innerHTML=s6grade;
    document.getElementById("pstatus").innerHTML=status;
    
    document.getElementById("resulttable").style="display:block";
}

function calcpercent(m,t)
{
    var percent=0;
    percent= (m*100)/t;
    return percent;
}
function calcgrade(percent)
{
    var grade="";

    if(percent>=95)
        grade="s";
    else if(percent>=90)
        grade="A+";
    else if(percent>=85)
        grade="A";
    else if(percent>=80)
        grade="B+";
    else if(percent>=75)
        grade="B";
    else if(percent>=70)
        grade="C+";
    else if(percent>=65)
        grade="C";
        else if(percent>=60)
        grade="D+";
    else if(percent>=55)
        grade="D";
    else if(percent>=50)
        grade="E";
    else
        grade="Failed";

    return grade
}
function calcstatus(s1grade,s2grade,s3grade,s4grade,s5grade,s6grade)
{
    
    if(s1grade=="Failed" || s2grade=="Failed" || s3grade=="Failed" || s4grade=="Failed" || s5grade=="Failed" || s6grade=="Failed")
    {
        return "Status : Failed";
    }
    else
        return "Status : Passed";
}

