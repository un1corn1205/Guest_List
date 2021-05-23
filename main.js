var guest_array=[];

function get_list() {
    var list_of_guest=document.getElementById("enter_name").value;

    guest_array.push(list_of_guest);

    document.getElementById("t1").innerHTML = guest_array;
}
function sorted_list() {
    guest_array.sort();
    console.log(guest_array);
    document.getElementById("sorted_list").innerHTML = guest_array;
}
function search() {
    var search=document.getElementById("search_name").value;
    var found=0;
    var j;
    for (j=0; j<guest_array.length; j++) {
        if (search==guest_array[j]) {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML = "name found "+found+" time/s";
    console.log("found name "+found+" time/s");
    }