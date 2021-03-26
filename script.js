var lstyle = false;
var houses = ['', 'juu', 'hyaku', 'sen', 'man', '', '' , 'sanbyaku', '', 'roppyaku', '', 'happyaku'];
var housekana = ['', 'じゅう', 'ひゃく', 'せん', 'まん', '', '', 'さんびゃく', '' ,'ろっぴゃく', '', 'はっぴゃく'];
var kanji = ['', '十', '百', '千', '万'];
var nums = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう', '', '', '', '' ,'', '', '', '', '', ''];
var numsromaji = ['', 'ichi', 'ni', 'san', 'yon', 'go', 'roku', 'nana', 'hachi', 'kyuu'];
var numsromajialt = ['', '', '', '', 'shi', '', '', 'shichi', '', 'ku'];
var numsalt = ['', '', '', '', 'し', '', '', '', 'しち', '', 'く'];
var numkanji = ['', '一', 'ニ', '三', '四', '五', '六', '七', '八', '九'];

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

function changedinput()
{
    translate_num();
}

function translate_num()
{
    var numchecker = document.getElementById('actnum').value;

    if (lstyle == false)
    {

        if (parseInt(numchecker.charAt(0)) == 0 && parseInt(numchecker.charAt(1)) >= 0)
        {
            document.getElementById('Kanjinum').innerText = '';
            document.getElementById('Japa').innerText = '';
            document.getElementById('roma').innerText = '';
            document.getElementById('actnum').value = '';
        }
        else if (numchecker == '0') //verify if's the number is 0
        {
            document.getElementById('Kanjinum').innerText = '0';
            document.getElementById('Japa').innerText = '0';
            document.getElementById('roma').innerText = '0';   
        }
        else if (numchecker == '')
        {
            document.getElementById('Kanjinum').innerText = '漢字';
            document.getElementById('Japa').innerText = 'ひらがな';
            document.getElementById('roma').innerText = 'Romaji';
        }
        else
        {
            switch (numchecker.length)
            {
                case 1:
                    document.getElementById('Kanjinum').innerText = numkanji[numchecker];
                    document.getElementById('Japa').innerText = nums[numchecker];
                    document.getElementById('roma').innerText = numsromaji[numchecker];
                    break;
                case 2:
                    if (numchecker.charAt(0) > 1)
                    {
                        document.getElementById('Kanjinum').innerText = numkanji[numchecker.charAt(0)] + kanji[1] + numkanji[numchecker.charAt(1)];
                        document.getElementById('Japa').innerText = nums[numchecker.charAt(0)] + housekana[1] + nums[numchecker.charAt(1)];
                        document.getElementById('roma').innerText = numsromaji[numchecker.charAt(0)] + houses[1] + numsromaji[numchecker.charAt(1)];
                    }
                    else
                    {
                        document.getElementById('Kanjinum').innerText = kanji[1] + numkanji[numchecker.charAt(1)];
                        document.getElementById('Japa').innerText = housekana[1] + nums[numchecker.charAt(1)];
                        document.getElementById('roma').innerText = houses[1] + numkanji[numchecker.charAt(1)];
                    }
                    break;
                case 3:
                    hundreds(nums[numchecker.charAt(0)], numchecker);
                    break;
            }
        }
    }
}

function hundreds(centnum, numcheck)
{
    centnum = 2;
    var uni = numcheck.charAt(0);
    if (uni == 3 || uni == 6 || uni == 8)
    {
        centnum += 5;
        uni += 10;
    }

    if (numcheck.charAt(0) > 1 && numcheck.charAt(1) == 0 && numcheck.charAt(2) > 0)
    {
        document.getElementById('Kanjinum').innerText = numkanji[uni] + kanji[centnum] + numkanji[uni];
        document.getElementById('Japa').innerText = nums[uni] + housekana[centnum] + nums[uni];
        document.getElementById('roma').innerText = numsromaji[uni] + houses[centnum] + numsromaji[uni];
    }
    else if (numcheck.charAt(0) > 1 && numcheck.charAt(1) == 0)
    {
        document.getElementById('Kanjinum').innerText = numkanji[uni] + kanji[centnum];
        document.getElementById('Japa').innerText = nums[uni] + housekana[centnum];
        document.getElementById('roma').innerText = numsromaji[uni] + houses[centnum];
    }
    else if (numcheck.charAt(0) == 1 && numcheck.charAt(1) == 0)
    {
        document.getElementById('Kanjinum').innerText = kanji[centnum] + numkanji[uni];
        document.getElementById('Japa').innerText = housekana[centnum] + nums[uni];
        document.getElementById('roma').innerText = houses[centnum] + numsromaji[uni];
    }
    else if (numcheck.charAt(0) == 1 && numcheck.charAt(1) == 1)
    {
        document.getElementById('Kanjinum').innerText = kanji[centnum] + kanji[1] + numkanji[uni];
        document.getElementById('Japa').innerText = housekana[centnum] + housekana[1] + nums[uni];
        document.getElementById('roma').innerText = houses[centnum] + houses[1] + numsromaji[uni];
    }
    else if (numcheck.charAt(0) == 1 && numcheck.charAt(1) > 1)
    {
        document.getElementById('Kanjinum').innerText = kanji[centnum] + numkanji[numcheck.charAt(1)] + kanji [1] + numkanji[uni];
        document.getElementById('Japa').innerText = housekana[centnum] + nums[numcheck.charAt(1)] + housekana[1] + numkanji[uni];
        document.getElementById('roma').innerText = houses[centnum] + numsromaji[numcheck.charAt(1)] + houses[1] + numsromaji[uni];
    }
    else if (numcheck.charAt(0) > 1 && numcheck.charAt(1) > 1)
    {
        document.getElementById('Kanjinum').innerText = numkanji[numcheck.charAt(0)] + kanji[centnum] + numkanji[numcheck.charAt(1)] + kanji[1] + numkanji[uni];
        document.getElementById('Japa').innerText = nums[numcheck.charAt(0)] + housekana[centnum] + nums[numcheck.charAt(1)] + housekana[1] + nums[uni];
        document.getElementById('roma').innerText = numsromaji[numcheck.charAt(0)] + houses[centnum] + numsromaji[numcheck.charAt(1)] + houses[1] + numsromaji[uni];
    }
    else
    {
        document.getElementById('Kanjinum').innerText = kanji[centnum];
        document.getElementById('Japa').innerText = housekana[centnum];
        document.getElementById('roma').innerText = houses[centnum];
    }                   
}