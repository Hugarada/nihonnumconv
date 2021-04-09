var lstyle = false;
var decexistent, parse, midnum, parsedec, centexe, parsecent, morehund, centsub, centhelp, juunier, unis; //important variables

var nums = //dictionary
{
    0 : ['', '', ''],
    1 : ['一',　'いち', 'ichi '],
    2 : ['ニ',　'に', 'ni '],
    3 : ['三',　'さん', 'san '],
    4 : ['四', 'よん', 'yon '],
    5 : ['五','ご', 'go '],
    6 : ['六','ろく', 'roku '],
    7 : ['七','なな', 'nana '],
    8 : ['八','はち', 'hachi '],
    9 : ['九','きゅう', 'kyuu '],
    10 : ['十','じゅう', 'juu '],
    100 : ['百','ひゃく', 'hyaku '],
    300 : ['三百','さっぴゃく', 'sappyaku '],
    600 : ['六百','ろっぴゃく','roppyaku '],
    800 : ['八百','はっぴゃく','happyaku '],
    1000 : ['千', 'せん', 'sen '],
    3000 : ['三千', 'さんぜん', 'sanzen '],
    8000 : ['八千', 'はっせん', 'hassen '],
    10000 : ['万', 'まん', 'man ']
};

function teste()
{
}

function learning_changer()
{
    if (lstyle == false)
    {
        lstyle = true;
        document.getElementById('namechanger').innerText = 'Number Translator';
    }
    else
    {
        lstyle = false;
        document.getElementById('namechanger').innerText = 'Random Number';
    }
}

function get1stnum(numcheck) //if the first num is greater than 1
{
    if (numcheck.charAt(0) > 1){parse = numcheck.charAt(0)}
}

function get1stnumcent(numcheck) //if the first num is greater than 1
{
    if (numcheck.charAt(0) > 1){parsecent = numcheck.charAt(0)}
}

function senget(numcheck)
{
    if (numcheck.charAt(0) == 3 || numcheck.charAt(0) == 8)
    {
        morehund = numcheck.charAt(0) * 100;
        centexe = 0;
    }
    else if (numcheck.charAt(0) > 0)
    {
        if (numcheck.charAt(0) > 1)
        {
            centexe = numcheck.charAt(0);
        }
        morehund = 1000;
    }
}

function senhyakuget(numcheck)
{
    if(numcheck.charAt(1) == 3 || numcheck.charAt(1) == 6 || numcheck.charAt(1) == 8)
    {
        centsub = numcheck.charAt(1) * 100;
    }
    else if (numcheck.charAt(1) >= 1)
    {
        if (numcheck.charAt(1) == 1)
        {
            centhelp = 0;
        }
        else
        {
            centhelp = numcheck.charAt(1);
        }
        centsub = 100;
    }
    else
    {
        centsub = 0;
    }
}

function centdec() //get the decimal
{
    decexistent = 0;
    if (midnum > 0)
    {
        if (midnum > 1)
        {
            parsedec = midnum;
        }
        decexistent = 10;
    }
}

function oneremove(numcheck)
{
    if (numcheck.charAt(numcheck.length - 2) > 0)
    {
        if (numcheck.charAt(numcheck.length - 2) == 1)
        {
            midnum = 0;
        }
        juunier = 10;
    }
}

function decexistente(numero)
{
    let num1 = numero.toString();
    return num1.charAt(num1.length - 2);
}

function insert(num)
{
    document.getElementById('Kanjinum').innerText = num[0];
    document.getElementById('Japa').innerText = num[1];
    document.getElementById('roma').innerText = num[2];
}

function senner()
{
    let numrer = ['', '', ''];
    for (let i = 0; i < 3; i++){numrer[i] = nums[centexe][i] + nums[morehund][i] + nums[centhelp][i] + nums[centsub][i] + nums[midnum][i] + nums[midnum][i] + nums[juunier][i] + nums[unis][i];}
    return numrer;
}

function nulling()
{
    insert(['漢字', 'ひらがな', 'Romaji']);
    document.getElementById('actnum').value = null;
}

function translate_num()
{
    if (lstyle == false)
    {
        let numchecker = document.getElementById('actnum').value;
        let wholenumber = ['', '', ''];
        unis = numchecker % 10;
        decexistent = 0;
        parsedec = 0;
        parse = 0; //get first num
        centexe = 0;
        morhund = 0;
        parsecent = 0;
        let cents = Math.floor(numchecker / 100) * 100;
        midnum = parseInt(decexistente(numchecker)); //decimal num
        centsub = 0;
        centhelp = 0;
        juunier = 0;
        //variable conficuration
        if (numchecker == '' || numchecker.charAt(0) == 0 && numchecker.charAt(1) > 0)
        {
            nulling();
        }
        else if (numchecker == '0'){insert(['0', 'ゼロ', '0']);}
        else
        {
            if (nums[numchecker]){wholenumber = nums[numchecker];}
            else if (numchecker > 10 && numchecker < 100)
            {
                get1stnum(numchecker);
                for (let i = 0; i < 3; i++){wholenumber[i] = nums[parse][i] + nums[10][i] + nums[unis][i];}
            }
            else if (numchecker > 100 && numchecker < 1000)
            {
                if (numchecker.charAt(0) == 3 || numchecker.charAt(0) == 6 || numchecker.charAt(0) == 8)
                {
                    centdec();
                    for(let i = 0; i < 3; i++){wholenumber[i] = nums[cents][i] + nums[parsedec][i] + nums[decexistent][i] + nums[unis][i];}
                }
                else
                {
                    get1stnum(numchecker);
                    centdec();
                    for(let i = 0; i < 3; i++){wholenumber[i] = nums[parse][i] + nums[100][i] + nums[parsedec][i] + nums[decexistent][i] + nums[unis][i];}
                }
            }
            else if (numchecker > 1000)
            {
                nulling();
                alert("Oops, this length is still not availabel in this version");
            }
            else if (numchecker > 1000 && numchecker < 10000)
            {
                get1stnum(numchecker);
                centdec();
                senget(numchecker);
                senhyakuget(numchecker);
                wholenumber = senner();
            }
            else if (numchecker > 10000)
            {
                nulling();
                alert("Oops, this length is still not availabel in this version");
            }
            else{wholenumber = ['non identified number', 'error', 'error'];}
            insert(wholenumber);
        }
    }
}