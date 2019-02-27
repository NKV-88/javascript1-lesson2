
var a = + prompt('Введите число "a":');//можем задать любое значение для выполнения различных условий.
var	b = + prompt('Введите число "b":');//можем задать любое значение для выполнения различных условий.


	if (a >= 0 && b >= 0) {
		console.log ('Разница переменных "a" и "b" равна: ' + (a - b));//если a и b положительные, вывести их разность;
	} else if (a < 0 && b < 0){
		console.log ('Произведение переменных "a" и "b" равна: ' + (a * b));//если а и b отрицательные, вывести их произведение;
	} else if (a * b <= 0) {
		console.log ('Сумма переменных "a" и "b" равна: ' + (a + b));//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
	} else {
		console.log ('Введенные символы не соответствуют ни одному условию, или  Вы ввели не цифры!!!');
	}

// 4.Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

	switch (a) {
		case 0:
			a++
			console.log ('Значение перменной  = ' + a );
		case 1:
			a++
			console.log ('Значение перменной  = ' + a );
		case 2:
			a++
			console.log ('Значение перменной  = ' + a );
		case 3:
			a++
			console.log ('Значение перменной  = ' + a );
		case 4:
			a++
			console.log ('Значение перменной  = ' + a );
		case 5:
			a++
			console.log ('Значение перменной  = ' + a );
		case 6:
			a++
			console.log ('Значение перменной  = ' + a );
		case 7:
			a++
			console.log ('Значение перменной  = ' + a );
		case 8:
			a++
			console.log ('Значение перменной  = ' + a );
		case 9:
			a++
			console.log ('Значение перменной  = ' + a );
		case 10:
			a++
			console.log ('Значение перменной  = ' + a );
		case 11:
			a++
			console.log ('Значение перменной  = ' + a );
		case 12:
			a++
			console.log ('Значение перменной  = ' + a );
		case 13:
			a++
			console.log ('Значение перменной  = ' + a );
		case 14:
			a++
		case 15:
			console.log ('Значение перменной достигнуто = ' + a );
			break;
		default:
			console.log ('Введенное значение превышает 15');
			break;
	}

	// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return

	var add = function (a,b) { //Сложение
		return a + b;
	}
	var sub = function (a,b) { //Вычитание
		return a - b;
	}
	var div = function (a,b) { //Деление
		return a / b;
	}
	var mul = function (a,b) { //Умножение
		return a * b;
	}
	console.log ('Результаты выполнения функций из задачи № 5:')
	console.log ('Сложение = '+ add(a,b));
	console.log ('Вычитание = ' + sub(a,b));
	console.log ('Деление = ' + div(a,b));
	console.log ('Умножение = ' + mul(a,b));

	// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
	//operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических 
	//операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).


	var c = + prompt ('Выберите необходимое действие с переменными для задачи № 6: \n 1"+",\n 2"-",\n 3"/",\n 4"*"');

	function mathOperation (arg1, arg2, operation) { 
    switch (operation) { 
        case 1: 
            return add ( arg1, arg2 ); 
            break; 
        case 2: 
            return sub ( arg1, arg2 ); 
            break; 
        case 3: 
            return div ( arg1, arg2 ); 
            break; 
        case 4: 
            return mul ( arg1, arg2 ); 
            break; 
    	} 
	} 
	console.log ('Результат задачи № 6 = ' + mathOperation(a,b,c));


	// 7. *Сравнить null и 0. Попробуйте объяснить результат.

	console.log ('Результат задачи № 7 = ' + (null == 0));



	// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

	function power( val, pow ) { 
   		if ( pow === 0 ) { 
   		    return 1;
   		}
   		else {
   		    return val * power( val, pow - 1);
   		}
	}
	
	