var $ = {
    ajax: ajax
};

function ajax(url, callback){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(xhr.responseText);
        }
    };
    xhr.open('get', url, true);
    xhr.send();
}

$.ajax('https://raw.githubusercontent.com/suhokim2/suhokim2.github.com/master/data.json', function(response){
    var fruits = eval('('+response+')').fruits;
});

