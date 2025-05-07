let flag = 0;

function muda_cor(){
    let body = document.getElementById("bg");
   flag = Math.floor(Math.random()*(8 - 1 + 1 +1))
   switch(flag){
    case 1:
        body.style.backgroundColor = "#e11a00";
        break;
        case 2:
            body.style.backgroundColor = "#e11a00";
            break;
            case 3:
                body.style.backgroundColor = "#6A5ACD";
                break;
                case 4:
                    body.style.backgroundColor = "#00BFFF";
                    break;
                    case 5:
                        body.style.backgroundColor = "#B0C4DE";
                        break;
                        case 6:
                            body.style.backgroundColor = "#40E0D0";
                            break;
                            case 7:
                                body.style.backgroundColor = "#DEB887";
                                break;
                                default:
                                    body.style.backgroundColor = "#EE82EE";

   }
}