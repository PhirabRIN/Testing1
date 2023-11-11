var btntable=document.getElementById('btntable');
var id      =document.getElementById('txt-id');
var Name    =document.getElementById('txt-name');
var qty     =document.getElementById('txt-qty');
var Price   =document.getElementById('txt-price');
var Total   =document.getElementById('txt-total');
var index;

const itemlist=[
    // {
    //     'ID':'1','Name':'phirab','QTY':'20','Price':'1500','Total':'3000'
    // },
    // {
    //     'ID':'2','Name':'phirab','QTY':'20','Price':'1500','Total':'3000'
    // },
    // {
    //     'ID':'3','Name':'phirab','QTY':'20','Price':'1500','Total':'3000'
    // },
];

id.value=itemlist.length+1;

getItem=()=>{
    var granddata=0;
    var txt='';
    txt +=`
        <tr>
            <th>ID  </th>
            <th>Name</th>
            <th>QTY</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
    `;
    for(let i in itemlist){
         txt +=`
            <tr>
                <td>${itemlist[i]['ID']}</td>
                <td>${itemlist[i]['Name']}</td>
                <td>${itemlist[i]['QTY']}</td>
                <td>${itemlist[i]['Price']}</td>
                <td>${itemlist[i]['Total']}</td>
                <td>
                    <input type="button" id="btnedit" class="btn btn-primary btnedit" value="Edit">
                    <input type="button" id="btndelete" class="btn btn-primary btndelete" value="Delete">
                </td>
            </tr>
       `;
       granddata=granddata+parseFloat(itemlist[i]['Total'] );
    }
    var GrandTotal=`
    <td colspan="4" align="right">GrandTotal</td>
    <td>${granddata}</td>
    <td></td>
    `;
    btntable.innerHTML=txt+GrandTotal;

    //Edit Data
    btnedit= document.querySelectorAll('.btnedit');
    btnedit.forEach((e,i) => {
        e.addEventListener('click',function(){
            id. value= itemlist[i]['ID'];
            Name. value= itemlist[i]['Name'];
            qty. value= itemlist[i]['QTY'];
            Price. value= itemlist[i]['Price'];
            Total. value= itemlist[i]['Total'];
            index=i;
        })
    });
}
getItem();

document.getElementById('btnAdd').addEventListener('click',function(){
    itemlist.push(
        {
            'ID':id.value,
            'Name':Name.value,
            'QTY':qty.value,
            'Price':Price.value,
            'Total':Total.value 
        }
    )
    getItem();
    id.value=itemlist.length+1;
    clearDate();
});
clearDate=()=>{
    // id.value="";
    Name.value="";
    qty.value="";
    Price .value="";
    Total.value="";
}

getTotal=()=>{
    Total.value=qty.value *Price.value;
}
qty.addEventListener('keyup',function(){
    getTotal();
});
Price.addEventListener('keyup',function(){
    getTotal();
});

//button Update
    document.getElementById('btnUpdate').addEventListener('click',function(){
        itemlist[index]['id']=id.value;
        itemlist[index]['Name']=Name.value;
        itemlist[index]['QTY']=qty.value;
        itemlist[index]['Price']=Price.value;
        itemlist[index]['Total']=Total.value;
        getItem();
        clearDate();
    })

//button Update


