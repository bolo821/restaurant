

var state=1;

function employfromJson(){
   $.get("http://localhost:3000/employs",function(data,status){

      document.getElementById("emheader").style.display="";
   
      document.getElementById("data").setAttribute("class","em");
      document.getElementById("re").innerHTML="Employees"
      state=1;
      var employ=data.employs;
      var col=[];
      for(var i=0; i<employ.length; i++){
         for(var key in employ[i]){
            if(col.indexOf(key)===-1){
               col.push(key);
            }
         }
      }

      var table=document.createElement("table");
      var tr = table.insertRow(-1);
      // var i = 0
      // for( ; i < col.length-3; i++){
         
            
         
      //    var th=document.createElement("th");
      //    th.innerHTML=col[i];
      //    tr.appendChild(th);
      // }
      // if(i==col.length-3){
         var th=document.createElement("th");
         th.innerHTML='Id';
         tr.appendChild(th);
         var th=document.createElement("th");
         th.innerHTML='Name';
         tr.appendChild(th);
         var th=document.createElement("th");
         th.innerHTML='Middle Name';
         tr.appendChild(th);
         var th=document.createElement("th");
         th.innerHTML='Surname';
         tr.appendChild(th);
         var th=document.createElement("th");
         th.innerHTML='Date of Birth';
         tr.appendChild(th);
         var th=document.createElement("th");
         th.innerHTML='Nationality';
         tr.appendChild(th);
         var th=document.createElement("th");
         th.innerHTML='Detail';
         tr.appendChild(th);
      // }
      
      for(var i=0;i<employ.length; i++){
         
         var tr=table.insertRow(-1)
         var j=0
         for(; j<col.length-4; j++){
            
            
            
            var tabcell=tr.insertCell(-1);
            tabcell.innerHTML=employ[i][col[j]];
         }
         if(j==col.length-4){
            var tabcell=tr.insertCell(-1);
            var x =Number(employ[i][col[0]])-1
            tabcell.innerHTML=`<button class="link" onclick="testJS(${x})">Link</button>`;
         }
      }

      var showntable=document.getElementById('data');

      showntable.innerHTML="";
      showntable.appendChild(table);
      
   } )
}
function recordfromJson(){
   $.get("http://localhost:3000/records",function(data,status){

      document.getElementById("emheader").style.display="";
  
      document.getElementById("re").innerHTML="Records"
      document.getElementById("data").setAttribute("class","rec")
      state=2;
      var employ=data.records;
      var col=[];
      for(var i=0; i<employ.length; i++){
         for(var key in employ[i]){
            if(col.indexOf(key)===-1){
               col.push(key);
            }
         }
      }

      var table=document.createElement("table");
      var tr = table.insertRow(-1);
      var i=0
      

      for( ; i < col.length-2; i++){
         
            
         
         var th=document.createElement("th");
         th.innerHTML=col[i];
         tr.appendChild(th);
      }
      if(i==col.length-2){
         var th=document.createElement("th");
         th.innerHTML='Detail';
         tr.appendChild(th);
      }
      
      for(var i=0;i<employ.length; i++){
      var j=0
         
            tr=table.insertRow(-1);
           
         for(; j<col.length-2; j++){
            
            
            
            var tabcell=tr.insertCell(-1);
            tabcell.innerHTML=employ[i][col[j]];
         }
         if(j==col.length-2){
            var tabcell=tr.insertCell(-1);
            var x=Number(employ[i][col[0]])-1
            tabcell.innerHTML=`<button class="link" onclick="testJS1(${x})">Link</button>`;
         }
      }

      var showntable=document.getElementById('data');

      showntable.innerHTML="";
      showntable.appendChild(table);
      
   } )
}

function myFunction() {
   if(state===1){
var input, filter, table, tr,  i ;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();

table = document.getElementsByTagName("table")[0];
tr = table.getElementsByTagName("tr");

for (i = 0; i < tr.length; i++) {
      
      

   td1 = tr[i].getElementsByTagName("td")[0];
   td2 = tr[i].getElementsByTagName("td")[1];
   td3 = tr[i].getElementsByTagName("td")[2];
   td4 = tr[i].getElementsByTagName("td")[3];
   td5 = tr[i].getElementsByTagName("td")[4];
   td6 = tr[i].getElementsByTagName("td")[5];
   if (td1,td2,td3,td4,td5,td6) {
      txtValue1 = td1.textContent;
      txtValue2 = td2.textContent;
      txtValue3 = td3.textContent;
      txtValue4 = td4.textContent;
      txtValue5 = td5.textContent;
      txtValue6 = td6.textContent;
      if (txtValue1.toUpperCase().indexOf(filter) > -1 ||
         txtValue2.toUpperCase().indexOf(filter) > -1||
         txtValue3.toUpperCase().indexOf(filter) > -1||
         txtValue4.toUpperCase().indexOf(filter) > -1||
         txtValue5.toUpperCase().indexOf(filter) > -1||
         txtValue6.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
   }       
} } console.log(this);


if(state===2){
   var input, filter, table, tr,  i ;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();

table = document.getElementsByTagName("table")[0];
tr = table.getElementsByTagName("tr");

for (i = 0; i < tr.length; i++) {
      
      

   td1 = tr[i].getElementsByTagName("td")[0];
   td2 = tr[i].getElementsByTagName("td")[1];
   td3 = tr[i].getElementsByTagName("td")[2];
   td4 = tr[i].getElementsByTagName("td")[3];
   
   if (td1,td2,td3,td4) {
      txtValue1 = td1.textContent;
      txtValue2 = td2.textContent;
      txtValue3 = td3.textContent;
      txtValue4 = td4.textContent;
     
      if (txtValue1.toUpperCase().indexOf(filter) > -1 ||
         txtValue2.toUpperCase().indexOf(filter) > -1||
         txtValue3.toUpperCase().indexOf(filter) > -1||
         txtValue4.toUpperCase().indexOf(filter) > -1)
{
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
   }       
}


}
}
function testJS(x) {
   $.get(`http://localhost:3000/employs/${x}`,function(data,state){
      document.getElementsByClassName("bodyemp")[0].style.display="";
      document.getElementsByClassName("bodyemp")[1].style.display="";
      document.getElementsByClassName("bodyemp")[2].style.display="";
      document.getElementsByClassName("body1")[0].style.display="none";
      document.getElementsByClassName("bodyrec")[0].style.display="none";
      document.getElementsByClassName("bodyrec")[1].style.display="none";
      document.getElementsByClassName("bodyrec")[2].style.display="none";
      var employ=data.employ;
      var v0=employ.Id.toString();
      var v1= employ.Name.toString();
      var v2=employ.Middlename.toString();
      var v3=employ.Surname.toString();
      var v4=employ.DateofBirth.toString();
      var v5=employ.Nationality.toString();
      var v6=employ.ContactPhone.toString();
      var v7=employ.ContactAddress.toString();
      var v8=employ.Record.toString();
      var v9=employ.image.toString();
      document.getElementById("emp8").value=v8
      document.getElementById("emp1").value=v1
      document.getElementById("emp2").value=v2
      document.getElementById("emp3").value=v3
      document.getElementById("emp4").value=v4
      document.getElementById("emp5").value=v5
      document.getElementById("emp6").value=v6
      document.getElementById("emp7").value=v7
      document.getElementById("emp0").value=v0
      document.getElementById("emp9").src=v9
   })
}
 function testJS1(x) {
      $.get(`http://localhost:3000/records/${x}`,function(data,state){
         document.getElementsByClassName("bodyemp")[0].style.display="none";
         document.getElementsByClassName("bodyemp")[1].style.display="none";
         document.getElementsByClassName("bodyemp")[2].style.display="none";
         document.getElementsByClassName("body1")[0].style.display="none";
         document.getElementsByClassName("bodyrec")[0].style.display="";
         document.getElementsByClassName("bodyrec")[1].style.display="";
         document.getElementsByClassName("bodyrec")[2].style.display="";

         var employ=data.record;
            var v1= employ.Id.toString();
            var v2=employ.Date.toString();
            var v3=employ.Author.toString();
            var v4=employ.Name.toString();
            var v5=employ.Text.toString();
            var v6=employ.Relation.toString(); 
            document.getElementById("rec1").value=v1
            document.getElementById("rec2").value=v2
            document.getElementById("rec3").value=v3
            document.getElementById("rec4").value=v4
            document.getElementById("rec5").value=v5
            document.getElementById("rec6").value=v6
         var menu=data.relation;
         datalist=document.getElementById("browsers")
          for (var i=0; i<menu.length;i++){
             option=document.createElement("option")
             option.innerHTML=menu[i]
             datalist.appendChild(option)
          }
      })

  
   }
   function  Backr(){
      document.getElementsByClassName("bodyemp")[0].style.display="none";
      document.getElementsByClassName("bodyemp")[1].style.display="none";
      document.getElementsByClassName("bodyemp")[2].style.display="none";
      document.getElementsByClassName("body1")[0].style.display="";
      document.getElementsByClassName("bodyrec")[0].style.display="none";
      document.getElementsByClassName("bodyrec")[1].style.display="none";
      document.getElementsByClassName("bodyrec")[2].style.display="none";
      recordfromJson();
      document.getElementsByClassName("buttonre")[0].disabled=true;
      document.getElementsByClassName("buttonre")[1].disabled=true;
      document.getElementsByClassName("buttonre")[2].disabled=true;
      document.getElementsByClassName("buttonre")[0].style.opacity=0.6;
      document.getElementsByClassName("buttonre")[1].style.opacity=0.6;
      document.getElementsByClassName("buttonre")[2].style.opacity=0.6;
      document.getElementById("rec1").disabled=true;
      document.getElementById("rec2").disabled=true;
      document.getElementById("rec3").disabled=true;
      document.getElementById("rec4").disabled=true;
      document.getElementById("rec5").disabled=true;
      document.getElementById("rec6").disabled=true;

   }
   function  Backe(){
      document.getElementsByClassName("bodyemp")[0].style.display="none";
      document.getElementsByClassName("bodyemp")[1].style.display="none";
      document.getElementsByClassName("bodyemp")[2].style.display="none";
      document.getElementsByClassName("body1")[0].style.display="";
      document.getElementsByClassName("bodyrec")[0].style.display="none";
      document.getElementsByClassName("bodyrec")[1].style.display="none";
      document.getElementsByClassName("bodyrec")[2].style.display="none";
      employfromJson()
      document.getElementsByClassName("buttonem")[0].disabled=true;
      document.getElementsByClassName("buttonem")[1].disabled=true;
      document.getElementsByClassName("buttonem")[2].disabled=true;
      document.getElementsByClassName("buttonem")[0].style.opacity=0.6;
      document.getElementsByClassName("buttonem")[1].style.opacity=0.6;
      document.getElementsByClassName("buttonem")[2].style.opacity=0.6;
      document.getElementById("emp1").disabled=true;
      document.getElementById("emp2").disabled=true;
      document.getElementById("emp3").disabled=true;
      document.getElementById("emp4").disabled=true;
      document.getElementById("emp5").disabled=true;
      document.getElementById("emp6").disabled=true;
      document.getElementById("emp7").disabled=true;
      document.getElementById("emp8").disabled=true;
      document.getElementById("upload-form").style.display="none"
      document.getElementById("directory").style.display="none"
   }
function Save(){
   v9=document.getElementById("emp9").src
   v8=document.getElementById("emp8").value
   v1=  document.getElementById("emp1").value
   v2=document.getElementById("emp2").value
   v3=document.getElementById("emp3").value
   v4=document.getElementById("emp4").value
   v5=document.getElementById("emp5").value
   v6=document.getElementById("emp6").value
   v7=document.getElementById("emp7").value
   v01=document.getElementById("emp0").value
   v0=Number(v01)
   $.post(`http://localhost:3000/employs`,{"Id":v0,"Name":v1,"Middlename":v2,"Surname":v3,"DateofBirth":v4,"Nationality":v5,"ContactPhone":v6,"ContactAddress":v7,"Record":v8,"image":v9},function(status){
      alert("Save"+status);
   })
   document.getElementsByClassName("buttonem")[0].disabled=true;
   document.getElementsByClassName("buttonem")[1].disabled=true;
   document.getElementsByClassName("buttonem")[2].disabled=true;
   document.getElementsByClassName("buttonem")[0].style.opacity=0.6;
   document.getElementsByClassName("buttonem")[1].style.opacity=0.6;
   document.getElementsByClassName("buttonem")[2].style.opacity=0.6;
   document.getElementById("emp1").disabled=true;
   document.getElementById("emp2").disabled=true;
   document.getElementById("emp3").disabled=true;
   document.getElementById("emp4").disabled=true;
   document.getElementById("emp5").disabled=true;
   document.getElementById("emp6").disabled=true;
   document.getElementById("emp7").disabled=true;
   document.getElementById("emp8").disabled=true;
   document.getElementById("upload-form").style.display="none"
   document.getElementById("directory").style.display="none"
}
function Delete(){
   v01=document.getElementById("emp0").value
   v0=Number(v01)-1
   $.post(`http://localhost:3000/employs/${v0}`,function(status){
      
   })
   document.getElementsByClassName("bodyemp")[0].style.display="none";
         document.getElementsByClassName("bodyemp")[1].style.display="none";
         document.getElementsByClassName("bodyemp")[2].style.display="none";
         document.getElementsByClassName("body1")[0].style.display="";
         document.getElementsByClassName("bodyrec")[0].style.display="none";
         document.getElementsByClassName("bodyrec")[1].style.display="none";
         document.getElementsByClassName("bodyrec")[2].style.display="none";
         employfromJson();
         document.getElementsByClassName("buttonem")[0].disabled=true;
         document.getElementsByClassName("buttonem")[1].disabled=true;
         document.getElementsByClassName("buttonem")[2].disabled=true;
         document.getElementsByClassName("buttonem")[0].style.opacity=0.6;
         document.getElementsByClassName("buttonem")[1].style.opacity=0.6;
         document.getElementsByClassName("buttonem")[2].style.opacity=0.6;
         document.getElementById("emp1").disabled=true;
         document.getElementById("emp2").disabled=true;
         document.getElementById("emp3").disabled=true;
         document.getElementById("emp4").disabled=true;
         document.getElementById("emp5").disabled=true;
         document.getElementById("emp6").disabled=true;
         document.getElementById("emp7").disabled=true;
         document.getElementById("emp8").disabled=true;
         document.getElementById("upload-form").style.display="none"
         document.getElementById("directory").style.display="none"
}
function Add(){
   
   $.post(`http://localhost:3000/addemp`,function(data,status){
      var employ=data.newemploye;
      var v0=employ.Id.toString();
      var v1= employ.Name.toString();
      var v2=employ.Middlename.toString();
      var v3=employ.Surname.toString();
      var v4=employ.DateofBirth.toString();
      var v5=employ.Nationality.toString();
      var v6=employ.ContactPhone.toString();
      var v7=employ.ContactAddress.toString();
      var v8=employ.Record.toString();
      var v9=employ.image.toString();
      document.getElementById("emp9").src=v9
      document.getElementById("emp8").value=v8
      document.getElementById("emp1").value=v1
      document.getElementById("emp2").value=v2
      document.getElementById("emp3").value=v3
      document.getElementById("emp4").value=v4
      document.getElementById("emp5").value=v5
      document.getElementById("emp6").value=v6
      document.getElementById("emp7").value=v7
      document.getElementById("emp0").value=v0
   })
   document.getElementsByClassName("buttonem")[0].disabled=true;
   document.getElementsByClassName("buttonem")[1].disabled=true;
   document.getElementsByClassName("buttonem")[2].disabled=true;
   document.getElementsByClassName("buttonem")[0].style.opacity=0.6;
   document.getElementsByClassName("buttonem")[1].style.opacity=0.6;
   document.getElementsByClassName("buttonem")[2].style.opacity=0.6;
   
}
function Save1(){
   

   v1=  document.getElementById("rec1").value
   v2=document.getElementById("rec2").value
   v3=document.getElementById("rec3").value
   v4=document.getElementById("rec4").value
   v5=document.getElementById("rec5").value
  v6=document.getElementById("rec6").value
   $.post(`http://localhost:3000/records`,{"Id":v1,"Date":v2,"Author":v3,"Name":v4,"Text":v5,"Relation":v6},function(status){
      alert("Save"+status);
   })
   document.getElementsByClassName("buttonre")[0].disabled=true;
   document.getElementsByClassName("buttonre")[1].disabled=true;
   document.getElementsByClassName("buttonre")[2].disabled=true;
   document.getElementsByClassName("buttonre")[0].style.opacity=0.6;
   document.getElementsByClassName("buttonre")[1].style.opacity=0.6;
   document.getElementsByClassName("buttonre")[2].style.opacity=0.6;
   document.getElementById("rec1").disabled=true;
   document.getElementById("rec2").disabled=true;
   document.getElementById("rec3").disabled=true;
   document.getElementById("rec4").disabled=true;
   document.getElementById("rec5").disabled=true;
   document.getElementById("rec6").disabled=true;
  
}
function Delete1(){
   v01=document.getElementById("rec1").value
   v0=Number(v01)-1
   $.post(`http://localhost:3000/records/${v0}`,function(status){
     

   })
   document.getElementsByClassName("bodyemp")[0].style.display="none";
   document.getElementsByClassName("bodyemp")[1].style.display="none";
   document.getElementsByClassName("bodyemp")[2].style.display="none";
   document.getElementsByClassName("body1")[0].style.display="";
   document.getElementsByClassName("bodyrec")[0].style.display="none";
   document.getElementsByClassName("bodyrec")[1].style.display="none";
   document.getElementsByClassName("bodyrec")[2].style.display="none";
   recordfromJson();

   document.getElementsByClassName("buttonre")[0].disabled=true;
   document.getElementsByClassName("buttonre")[1].disabled=true;
   document.getElementsByClassName("buttonre")[2].disabled=true;
   document.getElementsByClassName("buttonre")[0].style.opacity=0.6;
   document.getElementsByClassName("buttonre")[1].style.opacity=0.6;
   document.getElementsByClassName("buttonre")[2].style.opacity=0.6;
   document.getElementById("rec1").disabled=true;
   document.getElementById("rec2").disabled=true;
   document.getElementById("rec3").disabled=true;
   document.getElementById("rec4").disabled=true;
   document.getElementById("rec5").disabled=true;
   document.getElementById("rec6").disabled=true;

}
function Add1(){
  $.post(`http://localhost:3000/addrec`,function(data,status){
   var employ=data.newrecord;

   var v1= employ.Id.toString();
   var v2=employ.Date.toString();
   var v3=employ.Author.toString();
   var v4=employ.Name.toString();
   var v5=employ.Text.toString();
   var v6=employ.Relation.toString();

   
   document.getElementById("rec1").value=v1
   document.getElementById("rec2").value=v2
   document.getElementById("rec3").value=v3
   document.getElementById("rec4").value=v4
   document.getElementById("rec5").value=v5
   document.getElementById("rec6").value=v6
  })
  document.getElementsByClassName("buttonre")[0].disabled=true;
  document.getElementsByClassName("buttonre")[1].disabled=true;
  document.getElementsByClassName("buttonre")[2].disabled=true;
  document.getElementsByClassName("buttonre")[0].style.opacity=0.6;
  document.getElementsByClassName("buttonre")[1].style.opacity=0.6;
  document.getElementsByClassName("buttonre")[2].style.opacity=0.6;
  
   
}
function Modify(){
   document.getElementsByClassName("buttonem")[0].disabled=false;
   document.getElementsByClassName("buttonem")[1].disabled=false;
   document.getElementsByClassName("buttonem")[2].disabled=false;
   document.getElementsByClassName("buttonem")[0].style.opacity=1;
   document.getElementsByClassName("buttonem")[1].style.opacity=1;
   document.getElementsByClassName("buttonem")[2].style.opacity=1;
   document.getElementById("emp1").disabled=false;
   document.getElementById("emp2").disabled=false;
   document.getElementById("emp3").disabled=false;
   document.getElementById("emp4").disabled=false;
   document.getElementById("emp5").disabled=false;
   document.getElementById("emp6").disabled=false;
   document.getElementById("emp7").disabled=false;
   document.getElementById("emp8").disabled=false;
   document.getElementById("upload-form").style.display=""
   document.getElementById("directory").style.display=""
}
function Modify1(){
   document.getElementsByClassName("buttonre")[0].disabled=false;
   document.getElementsByClassName("buttonre")[1].disabled=false;
   document.getElementsByClassName("buttonre")[2].disabled=false;
   document.getElementsByClassName("buttonre")[0].style.opacity=1;
   document.getElementsByClassName("buttonre")[1].style.opacity=1;
   document.getElementsByClassName("buttonre")[2].style.opacity=1;
   document.getElementById("rec1").disabled=false;
   document.getElementById("rec2").disabled=false;
   document.getElementById("rec3").disabled=false;
   document.getElementById("rec4").disabled=false;
   document.getElementById("rec5").disabled=false;
   document.getElementById("rec6").disabled=false;
 
}
function Logo(){
   document.getElementsByClassName("bodyemp")[0].style.display="none";
      document.getElementsByClassName("bodyemp")[1].style.display="none";
      document.getElementsByClassName("bodyemp")[2].style.display="none";
      document.getElementsByClassName("body1")[0].style.display="";
      document.getElementsByClassName("bodyrec")[0].style.display="none";
      document.getElementsByClassName("bodyrec")[1].style.display="none";
      document.getElementsByClassName("bodyrec")[2].style.display="none";
      document.getElementById("upload-form").style.display="none"
      document.getElementById("directory").style.display="none"
      recordfromJson();
      document.getElementsByClassName("buttonre")[0].disabled=true;
      document.getElementsByClassName("buttonre")[1].disabled=true;
      document.getElementsByClassName("buttonre")[2].disabled=true;
      document.getElementsByClassName("buttonre")[0].style.opacity=0.6;
      document.getElementsByClassName("buttonre")[1].style.opacity=0.6;
      document.getElementsByClassName("buttonre")[2].style.opacity=0.6;
      document.getElementById("rec1").disabled=true;
      document.getElementById("rec2").disabled=true;
      document.getElementById("rec3").disabled=true;
      document.getElementById("rec4").disabled=true;
      document.getElementById("rec5").disabled=true;
      document.getElementById("rec6").disabled=true;
      document.getElementsByClassName("buttonem")[0].disabled=true;
      document.getElementsByClassName("buttonem")[1].disabled=true;
      document.getElementsByClassName("buttonem")[2].disabled=true;
      document.getElementsByClassName("buttonem")[0].style.opacity=0.6;
      document.getElementsByClassName("buttonem")[1].style.opacity=0.6;
      document.getElementsByClassName("buttonem")[2].style.opacity=0.6;
      document.getElementById("emp1").disabled=true;
      document.getElementById("emp2").disabled=true;
      document.getElementById("emp3").disabled=true;
      document.getElementById("emp4").disabled=true;
      document.getElementById("emp5").disabled=true;
      document.getElementById("emp6").disabled=true;
      document.getElementById("emp7").disabled=true;
      document.getElementById("emp8").disabled=true;
}
function n(event){
  
   document.getElementById("emp9").src=event.target.files[0].name
   console.log(event.target.files)
 }

 

 
 $(document).ready(function(ev) {
   $("#upload-form").on('submit', (function(ev) {
       ev.preventDefault();
       $.ajax({
           xhr: function() {
               var progress = $('.progress'),
                   xhr = $.ajaxSettings.xhr();

               progress.show();

               xhr.upload.onprogress = function(ev) {
                   if (ev.lengthComputable) {
                       var percentComplete = parseInt((ev.loaded / ev.total) * 100);
                       progress.val(percentComplete);
                       if (percentComplete === 100) {
                           progress.hide().val(0);
                       }
                   }
               };

               return xhr;
           },
           url: './uploads',
           type: 'POST',
           data: new FormData(this),
           contentType: false,
           cache: false,
           processData: false,
           success: function(data, status, xhr) {
               
               document.getElementById("emp9").src=data.pat.toString()
           },
           error: function(xhr, status, error) {
               // ...
           }
      });
   }));
});
function link(){
   document.getElementById("file").click();
}