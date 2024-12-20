// โหลด To-Do List จาก LocalStorage เมื่อเปิดหน้าเว็บ
window.onload = () => {
    loadToDo();
};

// ฟังก์ชันเพิ่ม To-Do ใหม่
document.getElementById("newBtn").onclick = () => {
    const todoText = prompt("Enter your TO DO:").trim();
    if (todoText) {
        addToDo(todoText);
        saveToDo();
    }
};

// ฟังก์ชันเพิ่ม To-Do ไปที่ DOM
function addToDo(text) {
    const toDoDiv = document.createElement("div");
    toDoDiv.textContent = text;
    toDoDiv.onclick = () => deleteToDo(toDoDiv);
    const list = document.getElementById("ft_list");

    // เพิ่มที่ด้านล่างสุดของรายการ
    list.appendChild(toDoDiv); // ใช้ appendChild แทน insertBefore

}

// ฟังก์ชันลบ To-Do
function deleteToDo(toDoDiv) {
    if (confirm("Do you really want to delete this TO DO?")) {
        toDoDiv.remove();
        saveToDo();
    }
}

// ฟังก์ชันบันทึก To-Do List ลง LocalStorage
function saveToDo() {
    const list = document.querySelectorAll("#ft_list div");
    const toDoArray = [];
    list.forEach(item => toDoArray.push(item.textContent));
    localStorage.setItem("todo", JSON.stringify(toDoArray)); // เก็บข้อมูลใน LocalStorage
}

// ฟังก์ชันโหลด To-Do จาก LocalStorage
function loadToDo() {
    const toDoData = localStorage.getItem("todo");
    if (toDoData) {
        const toDoArray = JSON.parse(toDoData);
        toDoArray.forEach(item => addToDo(item));
    }
}
