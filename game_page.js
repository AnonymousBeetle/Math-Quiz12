name1 = localStorage.getItem("name1");
name2 = localStorage.getItem("name2")

name1_score = 0;
name2_score = 0;

document.getElementById("player1Name").innerHTML = name1 + " : ";
document.getElementById("player2Name").innerHTML = name2 + " : ";


document.getElementById("player1Score").innerHTML = name1_score ;
document.getElementById("player2Score").innerHTML = name2_score ;

document.getElementById("playerQuestion").innerHTML = "Question turn - " + name1; 
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + name2;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2)

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "name1";
answer_turn = "name2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if(answer == word)
    {
        if(answer_turn == "name1")
        {
            name1_score = name1_score +1;
            document.getElementById("player1Score").innerHTML = name1_score;
        }
        else
        {
            name2_score = name2_score +1;
            document.getElementById("player2Score").innerHTML = name2_score;
        }
    }

    if(question_turn == "name1")
{
    question_turn = "name2";
    document.getElementById("playerQuestion").innerHTML = "Question Turn - " + name2;
}
else
{
    question_turn = "name1"
    document.getElementById("playerQuestion").innerHTML = "Question Turn - " + name1;
}

if(answer_turn == "name1")
{
    answer_turn = "name2"
    document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + name2;
}
else
{
    answer_turn = "name1";
    document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + name1;
}
document.getElementById("output"),innerHTML = "";
}