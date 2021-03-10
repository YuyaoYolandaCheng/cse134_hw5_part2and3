// Use DOM Table to implement CRUD

var add = document.getElementById("add");
var form = {};
var row = null;

if(window.localStorage.length > 0){
    for (var key in window.localStorage) {
        var str = localStorage[key];
        if(typeof(str) == "string"){
        var res = str.split(":");
        
        var old_table = document.getElementById("crudlist").getElementsByClassName("content")[0];
        var old_add = old_table.insertRow(old_table.length);
        old_add.insertCell(0).innerHTML = res[1];
        old_add.insertCell(1).innerHTML = res[3];
        old_add.insertCell(2).innerHTML = res[5];
        old_add.insertCell(3).innerHTML = `<a href="#" onClick='myEdit(this)'><i class="fa fa-edit"></i></a>
            <a href="#" onClick='myDelete(this)'><i class="fa fa-trash"></i></a>`;
        }
      }
}

add.onclick = function(){
    var myPrompt1 = document.getElementById("myPrompt1");
    var ok_p1 = document.getElementById("ok_p1");
    var cancel_p1 = document.getElementById("cancel_p1");       
    myPrompt1.style.display = "block";

    ok_p1.onclick = function(){
        title_add = document.getElementById("title_p1").value;
        let neat1 = DOMPurify.sanitize(title_add);
        if(neat1 != null){
        form["title"] = neat1;
        }

        date_add = document.getElementById("date_p1").value;
        let neat2 = DOMPurify.sanitize(date_add);
        if(neat2 != null){
            form["date"] = neat2;
        }        

        summary_add = document.getElementById("summary_p1").value;
        let neat3 = DOMPurify.sanitize(summary_add);
        if(neat3 != null){
            form["summary"] = neat3;
        } 

        var new_table = document.getElementById("crudlist").getElementsByClassName("content")[0];
        var new_add = new_table.insertRow(new_table.length);
        new_add.insertCell(0).innerHTML = form.title;
        new_add.insertCell(1).innerHTML = form.date;
        new_add.insertCell(2).innerHTML = form.summary;
        new_add.insertCell(3).innerHTML = `<a href="#" onClick='myEdit(this)'><i class="fa fa-edit"></i></a>
            <a href="#" onClick='myDelete(this)'><i class="fa fa-trash"></i></a>`;

        myPrompt1.style.display = "none";
        window.localStorage.setItem("form" + form.title, "{title:"+ form.title + ":date:" + form.date + ":summary: " + form.summary+":}");
    }

    cancel_p1.onclick = function(){
        myPrompt1.style.display = "none";
    }

    document.getElementById("summary_p1").value = '';
    document.getElementById("date_p1").value = '';
    document.getElementById("title_p1").value = '';
}

function myEdit(button){
    row = button.parentNode.parentNode;

    var myPrompt2 = document.getElementById("myPrompt2");
    var okPrompt2 = document.getElementById("ok_p2");
    var cancelPrompt2 = document.getElementById("cancel_p2");
    myPrompt2.style.display = "block";

    okPrompt2.onclick = function() {
        window.localStorage.removeItem("form"+row.cells[0].innerHTML);
        title_input = document.getElementById("title_p2").value;
        let clean1 = DOMPurify.sanitize(title_input);
        if(clean1 != null){
            row.cells[0].innerHTML = clean1;
        }

        date_input = document.getElementById("date_p2").value;
        let clean2 = DOMPurify.sanitize(date_input);
        if(clean2 != null){
            row.cells[1].innerHTML = clean2;
        }

        summary_input = document.getElementById("summary_p2").value;
        let clean3 = DOMPurify.sanitize(summary_input);
        if(clean3 != null){
            row.cells[2].innerHTML = clean3;
        }

        myPrompt2.style.display = "none";

        window.localStorage.setItem("form"+clean1, "{title:" + clean1 + ":date: " + clean2 + ":summary: " + clean3+":}");
    }   

    cancelPrompt2.onclick = function() {
        myPrompt2.style.display = "none";
    }
    document.getElementById("title_p2").value = '';
    document.getElementById("date_p2").value = '';
    document.getElementById("summary_p2").value = '';
}


function myDelete(button){
    var myConfirm = document.getElementById("myConfirm");
    var okConfirm = document.getElementById("ok_c");
    var cancelConfirm = document.getElementById("cancel_c");
    myConfirm.style.display = "block";

    okConfirm.onclick = function() {
        row = button.parentNode.parentNode; 
        var list = document.getElementById('crudlist');
        list.deleteRow(row.rowIndex);
        myConfirm.style.display = "none";

        window.localStorage.removeItem("form"+row.cells[0].innerHTML);
    }
    
    cancelConfirm.onclick = function() {
        myConfirm.style.display = "none";
    }
}

