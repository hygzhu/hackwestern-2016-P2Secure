$.ajax({
    type: 'GET',
    url: 'url',
    dataType: 'json',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', make_base_auth(user, password));
    },
    success: function () {});
});

function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return 'Basic ' + hash;
}