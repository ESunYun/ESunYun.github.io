var $ = {
    ajax: ajax
};
var gbl_data;

function ajax(url, callback){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(xhr.responseText);
        }
    }
    xhr.open('get', url, false);
    xhr.send();
}

$.ajax('https://raw.githubusercontent.com/suhokim2/suhokim2.github.com/master/data.json', function(response){
    gbl_data = response;
});

console.log(gbl_data);