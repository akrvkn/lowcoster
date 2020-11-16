//var ajax_url = '/lib/data/mtf.php?format=json&section=rivercruises&own=false&request=tours';
//var ajax_url = ajax_tours;
let d = new Date();
let current_date = d.toISOString().substring(0, 10);
let l_url = 'https://api.mosturflot.ru/v3/rivercruises/tours?fields[tours]=ship-id,route,start,finish,days,price-from,price-from-discount,is-special-offer,start-point,end-point,max-discount,is-online-sale,is-foreigner,is-holiday,direction-id,is-own,discount-expire,start-point,finish-point&include=ship,ship-title-image,direction&fields[ships]=name,class-id,sort-order,is-own&filter[start][gte]=' + current_date + 'T00:00:00Z&per-page=100&&filter[ship-id][in][]=19&filter[ship-id][in][]=72&filter[ship-id][in][]=91';
const mtfShipsArray = {
    "5": 'Сергей Образцов',
    "14": 'Василий Суриков',
    "19":'Leonid Krasin',
    "36": 'Илья Репин',
    "72": 'Knyazhna Anastasiya',
    "91": 'A.S.Pushkin',
    "92": 'Николай Карамзин',
    "139": 'И.А.Крылов',
    "150": 'Сергей Есенин',
    "198": 'Михаил Булгаков',
    "200": 'Андрей Рублев',
    "206": 'Княжна Виктория',
    "207": 'Александр Грин',
    "247": 'Россия'
};

//https://api.mosturflot.ru/v3/rivercruises/tours?fields[tours]=ship-id,route,start,finish,days,price-from,price-from-discount,is-special-offer,start-point,end-point,max-discount,is-online-sale,is-foreigner,is-holiday,direction-id,is-own,discount-expire,start-point,finish-point&include=ship,ship-title-image,direction&fields[ships]=name,class-id,sort-order,is-own&filter[start][gte]=2021-04-15T00:00:00Z&per-page=100&&filter[ship-id][in][]=19&filter[ship-id][in][]=72&filter[ship-id][in][]=91

var booking_url = 'https://www.mosturflot.ru/rivercruise/?tour=';
var ru_RU = {
    "processing": "Подождите...",
    "search": "Поиск:",
    "lengthMenu": "Показать _MENU_ записей",
    "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
    "infoEmpty": "Записи с 0 до 0 из 0 записей",
    "infoFiltered": "(отфильтровано из _MAX_ записей)",
    "infoPostFix": "",
    "loadingRecords": "Загрузка записей...",
    "zeroRecords": "Записи отсутствуют.",
    "emptyTable": "В таблице отсутствуют данные",
    "paginate": {
        "first": "Первая",
        "previous": "Назад",
        "next": "Вперёд",
        "last": "В конец"
    },
    "aria": {
        "sortAscending": ": активировать для сортировки столбца по возрастанию",
        "sortDescending": ": активировать для сортировки столбца по убыванию"
    }
};

var ships = {
    "207": "Александр Грин",
    "206": "Княжна Виктория",
    "200": "Андрей Рублёв",
    "247": "Россия",
    "14": "Василий Суриков",
    "36": "Илья Репин",
    "19": "Леонид Красин",
    "198": "Михаил Булгаков",
    "150": "Сергей Есенин",
    "139": "И.А.Крылов",
    "92": "Николай Карамзин",
    "5": "Сергей Образцов",
    "72": "Княжна Анастасия",
    "86": "Афанасий Никитин",
    "208": "Виссарион Белинский",
    "248": "Демьян Бедный",
    "83": "Иван Кулибин",
    "251": "Князь Владимир",
    "39": "Константин Коротков",
    "249": "Михаил Светлов",
    "242": "Н.В.Гоголь",
    "84": "Октябрьская Революция",
    "264": "Bellejour",
    "265": "FIDELIO",
    "225": "Alemannia"

};

function parseUrlQuery(q) {
    var res = '';
    if(location.search) {
        var pair = (location.search.substr(1)).split('&');
        for(var i = 0; i < pair.length; i ++) {
            var param = pair[i].split('=');
            if(param[0]===q)
                res = decodeURIComponent(param[1]);
        }
    }
    return res;
}

function compare(a,b) {
    if (a.tourstart < b.tourstart)
        return -1;
    if (a.tourstart > b.tourstart)
        return 1;
    return 0;
}


/****** Plugins *************/

(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "moment", "datatables"], factory);
    } else {
        factory(jQuery, moment);
    }
}(function ($, moment) {

    $.fn.dataTable.moment = function ( format, locale ) {
        var types = $.fn.dataTable.ext.type;

        // Add type detection
        types.detect.unshift( function ( d ) {
            // Strip HTML tags if possible
            if ( d && d.replace ) {
                d = d.replace(/<.*?>/g, '');
            }

            // Null and empty values are acceptable
            if ( d === '' || d === null ) {
                return 'moment-'+format;
            }

            return moment( d, format, locale, true ).isValid() ?
                'moment-'+format :
                null;
        } );

        // Add sorting method - use an integer for the sorting
        types.order[ 'moment-'+format+'-pre' ] = function ( d ) {
            if ( d && d.replace ) {
                d = d.replace(/<.*?>/g, '');
            }
            return d === '' || d === null ?
                -Infinity :
                parseInt( moment( d, format, locale, true ).format( 'x' ), 10 );
        };
    };

}));

(function($){
    $(document).ready(function() {
        $(document).on("click", ".reg-form__action", function(event){
            event.preventDefault();
            $(this).prop('disabled', true);
            var name = encodeURIComponent($(this).parent().parent().find("#name").val());
            console.log(name);
            var email = $(this).parent().parent().find("#email");
            var mysubject = $(this).parent().parent().find("#subscription");
            var phone = $(this).parent().parent().find("#phone");
            var mobile = $(this).parent().parent().find("#mobile");
            var dataString = 'name='+ name + '&email=' + email.val() + '&subscription='+ mysubject.val() + '&mobile=' + mobile.val() + '&phone=' + phone.val();
            console.log(dataString);
            $.ajax({
                type: 'post',
                url: 'https://script.google.com/macros/s/AKfycbx-ZFAX5-GvcORUHKHeTmgqYnpfWxOj3lzLjzxFzvn5jfQqINRW/exec',
                data: dataString,
                success: function(data) {
                    console.log(data);
                    alert("Заявка отправлена");
                }
            });
        });


        //moment.locale('ru');
        $.fn.dataTable.moment( 'DD MMM H:mm' );
        /*** all cruises **/
        var rivercruises = $('#rivercruises').DataTable( {
            "dom": 'rt<"clear">p',
            "responsive": "true",
            "ajax": {
                "headers": {
                    "Accept-Language": "en-US"
                },
                "url": l_url,
                "dataSrc": function ( json ) {
                    //console.log(json.data);
                    var data = [];
                    for(var key in json.data){
                        //if(json.attributes.hasOwnProperty(key)){
                        json.data[key].attributes.shipname = mtfShipsArray[json.data[key].attributes['ship-id']];
                        json.data[key].attributes.tourid = json.data[key].id;
                            json.data[key].attributes.year = moment(json.data[key].attributes.start, moment.ISO_8601).format('YYYY');
                            json.data[key].attributes.cruisestart = moment(json.data[key].attributes.start, moment.ISO_8601).format('YYYY <br>DD MMM <i>H:mm</i>,<br> dddd');
                            json.data[key].attributes.tourfinish = moment(json.data[key].attributes.finish, moment.ISO_8601).format('YYYY <br>DD MMM <i>H:mm</i>,<br> dddd');
                            data.push(json.data[key].attributes);
                        //}
                    }
                    data.sort(compare);
                    return data;
                }
            },
            //"language":ru_RU,
            "columns": [
                { "data": "year", "class": "m-row", responsivePriority: 6 },
                { "data": "shipname", "class": "m-row-ship", responsivePriority: 0 },
                { "data": "days", "class": "m-row-days", responsivePriority: 0 },
                { "data": "cruisestart", "class": "m-row-date", responsivePriority: 0 },
                { "data": "tourfinish", "class": "m-row-date", responsivePriority: 1 },
                { "data": "route", "class": "m-row", responsivePriority: 0 },
                { "data": "price-from", "class": "m-row-price", responsivePriority: 2 }
            ],
            "columnDefs": [
                {
                    "targets": [ 0 ],
                    "visible": false,
                    "searchable": true,
                    "sortable": false
                },
                {
                    "targets": [ 1, 2, 3, 4, 5],
                    "visible": true,
                    "sortable": false
                },
                {
                    "render": function ( data, type, row ) {

                            return "<a class='button btn-small' href='https://booking.mosturflot.ru/rivercruises/" + row.tourid + "?language=en-US' target='_blank'>MORE</a>";










































































































































































































































































































































































































































































































































































































































































































































































































                    },
                    "targets": 6
                },
                {
                    "render": function ( data, type, row ) {
                        if(row['ship-id']){
                            return '<figure><img src="images/150x80/'+ row['ship-id'] +'.jpg" /></figure>'+ '<div class="shipname">' + row.shipname + '</div>';
                        }
                        return '<figure><img src="images/150x80/ship.jpg" /></figure>'+ '<div class="shipname">' + row.shipname + '</div>';

                    },
                    "targets": 1
                },
                {
                    "render": function ( data, type, row ) {

                        return '<div class="cruise-date">' + row.cruisestart + '</div>';

                    },
                    "targets": [3]
                },
                {
                    "render": function ( data, type, row ) {

                        return '<div class="cruise-date">' + row.tourfinish + '</div>';

                    },
                    "targets": [4]
                }
            ],
            "initComplete": function () {
            }

        } );

    } );
})(jQuery);
``