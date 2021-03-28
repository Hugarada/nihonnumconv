var lstyle = false;
var plural = false; //usefull variables

var numbers = //dictionary
{
    0 : ['0', 'ゼロ', 'zero'],
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

function teste()
{
}

function translate_num()
{
    let reordenado;

    document.getElementById('Kanjinum').innerText = '';
    document.getElementById('Japa').innerText = '';
    document.getElementById('roma').innerText = '';

    let numchecker = document.getElementById('actnum').value;

    if (lstyle == false)
    {
        if (parseInt(numchecker.charAt(0)) == 0 && parseInt(numchecker.charAt(1)) >= 0)
        {
            document.getElementById('Kanjinum').innerText = '';
            document.getElementById('Japa').innerText = '';
            document.getElementById('roma').innerText = '';
            document.getElementById('actnum').value = '';
        }
        else if (numchecker == '')
        {
            document.getElementById('Kanjinum').innerText = '漢字';
            document.getElementById('Japa').innerText = 'ひらがな';
            document.getElementById('roma').innerText = 'Romaji';
        }
        else
        {
            if (numbers[numchecker])
            {
                document.getElementById('Kanjinum').innerText = numbers[numchecker][0];
                document.getElementById('Japa').innerText = numbers[numchecker][1];
                document.getElementById('roma').innerText = numbers[numchecker][2];
            }
            else if (numchecker < 100 && numchecker > 20)
            {
                let decimals = Math.floor(numchecker / 10) * 10;
                let unis = numchecker % 10;
                document.getElementById('Kanjinum').innerText = numbers[decimals][0] + numbers[10][0] + numbers[unis][0];
                document.getElementById('Japa').innerText = nnumbers[decimals][1] + numbers[10][1] + numbers[unis][1];
                document.getElementById('roma').innerText = numbers[decimals][2] + numbers[10][2] + numbers[unis][2];
            }
        }
    }
}