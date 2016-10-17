//Appends a new borrowed item to the page
function addBorrow(item, img, cost, fee, date, due) {

    $("#borrow").append('<li class="list-group-item"><div class="row"><div class="col-sm-4"><img class="img-responsive" style="width:100%" src="resources/' + img + '"></div><div class="col-sm-8"><div class="row"><div class="col-sm-8"><b>' + item + '</b></div><div class="col-sm-8"><b>Cost </b>: ' + cost + ' CAD</div><div class="col-sm-8"><b>Borrowing Fee </b>: ' + fee + ' CAD</div><div class="col-sm-8"><b>Date Borrowed</b>: ' + date + '</div><div class="col-sm-8"><b>Date Due</b>: ' + due + '</div></div></div></div></li>');

}

//Appends a new lent item to the page
function addLent(item, img, cost, fee, date, due) {

    $("#lend").append('<li class="list-group-item"><div class="row"><div class="col-sm-4"><img class="img-responsive" style="width:100%" src="resources/' + img + '"></div><div class="col-sm-8"><div class="row"><div class="col-sm-8"><b>' + item + '</b></div><div class="col-sm-8"><b>Cost </b>: ' + cost + ' CAD</div><div class="col-sm-8"><b>Lending Fee </b>: ' + fee + ' CAD</div><div class="col-sm-8"><b>Date Lent</b>: ' + date + '</div><div class="col-sm-8"><b>Date Due</b>: ' + due + '</div></div></div></div></li>');

}