var now = new Date().toLocaleTimeString();//получаем локальное время

function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value; //нужно для того что бы добавлять 0 в секунды, минуты, часы, дату и месяц
            //например когда время 12:00:01, без '0' добавки нуля этого, получилось бы 12:0:1
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"-"+month+"-"+year+" "+hours+":"+minutes+":"+seconds;//формат вывода даты и времени
    }


setInterval(function () {//функция для обновления времени в "реальном времени"
    document.getElementById('date').innerHTML = date_time();
}, 1000);