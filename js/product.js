var product = new Array();
// Arrangments
// 1st => ItemName (0)
// 2nd => DryPrice (1)
// 4th => WashingPrice (2)
// 3rd => PressPrice (3)
product[0] = ["Shirt",10,5,6];
product[1] = ["Trouser",15,6,7];
product[2] = ["Pent",45,8,8];
var itemOpt = "";
for (var i = 0; i < product.length; i++) {
	itemOpt += '<option value="'+ product[i][0] +'">'+ product[i][0] +'</option>';
}

$("#item_name").html(itemOpt);

function getProductD(item) {
	for (var i = 0; i < product.length; i++) {
		if(product[i][0]==item){
			data = product[i];
			break;
		}
		else{
			data = Array('empty');;
		}
	}
	return data;
}
