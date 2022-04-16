function changeStatus(id){
    console.log(id);

    window.open(`/change-todo-status?id=${id}`,"_self");
};
