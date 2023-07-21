var bookmarkName=document.getElementById("bookmarkName")
var bookmarkURLInput=document.getElementById("bookmarkURL")
var bookmarks=[];

bookmarks=JSON.parse(localStorage.getItem("links"));
display()
function submitData(){
    var links ={
        Name:bookmarkName.value,
URL:bookmarkURLInput.value,
     }
bookmarks.push(links)
localStorage.setItem("links" , JSON.stringify(bookmarks))
display()

allLetter(bookmarkName)

}

function allLetter(bookmarkName)
{
var letters = /^[A-Za-z]+$/;
if(bookmarkName.value.match(letters))
{

}
else
{

windowBox.classList.remove("d-none")
exitLayer.classList.remove("d-none")
}
}



function display(){
    var cartona=''
for(var i=0; i<bookmarks.length; i++){
    cartona+=`  <tr>
    <td>${i}</td>
    <td>${bookmarks[i].Name}</td>
    <td>
              <a href="https://${bookmarks[i].URL}" target="_blank" class="btn btn-visit pe-2"> <i class="fa-solid fa-eye pe-2"></i>Visit</a
             </td>
    <td>
      <button class="btn btn-delete pe-2" onclick="Delete(${i})" >
        <i class="fa-solid fa-trash-can" ></i>
        Delete
      </button>
    </td>
</tr>`
}
document.getElementById("tableData").innerHTML=cartona
}

function Delete(x){
bookmarks.splice(x , 1)
localStorage.setItem("links" , JSON.stringify(bookmarks))
display()
}

