document.getElementById('todo1').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText1");
  
  if (this.checked)
  {
    textTodo.innerHTML = "  Ăn 3 điểm giữa kỳ<del>không</del>";
  }
  else
  {
    textTodo.innerHTML = " Không ăn 3 điểm giữa kỳ";
  }
}


document.getElementById('todo2').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText2");

  if (this.checked)
  {
    textTodo.innerHTML = "Tiết kiệm 200.000<del>.000</del>";
  }
  else
  {
    textTodo.innerHTML = "Tiết kiệm 200.000.000";
  }
}

document.getElementById('todo3').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText3");

  if (this.checked)
  {
    textTodo.innerHTML = "Thay ốp điện thoại mới";
  }
  else
  {
    textTodo.innerHTML = "Thay điện thoại mới";
  }
}

document.getElementById('todo4').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText4");

  if (this.checked)
  {
    textTodo.innerHTML = "</del> Già <del> u ";
  }
  else
  {
    textTodo.innerHTML = "Giàu";
  }
}

document.getElementById('todo5').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText5");

  if (this.checked)
  {
    textTodo.innerHTML = "Học buổi có buối không <del> Không được </del>";
  }
  else
  {
    textTodo.innerHTML = "Không được Học bủôi có bủôi không";
  }
}
