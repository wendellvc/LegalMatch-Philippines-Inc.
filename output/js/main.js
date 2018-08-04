$( function() {
	
	var zipCity = [
		"Beverly Hills, CA 90210",
		"Manhattan, NY 10004", 
		"Nowheresville, XX 00000"
	];

	$("#cityZip").autocomplete({
	  source: zipCity
	});
	
	var dd = new DropDown( $('#dd') );

	$(document).click(function() {
		// all dropdowns
		$('.wrapper-dropdown-3').removeClass('active');
		$('.wrapper-dropdown-3 ul').removeClass('hidden');
	});

} );

	
	function DropDown(el) {
		this.dd = el;
		this.placeholder = this.dd.children('span');
		this.opts = this.dd.find('ul.dropdown > li');
		this.val = '';
		this.index = -1;
		this.initEvents();
	}
	
	DropDown.prototype = {
		initEvents : function() {
			var obj = this;
			obj.dd.on('click', function(event){
			
				$(this).toggleClass('active');
/*
				if( $(this).hasClass('active') ) {
					$(this).children('ul').removeClass('hidden');
				}
				else if( !$(this).hasClass('active') ) {
					$(this).children('ul').addClass('hidden').delay(800, function(){
						$(this).children('ul').removeClass('hidden');
					});
				}*/

				return false;
			});
			
			obj.opts.on('click', function(){
				var opt = $(this);
				obj.val = opt.text();
				obj.index = opt.index();
				obj.placeholder.text(obj.val);
				
				setTimeout(function(){ $('#btnTrigger').click(); }, 400);

				
			});
		},
		getValue : function() {
			return this.val;
		},
		getIndex : function() {
			return this.index;
		}
	}