function boom(obj1,obj2){
	var obj2l=obj2.offsetLeft;
	var obj2t=obj2.offsetTop;
	var obj2r=obj2.offsetWidth+obj2l;
	var obj2b=obj2.offsetHeight+obj2t;
    var obj1l=obj1.offsetLeft;
    var	obj1t=obj1.offsetTop;
    var	obj1r=obj1.offsetWidth+obj1l;
    var obj1b=obj1.offsetHeight+obj1t;
     if(obj1b>obj2t&&obj1t<obj2b&&obj1r>obj2l&&obj1l<obj2r)
     {
            	return true;
            }
            else{
            	return false;
            }
}