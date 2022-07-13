            let tasks = document.querySelector("#task"); 
            let todolist= document.querySelector("#list");  
            let yereldepo =[];    
              
            function newElement(){
                let newLi = document.createElement("li");
                
                if(tasks.value.trim().length == 0 ){
                    $('.error').toast('show');
                    
                }else{
                    newLi.innerHTML =tasks.value +`<button class="kapa btn close btn-light mr-3 p-2 mt-1 " >X</button>` ;
                    todolist.appendChild(newLi);    
                    $('.success').toast('show');
                    yereldepo.push(tasks.value);
                    
                      
                }
                tasks.value = "";   
                localStorage.setItem("ToDoList",yereldepo) 
            }
            //New To do List Yapımı-----> toast açılır kapama yapımı
                todolist.addEventListener("click",function(event){
                    event.target.classList.toggle("checked");
                    
                    if(event.target.classList[0]=="kapa"){
                        event.target.parentElement.style.display = "none";
                    }

                    
                })
            //todolistin seçilme ve kapatılma yapımı


                

                
                
                
             