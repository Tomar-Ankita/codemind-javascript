function monthsOfYear(Months){
switch (Months) {
    case 1:
        console.log(`${Months} -January`);
        break;
        case 2:
            console.log(`${Months}-February `);
            break;
            case 3:
                console.log(`${Months} -March`);
                break;
                case 4:
                    console.log(`${Months}-April `);
                    break;
                    case 5:
                        console.log(`${Months} -May`);
                        break;
                        case 6:
                            console.log(`${Months}-June `);
                            break;
                            case 7:
                                console.log(`${Months}-July `);
                                break;
                                case 8:
                                    console.log(`${Months} -August`);
                                    break;
                                    case 9:
                                        console.log(`${Months}-September `);
                                        break;
                                        case 10:
                                            console.log(`${Months} -October`);
                                            break;
                                            case 11:
                                                console.log(`${Months} -November`);
                                                break;
                                                case 12:
                                                    console.log(`${Months} -December`);
        
        break;

    default:
        console.log(`Invalid Data: ${Months}`);
        break;
}
}
monthsOfYear(0);
monthsOfYear(2);
monthsOfYear(5);
monthsOfYear(12);
monthsOfYear(15);
monthsOfYear(100);