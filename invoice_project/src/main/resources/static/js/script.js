var date = new Date();
var currentDate = date.toISOString().slice(0,10);
var currentTime = date.getHours() + ':' + date.getMinutes();

document.getElementById('invoice_date').value = currentDate;

function mySave()
{
    var bill_to=document.getElementById("bill_to").value;
    var invoice_date=document.getElementById("invoice_date").value;
    var invoice=document.getElementById("invoice").value;
    var due_date=document.getElementById("due_date").value;
    var status=document.getElementById("status").value;
    var attachment=document.getElementById("attachment").value;


    var FromDate = new Date(invoice_date);
    var ToDate = new Date(due_date);
    if(bill_to=="")
    {
        alert("Bill To must be filled out");
    }else if(invoice_date=="")
    {
        alert("invoice_date must be filled out");
    }
    else if(invoice=="")
    {
        alert("invoice must be filled out");
    }else if(due_date=="")
    {
        alert("due_date must be filled out");
    }
    else if(status=="")
    {
        alert("status must be filled out");
    }
    else if(FromDate>ToDate)
    {
        alert("Invalid Date Range!")
    }
    let file_extension=attachment.substring(attachment.lastIndexOf('.') + 1);

    if(file_extension!="")
    {
        if((String(file_extension.toLowerCase())) == "jpg"||(String(file_extension.toLowerCase())) == "png" || (String(file_extension.toLowerCase())) == "jpeg"||(String(file_extension.toLowerCase())) == "excel"||(String(file_extension.toLowerCase())) == "doc"||(String(file_extension.toLowerCase())) == "pdf")
        {
        }else
        { alert("required only excel/doc/pdf/image Files.");}
    }


}

function add_row()
{
var auto_id=document.getElementById("auto_id").value;
var  product=document.getElementById("product").value;
var description=document.getElementById("description").value;
var price=document.getElementById("price").value;
var qty=document.getElementById("qty").value;
var tax=document.getElementById("tax").value;
var total=parseInt(price)*parseInt(qty)
if(product =="")
{
     alert("product must be filled out");
}else if(description=="")
{
     alert("description must be filled out");
}
else if(price=="")
{
     alert("price must be filled out");
}
else if(qty=="")
{
     alert("qty must be filled out");
}
else
{
<!--             console.log(parseInt(auto_id)+1);-->
var table=document.getElementById("data_table");
var table_len=(table.rows.length)-1;
//                    console.log(table_len);
var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'> " +
"<td id='auto_id"+table_len+"'>"+auto_id+"</td> " +
"<td id='product"+table_len+"'>"+product+"</td> " +
"<td id='description"+table_len+"'>"+description+"</td> " +
"<td id='price"+table_len+"'>"+price+"</td> " +
"<td id='qty"+table_len+"'>"+qty+"</td> " +
"<td id='tax"+table_len+"'>"+tax+"</td> " +
"<td id='total"+table_len+"'>"+total+"</td> " +

"<td><i class='fa fa-trash' style='font-size:24px' onclick='delete_row("+table_len+")'> </i></td> " +
"</tr>";

var sub_total=0;
var total_tax=0;
for(var i=0;i<=table_len;i++)
{
   sub_total+= parseInt(document.getElementById("total"+i).innerText);
   total_tax+=parseInt(document.getElementById("tax"+i).innerText);
}
document.getElementById("auto_id").value=parseInt(auto_id)+1 ;
document.getElementById("product").value;
document.getElementById("description").value="";
document.getElementById("price").value="";
document.getElementById("qty").value="";
document.getElementById("tax").value="";
document.getElementById("total").value="";
document.getElementById("sub_total").innerHTML=sub_total;
document.getElementById("total_tax").innerHTML=total_tax;
document.getElementById("grand_total").innerHTML=sub_total+total_tax;
}
}

 function delete_row(no)
 {
     document.getElementById("row"+no+"").outerHTML="";
     document.getElementById("sub_total").innerHTML="";
     document.getElementById("total_tax").innerHTML="";
     document.getElementById("grand_total").innerHTML="";
 }





