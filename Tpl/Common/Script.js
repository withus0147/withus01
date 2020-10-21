function WinOpen(Url,Width,Height,Scrollbars)
{
	window.open(Url,'SecImg','width='+Width+',height='+Height+',scrollbars='+Scrollbars);
}

function Confirm(Url)
{
	if(confirm('정말 삭제하시겠습니까?'))
	location=Url
}

function ConfirmMsg(Msg,Url)
{
    if (Msg.length == 0)
    {
        Msg = "정말 삭제하시겠습니까??";
    }

    if(confirm(''+Msg))
    location=Url
}

function Change(Direction,Table,Location,CategoryCode)
{
	for (var i=0; i<document.Form.OrderNo.length; i++)
	{ 
		var OrderNo;
		if (document.Form.OrderNo[i].checked)
		{ 
			OrderNo = document.Form.OrderNo[i].value; 
			break; 
		}
	}

	if(!OrderNo)
	{
		alert('위치변경을 원하는 한가지 항목을 선택하시기 바랍니다.');
		return;
	}
	location="Change.php?Direction="+Direction+"&OrderNo="+OrderNo+"&Table="+Table+"&Location="+Location+"&CategoryCode="+CategoryCode
}

function ChangeData(Direction,Table,Location,CategoryCode)
{
	for (var i=0; i<document.Form.OrderNo.length; i++)
	{ 
		var OrderNo;
		if (document.Form.OrderNo[i].checked)
		{ 
			OrderNo = document.Form.OrderNo[i].value; 
			break; 
		}
	}

	if(!OrderNo)
	{
		alert('위치변경을 원하는 한가지 항목을 선택하시기 바랍니다.');
		return;
	}
	location="ChangeData.php?Direction="+Direction+"&OrderNo="+OrderNo+"&Table="+Table+"&Location="+Location+"&CategoryCode="+CategoryCode
}
