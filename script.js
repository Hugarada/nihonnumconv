var lstyle = false;
var plural = false;
var formal;
var toBerecursed;
var unis;
var centuries;
var numchecker; //usefull variables

var numbers = //dictionary
{
    0 : ['', '', ''],
    1 : ['一', 'いち', 'ichi'],
    2 : ['ニ', 'に', 'ni'],
    3 : ['三', 'さん', 'san'],
    4 : ['四', 'よん', 'yon'],
    5 : ['五', 'ご', 'go'],
    6 : ['六', 'ろく', 'roku'],
    7 : ['七', 'なな', 'nana'],
    8 : ['八', 'はち', 'hachi'],
    9 : ['九','きゅう','kyuu'],
    10 : ['十', 'じゅう', 'juu'],
    100 : ['百', 'ひゃく', 'hyaku'],
    300 : ['三百', 'さんびゃく', 'sanbyaku'],
    600 : ['六百', 'ろっぴゃく', 'roppyaku'],
    800 : ['八百', 'はっぴゃく', 'happyaku']
}


function learning_changer()
{
    if (lstyle == true)
    {
        lstyle = false;
        document.getElementById('namechanger').innerText = 'Random number';
    }
    else
    {
        lstyle = true;
        document.getElementById('namechanger').innerText = 'Number Translator';
    }
}

function insert(list, valores)
{
    for (let index = 0; index < valores.length; index++){
        console.log(valores[index])
        list[index].innerText = valores[index];
    }
}

function translate_num()
{
    var inputs = [
        document.getElementById('Kanjinum'),
        document.getElementById('Japa'),
        document.getElementById('roma')
    ];

    numchecker = document.getElementById('actnum').value;
    toBerecursed = Math.floor(numchecker / 10);
    unis = numchecker % 10;
    centuries = Math.floor(numchecker / 100) * 100;

    if (lstyle == false)
    {
        if (numchecker == '')
        {   
            insert(inputs, ['漢字', 'ひらがな', 'Romaji']);
        }
        else if (parseInt(numchecker.charAt(0)) == 0 && parseInt(numchecker.charAt(1)) >= 0)
        {
            insert(inputs, ['', '', '']);
            document.getElementById('actnum').value = '';
        }
        else if (numchecker == 0)
        {
            insert(inputs, ['0', 'ゼロ', 'zero']);
        }
        else
        {
            if (numbers[numchecker]){
                insert(inputs, numbers[numchecker]);
            }
            else if (numchecker < 100 && numchecker >= 20)
            {
                document.getElementById('Kanjinum').innerText = numbers[toBerecursed][0] + numbers[10][0] + numbers[unis][0];
                document.getElementById('Japa').innerText = numbers[toBerecursed][1] + numbers[10][1] + numbers[unis][1];
                document.getElementById('roma').innerText = numbers[toBerecursed][2] + numbers[10][2] + numbers[unis][2];
            }
            else if (numchecker > 10 && numchecker < 20)
            {
                document.getElementById('Kanjinum').innerText = numbers[10][0] + numbers[unis][0];
                document.getElementById('Japa').innerText = numbers[10][1] + numbers[unis][1];
                document.getElementById('roma').innerText = numbers[10][2] + numbers[unis][2];
            }
            else if (numchecker.length == 3 && numchecker.charAt(0) == 3 || numchecker.length == 3 && numchecker.charAt(0) == 6 || numchecker.length == 3 && numchecker.charAt(0) == 8)
            {
                document.getElementById('Kanjinum').innerText = numbers[centuries][0] + numbersToPlace[100];
                document.getElementById('Japa').innerText = numbers[centuries][1];
                document.getElementById('roma').innerText = numbers[centuries][2];
            }
        }
    }
}