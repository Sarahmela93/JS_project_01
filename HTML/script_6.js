
/*var a = "CCGUCGUUGCGCUACAGC"
var b = "CCUCGCCGGUACUUCUCG"

function splitStringInThree(a) {
    if (a.length <= 3) return a.split('');
    
    const remainder = a.length % 3;
    const divisor = Math.floor(a.length / 3);
    
    const sep1 = remainder === 2 || remainder === 1 ? 1 : 0;
    const sep2 = remainder === 1 || remainder === 0 ? 0 : 1;
    
    const a1 = a.slice(0, divisor + sep1);
    const a2 = a.slice(divisor + sep1, (divisor * 2) + sep1 + sep2);
    const a3 = a.slice((divisor * 2) + sep1 + sep2);
    
    return [a1, a2, a3];
  }

  console.log(a)