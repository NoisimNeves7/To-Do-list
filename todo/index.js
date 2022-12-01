window.addEventListener('load',()=>{
    const form=document.querySelector('#task-form')
    const input=document.querySelector('#stuff')
    const li=document.querySelector("#ele");
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        var a=input.value;
        if(!a)
        {
            alert("enter task");
            return;
        }
 
        

        const task_content_el=document.createElement("div");
        task_content_el.classList.add("item");

        const task_content_el_topic=document.createElement("div");
        task_content_el_topic.classList.add("topic");

        task_content_el_topic.innerHTML=a;

        const task_content_el_button=document.createElement("button");
        task_content_el_button.classList.add("button-del");
        const task_content_el_button_done=document.createElement("button");
        task_content_el_button_done.id="done";
        task_content_el_button_done.innerText="Done";
        // task_content_el_button_done.classList.add("button-done");
        // document.getElementsByClassName('item').appendChild(task_content_el_button_done);

        task_content_el_button.innerHTML=`<img src="delete.svg" class="icon-del">`;


        task_content_el.append(task_content_el_topic);
        task_content_el.append(task_content_el_button);
        task_content_el.appendChild(task_content_el_button_done);
        task_content_el_button_done.addEventListener('click' , function(){
            task_content_el_topic.style.textDecoration = "line-through";
        })
        li.appendChild(task_content_el);
        input.value="";

        task_content_el_button.addEventListener('click',()=>{
            li.removeChild(task_content_el);
        })
    })

})




