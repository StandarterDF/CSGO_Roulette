SpinPressed = false;
function AddElementToCase()
{
    if (document.getElementById("TextWithGames") != "")
    {
        var ItemsList = document.getElementById("TextWithGames").value.split("\n");
        var ItemsRealCount = 0;
        for (var ItemIndex = 0; ItemIndex < ItemsList.length; ItemIndex++)
        {
            if (String(ItemsList[ItemIndex]) != "")
            {
                ItemsRealCount += 1;
            }
        }
        localStorage.setItem("TextWithGames", document.getElementById("TextWithGames").value);
        if (ItemsRealCount < 10)
        {
            if (ItemsRealCount < 5)
            {
                for (var Count = 0; Count < 10; Count++)
                {
                    for (var ItemIndex = 0; ItemIndex < ItemsList.length; ItemIndex++)
                    {
                        if (String(ItemsList[ItemIndex]) != "")
                        {
                            var CreatedItem = document.createElement("div");
                            CreatedItem.className = "Item";
                            CreatedItem.style = "left: 0px;";
                            CreatedItem.innerHTML = '<div id="ItemText">' + String(ItemsList[ItemIndex]) + '</div>';
                            document.getElementById("Table").append(CreatedItem);
                        }
                    }
                }
            }
            else
            {
                for (var Count = 0; Count < 5; Count++)
                {
                    for (var ItemIndex = 0; ItemIndex < ItemsList.length; ItemIndex++)
                    {
                        if (String(ItemsList[ItemIndex]) != "")
                        {
                            var CreatedItem = document.createElement("div");
                            CreatedItem.className = "Item";
                            CreatedItem.style = "left: 0px;";
                            CreatedItem.innerHTML = '<div id="ItemText">' + String(ItemsList[ItemIndex]) + '</div>';
                            document.getElementById("Table").append(CreatedItem);
                        }
                    }
                }
            }
        }
        else
        {
            for (var Count = 0; Count < 2; Count++)
            {
                for (var ItemIndex = 0; ItemIndex < ItemsList.length; ItemIndex++)
                {
                    if (String(ItemsList[ItemIndex]) != "")
                    {
                        var CreatedItem = document.createElement("div");
                        CreatedItem.className = "Item";
                        CreatedItem.style = "left: 0px;";
                        CreatedItem.innerHTML = '<div id="ItemText">' + String(ItemsList[ItemIndex]) + '</div>';
                        document.getElementById("Table").append(CreatedItem);
                    }
                }
            }
        }
    }
}
function OnLoadPage()
{
    var Items = document.querySelectorAll(".Item");
    for (var ElementIndex = 0; ElementIndex < Array.from(Items).length; ElementIndex++)
    {
        Items[ElementIndex].style.left = 0 + "px";
    }
    if (localStorage.getItem("TextWithGames") != null)
    {
        document.getElementById("TextWithGames").value = localStorage.getItem("TextWithGames");
    } 
}
function SpinButton()
{
    var Items = document.querySelectorAll(".Item");
    if (SpinPressed == false)
    {
        if (Array.from(Items).length > 0)
        {
            OnButtonClick2();
        }
        document.getElementById("ButtonSpin").style.backgroundColor = "7a7a7a";
        SpinPressed = true;
        var RandomInput = Math.random();
        for (var ElementIndex = 0; ElementIndex < Array.from(Items).length; ElementIndex++)
        {
            Items[ElementIndex].style.left = parseInt(Items[ElementIndex].style.left) + parseInt(-(250)*Array.from(Items).length*RandomInput) + "px";
        }
    }
}
function ResetButton()
{
    if (SpinPressed == true)
    {
        document.getElementById("ButtonSpin").style.backgroundColor = "#212121";
        SpinPressed = false;
        var Items = document.querySelectorAll(".Item");
        var RandomInput = Math.random(); 
        for (var ElementIndex = 0; ElementIndex < Array.from(Items).length; ElementIndex++)
        {
            Items[ElementIndex].style.left = 0 + "px";
        }
    }
}
function OnButtonClick1()
{
    document.getElementById("OnClick1").volume = 0.3;
    document.getElementById("OnClick1").play();
}
function OnButtonClick2()
{
    document.getElementById("OnClick2").volume = 0.5;
    document.getElementById("OnClick2").play();
}
function OnButtonClick3()
{
    document.getElementById("OnClick3").volume = 0.1;
    document.getElementById("OnClick3").play();
}
function AutoResizeText(Element)
{
    ElementWidth = getComputedStyle(Element).width;
    ElementHeight = getComputedStyle(Element).height;
    ElementText = Element.innerText
}
function SaveButtonToIndex(SaveIndex)
{
    localStorage.setItem("SaveSlot" + SaveIndex, document.getElementById("TextWithGames").value);
    document.getElementById("ButtonLoaded" + SaveIndex).style.borderColor = "green";
}
function LoadButtonToIndex(SaveIndex)
{
    document.getElementById("TextWithGames").value = localStorage.getItem("SaveSlot" + SaveIndex);
}
function ResetButtonToIndex(SaveIndex)
{
    localStorage.setItem("SaveSlot" + SaveIndex, "");
    document.getElementById("ButtonLoaded" + SaveIndex).style.borderColor = "red";
}
function InfoButton()
{
    InfoText = "Этот сайт сделан для прокрутки разных элементов и выбора чего-то на основе рандома" + "\n";
    InfoText += "Для начала прокрутки нужно вписать текст в текстовое поле, каждый элемент разледен клавишей Enter" + "\n";
    InfoText += "Ввода нужно нужно нажать Spin, чтоб началась прокрутка, как прокрутка закончилась, то нужно нажать" + "\n";
    InfoText += "На клавишу Reset, чтоб все вернулось к начальному состоянию" + "\n";
    InfoText += "Так же, теперь на сайте есть слоты сохранения и, если вы ввели что-то, можно нажать S и там останется то" + "\n";
    InfoText += "Значение, что вы ввели, если перезагрузить страницу (или нет) и нажать L, то значение текстового поля заменится" + "\n";
    InfoText += "На то, что вы сохранили" + "\n";
    InfoText += "Важно:" + "\n";
    InfoText += "1) После нажатия на добавление элементов текст в текстовом поле сохранится даже после перезагрузки страницы" + "\n";
    InfoText += "2) Чтоб пропали элементы из 'Кейса', нужно перезагрузить страницу, иначе никак" + "\n";
    InfoText += "3) После нажатия кнопки L все введенное не сохранится в текстовом поле, только после нажатия кнопки добавления" + "\n";
    InfoText += "";
    alert(InfoText);
}
document.addEventListener("DOMContentLoaded", function() {
    for (var i = 1; i <= 10; i++) { LoadStorageFunc(document.getElementById("ButtonLoaded" + i), i); }
})
function LoadStorageFunc(Element, SaveIndex)
{
    if (localStorage.getItem("SaveSlot" + SaveIndex) != "") {
        Element.style.borderColor = "green";
    } else {
        Element.style.borderColor = "red";
    }
}