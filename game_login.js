function addUser() 
{
    name1 = document.getElementById("name1_input").value;
    name2 = document.getElementById("name2_input").value;

    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);

    window.location = "game_page.html";
}