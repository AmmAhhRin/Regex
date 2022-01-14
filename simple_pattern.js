//first example: Creation of regex//
    //first way//
    const exp1 = /abc/;

    //second way//
    const exp2 = new RegExp(/abc/);

//second example: Simple Patterns//
    const text = 'I am here to present about regular expression basic information';
    const exp = /esen/;
    const notexp = /outreg/;
    console.log(text.match(exp));
    console.log(text.match(notexp));