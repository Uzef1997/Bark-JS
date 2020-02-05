
const { parseAi } = require('./applicationIdentifiers')

it.each([
  ['00', 'SSCC'],
  ['01', 'GTIN'],
  ['02', 'CONTENT'],
  ['10', 'BATCH/LOT'],
  ['11', 'PROD DATE'],
  ['12', 'DUE DATE'],
  ['13', 'PACK DATE'],
  ['15', 'BEST BEFORE or BEST BY'],
  ['16', 'SELL BY'],
  ['17', 'USE BY OR EXPIRY'],
  ['20', 'VARIANT'],
  ['21', 'SERIAL'],
  ['22', 'CPV'],
  ['240', 'ADDITIONAL ID'],
  ['241', 'CUST. PART NO.'],
  ['242', 'MTO VARIANT'],
  ['243', 'PCN'],
  ['250', 'SECONDARYSERIAL'],
  ['251', 'REF. TO SOURCE'],
  ['253', 'GDTI'],
  ['254', 'GLN EXTENSION COMPONENT'],
  ['255', 'GCN'],
  ['30', 'VAR. COUNT'],
  ['3100', 'NET WEIGHT (kg)'],
  ['3101', 'NET WEIGHT (kg)'],
  ['3102', 'NET WEIGHT (kg)'],
  ['3103', 'NET WEIGHT (kg)'],
  ['3104', 'NET WEIGHT (kg)'],
  ['3105', 'NET WEIGHT (kg)'],
  ['3110', 'LENGTH (m)'],
  ['3111', 'LENGTH (m)'],
  ['3112', 'LENGTH (m)'],
  ['3113', 'LENGTH (m)'],
  ['3114', 'LENGTH (m)'],
  ['3115', 'LENGTH (m)'],
  ['3120', 'WIDTH (m)'],
  ['3121', 'WIDTH (m)'],
  ['3122', 'WIDTH (m)'],
  ['3123', 'WIDTH (m)'],
  ['3124', 'WIDTH (m)'],
  ['3125', 'WIDTH (m)'],
  ['3130', 'HEIGHT (m)'],
  ['3131', 'HEIGHT (m)'],
  ['3132', 'HEIGHT (m)'],
  ['3133', 'HEIGHT (m)'],
  ['3134', 'HEIGHT (m)'],
  ['3135', 'HEIGHT (m)'],
  ['3140', 'AREA (m^2)'],
  ['3141', 'AREA (m^2)'],
  ['3142', 'AREA (m^2)'],
  ['3143', 'AREA (m^2)'],
  ['3144', 'AREA (m^2)'],
  ['3145', 'AREA (m^2)'],
  ['3150', 'NET VOLUME (l)'],
  ['3151', 'NET VOLUME (l)'],
  ['3152', 'NET VOLUME (l)'],
  ['3153', 'NET VOLUME (l)'],
  ['3154', 'NET VOLUME (l)'],
  ['3155', 'NET VOLUME (l)'],
  ['3160', 'NET VOLUME (m^3)'],
  ['3161', 'NET VOLUME (m^3)'],
  ['3162', 'NET VOLUME (m^3)'],
  ['3163', 'NET VOLUME (m^3)'],
  ['3164', 'NET VOLUME (m^3)'],
  ['3165', 'NET VOLUME (m^3)'],
  ['3200', 'NET WEIGHT (lb)'],
  ['3201', 'NET WEIGHT (lb)'],
  ['3202', 'NET WEIGHT (lb)'],
  ['3203', 'NET WEIGHT (lb)'],
  ['3204', 'NET WEIGHT (lb)'],
  ['3205', 'NET WEIGHT (lb)'],
  ['3210', 'LENGTH (in)'],
  ['3211', 'LENGTH (in)'],
  ['3212', 'LENGTH (in)'],
  ['3213', 'LENGTH (in)'],
  ['3214', 'LENGTH (in)'],
  ['3215', 'LENGTH (in)'],
  ['3220', 'LENGTH (ft)'],
  ['3221', 'LENGTH (ft)'],
  ['3222', 'LENGTH (ft)'],
  ['3223', 'LENGTH (ft)'],
  ['3224', 'LENGTH (ft)'],
  ['3225', 'LENGTH (ft)'],
  ['3230', 'LENGTH (yd)'],
  ['3231', 'LENGTH (yd)'],
  ['3232', 'LENGTH (yd)'],
  ['3233', 'LENGTH (yd)'],
  ['3234', 'LENGTH (yd)'],
  ['3235', 'LENGTH (yd)'],
  ['3240', 'WIDTH (in)'],
  ['3241', 'WIDTH (in)'],
  ['3242', 'WIDTH (in)'],
  ['3243', 'WIDTH (in)'],
  ['3244', 'WIDTH (in)'],
  ['3245', 'WIDTH (in)'],
  ['3250', 'WIDTH (ft)'],
  ['3251', 'WIDTH (ft)'],
  ['3252', 'WIDTH (ft)'],
  ['3253', 'WIDTH (ft)'],
  ['3254', 'WIDTH (ft)'],
  ['3255', 'WIDTH (ft)'],
  ['3260', 'WIDTH (yd)'],
  ['3261', 'WIDTH (yd)'],
  ['3262', 'WIDTH (yd)'],
  ['3263', 'WIDTH (yd)'],
  ['3264', 'WIDTH (yd)'],
  ['3265', 'WIDTH (yd)'],
  ['3270', 'HEIGHT (in)'],
  ['3271', 'HEIGHT (in)'],
  ['3272', 'HEIGHT (in)'],
  ['3273', 'HEIGHT (in)'],
  ['3274', 'HEIGHT (in)'],
  ['3275', 'HEIGHT (in)'],
  ['3280', 'HEIGHT (ft)'],
  ['3281', 'HEIGHT (ft)'],
  ['3282', 'HEIGHT (ft)'],
  ['3283', 'HEIGHT (ft)'],
  ['3284', 'HEIGHT (ft)'],
  ['3285', 'HEIGHT (ft)'],
  ['3290', 'HEIGHT (yd)'],
  ['3291', 'HEIGHT (yd)'],
  ['3292', 'HEIGHT (yd)'],
  ['3293', 'HEIGHT (yd)'],
  ['3294', 'HEIGHT (yd)'],
  ['3295', 'HEIGHT (yd)'],
  ['3300', 'GROSS WEIGHT (kg)'],
  ['3301', 'GROSS WEIGHT (kg)'],
  ['3302', 'GROSS WEIGHT (kg)'],
  ['3303', 'GROSS WEIGHT (kg)'],
  ['3304', 'GROSS WEIGHT (kg)'],
  ['3305', 'GROSS WEIGHT (kg)'],
  ['3310', 'LENGTH (m), log'],
  ['3311', 'LENGTH (m), log'],
  ['3312', 'LENGTH (m), log'],
  ['3313', 'LENGTH (m), log'],
  ['3314', 'LENGTH (m), log'],
  ['3315', 'LENGTH (m), log'],
  ['3320', 'WIDTH (m), log'],
  ['3321', 'WIDTH (m), log'],
  ['3322', 'WIDTH (m), log'],
  ['3323', 'WIDTH (m), log'],
  ['3324', 'WIDTH (m), log'],
  ['3325', 'WIDTH (m), log'],
  ['3330', 'HEIGHT (m), log'],
  ['3331', 'HEIGHT (m), log'],
  ['3332', 'HEIGHT (m), log'],
  ['3333', 'HEIGHT (m), log'],
  ['3334', 'HEIGHT (m), log'],
  ['3335', 'HEIGHT (m), log'],
  ['3340', 'AREA (m^2), log'],
  ['3341', 'AREA (m^2), log'],
  ['3342', 'AREA (m^2), log'],
  ['3343', 'AREA (m^2), log'],
  ['3344', 'AREA (m^2), log'],
  ['3345', 'AREA (m^2), log'],
  ['3350', 'VOLUME (l), log'],
  ['3351', 'VOLUME (l), log'],
  ['3352', 'VOLUME (l), log'],
  ['3353', 'VOLUME (l), log'],
  ['3354', 'VOLUME (l), log'],
  ['3355', 'VOLUME (l), log'],
  ['3360', 'VOLUME (m^3), log'],
  ['3361', 'VOLUME (m^3), log'],
  ['3362', 'VOLUME (m^3), log'],
  ['3363', 'VOLUME (m^3), log'],
  ['3364', 'VOLUME (m^3), log'],
  ['3365', 'VOLUME (m^3), log'],
  ['3370', 'KG PER m^2'],
  ['3371', 'KG PER m^2'],
  ['3372', 'KG PER m^2'],
  ['3373', 'KG PER m^2'],
  ['3374', 'KG PER m^2'],
  ['3375', 'KG PER m^2'],
  ['3400', 'GROSS WEIGHT (lb)'],
  ['3401', 'GROSS WEIGHT (lb)'],
  ['3402', 'GROSS WEIGHT (lb)'],
  ['3403', 'GROSS WEIGHT (lb)'],
  ['3404', 'GROSS WEIGHT (lb)'],
  ['3405', 'GROSS WEIGHT (lb)'],
  ['3410', 'LENGTH (in), log'],
  ['3411', 'LENGTH (in), log'],
  ['3412', 'LENGTH (in), log'],
  ['3413', 'LENGTH (in), log'],
  ['3414', 'LENGTH (in), log'],
  ['3415', 'LENGTH (in), log'],
  ['3420', 'LENGTH (ft), log'],
  ['3421', 'LENGTH (ft), log'],
  ['3422', 'LENGTH (ft), log'],
  ['3423', 'LENGTH (ft), log'],
  ['3424', 'LENGTH (ft), log'],
  ['3425', 'LENGTH (ft), log'],
  ['3430', 'LENGTH (yd), log'],
  ['3431', 'LENGTH (yd), log'],
  ['3432', 'LENGTH (yd), log'],
  ['3433', 'LENGTH (yd), log'],
  ['3434', 'LENGTH (yd), log'],
  ['3435', 'LENGTH (yd), log'],
  ['3440', 'WIDTH (in), log'],
  ['3441', 'WIDTH (in), log'],
  ['3442', 'WIDTH (in), log'],
  ['3443', 'WIDTH (in), log'],
  ['3444', 'WIDTH (in), log'],
  ['3445', 'WIDTH (in), log'],
  ['3450', 'WIDTH (ft), log'],
  ['3451', 'WIDTH (ft), log'],
  ['3452', 'WIDTH (ft), log'],
  ['3453', 'WIDTH (ft), log'],
  ['3454', 'WIDTH (ft), log'],
  ['3455', 'WIDTH (ft), log'],
  ['3460', 'WIDTH (yd), log'],
  ['3461', 'WIDTH (yd), log'],
  ['3462', 'WIDTH (yd), log'],
  ['3463', 'WIDTH (yd), log'],
  ['3464', 'WIDTH (yd), log'],
  ['3465', 'WIDTH (yd), log'],
  ['3470', 'HEIGHT (in), log'],
  ['3471', 'HEIGHT (in), log'],
  ['3472', 'HEIGHT (in), log'],
  ['3473', 'HEIGHT (in), log'],
  ['3474', 'HEIGHT (in), log'],
  ['3475', 'HEIGHT (in), log'],
  ['3480', 'HEIGHT (ft), log'],
  ['3481', 'HEIGHT (ft), log'],
  ['3482', 'HEIGHT (ft), log'],
  ['3483', 'HEIGHT (ft), log'],
  ['3484', 'HEIGHT (ft), log'],
  ['3485', 'HEIGHT (ft), log'],
  ['3490', 'HEIGHT (yd), log'],
  ['3491', 'HEIGHT (yd), log'],
  ['3492', 'HEIGHT (yd), log'],
  ['3493', 'HEIGHT (yd), log'],
  ['3494', 'HEIGHT (yd), log'],
  ['3495', 'HEIGHT (yd), log'],
  ['3500', 'AREA (in^2)'],
  ['3501', 'AREA (in^2)'],
  ['3502', 'AREA (in^2)'],
  ['3503', 'AREA (in^2)'],
  ['3504', 'AREA (in^2)'],
  ['3505', 'AREA (in^2)'],
  ['3510', 'AREA (ft^2)'],
  ['3511', 'AREA (ft^2)'],
  ['3512', 'AREA (ft^2)'],
  ['3513', 'AREA (ft^2)'],
  ['3514', 'AREA (ft^2)'],
  ['3515', 'AREA (ft^2)'],
  ['3520', 'AREA (yd^2)'],
  ['3521', 'AREA (yd^2)'],
  ['3522', 'AREA (yd^2)'],
  ['3523', 'AREA (yd^2)'],
  ['3524', 'AREA (yd^2)'],
  ['3525', 'AREA (yd^2)'],
  ['3530', 'AREA (in^2), log'],
  ['3531', 'AREA (in^2), log'],
  ['3532', 'AREA (in^2), log'],
  ['3533', 'AREA (in^2), log'],
  ['3534', 'AREA (in^2), log'],
  ['3535', 'AREA (in^2), log'],
  ['3540', 'AREA (ft^2), log'],
  ['3541', 'AREA (ft^2), log'],
  ['3542', 'AREA (ft^2), log'],
  ['3543', 'AREA (ft^2), log'],
  ['3544', 'AREA (ft^2), log'],
  ['3545', 'AREA (ft^2), log'],
  ['3550', 'AREA (yd^2), log'],
  ['3551', 'AREA (yd^2), log'],
  ['3552', 'AREA (yd^2), log'],
  ['3553', 'AREA (yd^2), log'],
  ['3554', 'AREA (yd^2), log'],
  ['3555', 'AREA (yd^2), log'],
  ['3560', 'NET WEIGHT (t oz)'],
  ['3561', 'NET WEIGHT (t oz)'],
  ['3562', 'NET WEIGHT (t oz)'],
  ['3563', 'NET WEIGHT (t oz)'],
  ['3564', 'NET WEIGHT (t oz)'],
  ['3565', 'NET WEIGHT (t oz)'],
  ['3570', 'NET VOLUME (oz)'],
  ['3571', 'NET VOLUME (oz)'],
  ['3572', 'NET VOLUME (oz)'],
  ['3573', 'NET VOLUME (oz)'],
  ['3574', 'NET VOLUME (oz)'],
  ['3575', 'NET VOLUME (oz)'],
  ['3600', 'NET VOLUME (qt)'],
  ['3601', 'NET VOLUME (qt)'],
  ['3602', 'NET VOLUME (qt)'],
  ['3603', 'NET VOLUME (qt)'],
  ['3604', 'NET VOLUME (qt)'],
  ['3605', 'NET VOLUME (qt)'],
  ['3610', 'NET VOLUME (gal)'],
  ['3611', 'NET VOLUME (gal)'],
  ['3612', 'NET VOLUME (gal)'],
  ['3613', 'NET VOLUME (gal)'],
  ['3614', 'NET VOLUME (gal)'],
  ['3615', 'NET VOLUME (gal)'],
  ['3620', 'VOLUME (qt), log'],
  ['3621', 'VOLUME (qt), log'],
  ['3622', 'VOLUME (qt), log'],
  ['3623', 'VOLUME (qt), log'],
  ['3624', 'VOLUME (qt), log'],
  ['3625', 'VOLUME (qt), log'],
  ['3630', 'VOLUME (gal), log'],
  ['3631', 'VOLUME (gal), log'],
  ['3632', 'VOLUME (gal), log'],
  ['3633', 'VOLUME (gal), log'],
  ['3634', 'VOLUME (gal), log'],
  ['3635', 'VOLUME (gal), log'],
  ['3640', 'VOLUME (in^3)'],
  ['3641', 'VOLUME (in^3)'],
  ['3642', 'VOLUME (in^3)'],
  ['3643', 'VOLUME (in^3)'],
  ['3644', 'VOLUME (in^3)'],
  ['3645', 'VOLUME (in^3)'],
  ['3650', 'VOLUME (ft^3)'],
  ['3651', 'VOLUME (ft^3)'],
  ['3652', 'VOLUME (ft^3)'],
  ['3653', 'VOLUME (ft^3)'],
  ['3654', 'VOLUME (ft^3)'],
  ['3655', 'VOLUME (ft^3)'],
  ['3660', 'VOLUME (yd^3)'],
  ['3661', 'VOLUME (yd^3)'],
  ['3662', 'VOLUME (yd^3)'],
  ['3663', 'VOLUME (yd^3)'],
  ['3664', 'VOLUME (yd^3)'],
  ['3665', 'VOLUME (yd^3)'],
  ['3670', 'VOLUME (in^3), log'],
  ['3671', 'VOLUME (in^3), log'],
  ['3672', 'VOLUME (in^3), log'],
  ['3673', 'VOLUME (in^3), log'],
  ['3674', 'VOLUME (in^3), log'],
  ['3675', 'VOLUME (in^3), log'],
  ['3680', 'VOLUME (ft^3), log'],
  ['3681', 'VOLUME (ft^3), log'],
  ['3682', 'VOLUME (ft^3), log'],
  ['3683', 'VOLUME (ft^3), log'],
  ['3684', 'VOLUME (ft^3), log'],
  ['3685', 'VOLUME (ft^3), log'],
  ['3690', 'VOLUME (yd^3), log'],
  ['3691', 'VOLUME (yd^3), log'],
  ['3692', 'VOLUME (yd^3), log'],
  ['3693', 'VOLUME (yd^3), log'],
  ['3694', 'VOLUME (yd^3), log'],
  ['3695', 'VOLUME (yd^3), log'],
  ['3696', 'VOLUME (yd^3), log'],
  ['37', 'COUNT'],
  ['3900', 'AMOUNT'],
  ['3901', 'AMOUNT'],
  ['3902', 'AMOUNT'],
  ['3903', 'AMOUNT'],
  ['3904', 'AMOUNT'],
  ['3905', 'AMOUNT'],
  ['3906', 'AMOUNT'],
  ['3907', 'AMOUNT'],
  ['3908', 'AMOUNT'],
  ['3909', 'AMOUNT'],
  ['3910', 'AMOUNT'],
  ['3911', 'AMOUNT'],
  ['3912', 'AMOUNT'],
  ['3913', 'AMOUNT'],
  ['3914', 'AMOUNT'],
  ['3915', 'AMOUNT'],
  ['3916', 'AMOUNT'],
  ['3917', 'AMOUNT'],
  ['3918', 'AMOUNT'],
  ['3919', 'AMOUNT'],
  ['3920', 'PRICE'],
  ['3921', 'PRICE'],
  ['3922', 'PRICE'],
  ['3923', 'PRICE'],
  ['3924', 'PRICE'],
  ['3925', 'PRICE'],
  ['3926', 'PRICE'],
  ['3927', 'PRICE'],
  ['3928', 'PRICE'],
  ['3929', 'PRICE'],
  ['3930', 'PRICE'],
  ['3931', 'PRICE'],
  ['3932', 'PRICE'],
  ['3933', 'PRICE'],
  ['3934', 'PRICE'],
  ['3935', 'PRICE'],
  ['3936', 'PRICE'],
  ['3937', 'PRICE'],
  ['3938', 'PRICE'],
  ['3939', 'PRICE'],
  ['3940', 'PRCNT OFF'],
  ['3941', 'PRCNT OFF'],
  ['3942', 'PRCNT OFF'],
  ['3943', 'PRCNT OFF'],
  ['400', 'ORDER NUMBER'],
  ['401', 'GINC'],
  ['402', 'GSIN'],
  ['403', 'ROUTE'],
  ['410', 'SHIP TO LOC'],
  ['411', 'BILL TO'],
  ['412', 'PURCHASE FROM'],
  ['413', 'SHIP FOR LOC'],
  ['414', 'LOC No'],
  ['415', 'PAY TO'],
  ['416', 'PROD/SERV LOC'],
  ['420', 'SHIP TO POST'],
  ['421', 'SHIP TO POST'],
  ['422', 'ORIGIN'],
  ['423', 'COUNTRY - INITIAL PROCESS.'],
  ['424', 'COUNTRY - PROCESS.'],
  ['425', 'COUNTRY - DISASSEMBLY'],
  ['426', 'COUNTRY - FULL PROCESS'],
  ['427', 'ORIGIN SUBDIVISION'],
  // ['7001', 'NSN'],
  // ['7002', 'MEAT CUT'],
  // ['7003', 'EXPIRY TIME'],
  // ['7004', 'ACTIVE POTENCY'],
  // ['7005', 'CATCH AREA'],
  // ['7006', 'FIRST FREEZE DATE'],
  // ['7007', 'HARVEST DATE'],
  // ['7008', 'AQUATIC SPECIES'],
  // ['7009', 'FISHING GEAR TYPE'],
  // ['7010', 'PROD METHOD'],
  // ['7020', 'REFURB LOT'],
  // ['7021', 'FUNC STAT'],
  // ['7022', 'REV STAT'],
  // ['7023', 'GIAI - ASSEMBLY'],
  // ['7030', 'PROCESSOR # 0'],
  // ['7031', 'PROCESSOR # 1'],
  // ['7032', 'PROCESSOR # 2'],
  // ['7033', 'PROCESSOR # 3'],
  // ['7034', 'PROCESSOR # 4'],
  // ['7035', 'PROCESSOR # 5'],
  // ['7036', 'PROCESSOR # 6'],
  // ['7037', 'PROCESSOR # 7'],
  // ['7038', 'PROCESSOR # 8'],
  // ['7039', 'PROCESSOR # 9'],
  // ['710', 'NHRN PZN'],
  // ['711', 'NHRN CIP'],
  // ['712', 'NHRN CN'],
  // ['713', 'NHRN DRN'],
  // ['714', 'NHRN AIM'],
  // ['7230', 'CERT # 0'],
  // ['7231', 'CERT # 1'],
  // ['7232', 'CERT # 2'],
  // ['7233', 'CERT # 3'],
  // ['7234', 'CERT # 4'],
  // ['7235', 'CERT # 5'],
  // ['7236', 'CERT # 6'],
  // ['7237', 'CERT # 7'],
  // ['7238', 'CERT # 8'],
  // ['7239', 'CERT # 9'],
  // ['8001', 'DIMENSIONS'],
  // ['8002', 'CMT No'],
  // ['8003', 'GRAI'],
  // ['8004', 'GIAI'],
  // ['8005', 'PRICE PER UNIT'],
  // ['8006', 'ITIP'],
  // ['8007', 'IBAN'],
  // ['8008', 'PROD TIME'],
  // ['8009', 'OPT SEN'],
  // ['8010', 'CPID'],
  // ['8011', 'CPID SERIAL'],
  // ['8012', 'VERSION'],
  // ['8013', 'GMN (for medical devices, the default, global data title is BUDI-DI )'],
  // ['8017', 'GSRN - PROVIDER'],
  // ['8018', 'GSRN - RECIPIENT'],
  // ['8019', 'SRIN'],
  // ['8020', 'REF No'],
  // ['8026', 'ITIP CONTENT'],
  // ['8111', 'POINTS'],
  ['8200', 'PRODUCT URL'],
  ['90', 'INTERNAL'],
  ['91', 'INTERNAL'],
  ['92', 'INTERNAL'],
  ['93', 'INTERNAL'],
  ['94', 'INTERNAL'],
  ['95', 'INTERNAL'],
  ['96', 'INTERNAL'],
  ['97', 'INTERNAL'],
  ['98', 'INTERNAL'],
  ['99', 'INTERNAL']])('%s is identified as %s', (expectedAi, expectedTitle) => {
  const {
    ai,
    title,
    parser,
  } = parseAi(expectedAi)
  expect(ai).toBe(expectedAi)
  expect(title).toBe(expectedTitle)
  expect(parser).toBeFunction()
})

describe('custom parsers', () => {
  it('appends human readable values for AI 7010', () => {
    const { parser } = parseAi('7010')
    expect(parser({ barcode: '02' })).toMatchObject({
      value: '02',
      human: 'Caught in Fresh Water',
    })
  })
})
